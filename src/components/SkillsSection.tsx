import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { CodeIcon, ServerIcon, WrenchIcon } from 'lucide-react';
const skillCategories = [
{
  title: 'Frontend',
  icon: <CodeIcon className="w-5 h-5 text-amber-400" />,
  skills: [
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind CSS',
  'Framer Motion',
  'Redux',
  'Vue.js']

},
{
  title: 'Backend',
  icon: <ServerIcon className="w-5 h-5 text-amber-400" />,
  skills: [
  'Node.js',
  'Python',
  'PostgreSQL',
  'Redis',
  'Docker',
  'GraphQL',
  'Express']

},
{
  title: 'Tools & Others',
  icon: <WrenchIcon className="w-5 h-5 text-amber-400" />,
  skills: ['Git', 'AWS', 'Figma', 'CI/CD', 'Linux', 'Jest', 'Webpack']
}];

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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
      duration: 0.5
    }
  }
};
export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 md:py-32 bg-slate-900/30 border-y border-slate-800/50">

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
            02. <span className="text-slate-100">Tech Stack</span>
          </h2>
          <div className="h-[1px] flex-1 max-w-xs bg-slate-800" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) =>
          <motion.div
            key={category.title}
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
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: idx * 0.2
            }}
            className="glass-panel p-8 rounded-xl">

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-800 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-200">
                  {category.title}
                </h3>
              </div>

              <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
              className="flex flex-wrap gap-2">

                {category.skills.map((skill) =>
              <motion.span
                key={skill}
                variants={itemVariants}
                className="px-3 py-1.5 text-sm font-mono text-slate-300 bg-slate-800/80 border border-slate-700 rounded-md hover:border-amber-500/50 hover:text-amber-300 transition-colors cursor-default">

                    {skill}
                  </motion.span>
              )}
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}