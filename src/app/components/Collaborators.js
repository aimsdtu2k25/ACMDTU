"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const societies = [
  {
    name: "EHAX",
    logo: "/ehax.png",
    desc: "DTU's Cybersecurity Society, promoting ethical hacking, network security, and digital defense.",
  },
  {
    name: "JOYSTIX",
    logo: "/joystix.png",
    desc: "The Game Development Society of DTU, building immersive games, pixel art, and interactive experiences.",
  },
  {
    name: "AIMS-DTU",
    logo: "/aims-dtu.png",
    desc: "The AI & ML Society of DTU, driving innovation in deep learning, computer vision, and data science.",
  },
  {
    name: "ALGORAVE",
    logo: "/algorev.jpg",
    desc: "DTU's Competitive Programming Club, sharpening algorithmic thinking and problem-solving skills.",
  },
];

// Double the array for seamless loop
const marqueeItems = [...societies, ...societies];

export default function Collaborators() {
  return (
    <section className="py-14 sm:py-20 px-2 sm:px-6 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl sm:text-5xl font-black mb-2 italic tracking-tighter bg-linear-to-r from-white to-slate-500 bg-clip-text text-transparent text-center">
          COLLABORATING SOCIETIES
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mx-auto mb-10 sm:mb-14 h-[2px] w-24 sm:w-40 bg-gradient-to-r from-transparent via-[#3182ce] to-transparent origin-center"
        />
      </div>

      {/* Marquee ticker */}
      <div className="group relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#05080f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#05080f] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {marqueeItems.map((society, i) => (
            <div
              key={`${society.name}-${i}`}
              className="flex-shrink-0 w-[280px] sm:w-[340px] mx-3 sm:mx-4">
              <div className="relative h-full p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-[#3182ce]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(49,130,206,0.12)] group/card overflow-hidden">
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 0%, rgba(49,130,206,0.1) 0%, transparent 60%)",
                  }}
                />

                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-white/10 border border-white/10 flex-shrink-0 group-hover/card:border-[#3182ce]/30 transition-colors duration-300">
                    <Image
                      src={society.logo}
                      alt={`${society.name} Logo`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover/card:text-[#4ECAFF] transition-colors duration-300">
                    {society.name}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed relative z-10">
                  {society.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
