import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpIcon } from 'lucide-react';
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      id="hero">

      {/* Subtle background decoration */}
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-64 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl">

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-6">

            <div className="h-[1px] w-12 bg-amber-500" />
            <span className="font-mono text-amber-400 text-sm tracking-wider uppercase">
              Hello, World
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight">

            I'm <span className="text-white">Alex Chen</span>.<br />
            <span className="text-slate-500">Fullstack Developer.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">

            I build things for the web — from pixel-perfect interfaces to
            robust, scalable APIs. Turning complex problems into elegant
            solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4">

            <a
              href="#projects"
              className="px-6 py-3 bg-amber-400 text-slate-950 font-mono font-medium rounded hover:bg-amber-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">

              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent border border-slate-700 text-slate-300 font-mono font-medium rounded hover:border-slate-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">

              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Terminal Decoration */}
        <motion.div
          initial={{
            opacity: 0,
            x: 20,
            rotate: 2
          }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="hidden lg:block relative">

          <div className="glass-panel rounded-lg overflow-hidden shadow-2xl shadow-black/50">
            {/* Terminal Header */}
            <div className="bg-slate-900 px-4 py-3 flex items-center gap-2 border-b border-slate-800">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <div className="ml-4 text-xs font-mono text-slate-500">
                ~/alex/portfolio
              </div>
            </div>
            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm leading-relaxed">
              <div className="flex text-emerald-400">
                <span className="mr-2">➜</span>
                <span className="text-cyan-400 mr-2">~</span>
                <span className="text-slate-300">npm start</span>
              </div>
              <div className="text-slate-400 mt-2">
                &gt; alex-portfolio@1.0.0 start
                <br />
                &gt; node server.js
              </div>
              <div className="text-amber-300 mt-4">
                [info] Server running on port 3000
              </div>
              <div className="text-slate-300 mt-2">
                [info] Compiling frontend assets...
              </div>
              <div className="text-emerald-400 mt-2">
                [success] Build completed in 1.2s
              </div>
              <div className="flex text-emerald-400 mt-4">
                <span className="mr-2">➜</span>
                <span className="text-cyan-400 mr-2">~</span>
                <span className="w-2 h-5 bg-slate-400 animate-pulse inline-block align-middle" />
              </div>
            </div>
          </div>

          {/* Decorative floating elements */}
          <div className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-lg flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
              <ArrowUpIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">
                Commits this week
              </div>
              <div className="text-lg font-bold text-slate-100">42</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}