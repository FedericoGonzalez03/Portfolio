import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import HeroSection from './HeroSection';

vi.mock('@/lib/context/LanguageContext', () => ({
  useLanguage: () => ({
    language: 'en',
    t: {
      title: 'Full-Stack Developer',
      personalDescription: 'Building products.',
      gameHint: '✨ Tip: Use your cursor like a flashlight to explore the darkness... and help me find bugs!',
      downloadCv: 'Download CV',
      contact: 'Contact',
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

describe('HeroSection', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('hides the flashlight hint on coarse pointer devices', () => {
    setMatchMedia(false);

    render(<HeroSection />);

    expect(screen.queryByText(/use your cursor like a flashlight/i)).not.toBeInTheDocument();
  });

  it('shows the flashlight hint on desktop pointer devices', async () => {
    setMatchMedia(true);

    render(<HeroSection />);

    await waitFor(() => {
      expect(screen.getByText(/use your cursor like a flashlight/i)).toBeInTheDocument();
    });
  });
});
