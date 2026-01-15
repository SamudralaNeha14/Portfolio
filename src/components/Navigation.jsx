import { Award, Briefcase, ChevronRight, FileCheck, Github, Mail } from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection }) => {
  const sections = [
    // { id: 'about', label: 'About', icon: <Code size={16} /> },
    { id: 'education', label: 'Education', icon: <Award size={16} /> },
    { id: 'skills', label: 'Skills', icon: <ChevronRight size={16} /> },
    { id: 'certifications', label: 'Certifications', icon: <FileCheck size={16} /> },
    { id: 'projects', label: 'Projects', icon: <Github size={16} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={16} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={16} /> }
  ];

  return (
    <div className="sticky top-0 z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-6">
        <nav className="flex gap-8 overflow-x-auto py-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`nav-item flex items-center gap-2 px-4 py-2 whitespace-nowrap transition-colors ${
                activeSection === section.id ? 'active text-violet-400' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {section.icon}
              <span className="font-medium">{section.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navigation;