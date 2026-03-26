'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

const footerCopy = {
  en: {
    summary: 'Full-stack developer from Uruguay focused on products that go from idea to production with clarity.',
    contact: 'Contact',
    social: 'Profiles',
    rights: 'All rights reserved.',
    status: 'Available for selected projects',
    backToTop: 'Back to top',
  },
  es: {
    summary: 'Desarrollador full-stack en Uruguay, enfocado en productos que pasan de idea a producción con claridad.',
    contact: 'Contacto',
    social: 'Perfiles',
    rights: 'Todos los derechos reservados.',
    status: 'Disponible para proyectos seleccionados',
    backToTop: 'Volver arriba',
  },
  pt: {
    summary: 'Desenvolvedor full-stack no Uruguai, focado em produtos que vão da ideia à produção com clareza.',
    contact: 'Contato',
    social: 'Perfis',
    rights: 'Todos os direitos reservados.',
    status: 'Disponível para projetos selecionados',
    backToTop: 'Voltar ao topo',
  },
} as const;

const Footer = () => {
  const { language } = useLanguage();
  const copy = footerCopy[language];

  return (
    <footer className="relative overflow-hidden bg-black px-4 py-12 text-neutral-300">

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] md:items-start">
          <div className="max-w-2xl">
            <Link
              href="/#hero"
              className="cursor-target target-cursor-pointer inline-flex items-center text-3xl font-extrabold tracking-tight text-green-400 transition-colors duration-200 hover:text-green-300"
            >
              FedericoGS
            </Link>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/68 sm:text-base">
              {copy.summary}
            </p>
          </div>

          <div className="grid gap-8">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/40">
                {copy.contact}
              </p>
              <a
                href="mailto:03.federico.gonzalez@gmail.com"
                className="cursor-target target-cursor-pointer inline-flex items-center gap-3 text-sm text-white/72 transition-colors duration-200 hover:text-green-300"
              >
                <Mail className="h-4 w-4 text-green-400" />
                03.federico.gonzalez@gmail.com
              </a>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/40">
                {copy.social}
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://linkedin.com/in/03-federico-gonzalez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-target target-cursor-pointer inline-flex w-fit items-center gap-3 text-sm text-white/72 transition-colors duration-200 hover:text-green-300"
                >
                  <Linkedin className="h-4 w-4 text-green-400" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/FedericoGonzalez03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-target target-cursor-pointer inline-flex w-fit items-center gap-3 text-sm text-white/72 transition-colors duration-200 hover:text-green-300"
                >
                  <Github className="h-4 w-4 text-green-400" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/6 pt-6 text-sm text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2022 - {new Date().getFullYear()} Federico González Salomón. {copy.rights}</p>
          <a
            href="#page-top"
            className="cursor-target target-cursor-pointer inline-flex items-center text-green-300 transition-colors duration-200 hover:text-green-200"
          >
            {copy.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
