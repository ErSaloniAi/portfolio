import React from 'react';

export default function Story() {
  return (
    <section id="story" class="py-16 md:py-24 bg-cream-50 border-t border-b border-stone-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div class="text-center max-w-3xl mx-auto">
          <span class="text-xs uppercase tracking-widest text-maroon-600 font-semibold block mb-2">
            Narrative &bull; Philosophy
          </span>
          <h2 class="font-serif text-4xl sm:text-5xl text-ink-900 mb-4">
            My Journey & Story
          </h2>
          <div class="h-px bg-stone-300 w-24 mx-auto my-4"></div>
        </div>

        {/* Magazine-style multi-column layout */}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Story Columns (8 cols) */}
          <div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-700 text-sm sm:text-base leading-relaxed">
            <div class="space-y-6">
              <p>
                I’m <strong class="text-ink-900 font-semibold">Saloni</strong>, a 3rd-year Computer Engineering student who enjoys understanding how technology works and turning ideas into real-world solutions.
              </p>
              <p>
                My journey started with building a strong foundation in <strong class="text-ink-900 font-semibold">programming, problem-solving, and computer science fundamentals</strong>. As I progressed, I moved from writing basic programs to building complete applications and understanding how frontend, backend, databases, APIs, and AI work together.
              </p>
            </div>
            
            <div class="space-y-6">
              <p>
                I’ve worked with technologies such as <strong class="text-ink-900 font-semibold">Java, Python, JavaScript, React, Django, Django REST Framework, PostgreSQL, and Machine Learning</strong>. Through projects like <strong class="text-ink-900 font-semibold">VyaparBuddy</strong> and <strong class="text-ink-900 font-semibold">InternPay</strong>, I’ve explored everything from AI-powered business intelligence and automated reporting to <strong class="text-ink-900 font-semibold">Web3, blockchain, smart contracts, and decentralized applications</strong>.
              </p>
              <p class="text-xs italic text-stone-500">
                Currently, I’m focused on becoming a stronger software engineer by deepening my knowledge of DSA, backend architecture, AI/ML, and emerging technologies while building projects that solve meaningful real-world problems.
              </p>
            </div>
          </div>

          {/* Editorial Quote & Sidebar (4 cols) */}
          <div class="lg:col-span-4 bg-cream-100 hairline-all p-6 md:p-8 space-y-6">
            <span class="text-[9px] uppercase tracking-widest text-stone-400 font-bold block border-b border-stone-200 pb-2">
              Focus & Ideology
            </span>
            
            <blockquote class="font-serif italic text-xl text-ink-900 leading-normal border-l-2 border-maroon-600 pl-4 py-2">
              "What drives me is not simply learning a technology, but understanding why it works, how the pieces connect, and how it can solve an actual problem."
            </blockquote>
            
            <div class="space-y-3 pt-2 text-xs text-stone-600">
              <p class="font-semibold text-ink-900 uppercase tracking-wide">Technical Focus Areas:</p>
              <ul class="space-y-1.5 list-disc list-inside">
                <li>Data Structures & Algorithms (DSA)</li>
                <li>Scalable Backend Architectures</li>
                <li>Artificial Intelligence & Machine Learning</li>
                <li>Web3 & Decentralized Applications</li>
              </ul>
            </div>
            
            <div class="pt-4 border-t border-stone-200 text-[10px] text-stone-400 font-mono flex justify-between">
              <span>SALONI GORSIYA</span>
              <span>EST. 2024</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
