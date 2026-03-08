/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Header from './Header';

vi.mock('next/image', () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} alt={props.alt ?? ''} />,
}));

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => <a href={href}>{children}</a>,
}));

vi.mock('../LanguageSelector', () => ({
  default: () => <div>Language selector</div>,
}));

vi.mock('@/lib/context/LanguageContext', () => ({
  useLanguage: () => ({
    language: 'en',
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

describe('Header', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('hides the coin counter on coarse pointer devices', () => {
    setMatchMedia(false);

    render(<Header coins={7} />);

    expect(screen.queryByText('🪙')).not.toBeInTheDocument();
  });

  it('shows the coin counter on desktop pointer devices', async () => {
    setMatchMedia(true);

    render(<Header coins={7} />);

    await waitFor(() => {
      expect(screen.getByText('🪙')).toBeInTheDocument();
    });
  });
});
