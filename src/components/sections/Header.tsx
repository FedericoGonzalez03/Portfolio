'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';
import LanguageSelector from '../LanguageSelector';
import { useLanguage } from '@/lib/context/LanguageContext';

const Header = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: {
        en: 'Home',
        es: 'Inicio',
        pt: 'Início',
      },
      href: '/#hero',
    },
    {
      name: {
        en: 'About',
        es: 'Sobre mí',
        pt: 'Sobre mim',
      },
      href: '/#about',
    },
    {
      name: {
        en: 'Tech Stack',
        es: 'Tecnologías',
        pt: 'Tecnologias',
      },
      href: '/#tech-stack',
    },
    {
      name: {
        en: 'Projects',
        es: 'Proyectos',
        pt: 'Projetos',
      },
      href: '/#projects',
    },
    {
      name: {
        en: 'Experience',
        es: 'Experiencia',
        pt: 'Experiência',
      },
      href: '/#work-experience',
    },
    {
      name: {
        en: 'Contact',
        es: 'Contacto',
        pt: 'Contato',
      },
      href: '/#contact',
    },
  ] as const;

  return (
    <nav className="fixed left-0 right-0 top-0 z-100 flex h-18 items-center justify-between gap-4 truncate bg-black/92 p-4 shadow-md backdrop-blur-md">
      <div className="cursor-target target-cursor-pointer flex items-center gap-4">
        <Link href="/">
          <Image src={logo} alt="Logo FedericoGS" width={32} height={32} className="cursor-none" />
        </Link>
        <h1 className="text-2xl font-bold text-green-400">FedericoGS</h1>
      </div>

      <div className="flex flex-row-reverse items-center gap-2 md:flex-row md:gap-6">
        <ul className="hidden gap-4 md:flex">
          {links.map((link) => (
            <li key={link.name[language].toLowerCase()} className="p-0">
              <a
                href={link.href}
                className="cursor-none cursor-target target-cursor-pointer p-1 text-sm text-neutral-300 transition-colors duration-300 hover:text-green-400"
              >
                {link.name[language]}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="cursor-target target-cursor-pointer p-2 md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>

        <div
          className={`fixed right-0 top-0 z-50 h-full w-64 bg-neutral-900 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          data-testid="mobile-drawer"
        >
          <div className="flex h-full flex-col p-4">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-xl font-bold text-green-400">FedericoGS</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-target target-cursor-pointer p-2"
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.name[language].toLowerCase()} className="p-0">
                  <a
                    href={link.href}
                    className="cursor-none cursor-target target-cursor-pointer block p-1 py-2 text-sm text-neutral-300 transition-colors duration-300 hover:text-green-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name[language]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ease-in-out md:hidden ${isOpen ? 'opacity-50' : 'pointer-events-none opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />

        <div className="flex items-center gap-2">
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};

export default Header;
