import { motion } from 'framer-motion';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';
const projects = [
{
  title: 'LIBRARIA: Library Management System (Ongoing)',
  description:
  'A full-stack library management system with a React frontend and Spring Boot backend. Features include book cataloging, user authentication, and Restful APIs for CRUD operations.This project done for learn and practice Spring Boot framework.',
  tech: ['React', 'JavaScript', 'Spring Boot'],
  github: 'https://github.com/tharindudev13/Libraria',
  live: '#',
  image: 'https://raw.githubusercontent.com/tharindudev13/Libraria/main/Libraria.png?raw=true'
},
{
  title: 'Weather Dashboard',
  description:
  'A weather application that displays current conditions and forecasts for any location. Features include location-based searches, detailed hourly predictions, and a clean, intuitive interface.This is a small step to practice API integration and frontend development with React.',
  tech: ['React', 'JavaScript', 'Weatherapi API'],
  github: 'https://github.com/tharindudev13/Weather-app',
  live: 'https://tharindudev13.github.io/Weather-app/',
  image:'https://raw.githubusercontent.com/tharindudev13/Weather-app/main/image.png?raw=true'
},
// 
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32">
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
            03. <span className="text-slate-100">Some Things I've Built</span>
          </h2>
          <div className="h-[1px] flex-1 max-w-xs bg-slate-800" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) =>
          <motion.div
            key={project.title}
            initial={{
              opacity: 0,
              y: 30
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
            className="group relative flex flex-col justify-between bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">

            

              {/* Image Placeholder Area */}
              <div className="h-48 bg-slate-850 relative overflow-hidden border-b border-slate-800">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/40 via-transparent to-transparent group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-mono text-xs text-slate-600 opacity-50">
                    <img src={project.image} alt={project.title} />
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-slate-400">
                    <a
                    href={project.github}
                    className="hover:text-amber-400 transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}>

                      <GithubIcon className="w-5 h-5" />
                    </a>
                    <a
                    href={project.live}
                    className="hover:text-amber-400 transition-colors"
                    aria-label={`Live demo for ${project.title}`}>

                      <ExternalLinkIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-x-3 gap-y-2 mt-auto">
                  {project.tech.map((tech) =>
                <li
                  key={tech}
                  className="font-mono text-xs text-amber-500/80">

                      {tech}
                    </li>
                )}
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}