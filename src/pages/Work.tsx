import React, { useState } from 'react';
import { projects, type Project } from '../data/projects';
import { ExternalLink, Github, X } from 'lucide-react';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">Portfolio</h2>
        <h3 className="text-4xl font-bold text-white">Featured Projects</h3>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-white/[0.02] border border-white/10 rounded-[2rem] overflow-hidden hover:border-white/20 transition-all duration-500"
          >
            {/* Image Container */}
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
            </div>

            {/* Content */}
            <div className="p-8 space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-gray-500">
                {project.infoProject.map((info, i) => (
                  <React.Fragment key={i}>
                    <span>{info}</span>
                    {i < project.infoProject.length - 1 && <span className="w-1 h-1 bg-white/20 rounded-full" />}
                  </React.Fragment>
                ))}
              </div>

              <h4 className="text-2xl font-bold text-white">{project.title}</h4>
              <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-mono text-gray-400 border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(project)}
                className="w-full mt-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-cyan-400 transition-colors"
              >
                See Project
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="bg-[#111] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-12 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-white">{selectedProject.title}</h2>
                <div className="flex items-center gap-4 text-sm font-mono text-cyan-400">
                   {selectedProject.infoProject.join(' • ')}
                </div>
              </div>

              <div className="aspect-video rounded-3xl overflow-hidden border border-white/5">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <p className="text-gray-300 text-lg leading-relaxed">{selectedProject.description}</p>
                </div>

                <div className="space-y-8">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-md bg-white/5 text-xs text-gray-400 border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3">
                    <a href={selectedProject.linkLiveVersion} target="_blank" className="flex items-center justify-center gap-2 py-3 bg-cyan-500 text-white rounded-xl font-medium hover:bg-cyan-600 transition-all">
                      See Live <ExternalLink size={18} />
                    </a>
                    <a href={selectedProject.linkSource} target="_blank" className="flex items-center justify-center gap-2 py-3 bg-white/5 text-white border border-white/10 rounded-xl font-medium hover:bg-white/10 transition-all">
                      Source Code <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
