'use client';
import Image from 'next/image';
import LanguageSelector from '../LanguageSelector';
import logo from '@/public/logo.png';
import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';

interface HeaderProps {
  coins: number;
}

const Header = ({ coins }: HeaderProps) => {

  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: {
        en: 'Home',
        es: 'Inicio',
        pt: 'Início',
      },
      href: '/#' 
    },
    {
      name: {
        en: 'About',
        es: 'Sobre mí',
        pt: 'Sobre mim', 
      },
      href: '/#about' 
    },
    {
      name: {
        en: 'Tech Stack',
        es: 'Tecnologías',
        pt: 'Tecnologias',
      },
      href: '/#tech-stack' 
    },
    { 
      name: {
        en: 'Projects',
        es: 'Proyectos',
        pt: 'Projetos',
      },         
      href: '/#projects' 
    },
    { 
      name: {
        en: 'Experience',
        es: 'Experiencia',
        pt: 'Experiência',
      }, 
      href: '/#work-experience' 
    },
    { 
      name: {
        en: 'Contact', 
        es: 'Contacto',
        pt: 'Contato',
      },
      href: '/#contact' 
    },
  ];


  return (
    <nav className="fixed top-0 left-0 right-0 z-100 bg-black shadow-md p-4 flex justify-between items-center h-18 truncate gap-4">
      <div className='cursor-target target-cursor-pointer flex items-center gap-4'>
        <Link href="/">
          <Image src={logo} alt="Logo FedericoGS" width={32} height={32} className='cursor-none' />
        </Link>
        <h1 className="text-2xl font-bold text-green-400">Federico GS</h1>
      </div>

      <div className="flex items-center gap-2 md:gap-6 flex-row-reverse md:flex-row ">

        {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-4">
        {links.map((link) => (
          <li key={link.name[language].toLowerCase()} className='p-0' >
            <a
              href={link.href}
              className="text-neutral-300 hover:text-green-400 transition-colors duration-300 text-sm cursor-none cursor-target target-cursor-pointer p-1"
            >
              {link.name[language]}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden p-2 cursor-target target-cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-neutral-900 transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className='text-xl font-bold text-green-400'>
              FedericoGS
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 cursor-target target-cursor-pointer"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.name[language].toLowerCase()} className='p-0'>
                <a
                  href={link.href}
                  className='block py-2 text-neutral-300 hover:text-green-400 transition-colors duration-300 text-sm cursor-none cursor-target target-cursor-pointer p-1'
                  onClick={() => setIsOpen(false)}
                >
                  {link.name[language]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-40 md:hidden ${isOpen ? "opacity-50" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />
      
      <div className='flex items-center gap-2'>
        <span className="text-green-400 font-bold text-sm">
          <span className="inline-block ">🪙</span> {coins}
        </span>
        <LanguageSelector />
      </div>

      </div>

    </nav>
  );
};

export default Header;
