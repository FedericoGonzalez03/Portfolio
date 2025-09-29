'use client';

interface LoadingSpinnerProps {
  isLoading: boolean;
  text?: string;
}

export default function LoadingSpinner({ isLoading, text}: LoadingSpinnerProps) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-white font-medium">{text}</p>
      </div>
    </div>
  );
} 