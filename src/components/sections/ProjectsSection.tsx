'use client';
import { useLanguage } from '@/lib/context/LanguageContext';
import { Github, ExternalLink } from 'lucide-react';
import Parallax from '../Parallax';
import mario from '@/public/bros.gif';

// Project data definition
const initialProjectsData = [
  {
    id: 1,
    title: 'KodaTek',
    description: {
      en: 'Clean and professional landing page for my software development company, KodaTek, with email delivery',
      es: 'Landing page limpia y profesional para mi empresa de desarrollo de software, KodaTek, con envío de correos',
      pt: 'Página de destino limpa e profissional para minha empresa de desenvolvimento de software, KodaTek, com envio de e-mails',
    },
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'NodeMailer', 'Zoho Mail', 'Vercel'],
    liveDemo: 'https://kodatekuy.com/',
    github: 'https://github.com/federicogonzalez/mobile-recipe-app', // Placeholder
  },
  {
    id: 2,
    title: 'NostraPizza',
    description: {
      en: 'A full-stack e-commerce platform for ordering pizzas online, featuring user authentication and payment integration.',
      es: 'Una plataforma de comercio electrónico completa para pedir pizzas en línea, con autenticación de usuarios e integración de pagos.',
      pt: 'Uma plataforma de comércio eletrônico completa para pedir pizzas online, com autenticação de usuários e integração de pagamentos.',
    },
    techStack: ['Next.js', 'React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Stripe'],
    liveDemo: 'https://example.com/ecommerce', // Placeholder
    github: 'https://github.com/federicogonzalez/ecommerce-platform', // Placeholder
  },
  {
    id: 3,
    title: 'Collecting SRL',
    description: {
      en: 'A powerful and fully featured CRM solution built to manage customer relationships, track debts, and optimize business operations — including a complete integrated webmail system.',
      es: 'Una solución CRM potente y completa, diseñada para gestionar las relaciones con los clientes, controlar deudas y optimizar las operaciones comerciales — con un sistema de webmail totalmente integrado.',
      pt: 'Uma solução CRM robusta e completa, projetada para gerenciar relacionamentos com clientes, controlar dívidas e otimizar as operações do negócio — com um sistema de webmail totalmente integrado.',
    },
    techStack: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'PostgreSQL', 'SMTP/IMAP'],
    liveDemo: 'https://example.com/crm-collecting-srl', // Placeholder
    github: 'https://github.com/federicogonzalez/crm-collecting-srl', // Placeholder
  },
];

const ProjectsSection = () => {
  const { t, language } = useLanguage();

  return (
    <Parallax
      urlImage={mario.src}
      className='flex items-center justify-center text-center py-20 px-4'
    >
      <section id="projects">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-12 text-shadow-lg/90">
            {t.projects}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initialProjectsData.map((project) => (
              <div
                key={project.id}
                className="cursor-target bg-neutral-950 p-6 rounded-xl shadow-lg border-2 border-green-700 flex flex-col transform hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl md:text-2xl font-bold text-neutral-100 mb-3">
                  {project.title}
                </h3>
                <p className="text-neutral-300 mb-4">
                  {project.description[language]}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-cyan-900 text-cyan-200 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-start gap-4 mt-auto">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-400 hover:underline font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> {t.liveDemo}
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-neutral-300 hover:underline font-medium"
                  >
                    <Github className="w-4 h-4 mr-1" /> GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default ProjectsSection;
