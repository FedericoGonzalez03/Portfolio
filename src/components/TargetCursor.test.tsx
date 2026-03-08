import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import TargetCursor from './TargetCursor';

vi.mock('gsap', () => ({
  gsap: {
    to: vi.fn(),
    set: vi.fn(),
    getProperty: vi.fn(() => 0),
    killTweensOf: vi.fn(),
    timeline: vi.fn(() => ({ to: vi.fn() })),
  },
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

describe('TargetCursor', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('does not render on coarse pointer devices', () => {
    setMatchMedia(false);

    const { container } = render(<TargetCursor targetSelector=".cursor-target" hideDefaultCursor />);

    expect(container.querySelector('.target-cursor-wrapper')).not.toBeInTheDocument();
  });

  it('renders on desktop pointer devices', async () => {
    setMatchMedia(true);

    const { container } = render(<TargetCursor targetSelector=".cursor-target" hideDefaultCursor />);

    await waitFor(() => {
      expect(container.querySelector('.target-cursor-wrapper')).toBeInTheDocument();
    });
  });
});
