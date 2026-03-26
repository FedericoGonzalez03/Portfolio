'use client';
import { useLanguage } from '@/lib/context/LanguageContext';
import { Code, Laptop, Database, Wrench } from 'lucide-react';

// Tech Stack Categories definition
const techStackCategories = [
  {
    category: {
      en: 'Languages',
      es: 'Lenguajes',
      pt: 'Linguagens',
    },
    icon: Code,
    items: ['Java', 'JavaScript', 'TypeScript', 'C#', 'Python'],
  },
  {
    category: {
      en: 'Frameworks - Libraries',
      es: 'Frameworks - Librerías',
      pt: 'Frameworks - Bibliotecas',
    },
    icon: Laptop,
    items: ['React', 'React Native', 'Next.js', 'Chart.js', 'FastAPI'],
  },
  {
    category: {
      en: 'Databases',
      es: 'Bases de Datos',
      pt: 'Bancos de Dados',
    },
    icon: Database,
    items: ['PostgreSQL', 'Oracle', 'MySQL', 'SQLServer'],
  },
  {
    category: {
      en: 'DevOps — Tools',
      es: 'DevOps — Herramientas',
      pt: 'DevOps — Ferramentas',
    },
    icon: Wrench,
    items: ['Git/GitHub', 'GitHub Actions', 'SVN', 'Tomcat', 'JBoss', 'Vercel', 'JasperStudio', 'Expo', 'Docker', 'Oracle Cloud'],
  },
];

const SkillsSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="tech-stack" className="relative overflow-hidden bg-[#040704] px-4 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.1),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.08),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
      <div className="pointer-events-none absolute left-[-10rem] top-12 h-72 w-72 rounded-full bg-green-500/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-8rem] right-[-6rem] h-64 w-64 rounded-full bg-green-500/6 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-12">
          {t.skills}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techStackCategories.map((category, index) => (
            <div
              key={index}
              className="cursor-target rounded-xl border border-green-500/15 bg-black/35 p-6 shadow-[0_18px_48px_rgba(0,0,0,0.28)] backdrop-blur-sm transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center mb-4 text-green-400">
                {category.icon && <category.icon className="w-10 h-10 mr-3" />}
                <h3 className="text-xl md:text-2xl font-semibold">{category.category[language]}</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {category.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-green-950/60 px-4 py-2 text-sm font-medium text-green-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
