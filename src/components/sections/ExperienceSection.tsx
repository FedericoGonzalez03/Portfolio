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
        "Developed and maintained full-stack applications using Java, JavaScript, React, and Oracle or Postgres.",
        "Deployed and managed applications on JBoss and Tomcat servers.",
        "Collaborated with cross-functional teams to design, develop, and deploy new features.",
        "Contributed to the entire software development lifecycle, from requirements gathering, estimation, and design to implementation, testing, and deployment.",
        "Improved application performance and scalability by writing efficient code and optimized database queries.",
        "Integrated third-party APIs and services to enhance application functionality.",
        "Built REST APIs to facilitate smooth data flow between client and server, and to expose data for external system integrations.",
        "Designed manuals and documentation for end-users and developers.",
      ],
      es: [
        "Desarrollé y mantuve aplicaciones full-stack utilizando Java, JavaScript, React y Oracle o Postgres.",
        "Desplegué y gestioné aplicaciones en servidores JBoss y Tomcat.",
        "Colaboré con equipos multifuncionales para diseñar, desarrollar y desplegar nuevas funcionalidades.",
        "Contribuí a todo el ciclo de vida del desarrollo de software, desde la recopilación de requisitos, estimación y diseño hasta la implementación, pruebas y despliegue.",
        "Optimizé el rendimiento y la escalabilidad de las aplicaciones mediante un código limpio y consultas a bases de datos optimizadas.",
        "Integré APIs y servicios de terceros para mejorar la funcionalidad de las aplicaciones.",
        "Construí APIs REST para facilitar el flujo de datos entre cliente y servidor, y para exponer datos para integraciones con sistemas externos.",
        "Diseñé manuales y documentación para usuarios finales y desarrolladores.",
      ],
      pt: [
        "Desenvolvi e mantive aplicações full-stack usando Java, JavaScript, React e Oracle ou Postgres.",
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
      en: "Sales Assistant",
      es: "Auxiliar de ventas",
      pt: "Assistente de vendas"
    },
    company: "Disco SA",
    period: {
      en: "April 2022 – June 2023",
      es: "Abril 2022 – Junio 2023",
      pt: "Abril 2022 – Junho 2023"
    },
    description: {
      en: [
        "Provided exceptional customer service and support in a fast-paced retail environment.",
        "Maintained store appearance and organization to enhance the shopping experience.",
        "Assisted in inventory management and supplier receiving processes.",
        "Obtained valuable experience in customer relations and sales."
      ],
      es: [
        "Brindé un servicio y soporte al cliente excepcionales en un entorno minorista dinámico.",
        "Mantuve la apariencia y organización de la tienda para mejorar la experiencia de compra.",
        "Apoyé en la gestión de inventario y procesos de recepción de proveedores.",
        "Obtuve una valiosa experiencia en relaciones con clientes y ventas."
      ],
      pt: [
        "Prestei um atendimento e suporte ao cliente excepcionais em um ambiente de varejo dinâmico.",
        "Mantive a aparência e organização da loja para melhorar a experiência de compra.",
        "Auxiliei na gestão de estoque e processos de recebimento de fornecedores.",
        "Obtive uma valiosa experiência em relações com clientes e vendas."
      ]
    }
  }
];

const ExperienceSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="work-experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
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
              <div className="bg-neutral-900 p-6 rounded-xl shadow-lg border border-neutral-700">
                <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-2">
                  {experience.title[language]}
                </h3>
                <p className="text-lg text-neutral-300 mb-4">
                  {experience.company} | {experience.period[language]}
                </p>
                <ul className="list-disc list-inside text-neutral-300 space-y-2 experiende-description">
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
