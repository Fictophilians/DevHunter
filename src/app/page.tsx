import { Briefcase, ArrowRight, ShieldCheck, Sparkles, Layers } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <header className="border-b border-slate-800/80 backdrop-blur px-6 py-4 flex items-center justify-between max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30">
            <Briefcase className="h-5 w-5" />
          </div>
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            DevHunter
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-950/80 text-indigo-400 border border-indigo-800/50 font-medium">
            Day 1 Active
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center py-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs mb-8">
          <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
          <span>Fullstack Next.js + PostgreSQL + Prisma + Zod</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Track Your Dev Job Applications <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-indigo-200 bg-clip-text text-transparent">
            Without The Chaos
          </span>
        </h1>

        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed">
          DevHunter is built for aspiring developers to track internships, full-time roles,
          interview schedules, and application statuses in one streamlined workspace.
        </p>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mb-12 text-left">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/70 hover:border-slate-700 transition">
            <Layers className="h-5 w-5 text-indigo-400 mb-3" />
            <h3 className="font-semibold text-sm text-slate-200 mb-1">Status Tracking</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Organize pipeline stages: Applied, Interview, Offer, or Rejected.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/70 hover:border-slate-700 transition">
            <ShieldCheck className="h-5 w-5 text-sky-400 mb-3" />
            <h3 className="font-semibold text-sm text-slate-200 mb-1">Backend Powered</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Real relational database with Prisma ORM and strict Zod validation.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/70 hover:border-slate-700 transition">
            <Briefcase className="h-5 w-5 text-emerald-400 mb-3" />
            <h3 className="font-semibold text-sm text-slate-200 mb-1">Metrics & Analytics</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Track conversion rates from application submissions to interviews.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 font-medium text-sm text-white shadow-lg shadow-indigo-600/25">
            <span>Project Initialized Successfully</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        DevHunter &bull; Built with Next.js App Router
      </footer>
    </div>
  );
}
