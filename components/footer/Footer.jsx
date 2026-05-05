import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-slate-200/80 backdrop-blur-md border-t border-slate-300">
      <div className="w-full px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">

        <p className="font-mono text-xs text-slate-600 tracking-tight">
          <span className="text-teal-700 font-bold">~/portfolio</span>
          {" $ "}
          <span className="text-slate-500">echo &quot;Engineered by Masum Khan&quot;</span>
        </p>

        <div className="flex items-center gap-3 font-mono text-xs text-slate-500">
          <Link
            href="https://github.com/masumkhan081/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-700 transition-colors duration-200"
          >
            [View_Source]
          </Link>
          <span className="text-slate-300">|</span>
          <span>Next.js &amp; Tailwind</span>
        </div>

      </div>
    </footer>
  );
}
