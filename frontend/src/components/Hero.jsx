import React from 'react';

export default function Hero() {
  return (
    <section id="about" class="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Intro & Headline (7 cols on lg) */}
        <div class="lg:col-span-7 space-y-8">
          <div class="space-y-4">
            <span class="text-xs uppercase tracking-widest text-maroon-600 font-semibold block">
              Biography &bull; Introduction
            </span>
            <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.2] tracking-tight text-ink-900">
              Full-Stack Developer | Java Enthusiast | Data Science Explorer
            </h1>
          </div>

          <div class="h-px bg-stone-300"></div>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div class="md:col-span-3 text-xs uppercase tracking-wider text-stone-500 font-medium space-y-2">
              <div>Based In</div>
              <div class="text-ink-900 font-semibold">Gujarat, India</div>
              <div class="mt-4">Education</div>
              <div class="text-ink-900 font-semibold">LJ University</div>
              <div class="text-[10px] text-stone-500 font-normal">B.E. Computer Engineering (2024–2028)</div>
            </div>
            
            <div class="md:col-span-9 text-stone-700 space-y-6 leading-relaxed text-sm sm:text-base">
              <p>
                I’m <strong class="text-ink-900 font-semibold">Saloni</strong>, a Computer Engineering student and passionate problem solver who enjoys turning ideas into practical, scalable technology.
              </p>
              <p>
                My engineering journey focuses on <strong class="text-ink-900 font-semibold">building intelligent applications, designing robust backend systems, and solving real-world problems through data and technology</strong>. I work across the stack, combining software engineering with AI/ML to create systems that are both functional and impactful.
              </p>
              <p>
                My technical toolbox includes <strong class="text-ink-900 font-semibold">Python, Java, SQL, Django, Django REST Framework, React, PostgreSQL, Machine Learning, Data Analysis, and Data Visualization</strong>. I also explore <strong class="text-ink-900 font-semibold">Web3 and blockchain technologies</strong>, with a growing interest in decentralized applications and smart contracts.
              </p>
              <p class="text-xs italic text-stone-500">
                Currently exploring advanced machine learning, AI-powered applications, scalable backend architectures, data-driven systems, and Web3 technologies — while continuously strengthening my problem-solving and DSA skills.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Photo Frame / Editorial Placeholder (5 cols on lg) */}
        <div class="lg:col-span-5 flex justify-center">
          <div class="w-full max-w-sm sm:max-w-md hairline-all bg-cream-50 p-3 sm:p-4 aspect-[4/5] flex flex-col justify-between">
            {/* Minimal Portrait Box */}
            <div class="w-full flex-grow bg-cream-200/50 hairline-all flex items-center justify-center relative group overflow-hidden">
              <img 
                src="/personal/home.jpeg" 
                alt="Saloni Gorsiya" 
                class="w-full h-full object-cover object-center transition-all duration-500"
              />
            </div>
            {/* Caption */}
            <div class="mt-4 pt-3 border-t border-stone-200 flex justify-between items-end">
              <div>
                <h3 class="font-serif italic text-base text-ink-900">Saloni Gorsiya</h3>
                <p class="text-[10px] uppercase tracking-wider text-stone-400">Fig 1.1 — Portrait of an Engineer</p>
              </div>
              <div class="text-[10px] text-stone-500 font-mono">
                [2026]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
