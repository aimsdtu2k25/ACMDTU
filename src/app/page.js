'use client'
import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
export default function HomePage() {

  const [showScrollTop, setShowScrollTop] = useState(false);
  
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowScrollTop(true);
      else setShowScrollTop(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cards = [
    { id: 1, title: 'COMPUTATIONAL INTELLIGENCE', year: '2020', desc: '8th Summer Internship Cum Workshop on Computational Intelligence and system architectures.' },
    { id: 2, title: 'NEXT WORD PREDICTION', year: '2022', desc: 'Project on Next Word Prediction in Song Lyrics using advanced Machine Learning models.' },
    { id: 3, title: 'FAKE NEWS DETECTION', year: '2021', desc: 'Studying formality style transfer using Seq2Seq model and neural networks for data analysis.' },
    { id: 4, title: 'IMAGE CAPTION GENERATION', year: '2021', desc: 'Detailed analysis of Indian Unicorns, top companies, and generating captions dynamically.' },
    { id: 5, title: 'MULTIPLE DISEASE PREDICTION', year: '2022', desc: 'Use of passive voice in reporting and building a multiple disease prediction system.' },
    { id: 6, title: 'SIGN LANGUAGE DETECTION', year: '2020', desc: 'Sign language character recognition and speech emotion detection using computer vision.' },
  ];


  return (
    
    <main className="min-h-screen bg-[#0f1011] text-gray-200 font-sans relative">
      <div className="bg-[#0a0a0b] py-20 px-4 text-center border-b-[6px] border-[#3182ce] overflow-hidden">   
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-[#111827] via-[#071642] to-[#123084e2]"></div>
        <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-indigo-600">
          PAST WORKSHOPS
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-medium tracking-wide">
          Explore our repository of past events, projects, and computational intelligence workshops.
        </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Dark Glassmorphic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div 
              key={card.id} 
              
              className="group relative h-80 bg-[#1a1c20]/40 backdrop-blur-md border border-gray-800 hover:border-[#3182ce] overflow-hidden transition-all duration-300 rounded-sm"
            >
              {/* Default State (Visible initially, fades out on hover) */}
              <div className="absolute inset-0 p-8 flex flex-col justify-center transition-opacity duration-300 group-hover:opacity-0">
                <div className="text-[#3182ce] font-bold text-sm mb-4 tracking-widest uppercase">{card.year}</div>
                <h3 className="text-3xl font-extrabold text-white leading-tight">{card.title}</h3>
              </div>

              {/* Hover State (Hidden initially, slides up on hover) */}
              <div className="absolute inset-0 p-8 bg-[#0a0a0b]/90 backdrop-blur-xl flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 grow">
                  {card.desc}
                </p>
                <button className="bg-[#3182ce] text-white py-3 px-6 font-bold text-sm uppercase tracking-wide hover:bg-[#2b6cb0] transition-colors w-full text-center">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer Section (ACM Content + HIBP Stark Styling) */}
      <footer className="bg-[#050505] border-t border-gray-900 pt-16 pb-8 mt-12 relative overflow-hidden">
        {/* Abstract network background placeholder for footer */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-gray-700 via-black to-black"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          {/* Logo Placeholder */}
          <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full border-2 border-gray-700 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(49,130,206,0.2)]">
            <span className="text-xs text-gray-400">LOGO</span>
          </div>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-2xl mx-auto">
            ACM Student Chapter at DTU is the technical society at the Department of Information Technology, DTU. It is a student-driven society where active student members organize a plethora of events during the semester.
          </p>

          <h2 className="text-4xl font-extrabold text-white mb-8 tracking-tight">Reach out to us!</h2>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16">
            <a href="#" className="text-[#3182ce] hover:text-white transition-colors"><FaFacebook size={32} /></a>
            <a href="#" className="text-[#3182ce] hover:text-white transition-colors"><FaLinkedin size={32} /></a>
            <a href="#" className="text-[#3182ce] hover:text-white transition-colors"><FaTwitter size={32} /></a>
            <a href="#" className="text-[#3182ce] hover:text-white transition-colors"><FaInstagram size={32} /></a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
              Designed & Developed By ACM DTU Student Chapter
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-white text-black p-4 rounded-full shadow-2xl hover:bg-gray-200 transition-colors z-50 flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} strokeWidth={3} />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}