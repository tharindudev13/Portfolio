import React from 'react';
import { motion } from 'framer-motion';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
  SendIcon } from
'lucide-react';
export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form is non-functional per requirements
  };
  return (
    <section id="contact" className="py-20 md:py-32">
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
          className="flex items-center gap-4 mb-16">

          <h2 className="text-3xl md:text-4xl font-bold">
            05. <span className="text-slate-100">What's Next?</span>
          </h2>
          <div className="h-[1px] flex-1 max-w-xs bg-slate-800" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
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
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}>

            <h3 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
              Let's Work Together
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              I'm currently looking for new opportunities. Whether you have a
              question, a project idea, or just want to say hi, my inbox is
              always open. I'll try my best to get back to you!
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="text-slate-400 hover:text-amber-400 transition-colors"
                aria-label="GitHub">

                <GithubIcon className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-amber-400 transition-colors"
                aria-label="LinkedIn">

                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-amber-400 transition-colors"
                aria-label="Twitter">

                <TwitterIcon className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-amber-400 transition-colors"
                aria-label="Email">

                <MailIcon className="w-6 h-6" />
              </a>
            </div>
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
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.4
            }}
            className="glass-panel p-8 rounded-xl">

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-mono text-slate-300 mb-2">

                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  placeholder="John Doe" />

              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-mono text-slate-300 mb-2">

                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  placeholder="john@example.com" />

              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-mono text-slate-300 mb-2">

                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                  placeholder="Hello, I'd like to talk about..." />

              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-mono font-medium py-3 px-4 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">

                <SendIcon className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>);

}