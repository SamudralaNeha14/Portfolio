import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = ({ data }) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="max-w-6xl">
      <h2 className="playfair text-5xl font-bold mb-4">Projects</h2>
      <div className="accent-line mb-12"></div>
      <div className="grid md:grid-cols-2 gap-8">
        {data.map((project, index) => (
          <div
            key={index}
            className={`project-card glass-effect rounded-2xl p-8 fade-in stagger-${index + 1} ${
              project.featured ? 'md:col-span-2' : ''
            }`}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {project.featured && (
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full text-xs font-semibold mb-4">
                Featured
              </span>
            )}
            <h3 className="text-2xl font-bold mb-3 playfair">{project.title}</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-slate-800/50 rounded-md text-xs text-violet-300">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-pink-600 rounded-lg hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  <span>View Demo</span>
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-all duration-300 text-sm font-medium"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;