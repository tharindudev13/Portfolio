import React from 'react';
import { motion } from 'framer-motion';
export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 0.6
          }}
          className="flex items-center gap-4 mb-12">

          <h2 className="text-3xl md:text-4xl font-bold">
            01. <span className="text-slate-100">About Me</span>
          </h2>
          <div className="h-[1px] flex-1 max-w-xs bg-slate-800" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="md:col-span-3 space-y-6 text-slate-400 leading-relaxed">

            <p>
              Hello! My name is Alex and I enjoy creating things that live on
              the internet. My interest in web development started back in 2015
              when I decided to try editing custom Tumblr themes — turns out
              hacking together HTML & CSS taught me a lot about layout and
              design!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences for a
              variety of clients.
            </p>
            <p>
              I bridge the gap between design and engineering — combining my
              technical knowledge with a keen eye for aesthetics to create
              beautiful, scalable, and performant applications from the database
              all the way to the browser.
            </p>
            <p>
              When I'm not at the computer, I'm usually hanging out with my dog,
              reading sci-fi novels, or exploring local coffee shops.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.6,
              delay: 0.4
            }}
            className="md:col-span-2 relative group">

            {/* Image Placeholder with styling */}
            <div className="relative z-10 rounded-lg overflow-hidden border border-slate-800 bg-slate-900 aspect-square md:aspect-[4/5] transition-all duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2">
              <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-300 z-10" />
              <div className="w-full h-full flex items-center justify-center bg-slate-800">
                <span className="font-mono text-slate-600 border border-slate-700 px-4 py-2 rounded">
                  Image Placeholder
                </span>
              </div>
            </div>
            {/* Decorative border behind image */}
            <div className="absolute inset-0 border-2 border-amber-500 rounded-lg translate-x-4 translate-y-4 -z-10 transition-all duration-300 group-hover:translate-x-6 group-hover:translate-y-6" />
          </motion.div>
        </div>
      </div>
    </section>);

}