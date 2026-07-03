

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/project";

function Projects() {
  return (
    <section id="projects" className="bg-slate-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Featured Projects
        </h2>

        <p className="text-slate-400 text-center mb-12">
          Some of my practical full-stack and AI-based projects.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500 hover:-translate-y-2 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-purple-400">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-5 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="text-xs bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;