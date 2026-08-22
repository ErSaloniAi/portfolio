import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, Award, MapPin } from 'lucide-react';

const CERTIFICATIONS = [
  {
    title: 'Web3 & Rust Foundations',
    issuer: 'Lampros DAO',
    date: '2025',
    id: 'cert-1',
    description: 'Foundations of decentralized systems, blockchain security models, smart contracts, and high-performance coding using Rust.',
    imagePath: '/personal/certificates/web3.jpeg'
  },
  {
    title: 'Inheritance and Data Structures in Java',
    issuer: 'University of Pennsylvania (UPenn)',
    date: '2025',
    id: 'cert-2',
    description: 'Advanced data structuring including HashTables, Binary Trees, Graph traversal, and big-O computational analysis.',
    imagePath: '/personal/certificates/inheritence and datastructures in java.png'
  },
  {
    title: 'LJ Innovation Village Showcase',
    issuer: 'LJ University',
    date: '2026',
    id: 'cert-3',
    description: 'Award of participation and showcase excellence for CareerPath, presented at the LJ Innovation Village 2026.',
    imagePath: '/personal/certificates/innovation  village.jpeg'
  },
  {
    title: 'Research Poster Presentation: BioTherm Sentinel',
    issuer: 'ICRAET Conference',
    date: '2026',
    id: 'cert-4',
    description: 'Presented a cold-chain monitoring poster detailing IoT-driven temperature logging system architecture.',
    imagePath: '/personal/certificates/poster presentation.jpeg'
  },
  {
    title: 'Claude AI Assistant foundations',
    issuer: 'Anthropic AI Certification',
    date: '2026',
    id: 'cert-5',
    description: 'Verified training for Claude API integrations, agentic workflow scaffolding, prompt caching, and AI system design.',
    imagePath: '/personal/certificates/claude.jpeg'
  }
];

const ACHIEVEMENTS = [
  {
    title: 'Research Poster: "BioTherm Sentinel"',
    subtitle: 'Smart Cold-Chain Monitoring System',
    location: 'ICRAET 2026 (International Conference)',
    detail: 'Presented an IoT-driven temperature logging system designed to safeguard pharmaceutical shipping storage integrity using real-time anomaly alerts.',
    badge: 'Research Publication'
  },
  {
    title: 'CareerPath Showcased',
    subtitle: 'LJ Innovation Village 2026',
    location: 'LJ University Campus, Ahmedabad',
    detail: 'Selected to present my AI-powered career counseling prototype to industry mentors, incubators, and university academic directors.',
    badge: 'Innovation Showcase'
  },
  {
    title: 'Lampros DAO Hackathon Participant',
    subtitle: 'Solana/Rust Web3 Hackathon',
    location: 'National Sandbox',
    detail: 'Participated in a 36-hour sprint creating decentralized financial tracking mechanisms on blockchain. Contributed to smart contract rust compilation.',
    badge: 'Hackathon Sprint'
  }
];

const GALLERY_PHOTOS = [
  // Innovation Village
  {
    path: '/personal/inovation/WhatsApp Image 2026-08-22 at 7.38.00 PM.jpeg',
    category: 'innovation',
    caption: 'Exhibition Setup & Project Pitch'
  },
  {
    path: '/personal/inovation/WhatsApp Image 2026-08-22 at 7.38.00 PM (1).jpeg',
    category: 'innovation',
    caption: 'Mentorship Discussion Session'
  },
  {
    path: '/personal/inovation/WhatsApp Image 2026-08-22 at 7.38.00 PM (2).jpeg',
    category: 'innovation',
    caption: 'LJ Innovation Village Showcase'
  },
  {
    path: '/personal/inovation/WhatsApp Image 2026-08-22 at 7.37.59 PM (1).jpeg',
    category: 'innovation',
    caption: 'Student & Industry Interaction'
  },

  // Campus Life (KU)
  {
    path: '/personal/ku/WhatsApp Image 2026-08-22 at 7.37.55 PM.jpeg',
    category: 'campus',
    caption: 'Engineering & Computing Lab Work'
  },
  {
    path: '/personal/ku/WhatsApp Image 2026-08-22 at 7.37.56 PM.jpeg',
    category: 'campus',
    caption: 'Design & Code Hackathon Arena'
  },
  {
    path: '/personal/ku/WhatsApp Image 2026-08-22 at 7.37.57 PM.jpeg',
    category: 'campus',
    caption: 'LJ University Auditorium Event'
  },
  {
    path: '/personal/ku/WhatsApp Image 2026-08-22 at 7.37.54 PM (1).jpeg',
    category: 'campus',
    caption: 'LJ University Main Campus Corridor'
  },
  {
    path: '/personal/ku/WhatsApp Image 2026-08-22 at 7.37.54 PM (2).jpeg',
    category: 'campus',
    caption: 'Exhibition Hall & Project Boards'
  },
  {
    path: '/personal/ku/WhatsApp Image 2026-08-22 at 7.38.10 PM.jpeg',
    category: 'campus',
    caption: 'University Campus Courtyard'
  },

  // Vibes
  {
    path: '/personal/vibe/WhatsApp Image 2026-08-22 at 7.37.58 PM.jpeg',
    category: 'vibes',
    caption: 'Team Collaboration Sprints'
  },
  {
    path: '/personal/vibe/WhatsApp Image 2026-08-22 at 7.37.59 PM.jpeg',
    category: 'vibes',
    caption: 'Late-Night Coding Session'
  },
  {
    path: '/personal/vibe/WhatsApp Image 2026-08-22 at 7.37.57 PM (1).jpeg',
    category: 'vibes',
    caption: 'Hackathon Project Review'
  },
  {
    path: '/personal/vibe/WhatsApp Image 2026-08-22 at 7.37.57 PM (2).jpeg',
    category: 'vibes',
    caption: 'Team Pitch Preparation'
  }
];

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);
  const [activePhoto, setActivePhoto] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  const filteredPhotos = activeCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(photo => photo.category === activeCategory);

  return (
    <section id="certificates" class="py-16 md:py-24 bg-cream-50 border-t border-b border-stone-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div class="text-center max-w-3xl mx-auto">
          <span class="text-xs uppercase tracking-widest text-maroon-600 font-semibold block mb-2">
            Credentials & Achievements
          </span>
          <h2 class="font-serif text-4xl sm:text-5xl text-ink-900 mb-4">
            Certifications & Leadership
          </h2>
          <div class="h-px bg-stone-300 w-24 mx-auto my-4"></div>
        </div>

        {/* 1. Certifications Grid */}
        <div class="space-y-6">
          <div class="flex items-center gap-2 border-b border-stone-300 pb-2">
            <Award className="w-5 h-5 text-maroon-600" />
            <h3 class="font-serif text-2xl font-semibold text-ink-900">Academic Certifications</h3>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div 
                key={cert.id}
                class="bg-cream-100 hairline-all p-3 flex flex-col justify-between hover:border-maroon-600 transition-colors group cursor-pointer"
                onClick={() => setActiveCert(cert)}
              >
                <div class="space-y-3">
                  {/* Real Certificate Thumbnail */}
                  <div class="w-full aspect-[4/3] bg-cream-200/50 border border-stone-200 flex items-center justify-center relative overflow-hidden">
                    <img 
                      src={cert.imagePath} 
                      alt={cert.title} 
                      class="w-full h-full object-cover transition-all duration-300"
                    />
                    <div class="absolute right-2 bottom-2 text-white bg-ink-900/60 p-1 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn size={12} />
                    </div>
                  </div>
                  
                  <div>
                    <h4 class="font-serif font-bold text-sm text-ink-900 group-hover:text-maroon-600 transition-colors leading-tight">
                      {cert.title}
                    </h4>
                    <p class="text-[10px] text-stone-500 mt-1">{cert.issuer} &bull; {cert.date}</p>
                  </div>
                </div>
                <p class="text-[10px] text-stone-600 line-clamp-2 mt-3 leading-relaxed border-t border-stone-200/50 pt-2">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Achievements & Leadership */}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Achievements list (6 cols on lg) */}
          <div class="lg:col-span-6 space-y-6">
            <div class="flex items-center gap-2 border-b border-stone-300 pb-2">
              <Award className="w-5 h-5 text-maroon-600" />
              <h3 class="font-serif text-2xl font-semibold text-ink-900">Key Achievements & Leadership</h3>
            </div>

            <div class="space-y-6">
              {ACHIEVEMENTS.map((ach, idx) => (
                <div key={idx} class="bg-cream-100 border-l-2 border-maroon-600 p-5 flex flex-col md:flex-row justify-between gap-4">
                  <div class="space-y-2">
                    <span class="inline-block px-2 py-0.5 text-[9px] font-mono uppercase bg-cream-200 border border-stone-200 text-maroon-700 font-semibold">
                      {ach.badge}
                    </span>
                    <h4 class="font-serif text-lg font-bold text-ink-900 leading-tight">
                      {ach.title}
                    </h4>
                    <h5 class="text-xs font-semibold text-stone-700">{ach.subtitle}</h5>
                    <p class="text-xs text-stone-600 leading-relaxed pt-1">{ach.detail}</p>
                  </div>
                  <div class="text-left md:text-right shrink-0 flex flex-row md:flex-col justify-start md:justify-between items-center md:items-end gap-3 text-[10px] text-stone-500 font-mono">
                    <span class="flex items-center gap-1"><MapPin size={10} /> {ach.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Gallery (6 cols on lg) */}
          <div class="lg:col-span-6 space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-stone-300 pb-2 gap-4">
              <h3 class="font-serif text-2xl font-semibold text-ink-900">Event Gallery</h3>
              
              {/* Filter Tabs */}
              <div class="flex flex-wrap gap-1">
                {['all', 'innovation', 'campus', 'vibes'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    class={`px-2 py-0.5 text-[9px] uppercase tracking-wider font-mono border transition-colors ${
                      activeCategory === cat 
                        ? 'bg-maroon-600 border-maroon-600 text-white font-semibold' 
                        : 'border-stone-300 hover:border-maroon-600 text-stone-600 bg-cream-100'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat === 'innovation' ? 'Innovation' : cat === 'campus' ? 'Campus' : 'Vibes'}
                  </button>
                ))}
              </div>
            </div>

            <motion.div 
              layout
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              class="grid grid-cols-2 gap-4 max-h-[460px] overflow-y-auto pr-1"
            >
              <AnimatePresence mode="popLayout">
                {filteredPhotos.map((photo) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    key={photo.path}
                    variants={itemVariants}
                    class="bg-cream-100 border border-stone-200 p-1 aspect-video relative group cursor-pointer overflow-hidden"
                    onClick={() => setActivePhoto(photo)}
                  >
                    <div class="w-full h-full bg-cream-200/50 border border-stone-300 flex items-center justify-center relative overflow-hidden">
                      <img 
                        src={photo.path} 
                        alt={photo.caption} 
                        class="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                      />
                      <div class="absolute right-2 bottom-2 text-white bg-ink-900/60 p-1 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn size={12} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Lightbox / Modal for Certificate zooming */}
      <AnimatePresence>
        {activeCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            class="fixed inset-0 z-50 bg-ink-900/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              class="bg-cream-100 hairline-all max-w-2xl w-full p-4 relative flex flex-col items-center justify-center space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveCert(null)}
                class="absolute right-3 top-3 text-stone-500 hover:text-maroon-600 focus:outline-none z-10 bg-cream-100/80 backdrop-blur-sm p-1 border border-stone-300"
              >
                <X size={18} />
              </button>

              {/* Large Certificate Scan Display */}
              <div class="w-full aspect-[1.414/1] bg-cream-50 border border-stone-300 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={activeCert.imagePath} 
                  alt={activeCert.title} 
                  class="w-full h-full object-contain"
                />
              </div>

              {/* Description */}
              <div class="text-center px-4 pb-2 space-y-1">
                <h4 class="font-serif font-bold text-lg text-ink-900">
                  {activeCert.title}
                </h4>
                <p class="text-xs text-stone-500 font-mono">
                  {activeCert.issuer} &bull; Verified ID: {activeCert.id.toUpperCase()}
                </p>
                <p class="text-xs text-stone-600 max-w-md leading-relaxed pt-2">
                  {activeCert.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox / Modal for Event Gallery Photo zooming */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            class="fixed inset-0 z-50 bg-ink-900/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              class="bg-cream-100 hairline-all max-w-3xl w-full p-4 relative flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setActivePhoto(null)}
                class="absolute right-3 top-3 text-stone-500 hover:text-maroon-600 focus:outline-none z-10 bg-cream-100/80 backdrop-blur-sm p-1 border border-stone-300"
              >
                <X size={18} />
              </button>

              {/* Large Image Display */}
              <div class="w-full max-h-[75vh] bg-cream-50 border border-stone-300 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={activePhoto.path} 
                  alt={activePhoto.caption} 
                  class="w-full max-h-[75vh] object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
