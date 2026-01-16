'use client';
import { useLanguage } from '@/lib/context/LanguageContext';
import { Github, ExternalLink, Lock, ArrowRight } from 'lucide-react';
import Parallax from '../Parallax';
import mario from '@/public/bros.gif';
import { projects } from '@/data/projects';
import Link from 'next/link';
import Image from 'next/image';

const ProjectsSection = () => {
  const { t, language } = useLanguage();

  const categoryLabels = {
    en: { saas: 'SaaS', ecommerce: 'E-commerce', landing: 'Landing Page', corporate: 'Corporate' },
    es: { saas: 'SaaS', ecommerce: 'E-commerce', landing: 'Landing Page', corporate: 'Corporativo' },
    pt: { saas: 'SaaS', ecommerce: 'E-commerce', landing: 'Landing Page', corporate: 'Corporativo' }
  };

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const content = project.translations[language];
              return (
                <div
                  key={project.slug}
                  className="cursor-target bg-neutral-950 rounded-xl shadow-lg border-2 border-green-700 overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-48 w-full bg-neutral-900">
                    <Image
                      src={project.images.hero}
                      alt={content.title}
                      fill
                      className="object-cover"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 text-xs font-semibold bg-green-500/90 text-white rounded-full">
                        {categoryLabels[language][project.category]}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-100 mb-2">
                      {content.title}
                    </h3>
                    <p className="text-neutral-400 text-sm mb-4 line-clamp-3">
                      {content.tagline}
                    </p>

                    
                    <div className="flex flex-wrap gap-2 mb-4 mt-auto justify-center items-center">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-cyan-900/50 text-cyan-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3 mt-auto">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="cursor-target target-cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-colors"
                      >
                        {t.viewCaseStudy}
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <div className="flex justify-center gap-3">
                        {project.links.liveDemo && (
                          <a
                            href={project.links.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-green-400 hover:text-green-300 font-medium transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 mr-1" /> {t.liveDemo}
                          </a>
                        )}
                        {project.links.isPrivate ? (
                          <div className="inline-flex items-center text-sm text-neutral-500 font-medium">
                            <Lock className="w-4 h-4 mr-1" />
                            {t.private}
                          </div>
                        ) : project.links.github && project.links.github !== '#' && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-neutral-300 hover:text-neutral-100 font-medium transition-colors"
                          >
                            <Github className="w-4 h-4 mr-1" /> GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 max-w-3xl mx-auto text-center cursor-target">
            <div className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 backdrop-blur-sm border-2 border-green-700/50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-100 mb-4">
                {t.interestedWorking}
              </h3>
              <p className="text-neutral-300 text-lg mb-8">
                {t.discussProject}
              </p>
              <a
                href="#contact"
                className="cursor-target target-cursor-pointer inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-lg rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/50"
              >
                {t.getInTouch}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default ProjectsSection;
