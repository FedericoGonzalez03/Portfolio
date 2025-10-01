'use client';
import { Download, Mail } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

const AnimatedName = () => {
  return (
    <div id='heroName' className="text-5xl md:text-7xl font-extrabold mb-4 animated-title flex flex-wrap sm:gap-[0.3em] justify-center">
      <span className="inline-flex w-full sm:w-auto justify-center">
        {"Federico".split('').map((char, i) => (
          <span key={i} style={{ "--i": i } as React.CSSProperties}>
            {char}
          </span>
        ))}
      </span>
      <span className="inline-flex whitespace-nowrap w-full sm:w-auto justify-center">
        {"González".split('').map((char, i) => (
          <span key={i} style={{ "--i": i + 8 } as React.CSSProperties}>
            {char}
          </span>
        ))}
      </span>
    </div>
  );
};

const HeroSection = () => {
  const { t, language} = useLanguage();

  return (
    <section id="hero" className='min-h-screen flex items-center justify-center p-4 pt-20'>
      <div className="max-w-4xl mx-auto">
        <AnimatedName />
        <h2 className="text-2xl md:text-4xl font-semibold text-neutral-200 mb-6 animate-fade-in-up delay-100 text-center">
          {t.title}
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 mb-8 animate-fade-in-up delay-200 text-center">
          {t.personalDescription}
        </p>
        <p className="text-sm md:text-base text-green-400 mb-6 animate-fade-in-up delay-300 text-center italic">
          <span className="opacity-80">{t.gameHint}</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300">
          <a
            href={language === 'en' ? '/CV_en.pdf' : '/CV.pdf'}
            download
            className="cursor-target cursor-none inline-flex items-center px-8 py-3 bg-green-400 text-neutral-950 font-bold rounded-full shadow-lg hover:bg-green-500 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
          >
            <Download className="w-5 h-5 mr-2" /> {t.downloadCv}
          </a>
          <a
            href="#contact"
            className="cursor-target cursor-none inline-flex items-center px-8 py-3 border-2 border-green-400 text-green-400 font-bold rounded-full shadow-lg hover:bg-neutral-900 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
          >
            <Mail className="w-5 h-5 mr-2" /> {t.contact}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
