'use client';
import { useState, useEffect } from 'react';
import Enemy from './Enemy';
import { useToast } from '../ToastProvider';
import { useLanguage } from '@/lib/context/LanguageContext';
import TargetCursor from '../TargetCursor';

interface GameContainerProps {
  onCoinCollect: (amount: number) => void;
}

interface EnemyType {
  id: number;
  x: number;
  y: number;
  type: 'slime' | 'ghost' | 'bat' | 'bug';
  visibility: number;
}

const GameContainer = ({ onCoinCollect }: GameContainerProps) => {
  const [enemies, setEnemies] = useState<EnemyType[]>([]);
  const [bulletHoles, setBulletHoles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const { showToast } = useToast();
  const { t } = useLanguage();

  useEffect(() => {
    const generateEnemies = () => {
      [0 ]
      const newEnemies = Array.from({ length: 10 }, (_, i) => ({
        id: i,
        x: Math.random() * (document.documentElement.scrollWidth - 50) + 25,
        y: Math.random() * (document.documentElement.scrollHeight - window.innerHeight - 50) + window.innerHeight + 25,
        // type: ['slime', 'ghost', 'bat', 'bug'][Math.floor(Math.random() * 4)] as 'slime' | 'ghost' | 'bat' | 'bug',
        type: 'bug' as 'slime' | 'ghost' | 'bat' | 'bug', // For now, only 'bug' type
        visibility: 0 // Enemies are hidden and only become visible when close to the mouse
      }));
      setEnemies(newEnemies);
    };

    generateEnemies();
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let lastX = 0;
    let lastY = 0;
    let lastUpdateTime = 0;
    const updateInterval = 60; // Update every 60ms

    const handleMouseMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;

      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          // Always update the cursor position (light effect) at full framerate
          document.documentElement.style.setProperty('--mouse-x', `${lastX}px`);
          document.documentElement.style.setProperty('--mouse-y', `${lastY}px`);

          // Throttle enemy visibility updates for better performance
          const now = Date.now();
          if (now - lastUpdateTime >= updateInterval) {
            lastUpdateTime = now;

            // Only update enemies that are within potential visibility range
            // or are currently visible and need to fade out
            setEnemies(prev => {
              let hasChanges = false;
              const newEnemies = prev.map(enemy => {
                // Calculate distance between mouse and enemy
                const dx = enemy.x - e.pageX;
                const dy = enemy.y - e.pageY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Skip update if enemy is far away and already invisible
                if (distance > 250 && enemy.visibility <= 0.01) {
                  return enemy;
                }

                // Calculate visibility based on distance
                const visibility = distance > 200 ? 0 : 1 - (distance / 200);

                const newVisibility = visibility;

                // Only update if there's a meaningful change in visibility
                if (Math.abs(newVisibility - enemy.visibility) < 0.01 && newVisibility < 0.01) {
                  return enemy;
                }

                hasChanges = true;
                return {
                  ...enemy,
                  visibility: newVisibility < 0.01 ? 0 : newVisibility // Clean up tiny values
                };
              });

              // Only return a new array if something changed
              return hasChanges ? newEnemies : prev;
            });
          }

          animationFrameId = 0;
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      const x = e.pageX;
      const y = e.pageY;

      // Add bullet hole first for responsive feedback
      const bulletHoleId = Date.now();
      setBulletHoles(prev => [...prev, { id: bulletHoleId, x, y }]);

      // Remove bullet hole after animation
      setTimeout(() => {
        setBulletHoles(prev => prev.filter(hole => hole.id !== bulletHoleId));
      }, 1000);

      // Check for enemy hits using pageX/pageY
      // Only check enemies that are visible enough
      const visibleEnemies = enemies.filter(enemy => enemy.visibility >= 0.4);

      // If no visible enemies, don't do the expensive calculation
      if (visibleEnemies.length === 0) return;

      const hitEnemy = visibleEnemies.find(enemy => {
        const dx = enemy.x - x;
        const dy = enemy.y - y;
        return Math.sqrt(dx * dx + dy * dy) < 25; // 25px hit radius
      });

      if (hitEnemy) {
        setEnemies(prev => prev.filter(e => e.id !== hitEnemy.id));
        onCoinCollect(10); // Add 10 coins when hitting an enemy
        showToast(t.hitABug, 'success', 1000, false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [enemies, onCoinCollect]);

  return (
    <>
      <TargetCursor targetSelector={'.cursor-target'} hideDefaultCursor/>

      {/* Enemies */}
      <div className="absolute inset-0 pointer-events-none">
        {enemies.map(enemy => (
          <Enemy
            key={enemy.id}
            id={enemy.id}
            x={enemy.x}
            y={enemy.y}
            type={enemy.type}
            visibility={enemy.visibility}
          />
        ))}
      </div>
      
      {/* Flashlight effect */}
      <div
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          background: 'radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), oklch(0.792 0.209 151.711 / 5%), transparent 70%)'
        }}
      />
      
      {/* Bullet holes */}
      <div className="absolute inset-0 pointer-events-none">
        {bulletHoles.map(hole => (
          <div
            key={hole.id}
            className="bullet-hole"
            style={{
              left: hole.x,
              top: hole.y
            }}
          />
        ))}
      </div>
    </>
  );
};

export default GameContainer;
