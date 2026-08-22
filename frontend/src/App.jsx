import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Story from './components/Story';
import Contact from './components/Contact';

export default function App() {
  return (
    <div class="min-h-screen bg-cream-100 text-ink-900 selection:bg-maroon-600 selection:text-white font-sans flex flex-col relative overflow-hidden">
      {/* Subtle Editorial Background Animation & Paper Texture */}
      <div class="fixed inset-0 -z-10 bg-grid-pattern animate-bg-grid opacity-60 pointer-events-none"></div>
      <div class="fixed inset-0 -z-10 bg-paper-grain opacity-[0.012] pointer-events-none"></div>

      {/* 1. Navbar */}
      <Navbar />

      {/* Main content sections */}
      <main class="flex-grow">
        {/* 2. About Me (Hero) */}
        <Hero />

        {/* 3. Skills */}
        <Skills />

        {/* 4. Tech Stack Icons */}
        <TechStack />

        {/* 5. Projects */}
        <Projects />

        {/* 6. Certificates & Achievements */}
        <Certificates />

        {/* 7. Education */}
        <Education />

        {/* 8. My Story */}
        <Story />

        {/* 9. Contact / Footer (Contact handles its own footer) */}
        <Contact />
      </main>
    </div>
  );
}
