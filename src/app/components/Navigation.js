"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation({setSelectedYear}) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      {/* Top Navigation Bar - HIBP Style (Dark, High Contrast) */}
      <nav className="bg-[#0a0a0b] text-white p-4 flex items-center justify-between shadow-lg sticky top-0 z-50 border-b border-gray-800">
        <div className="flex items-center">
          <button 
            onClick={() => setIsOpen(true)} 
            className="p-2 hover:bg-[#222] rounded-sm focus:outline-none transition-colors"
          >
            <Menu size={28} />
          </button>
          <div className="ml-4 text-xl font-extrabold tracking-widest uppercase flex items-center gap-2">
            <Link href="/" className="text-[#3182ce]">BrandName</Link>
            <span className="text-gray-500">|</span>
          </div>
        </div>

        {/* Top Right Links (ACM Style) */}
        <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-wide mr-4">
          <Link href="#" className="hover:text-[#3182ce] transition-colors">Our Team</Link>
          <Link href="#" className="hover:text-[#3182ce] transition-colors">Events</Link>
          <Link href="#" className="text-[#3182ce] hover:text-white transition-colors">Past Workshops</Link>
        </div>
      </nav>

      {/* Sliding Drawer Menu with Glassmorphism */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              // Glassmorphism effect applied here: bg-black/40 and backdrop-blur-xl
              className="fixed top-0 left-0 w-80 h-full bg-[#0a0a0b]/60 backdrop-blur-xl border-r border-white/10 text-white z-50 shadow-2xl flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-white/10">
                <span className="text-lg font-bold tracking-widest uppercase">Navigation</span>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-2 hover:bg-white/10 rounded-sm transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex flex-col p-6 space-y-6">
                <div className="pt-8 mt-8 border-t border-white/10">
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-4 block">Filter Workshops</span>
                  {/* Horizontal column of buttons moved inside the vertical nav */}
                  <div className="flex flex-col gap-3">
                    {['All', '2022', '2021', '2020'].map((year) => (
                      <button  
                      key={year}
                      onClick={() => {
                      setSelectedYear(year);
                      }}   
                      className="flex-1 min-w-15 py-2 bg-white/5 hover:bg-[#3182ce] border border-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all"
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}