import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, GitBranch, Cpu } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    icon: <Code className="w-5 h-5" />,
    items: ['Python', 'SQL', 'Java', 'JavaScript'],
    description: 'Core languages utilized for software development, statistical modeling, database queries, and algorithmic problem-solving.',
    side: 'left'
  },
  {
    title: 'Backend & Web Frameworks',
    icon: <Server className="w-5 h-5" />,
    items: ['Django', 'Flask', 'React', 'Node.js', 'Express', 'Bootstrap'],
    description: 'Frameworks and runtimes used to build scalable RESTful APIs, responsive frontend architectures, and server-rendered dashboards.',
    side: 'right'
  },
  {
    title: 'Database Management',
    icon: <Database className="w-5 h-5" />,
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'DBMS'],
    description: 'Relational and non-relational database engines engineered to maintain persistent, optimized contact form and transactional data.',
    side: 'left'
  },
  {
    title: 'Data Science & Analytics',
    icon: <Cpu className="w-5 h-5" />,
    items: ['EDA (Exploratory Data Analysis)', 'Machine Learning', 'Data Visualization', 'Pandas', 'NumPy'],
    description: 'Analytical methods, scientific libraries, and visualization packages employed to derive statistical insights from dataset features.',
    side: 'right'
  },
  {
    title: 'Core Computer Science & Tools',
    icon: <GitBranch className="w-5 h-5" />,
    items: ['DSA (Data Structures)', 'OOP', 'REST APIs', 'Git/GitHub'],
    description: 'Foundational concepts in algorithms, structural optimization, object-oriented paradigms, version control, and API integrations.',
    side: 'left'
  }
];

export default function Skills() {
  return (
    <section id="skills" class="py-16 md:py-24 bg-cream-50 hairline-t hairline-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-xs uppercase tracking-widest text-maroon-600 font-semibold block mb-2">
            Expertise &bull; Roadmap
          </span>
          <h2 class="font-serif text-4xl sm:text-5xl text-ink-900 mb-4">
            Technical Competence Timeline
          </h2>
          <div class="h-px bg-stone-300 w-24 mx-auto my-4"></div>
          <p class="text-stone-600 text-sm sm:text-base leading-relaxed">
            An overview of my core engineering skills and software frameworks, structured along my educational progression and project developments.
          </p>
        </div>

        {/* Timeline Container */}
        <div class="relative w-full overflow-hidden">
          {/* Central Vertical Line (hidden on small mobile, shown on md+) */}
          <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-stone-300 transform -translate-x-1/2"></div>

          <div class="space-y-12 relative">
            {SKILL_CATEGORIES.map((category, index) => {
              const isLeft = category.side === 'left';
              
              return (
                <div key={category.title} class="flex flex-col md:flex-row items-stretch w-full">
                  {/* Left spacing for right elements on desktop / content on left */}
                  <div class={`w-full md:w-1/2 flex justify-start md:justify-end pr-0 md:pr-12 pl-10 md:pl-0 ${isLeft ? 'order-1 md:order-1' : 'order-1 md:order-3 md:opacity-0 pointer-events-none hidden md:block'}`}>
                    {isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        class="w-full max-w-md bg-cream-100 hairline-all p-6 text-left"
                      >
                        <div class="flex items-center gap-3 mb-3">
                          <span class="text-maroon-600 border border-maroon-600 p-1.5">{category.icon}</span>
                          <h3 class="font-serif text-xl sm:text-2xl font-bold text-ink-900">{category.title}</h3>
                        </div>
                        <p class="text-xs text-stone-500 mb-4 leading-relaxed">{category.description}</p>
                        <div class="flex flex-wrap gap-2">
                          {category.items.map((skill) => (
                            <span key={skill} class="px-2 py-1 bg-cream-200/50 border border-stone-200 text-xs text-stone-700 font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Central Node Indicator */}
                  <div class="absolute left-4 md:left-1/2 top-4 w-4 h-4 rounded-full border border-stone-400 bg-cream-100 transform -translate-x-1/2 z-10 flex items-center justify-center order-2">
                    <div class="w-1.5 h-1.5 bg-maroon-600 rounded-full"></div>
                  </div>

                  {/* Right spacing for left elements on desktop / content on right */}
                  <div class={`w-full md:w-1/2 flex justify-start pl-10 md:pl-12 pr-0 ${!isLeft ? 'order-1 md:order-3' : 'order-1 md:order-1 md:opacity-0 pointer-events-none hidden md:block'}`}>
                    {!isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        class="w-full max-w-md bg-cream-100 hairline-all p-6 text-left"
                      >
                        <div class="flex items-center gap-3 mb-3">
                          <span class="text-maroon-600 border border-maroon-600 p-1.5">{category.icon}</span>
                          <h3 class="font-serif text-xl sm:text-2xl font-bold text-ink-900">{category.title}</h3>
                        </div>
                        <p class="text-xs text-stone-500 mb-4 leading-relaxed">{category.description}</p>
                        <div class="flex flex-wrap gap-2">
                          {category.items.map((skill) => (
                            <span key={skill} class="px-2 py-1 bg-cream-200/50 border border-stone-200 text-xs text-stone-700 font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
