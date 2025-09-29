'use client';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  message: string;
  type: ToastType;
  duration?: number;
  showClose?: boolean;
  onClose?: () => void;
}

const Toast = ({ message, type, duration = 5000, showClose = true, onClose }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-800 text-white';
      case 'error':
        return 'bg-red-800 text-white';
      case 'warning':
        return 'bg-yellow-800 text-white';
      case 'info':
        return 'bg-blue-800 text-white';
      default:
        return 'bg-gray-800 text-white';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className={`${getToastStyles()} px-6 py-3 rounded-lg shadow-lg flex items-center justify-between min-w-[300px]`}
      >
        <span>{message}</span>
        {showClose &&
          <button
            onClick={() => {
              setIsVisible(false);
              onClose?.();
            }}
            className="cursor-target ml-4 text-white hover:text-gray-200 focus:outline-none border-1 border-white rounded-full p-1"
          >
            <X />
          </button>
        }
      </div>
    </div>
  );
};

export default Toast; 