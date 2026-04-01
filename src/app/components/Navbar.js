import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full">
      {/* LEFT: Logo Section - Keeping names/structure identical */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-semibold text-white border border-white/20">
          A
        </div>
        <div className="leading-tight hidden sm:block">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">ACM DTU</p>
          <p className="text-[10px] text-slate-500 uppercase tracking-wider">Product Studio</p>
        </div>
      </div>

      {/* CENTER: Desktop Links - Centered layout */}
      <div className="hidden items-center gap-10 md:flex">
        <a href="#home" className="transition hover:text-white text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Home</a>
        <a href="#workshops" className="transition hover:text-white text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Workshop</a>
        <a href="#events" className="transition hover:text-white text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Events</a>
      </div>

      {/* RIGHT: Contact Button - Styled as a pill button like the image */}
      <div className="flex items-center">
        <a 
          href="#contact" 
          className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 px-6 py-2 rounded-full transition-all"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-white">Contact</span>
          <span className="text-slate-400 group-hover:translate-x-1 transition-transform text-lg leading-none">›</span>
        </a>
      </div>
    </nav>
  );
}