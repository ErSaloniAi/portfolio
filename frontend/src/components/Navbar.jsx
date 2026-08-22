import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Education', href: '#education' },
    { name: 'Story', href: '#story' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header class="sticky top-0 z-50 bg-cream-100/90 backdrop-blur-md hairline-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          {/* Logo / Title */}
          <div class="flex flex-col">
            <a href="#" class="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ink-900 hover:text-maroon-600 transition-colors">
              Saloni Gorsiya
            </a>
            <span class="text-xs uppercase tracking-widest text-stone-500 font-medium -mt-1">
              Computer Engineering &bull; LJ University
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav class="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                class="px-3 py-2 text-xs uppercase tracking-wider text-stone-600 hover:text-maroon-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div class="h-4 w-px bg-stone-300 mx-2"></div>

            {/* Socials & Resume */}
            <div class="flex items-center space-x-3">
              <a
                href="https://github.com/ErSaloniAi"
                target="_blank"
                rel="noopener noreferrer"
                class="text-stone-600 hover:text-maroon-600 transition-colors p-1"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/salonigorsiya/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-stone-600 hover:text-maroon-600 transition-colors p-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#contact"
                class="ml-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-maroon-600 hover:bg-maroon-700 transition-colors duration-150"
              >
                <FileText size={12} />
                Resume
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div class="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              class="text-stone-600 hover:text-ink-900 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div class="md:hidden bg-cream-50 hairline-b px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              class="block px-3 py-2.5 text-sm uppercase tracking-wider text-stone-600 hover:text-maroon-600 font-medium"
            >
              {link.name}
            </a>
          ))}
          <div class="h-px bg-stone-200 my-4"></div>
          <div class="flex items-center justify-between px-3">
            <div class="flex space-x-4">
              <a
                href="https://github.com/ErSaloniAi"
                target="_blank"
                rel="noopener noreferrer"
                class="text-stone-600 hover:text-maroon-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/salonigorsiya/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-stone-600 hover:text-maroon-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              class="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-maroon-600 hover:bg-maroon-700 transition-colors duration-150"
            >
              <FileText size={12} />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
