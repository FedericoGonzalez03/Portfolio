import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import HeroSection from './HeroSection';

vi.mock('@/lib/context/LanguageContext', () => ({
  useLanguage: () => ({
    language: 'en',
    t: {
      title: 'Full-Stack Developer',
      downloadCv: 'Download CV',
    },
  }),
}));

describe('HeroSection', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('renders the updated hero content and actions', () => {
    render(<HeroSection />);

    expect(screen.getByText((_, node) => node?.textContent === 'Federico')).toBeInTheDocument();
    expect(screen.getByText((_, node) => node?.textContent === 'González')).toBeInTheDocument();
    expect(screen.getByText(/i turn ideas and business processes into real software/i)).toBeInTheDocument();
    expect(screen.getByText(/next\.js/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /download cv/i })).toHaveAttribute('href', '/resume_en.pdf');
    expect(screen.getByRole('link', { name: /view projects/i })).toHaveAttribute('href', '#projects');
  });

  it('reveals terminal lines progressively', () => {
    render(<HeroSection />);

    expect(screen.queryByText(/whoami/i)).not.toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(2300);
    });

    expect(screen.getByText(/whoami/i)).toBeInTheDocument();
    expect(screen.getByText(/sistema-collecting\/\s+kodatek\//i)).toBeInTheDocument();
    expect(screen.queryByText(/from idea to deploy/i)).not.toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(screen.getByText(/from idea to deploy/i)).toBeInTheDocument();
  });
});
