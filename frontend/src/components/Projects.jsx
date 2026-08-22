import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Star, GitFork, RefreshCw, AlertCircle } from 'lucide-react';
import { fallbackProjects } from '../utils/projectFallback';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState('local'); // 'github' or 'local'

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // Attempt to fetch from backend proxy
        const apiUrl = import.meta.env.VITE_API_URL || '';
        const res = await fetch(`${apiUrl}/api/projects`);
        const data = await res.json();
        
        if (data.success && data.projects && data.projects.length > 0) {
          setProjects(data.projects);
          setDataSource(data.source);
        } else {
          throw new Error('Invalid projects response');
        }
      } catch (err) {
        console.warn('Failed to fetch from backend API. Using local fallback projects:', err.message);
        setProjects(fallbackProjects);
        setDataSource('local');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section id="projects" class="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Editorial Section Header */}
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-stone-300">
        <div>
          <span class="text-xs uppercase tracking-widest text-maroon-600 font-semibold block mb-2">
            Selected Works &bull; Projects
          </span>
          <h2 class="font-serif text-4xl sm:text-5xl text-ink-900">
            Engineered Systems & Portfolio
          </h2>
        </div>
        <div class="mt-4 md:mt-0 flex items-center gap-2 text-stone-500 text-xs font-mono">
          <span>Source:</span>
          {loading ? (
            <span class="flex items-center gap-1">
              <RefreshCw size={10} class="animate-spin" /> Querying API...
            </span>
          ) : dataSource === 'github' ? (
            <span class="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 font-sans font-semibold">
              Live GitHub API (Enriched)
            </span>
          ) : (
            <span class="text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 font-sans font-semibold flex items-center gap-1">
              <AlertCircle size={10} /> Local Fallback
            </span>
          )}
        </div>
      </div>

      {loading ? (
        <div class="py-24 text-center">
          <RefreshCw className="animate-spin w-8 h-8 text-maroon-600 mx-auto mb-4" />
          <p class="font-serif italic text-lg text-stone-600">Retrieving index of repositories...</p>
        </div>
      ) : (
        <div class="border-t border-stone-300">
          {projects.map((project, idx) => {
            const isExpanded = expandedIndex === idx;
            
            return (
              <div 
                key={project.name} 
                class="border-b border-stone-300 transition-colors duration-200"
              >
                {/* Accordion Row Header */}
                <button
                  onClick={() => toggleExpand(idx)}
                  class="w-full text-left py-6 px-2 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-cream-200/30 group focus:outline-none"
                >
                  <div class="flex items-baseline gap-6">
                    {/* Index Number */}
                    <span class="font-mono text-xs text-stone-400 font-bold">
                      {project.index}
                    </span>
                    {/* Title */}
                    <div class="space-y-1">
                      <h3 class="font-serif text-2xl font-bold text-ink-900 group-hover:text-maroon-600 transition-colors duration-150 flex items-center gap-2">
                        {project.name}
                        <ArrowUpRight size={14} class="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 text-maroon-600" />
                      </h3>
                      <p class="text-xs text-stone-500 max-w-xl line-clamp-1 sm:line-clamp-2 md:hidden">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop Middle Info: Tech Stack Summary & Description */}
                  <div class="hidden md:flex flex-grow max-w-3xl items-center justify-between gap-8 pl-8">
                    <p class="text-xs text-stone-600 flex-grow max-w-md line-clamp-1">
                      {project.description}
                    </p>
                    
                    {/* Tech Badges List */}
                    <div class="flex flex-wrap gap-1.5 justify-end max-w-xs">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} class="px-1.5 py-0.5 text-[10px] bg-cream-200 border border-stone-200 font-mono text-stone-600 uppercase">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span class="px-1.5 py-0.5 text-[10px] text-stone-400 font-mono">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Expand Indicator */}
                  <div class="text-xs font-mono uppercase tracking-widest text-stone-400 font-semibold group-hover:text-maroon-600 transition-colors hidden md:block">
                    {isExpanded ? '[ Close ]' : '[ Open ]'}
                  </div>
                </button>

                {/* Expanded Details Section */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      class="overflow-hidden"
                    >
                      <div class="pb-8 pt-2 px-2 md:pl-14 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-stone-200/50 bg-cream-50/50">
                        {/* Summary / Documentation (8 cols) */}
                        <div class="lg:col-span-8 space-y-4">
                          <h4 class="font-serif italic text-lg text-ink-900 border-b border-stone-200 pb-2">
                            Project Blueprint & Overview
                          </h4>
                          <p class="text-sm text-stone-700 leading-relaxed font-sans whitespace-pre-line">
                            {project.readmeSummary}
                          </p>
                          <div class="pt-4 flex flex-wrap gap-2">
                            <span class="text-xs font-mono uppercase text-stone-500 font-bold self-center mr-2">Full Tech Stack:</span>
                            {project.techStack.map((tech) => (
                              <span key={tech} class="px-2.5 py-0.5 text-xs bg-cream-200 border border-stone-300 font-mono text-stone-800">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Metadata / Details (4 cols) */}
                        <div class="lg:col-span-4 bg-cream-100 hairline-all p-5 flex flex-col justify-between space-y-6">
                          <div class="space-y-4">
                            <h5 class="text-[10px] uppercase tracking-widest text-stone-400 font-bold border-b border-stone-200 pb-2">
                              Repository Metrics
                            </h5>
                            
                            {/* Github Stats Grid */}
                            <div class="grid grid-cols-2 gap-4">
                              <div class="border-r border-stone-200/50 pr-4">
                                <span class="text-[10px] uppercase text-stone-500 font-mono block">Stars</span>
                                <span class="font-serif text-2xl font-bold text-ink-900 flex items-center gap-1.5">
                                  <Star size={16} class="text-maroon-600 fill-maroon-600/10" />
                                  {project.stars || 0}
                                </span>
                              </div>
                              <div class="pl-2">
                                <span class="text-[10px] uppercase text-stone-500 font-mono block">Forks</span>
                                <span class="font-serif text-2xl font-bold text-ink-900 flex items-center gap-1.5">
                                  <GitFork size={16} class="text-maroon-600" />
                                  {project.forks || 0}
                                </span>
                              </div>
                            </div>
                            
                            {project.updatedAt && (
                              <div class="pt-2">
                                <span class="text-[10px] uppercase text-stone-500 font-mono block">Last Pushed</span>
                                <span class="text-xs font-mono font-medium text-stone-700">
                                  {new Date(project.updatedAt).toLocaleDateString(undefined, {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                  })}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Action Links */}
                          <div class="flex flex-col gap-2 pt-4 border-t border-stone-200">
                            {project.repoLink && (
                              <a
                                href={project.repoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-cream-100 transition-colors"
                              >
                                <Github size={12} />
                                View Source Code
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
