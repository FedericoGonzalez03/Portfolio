'use client';

import { useEffect, useState } from 'react';

const DESKTOP_POINTER_QUERY = '(hover: hover) and (pointer: fine)';

const getDesktopPointerMatch = () => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia(DESKTOP_POINTER_QUERY).matches;
};

export const useDesktopPointer = () => {
  const [hasDesktopPointer, setHasDesktopPointer] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_POINTER_QUERY);
    const updateMatch = () => {
      setHasDesktopPointer(mediaQuery.matches);
    };

    updateMatch();
    mediaQuery.addEventListener('change', updateMatch);

    return () => {
      mediaQuery.removeEventListener('change', updateMatch);
    };
  }, []);

  return hasDesktopPointer;
};

export { DESKTOP_POINTER_QUERY, getDesktopPointerMatch };
