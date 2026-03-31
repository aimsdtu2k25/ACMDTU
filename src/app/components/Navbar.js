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
        <a className="transition hover:text-white text-sm font-semibold uppercase tracking-[0.24em] text-slate-400" href="/workshops" >
          Workshop
        </a>
        <a className="transition hover:text-white text-sm font-semibold uppercase tracking-[0.24em] text-slate-400" href="#proof">
          Events
        </a>
      </div>
    </nav>
  );
}
