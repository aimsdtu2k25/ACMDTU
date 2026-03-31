export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold text-white">
          A
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
            ACM DTU
          </p>
          <p className="text-sm text-slate-300">Product Studio</p>
        </div>
      </div>
      <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
        <a className="transition hover:text-white" href="#features">
          Features
        </a>
        <a className="transition hover:text-white" href="#proof">
          Impact
        </a>
        <a className="transition hover:text-white" href="#stories">
          Stories
        </a>
        <a className="transition hover:text-white" href="#contact">
          Contact
        </a>
      </div>
      <button className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/20">
        Book a demo
      </button>
    </nav>
  );
}
