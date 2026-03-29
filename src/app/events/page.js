import React from "react";

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: "UP-01",
      title: "Generative AI & LLM Workshop",
      date: "MAY 12, 2026",
      category: "WORKSHOP",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      description: "Master fine-tuning and RAG architectures for production-grade AI agents.",
      actionLabel: "REGISTER NOW"
    },
    {
      id: "UP-02",
      title: "Computer Vision Summit",
      date: "JUNE 05, 2026",
      category: "TECH TALK",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      description: "Exploring real-time object detection and segmentation on edge devices.",
      actionLabel: "GET TICKETS"
    }
  ];

  const pastEvents = [
    {
      id: "PA-01",
      title: "Neural Network Visualizer",
      date: "MAR 2026",
      category: "EXHIBITION",
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800",
      description: "A showcase of real-time mapping of hidden layers in deep learning models."
    },
    {
      id: "PA-02",
      title: "The Ethics of AGI",
      date: "FEB 2026",
      category: "SYMPOSIUM",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
      description: "Debating the alignment problem with researchers from top tech labs."
    },
    {
      id: "PA-03",
      title: "ML Hackathon 2026",
      date: "JAN 2026",
      category: "COMPETITION",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
      description: "12 hours of intense coding focused on predictive analytics for sustainability."
    }
  ];

  return (
    <div className="min-h-screen bg-black font-sans text-zinc-100">
      
      {/* Archive Header */}
      <header className="border-b-4 border-zinc-900 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic">
            Events<span className="text-[#1a5a96]">.</span>
          </h1>
          <p className="mt-4 text-xl font-mono text-zinc-500 uppercase tracking-[0.3em]">
            ACM-DTU // AI & ML Directory
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-16 px-6 space-y-24">
        
        {/* SECTION: UPCOMING */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight">Upcoming Entries</h2>
            <div className="h-[2px] flex-1 bg-green-500/30"></div>
            <span className="font-mono text-green-500 text-sm animate-pulse">● LIVE_STATUS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id} 
                className="group relative flex flex-col border-2 border-green-900/50 bg-[#0a0a0a] transition-all duration-300 hover:border-green-400 shadow-[8px_8px_0px_0px_rgba(22,101,52,0.2)] hover:shadow-[12px_12px_0px_0px_rgba(34,197,94,0.3)]"
              >
                <div className="relative h-72 w-full overflow-hidden border-b border-green-900/50">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 bg-green-500 text-black px-4 py-1 text-xs font-black tracking-widest uppercase shadow-lg">
                    {event.category}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="font-mono text-sm text-green-500 font-bold">{event.date}</span>
                    <span className="text-[10px] text-zinc-700 font-bold tracking-widest uppercase">ID: {event.id}</span>
                  </div>
                  <h3 className="text-3xl font-bold leading-tight mb-4 uppercase">
                    {event.title}
                  </h3>
                  <p className="text-zinc-400 text-base leading-relaxed mb-8">
                    {event.description}
                  </p>
                  <button className="w-full bg-green-600 py-4 text-black text-sm font-black uppercase tracking-widest transition-all hover:bg-white">
                    {event.actionLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: PAST ARCHIVE */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-zinc-500">Past Archive</h2>
            <div className="h-[2px] flex-1 bg-zinc-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-80 hover:opacity-100 transition-opacity">
            {pastEvents.map((event) => (
              <div 
                key={event.id} 
                className="group relative flex flex-col border border-zinc-800 bg-[#0a0a0a] transition-all duration-300 hover:border-zinc-500 shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] hover:shadow-[10px_10px_0px_0px_rgba(26,90,150,0.2)]"
              >
                <div className="relative h-48 w-full overflow-hidden border-b border-zinc-800">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-mono text-[10px] text-zinc-500 uppercase">{event.date}</span>
                    <span className="text-[9px] text-zinc-800 font-bold tracking-widest uppercase">{event.category}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight mb-3 uppercase group-hover:text-[#1a5a96] transition-colors">
                    {event.title}
                  </h3>
                  <button className="text-[10px] font-black uppercase tracking-tighter text-zinc-600 hover:text-white transition-colors">
                    → VIEW RECAP
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Branding */}
      <footer className="border-t border-zinc-900 py-16 text-center">
        <p className="text-zinc-700 font-mono text-[10px] uppercase tracking-[1em]">
          End of Archive // ACM-DTU
        </p>
      </footer>
    </div>
  );
}