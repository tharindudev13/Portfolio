import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2024 - Present',
    description:
      'Designing and developing custom web applications for local clients. Responsibilities include requirements gathering, UI/UX design, full-stack development with React and Node.js, and ongoing maintenance.'
  },
  {
    role: 'Open Source Contributor',
    company: 'GitHub Community',
    period: '2023 - Present',
    description:
      'Actively contributing to open-source projects — submitting bug fixes, improving documentation, and adding features. Collaborated with distributed teams and followed code-review best practices.'
  }
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 md:py-32">

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16">

          <h2 className="text-3xl md:text-4xl font-bold">
            05. <span className="text-slate-100">Where I've Worked</span>
          </h2>
          <div className="h-[1px] flex-1 max-w-xs bg-slate-800" />
        </motion.div>

        <div className="relative border-l border-slate-800 ml-3 md:ml-4 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-12">

              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-slate-950 border-2 border-amber-500" />

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                <h3 className="text-xl font-bold text-slate-100">
                  {exp.role}<br />
                  <span className="text-amber-400">@ {exp.company}</span>
                </h3>
                <span className="font-mono text-sm text-slate-500 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <p className="text-slate-400 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
