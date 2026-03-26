/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
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

describe('Header', () => {
  it('renders the desktop navigation and language selector', () => {
    render(<Header />);

    expect(screen.getByRole('link', { name: /logo federicogs/i })).toHaveAttribute('href', '/');
    expect(screen.getAllByRole('link', { name: 'Home' })[0]).toHaveAttribute('href', '/#hero');
    expect(screen.getAllByRole('link', { name: 'Projects' })[0]).toHaveAttribute('href', '/#projects');
    expect(screen.getByText('Language selector')).toBeInTheDocument();
  });

  it('opens and closes the mobile drawer', () => {
    render(<Header />);

    const drawer = screen.getByTestId('mobile-drawer');
    expect(drawer.className).toContain('translate-x-full');

    fireEvent.click(screen.getByRole('button', { name: /toggle menu/i }));
    expect(drawer.className).toContain('translate-x-0');

    fireEvent.click(screen.getByRole('button', { name: /close menu/i }));
    expect(drawer.className).toContain('translate-x-full');
  });
});
