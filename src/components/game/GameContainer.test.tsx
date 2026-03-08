import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import GameContainer from './GameContainer';

vi.mock('../ToastProvider', () => ({
  useToast: () => ({
    showToast: vi.fn(),
  }),
}));

vi.mock('@/lib/context/LanguageContext', () => ({
  useLanguage: () => ({
    t: {
      hitABug: 'Hit a bug',
    },
  }),
}));

const setMatchMedia = (matchesDesktopPointer: boolean) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: query === '(hover: hover) and (pointer: fine)' ? matchesDesktopPointer : false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
};

describe('GameContainer', () => {
  it('does not render the game overlay on coarse pointer devices', () => {
    setMatchMedia(false);

    const { container } = render(<GameContainer onCoinCollect={vi.fn()} />);

    expect(container.querySelector('.fixed.inset-0.z-50')).not.toBeInTheDocument();
  });

  it('renders the game overlay on desktop pointer devices', async () => {
    setMatchMedia(true);

    const { container } = render(<GameContainer onCoinCollect={vi.fn()} />);

    await waitFor(() => {
      expect(container.querySelector('.fixed.inset-0.z-50')).toBeInTheDocument();
    });
  });
});
