import React from 'react';
import { BookOpen, Award, CheckCircle } from 'lucide-react';

export default function Education() {
  const courses = [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Object-Oriented Programming (Java/C++)',
    'Discrete Mathematics & Stats',
    'Web Development Frameworks',
    'Operating Systems & Networks'
  ];

  return (
    <section id="education" class="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        {/* Left Column: Heading (4 cols on lg) */}
        <div class="lg:col-span-4 space-y-4">
          <span class="text-xs uppercase tracking-widest text-maroon-600 font-semibold block">
            Academic Background
          </span>
          <h2 class="font-serif text-4xl sm:text-5xl text-ink-900 leading-tight">
            Education & Coursework
          </h2>
          <div class="h-px bg-stone-300 w-24"></div>
          <p class="text-xs text-stone-500 leading-relaxed max-w-sm">
            Current and foundational academic pursuits bridging engineering principles, database systems, and statistical computation.
          </p>
        </div>

        {/* Right Column: University details & Courses (8 cols on lg) */}
        <div class="lg:col-span-8 space-y-8">
          {/* Main Institution Card */}
          <div class="bg-cream-50 border border-stone-200 p-6 md:p-8 flex flex-col md:flex-row justify-between gap-6 relative">
            {/* Top accent line */}
            <div class="absolute top-0 left-0 right-0 h-0.5 bg-maroon-600"></div>

            <div class="space-y-4">
              <div class="space-y-1">
                <span class="text-[10px] font-mono uppercase bg-cream-200 border border-stone-200 text-stone-700 px-2 py-0.5 inline-block">
                  Bachelor of Engineering (B.E.)
                </span>
                <h3 class="font-serif text-2xl font-bold text-ink-900">
                  LJ University
                </h3>
                <p class="text-xs font-semibold text-stone-600">L.J. Institute of Engineering & Technology</p>
              </div>

              <div class="space-y-2 text-stone-700 text-sm leading-relaxed max-w-lg">
                <p>
                  Pursuing a specialization in **Computer Engineering** to learn structural software design, database schemas, computational models, and mathematical statistics.
                </p>
              </div>
            </div>

            {/* University Stats / CGPA */}
            <div class="md:text-right shrink-0 flex flex-row md:flex-col justify-between md:justify-start items-center md:items-end gap-2 md:gap-4 font-mono">
              <div class="bg-cream-100 border border-stone-300 px-4 py-2 text-center md:text-right">
                <span class="text-[9px] uppercase text-stone-500 block">Duration</span>
                <span class="text-xs font-bold text-ink-900">2024 &mdash; 2028</span>
              </div>
              <div class="bg-maroon-50 border border-maroon-200 px-4 py-2 text-center md:text-right">
                <span class="text-[9px] uppercase text-maroon-700 block">Current CGPA</span>
                <span class="text-base font-serif font-bold text-maroon-900">8.92 / 10</span>
              </div>
            </div>
          </div>

          {/* Underpinning Coursework */}
          <div class="space-y-4">
            <h4 class="font-serif italic text-lg text-ink-900 border-b border-stone-200 pb-2">
              Key Academic Foundations
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {courses.map((course, idx) => (
                <div key={idx} class="flex items-center gap-2.5 text-xs text-stone-700">
                  <div class="w-1.5 h-1.5 rounded-full bg-maroon-600"></div>
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
