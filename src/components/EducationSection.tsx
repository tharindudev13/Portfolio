import { motion } from 'framer-motion';
const education = [
{
  status: 'Bsc. Hons. in Artificial Intelligence',
  institution: 'University Of Moratuwa',
  period: '2026 - Present',
  description:
  'Currently pursuing a Bsc. Hons. in Artificial Intelligence at the University of Moratuwa, where I am gaining a strong foundation in machine learning, data science, and AI ethics. I will be taking courses in algorithms, neural networks, and natural language processing.'
},
{
  status: 'G.C.E. Advanced Level',
  institution: 'Thelijjawilla Central College',
  period: '2022 - 2024',
  description:
  'Stream: Physical Science, Grade: 3A s'
},
{
  status: 'G.C.E. Ordinary Level',
  institution: 'Thelijjawilla Central College',
  period: '2016 - 2022',
  description:
  'Grade: 9A s'
}];

export function EducationSection() {
  return (
    <section
      id="education"
      className="py-20 md:py-32 bg-slate-900/30 border-y border-slate-800/50">

      <div className="max-w-4xl mx-auto px-6">
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
            04. <span className="text-slate-100">Where I've Studied</span>
          </h2>
          <div className="h-[1px] flex-1 max-w-xs bg-slate-800" />
        </motion.div>

        <div className="relative border-l border-slate-800 ml-3 md:ml-4 space-y-12">
          {education.map((edu, idx) =>
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: idx * 0.2
            }}
            className="relative pl-8 md:pl-12">

              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-slate-950 border-2 border-amber-500" />

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                <h3 className="text-xl font-bold text-slate-100">
                  {edu.status}{' '} <br />
                  <span className="text-amber-400">@ {edu.institution}</span>
                </h3>
                <span className="font-mono text-sm text-slate-500 whitespace-nowrap">
                  {edu.period}
                </span>
              </div>

              <p className="text-slate-400 leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}