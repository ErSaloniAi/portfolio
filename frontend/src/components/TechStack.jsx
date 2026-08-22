import React from 'react';

const TECH_ITEMS = [
  { name: 'Python', category: 'Language' },
  { name: 'SQL', category: 'Database' },
  { name: 'Java', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'React.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'Django', category: 'Backend' },
  { name: 'Flask', category: 'Backend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Git & GitHub', category: 'Tool' },
  { name: 'REST APIs', category: 'Architecture' },
  { name: 'EDA / ML', category: 'Data Science' },
];

export default function TechStack() {
  return (
    <section class="py-8 bg-cream-100 border-b border-stone-200 overflow-hidden select-none">
      <div class="max-w-7xl mx-auto px-4 mb-4 flex justify-between items-center">
        <span class="text-[10px] uppercase tracking-widest text-stone-400 font-bold">
          Directory &bull; Technologies
        </span>
        <span class="text-[10px] uppercase tracking-widest text-stone-400 font-bold">
          Section 04
        </span>
      </div>
      
      {/* Infinite-like scrolling marquee (pure CSS) */}
      <div class="relative w-full flex items-center overflow-x-hidden py-3">
        {/* Track 1 */}
        <div class="flex items-center space-x-12 animate-marquee whitespace-nowrap">
          {TECH_ITEMS.map((item, index) => (
            <div key={`${item.name}-${index}`} class="inline-flex items-baseline space-x-2">
              <span class="font-serif italic text-2xl font-semibold text-ink-900 hover:text-maroon-600 transition-colors duration-200">
                {item.name}
              </span>
              <span class="text-[9px] uppercase tracking-widest text-stone-400 font-mono">
                ({item.category})
              </span>
              <span class="text-maroon-600 font-serif text-lg ml-4">&sect;</span>
            </div>
          ))}
        </div>
        
        {/* Track 2 (for continuous seamless looping) */}
        <div class="flex items-center space-x-12 animate-marquee2 whitespace-nowrap absolute top-3">
          {TECH_ITEMS.map((item, index) => (
            <div key={`${item.name}-${index}-dup`} class="inline-flex items-baseline space-x-2">
              <span class="font-serif italic text-2xl font-semibold text-ink-900 hover:text-maroon-600 transition-colors duration-200">
                {item.name}
              </span>
              <span class="text-[9px] uppercase tracking-widest text-stone-400 font-mono">
                ({item.category})
              </span>
              <span class="text-maroon-600 font-serif text-lg ml-4">&sect;</span>
            </div>
          ))}
        </div>
      </div>

      {/* Add custom CSS animations inline in case tailwind config is not extended with marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
