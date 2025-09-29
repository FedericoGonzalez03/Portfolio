'use client';
import { memo } from 'react';

interface EnemyProps {
  id: number;
  x: number;
  y: number;
  type: 'slime' | 'ghost' | 'bat' | 'bug';
  visibility: number;
}

// Memoized Enemy component for better performance
const Enemy = memo(({ id, x, y, type, visibility }: EnemyProps) => {
  // Don't render if completely invisible
  if (visibility <= 0.02) return null;

  return (
    <div
      key={id}
      data-enemy-id={id}
      className={`enemy enemy-${type} z-51 cursor-target`}
      style={{
        left: x,
        top: y,
        opacity: visibility,
        transition: 'opacity 0.2s ease-out'
      }}
    />
  );
}, (prevProps, nextProps) => {
  // Custom comparison to prevent unnecessary re-renders
  // Only re-render if visibility changed significantly or position changed
  return (
    prevProps.x === nextProps.x &&
    prevProps.y === nextProps.y &&
    prevProps.type === nextProps.type &&
    Math.abs(prevProps.visibility - nextProps.visibility) < 0.01
  );
});

export default Enemy;
