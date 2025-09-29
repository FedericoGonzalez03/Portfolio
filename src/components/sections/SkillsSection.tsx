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
    items: ['Java', 'JavaScript', 'TypeScript', 'C#'],
  },
  {
    category: {
      en: 'Frameworks - Libraries',
      es: 'Frameworks - Librerías',
      pt: 'Frameworks - Bibliotecas',
    },
    icon: Laptop,
    items: ['React', 'React Native', 'Next.js', 'JasperReports', 'Chart.js', 'Express', 'Node.js', 'Theme UI', 'TailwindCSS'],
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
      en: 'Tools',
      es: 'Herramientas',
      pt: 'Ferramentas',
    },
    icon: Wrench,
    items: ['Git', 'SVN', 'Tomcat', 'JBoss', 'Vercel', 'JasperStudio', 'Expo', 'Postman'],
  },
];

const SkillsSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="tech-stack" className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-12">
          {t.skills}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techStackCategories.map((category, index) => (
            <div
              key={index}
              className="cursor-target bg-neutral-900 p-6 rounded-xl shadow-lg border-2 border-green-700 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center mb-4 text-green-400">
                {category.icon && <category.icon className="w-10 h-10 mr-3" />}
                <h3 className="text-xl md:text-2xl font-semibold">{category.category[language]}</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {category.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-green-900 text-green-200 rounded-full text-sm font-medium shadow-sm"
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
