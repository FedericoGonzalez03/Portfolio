'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/context/LanguageContext';
import { projects } from '@/data/projects';
import { Github, ExternalLink, ArrowLeft, Lock, Calendar, Building2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'technical' | 'challenges'>('overview');

  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    if (!project) {
      router.push('/#projects');
    }
  }, [project, router]);

  if (!project) {
    return null;
  }

  const content = project.translations[language];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/#projects" 
            className="cursor-target target-cursor-pointer inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t.backToProjects}</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Category & Status Badges */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-semibold bg-green-500/10 text-green-500 border border-green-500/30 rounded-full">
                {t.categoryLabels[project.category]}
              </span>
              <span className="px-3 py-1 text-xs font-semibold bg-cyan-500/10 text-cyan-500 border border-cyan-500/30 rounded-full">
                {t.statusLabels[project.status]}
              </span>
              {project.client && (
                <span className="px-3 py-1 text-xs font-semibold bg-neutral-800 text-neutral-300 border border-neutral-700 rounded-full flex items-center gap-1">
                  <Building2 className="w-3 h-3" />
                  {project.client}
                </span>
              )}
              <span className="px-3 py-1 text-xs font-semibold bg-neutral-800 text-neutral-300 border border-neutral-700 rounded-full flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {project.year}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              {content.title}
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-neutral-400 mb-8">
              {content.tagline}
            </p>

            {/* Links */}
            <div className="flex items-center justify-center gap-4">
              {project.links.liveDemo && (
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-target target-cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  {t.viewLive}
                </a>
              )}
              {project.links.isPrivate ? (
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 text-neutral-400 font-semibold rounded-lg cursor-not-allowed">
                  <Lock className="w-5 h-5" />
                  {t.privateRepository}
                </div>
              ) : project.links.github && project.links.github !== '#' && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-target target-cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-lg transition-colors"
                >
                  <Github className="w-5 h-5" />
                  {t.viewCode}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">
            <Image
              src={project.images.hero}
              alt={content.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-5xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex border-b border-neutral-800 mb-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`cursor-target target-cursor-pointer px-6 py-3 font-semibold transition-colors whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'text-green-500 border-b-2 border-green-500'
                  : 'text-neutral-400 hover:text-neutral-300'
              }`}
            >
              {t.overview}
            </button>
            <button
              onClick={() => setActiveTab('technical')}
              className={`cursor-target target-cursor-pointer px-6 py-3 font-semibold transition-colors whitespace-nowrap ${
                activeTab === 'technical'
                  ? 'text-green-500 border-b-2 border-green-500'
                  : 'text-neutral-400 hover:text-neutral-300'
              }`}
            >
              {t.technicalDecisions}
            </button>
            <button
              onClick={() => setActiveTab('challenges')}
              className={`cursor-target target-cursor-pointer px-6 py-3 font-semibold transition-colors whitespace-nowrap ${
                activeTab === 'challenges'
                  ? 'text-green-500 border-b-2 border-green-500'
                  : 'text-neutral-400 hover:text-neutral-300'
              }`}
            >
              {t.challengesSolved}
            </button>
          </div>

          {/* Tab Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {t.projectOverview}
                  </h2>
                  <p className="text-neutral-300 text-lg leading-relaxed">{content.description}</p>
                </div>

                {/* Context */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {t.contextProblem}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">{content.context}</p>
                </div>

                {/* Role */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {t.myRole}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">{content.role}</p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {t.keyFeatures}
                  </h3>
                  <ul className="space-y-2">
                    {content.features.map((feature, index) => (
                      <li key={index} className="text-neutral-400 leading-relaxed flex items-start gap-3">
                        <span className="text-green-500 mt-1.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {t.technologyStack}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="cursor-target px-3 py-1 text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'technical' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {t.technicalDecisions}
                </h2>
                {content.techDecisions.map((decision, index) => (
                  <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-green-400 mb-3">{decision.title}</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">
                          {t.reason}
                        </span>
                        <p className="text-neutral-400 mt-1">{decision.reason}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">
                          {t.benefit}
                        </span>
                        <p className="text-neutral-400 mt-1">{decision.benefit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'challenges' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {t.challengesSolved}
                </h2>
                {content.challenges.map((challenge, index) => (
                  <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/30 rounded">
                            {t.problem}
                          </span>
                        </div>
                        <p className="text-neutral-300">{challenge.problem}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/30 rounded">
                            {t.solution}
                          </span>
                        </div>
                        <p className="text-neutral-400">{challenge.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.images.gallery && project.images.gallery.length > 0 && (
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">
              {t.projectGallery}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.gallery.map((image, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900">
                  <Image
                    src={image}
                    alt={`${content.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t.interestedWorking}
          </h2>
          <p className="text-neutral-400 mb-8">
            {t.discussProject}
          </p>
          <Link
            href="/#contact"
            className="cursor-target target-cursor-pointer inline-block px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-colors"
          >
            {t.getInTouch}
          </Link>
        </div>
      </section>
    </div>
  );
}
