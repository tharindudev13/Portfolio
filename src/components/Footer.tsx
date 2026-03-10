import { ArrowUpIcon} from 'lucide-react';
export function Footer() {
  return (
    <footer className="py-8 text-center border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center gap-4">
        <a
          href="#hero"
          className="p-2 text-slate-500 hover:text-amber-400 transition-colors rounded-full hover:bg-slate-800/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          aria-label="Back to top">

          <ArrowUpIcon className="w-5 h-5" />
        </a>
        <div className="font-mono text-sm text-slate-500">
          <p className="mb-1">Designed & Built by Tharindu Kodippili&#169;</p>
          <p className="text-xs opacity-70">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>);

}