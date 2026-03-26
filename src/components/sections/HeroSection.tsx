'use client';

import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

type Language = 'en' | 'es' | 'pt';
type TerminalLineType = 'command' | 'output' | 'json' | 'accent' | 'prompt';

interface TerminalLine {
  delay: number;
  text: string;
  type: TerminalLineType;
}

interface HeroContent {
  description: string;
  headline: string;
  location: string;
  projectsCta: string;
  stack: string;
  terminalLabel: string;
  terminalLines: TerminalLine[];
}

const heroContent: Record<Language, HeroContent> = {
  en: {
    description: 'I build fast, clear, production-ready web products with a strong product and UX focus.',
    headline: 'I turn ideas and business processes into real software.',
    location: 'Uruguay',
    projectsCta: 'View projects',
    stack: 'Next.js · Node.js · PostgreSQL · TypeScript · Java',
    terminalLabel: '~/federico - portfolio',
    terminalLines: [
      { delay: 200, type: 'command', text: 'whoami' },
      { delay: 540, type: 'output', text: 'Federico González - Full-Stack Developer' },
      { delay: 900, type: 'command', text: 'cat stack.txt' },
      { delay: 1200, type: 'output', text: 'Next.js  React  TypeScript  Java  Python' },
      { delay: 1300, type: 'output', text: 'Node.js  PostgreSQL  Tailwind CSS  C#' },
      { delay: 1400, type: 'output', text: 'Oracle  Git  Tomcat  JBoss  FastAPI' },
      { delay: 1720, type: 'command', text: 'ls projects/' },
      { delay: 2080, type: 'output', text: 'sistema-collecting/  kodatek/' },
      { delay: 2220, type: 'output', text: 'ortega-construcciones/  lacteos-uruguay/' },
      { delay: 2580, type: 'command', text: 'cat status.json' },
      { delay: 2920, type: 'json', text: '{ "available": true, "focus": "web products" }' },
      { delay: 3280, type: 'command', text: 'echo $MOTTO' },
      { delay: 3620, type: 'accent', text: '"From idea to deploy."' },
      { delay: 3960, type: 'prompt', text: '' },
    ],
  },
  es: {
    description: 'Construyo productos web rápidos, claros y listos para producción, con foco real en negocio y UX.',
    headline: 'Convierto ideas y procesos en software real.',
    location: 'Uruguay',
    projectsCta: 'Ver proyectos',
    stack: 'Next.js · Node.js · PostgreSQL · TypeScript · Java',
    terminalLabel: '~/federico - portfolio',
    terminalLines: [
      { delay: 200, type: 'command', text: 'whoami' },
      { delay: 540, type: 'output', text: 'Federico González - Desarrollador Full-Stack' },
      { delay: 900, type: 'command', text: 'cat stack.txt' },
      { delay: 1200, type: 'output', text: 'Next.js  React  TypeScript  Java  Python' },
      { delay: 1300, type: 'output', text: 'Node.js  PostgreSQL  Tailwind CSS  C#' },
      { delay: 1400, type: 'output', text: 'Oracle  Git  Tomcat  JBoss  FastAPI' },
      { delay: 1720, type: 'command', text: 'ls proyectos/' },
      { delay: 2080, type: 'output', text: 'sistema-collecting/  kodatek/' },
      { delay: 2220, type: 'output', text: 'ortega-construcciones/  lacteos-uruguay/' },
      { delay: 2580, type: 'command', text: 'cat status.json' },
      { delay: 2920, type: 'json', text: '{ "disponible": true, "ubicación": "Uruguay", "foco": "productos web" }' },
      { delay: 3280, type: 'command', text: 'echo $MOTTO' },
      { delay: 3620, type: 'accent', text: '"De la idea al deploy."' },
      { delay: 3960, type: 'prompt', text: '' },
    ],
  },
  pt: {
    description: 'Construo produtos web rápidos, claros e prontos para produção, com foco em negócio e experiência.',
    headline: 'Transformo ideias e processos em software real.',
    location: 'Uruguai',
    projectsCta: 'Ver projetos',
    stack: 'Next.js · Node.js · PostgreSQL · TypeScript · Java',
    terminalLabel: '~/federico - portfolio',
    terminalLines: [
      { delay: 200, type: 'command', text: 'whoami' },
      { delay: 540, type: 'output', text: 'Federico González - Desenvolvedor Full-Stack' },
      { delay: 900, type: 'command', text: 'cat stack.txt' },
      { delay: 1200, type: 'output', text: 'Next.js  React  TypeScript  Java  Python' },
      { delay: 1300, type: 'output', text: 'Node.js  PostgreSQL  Tailwind CSS  C#' },
      { delay: 1400, type: 'output', text: 'Oracle  Git  Tomcat  JBoss  FastAPI' },
      { delay: 1720, type: 'command', text: 'ls projetos/' },
      { delay: 2080, type: 'output', text: 'sistema-collecting/  kodatek/' },
      { delay: 2220, type: 'output', text: 'ortega-construcciones/  lacteos-uruguay/' },
      { delay: 2580, type: 'command', text: 'cat status.json' },
      { delay: 2920, type: 'json', text: '{ "disponível": true, "local": "Uruguai", "foco": "produtos web" }' },
      { delay: 3280, type: 'command', text: 'echo $MOTTO' },
      { delay: 3620, type: 'accent', text: '"Da ideia ao deploy."' },
      { delay: 3960, type: 'prompt', text: '' },
    ],
  },
};

const AnimatedName = () => {
  return (
    <div
      id="heroName"
      className="animated-title mb-6 flex flex-col items-center text-center leading-[0.92] tracking-[-0.05em] lg:items-start lg:text-left"
    >
      <div className="inline-flex text-5xl font-extrabold sm:text-6xl md:text-7xl xl:text-[5.5rem]">
        {'Federico'.split('').map((char, index) => (
          <span key={`f-${index}`} data-letter style={{ '--i': index } as CSSProperties}>
            {char}
          </span>
        ))}
      </div>
      <div className="inline-flex text-5xl font-extrabold sm:text-6xl md:text-7xl xl:text-[5.5rem]">
        {'González'.split('').map((char, index) => (
          <span key={`g-${index}`} data-letter style={{ '--i': index + 8 } as CSSProperties}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const { t, language } = useLanguage();
  const content = heroContent[language];
  const [visibleLineCount, setVisibleLineCount] = useState(0);

  useEffect(() => {
    setVisibleLineCount(0);

    const timers = content.terminalLines.map((line, index) =>
      window.setTimeout(() => {
        setVisibleLineCount(index + 1);
      }, line.delay)
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [content.terminalLines]);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#040704] pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.1),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[46vw] bg-[radial-gradient(circle_at_20%_35%,rgba(34,197,94,0.14),transparent_60%)]" />
      <div className="pointer-events-none absolute bottom-[-12rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-green-500/8 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-[1480px] items-center px-4 pb-12 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid w-full gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-center">
          <div className="flex flex-col items-center py-8 text-center lg:items-start lg:py-0 lg:text-left">
            <AnimatedName />

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-white/55">
              {t.title} <span className="px-2 text-green-400/70">·</span> {content.location}
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl xl:text-[2.7rem]">
              {content.headline}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
              {content.description}
            </p>

            <p className="mt-3 text-sm text-white/45 sm:text-base">
              {content.stack}
            </p>

            <div className="mt-9 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row lg:justify-start">
              <a
                href={language === 'en' ? '/resume_en.pdf' : language === 'pt' ? '/resume_pt.pdf' : '/resume_es.pdf'}
                download
                className="cursor-target target-cursor-pointer inline-flex items-center justify-center rounded-full bg-green-400 px-8 py-3 text-sm font-bold text-neutral-950 transition-all duration-300 hover:scale-105 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-[#040704]"
              >
                <Download className="mr-2 h-5 w-5" /> {t.downloadCv}
              </a>
              <a
                href="#projects"
                className="cursor-target target-cursor-pointer inline-flex items-center justify-center rounded-full bg-white/5 px-8 py-3 text-sm font-semibold text-green-300 transition-all duration-300 hover:scale-105 hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-[#040704]"
              >
                {content.projectsCta} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[36rem] lg:mx-0">
            <div className="overflow-hidden rounded-[1.75rem] bg-[#061006]/72 backdrop-blur-sm">
              <div className="flex items-center gap-3 bg-black/22 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <div className="ml-2 min-w-0">
                  <p className="truncate font-mono text-xs text-green-100/75">{content.terminalLabel}</p>
                </div>
              </div>

              <div className="min-h-[20rem] px-5 py-6 font-mono text-sm leading-7 text-white/80 sm:px-6">
                {content.terminalLines.slice(0, visibleLineCount).map((line, index) => (
                  <div key={`${line.type}-${index}-${line.text}`} className="hero-terminal-line">
                    {line.type === 'command' ? (
                      <>
                        <span className="mr-3 text-green-500/75">❯</span>
                        <span className="text-neutral-200">{line.text}</span>
                      </>
                    ) : null}

                    {line.type === 'output' ? (
                      <span className="pl-6 text-white/58">{line.text}</span>
                    ) : null}

                    {line.type === 'json' ? (
                      <span className="break-words pl-6 text-green-300/80">{line.text}</span>
                    ) : null}

                    {line.type === 'accent' ? (
                      <span className="pl-6 text-green-400">{line.text}</span>
                    ) : null}

                    {line.type === 'prompt' ? (
                      <>
                        <span className="mr-3 text-green-500/75">❯</span>
                        <span className="hero-terminal-caret" aria-hidden="true" />
                      </>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
