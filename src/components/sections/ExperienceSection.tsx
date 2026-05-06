'use client';
import { useLanguage } from '@/lib/context/LanguageContext';

// Work Experience Data
const workExperienceData = [
  {
    id: 1,
    title: {
      en: "Full-Stack Developer",
      es: "Desarrollador Full-Stack",
      pt: "Desenvolvedor Full-Stack"
    },
    company: "ST Consultores",
    period: {
      en: "June 2023 – Present",
      es: "Junio 2023 – Actualidad",
      pt: "Junho 2023 – Actualidade"
    },
    description: {
      en: [
        "Developed and maintained full-stack applications using Java, JavaScript, TypeScript, React, Oracle and Postgres databases.",
        "Deployed and managed applications on JBoss and Tomcat servers.",
        "Collaborated with cross-functional teams to design, develop, and deploy new features.",
        "Contributed to the entire software development lifecycle, from requirements gathering, estimation, and design to implementation, testing, and deployment.",
        "Improved application performance and scalability by writing efficient code and optimized database queries.",
        "Integrated third-party APIs and services to enhance application functionality.",
        "Built REST APIs to facilitate smooth data flow between client and server, and to expose data for external system integrations.",
        "Designed manuals and documentation for end-users and developers.",
      ],
      es: [
        "Desarrollé y mantuve aplicaciones full-stack utilizando Java, JavaScript, TypeScript, React, bases de datos Oracle y Postgres.",
        "Desplegué y gestioné aplicaciones en servidores JBoss y Tomcat.",
        "Colaboré con equipos multifuncionales para diseñar, desarrollar y desplegar nuevas funcionalidades.",
        "Contribuí a todo el ciclo de vida del desarrollo de software, desde la recopilación de requisitos, estimación y diseño hasta la implementación, pruebas y despliegue.",
        "Optimizé el rendimiento y la escalabilidad de las aplicaciones mediante un código limpio y consultas a bases de datos optimizadas.",
        "Integré APIs y servicios de terceros para mejorar la funcionalidad de las aplicaciones.",
        "Construí APIs REST para facilitar el flujo de datos entre cliente y servidor, y para exponer datos para integraciones con sistemas externos.",
        "Diseñé manuales y documentación para usuarios finales y desarrolladores.",
      ],
      pt: [
        "Desenvolvi e mantive aplicações full-stack usando Java, JavaScript, TypeScript, React, bases de dados Oracle e Postgres.",
        "Implantei e gerenciei aplicações em servidores JBoss e Tomcat.",
        "Colaborei com equipes multifuncionais para projetar, desenvolver e implantar novos recursos.",
        "Contribuí para todo o ciclo de vida do desenvolvimento de software, desde a coleta de requisitos, estimativa e design até a implementação, teste e implantação.",
        "Otimizei o desempenho e a escalabilidade dos aplicativos por meio de código eficiente e acesso eficiente ao banco de dados.",
        "Integrei APIs e serviços de terceiros para melhorar a funcionalidade do aplicativo.",
        "Criei APIs REST para facilitar o fluxo de dados entre cliente e servidor e expor dados para integrações com sistemas externos.",
        "Projetei manuais e documentação para usuários finais e desenvolvedores.",
      ]
    }
  },
  {
    id: 2,
    title: {
      en: "Full-Stack Developer",
      es: "Desarrollador Full-Stack",
      pt: "Desenvolvedor Full-Stack"
    },
    company: "KodaTek",
    period: {
      en: "December 2021 – Present",
      es: "Diciembre 2021 – Actualidad",
      pt: "Dezembro 2021 – Actualidade"
    },
    description: {
      en: [
        "Developed and maintained full-stack web applications for client projects, with strong focus on backend development.",
        "Built and maintained REST APIs using Node.js and Express to support business logic, integrations, and internal processes.",
        "Designed and optimized database structures, queries, and data flows using PostgreSQL.",
        "Developed responsive frontend interfaces using React, Next.js, JavaScript, and TypeScript.",
        "Built workflow automations using n8n to connect services, streamline operations, and reduce manual tasks.",
        "Integrated third-party services and external APIs to extend application functionality and support automation workflows.",
        "Participated in the full software development lifecycle, from requirements analysis and technical design to implementation, deployment, and support."
      ],
      es: [
        "Desarrollé y mantuve aplicaciones web full-stack para proyectos de clientes, con fuerte foco en desarrollo backend.",
        "Construí y mantuve APIs REST usando Node.js y Express para soportar lógica de negocio, integraciones y procesos internos.",
        "Diseñé y optimicé estructuras de bases de datos, consultas y flujos de datos usando PostgreSQL.",
        "Desarrollé interfaces frontend responsivas usando React, Next.js, JavaScript y TypeScript.",
        "Construí automatizaciones de flujos de trabajo usando n8n para conectar servicios, optimizar operaciones y reducir tareas manuales.",
        "Integré servicios de terceros y APIs externas para extender la funcionalidad de las aplicaciones y soportar flujos de automatización.",
        "Participé en todo el ciclo de vida del desarrollo de software, desde el análisis de requisitos y diseño técnico hasta la implementación, despliegue y soporte."
      ],
      pt: [
        "Desenvolvi e mantive aplicações web full-stack para projetos de clientes, com forte foco em desenvolvimento backend.",
        "Criei e mantive APIs REST usando Node.js e Express para suportar regras de negócio, integrações e processos internos.",
        "Projetei e otimizei estruturas de banco de dados, consultas e fluxos de dados usando PostgreSQL.",
        "Desenvolvi interfaces frontend responsivas usando React, Next.js, JavaScript e TypeScript.",
        "Criei automações de fluxos de trabalho usando n8n para conectar serviços, otimizar operações e reduzir tarefas manuais.",
        "Integrei serviços de terceiros e APIs externas para ampliar a funcionalidade das aplicações e suportar fluxos de automação.",
        "Participei de todo o ciclo de vida do desenvolvimento de software, desde a análise de requisitos e design técnico até a implementação, implantação e suporte."
      ]
    }
  }
];

const ExperienceSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="work-experience" className="relative overflow-hidden bg-[#040704] px-4 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.1),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.08),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
      <div className="pointer-events-none absolute right-[-7rem] top-12 h-72 w-72 rounded-full bg-green-500/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-8rem] left-[-7rem] h-64 w-64 rounded-full bg-green-500/6 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-12 text-center">
          {t.workExperience}
        </h2>
        <div className="relative">
          {/* Timeline top continuos line */}
          <div className="absolute left-0 -top-9 h-2 w-1 bg-green-400"></div>
          <div className="absolute left-0 -top-6 h-2 w-1 bg-green-400"></div>
          <div className="absolute left-0 -top-3 h-2 w-1 bg-green-400"></div>
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-1 bg-green-400"></div>

          {workExperienceData.map((experience) => (
            <div key={experience.id} className="cursor-target relative mb-12 ml-8 w-[calc(100%-2rem)]">
              {/* Timeline caret */}
              <div className="absolute top-0 -left-7 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[8px] border-l-green-400"></div>
              
              {/* Experience card */}
              <div className="rounded-xl border border-green-500/15 bg-black/35 p-6 shadow-[0_18px_48px_rgba(0,0,0,0.28)] backdrop-blur-sm">
                <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-2">
                  {experience.title[language]}
                </h3>
                <p className="text-lg text-neutral-300 mb-4">
                  {experience.company} | {experience.period[language]}
                </p>
                <ul className="experience-description list-disc list-inside text-neutral-300 space-y-2">
                  {experience.description[language].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Timeline bottom continuos line */}
          <div className="absolute left-0 -bottom-3 h-2 w-1 bg-green-400"></div>
          <div className="absolute left-0 -bottom-6 h-2 w-1 bg-green-400"></div>
          <div className="absolute left-0 -bottom-9 h-2 w-1 bg-green-400"></div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
