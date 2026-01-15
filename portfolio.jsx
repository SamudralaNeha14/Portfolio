import { Award, Briefcase, Calendar, ChevronRight, Code, ExternalLink, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const portfolioData = {
    personal: {
      name: "Samudrala Neha",
      title: "AI enthusiast ",
      email: "neha.samudrala02@gmail.com",
      location: "Hyderabad, India",
      linkedin: "https://www.linkedin.com/in/neha-samudrala-1402/",
      github: "https://github.com/SamudralaNeha14",
      bio: "Motivated Computer Science graduate with hands-on experience in software development, data analytics, machine learning, and emerging GenAI technologies. Proficient in Python, SQL, and modern web development, with growing expertise in LLMs, RAG pipelines, AI agents, and prompt engineering. Built scalable tools and intelligent ML/LLM applications across internships and academic projects. Strong problem-solver with a drive to design efficient, data-driven, and AI-powered systems"
    },
    
    education: [
      {
      degree: "Bachelor of Science in Computer Science",
      institution: "Keshav Memorial Institute of Technology",
      year: "2020 - 2024"
    },
      {
      degree: "High School Diploma",
      institution: "Sri Gynavapi Junior College",
      year: "2018 - 2020"
    }
    ],
    
    skills: {
    "Languages": ["Python", "SQL", "Java", "JavaScript", "HTML/CSS"],
    "GenAI & LLMs": ["Prompt Engineering", "RAG", "LLM Evaluation", "LangChain", "LangGraph", "Agents", "Groq API"],
    "Databases": ["MySQL", "MongoDB", "Firebase"],
    "Cloud & DevOps": ["GCP (basics)", "Docker", "Git", "CI/CD (beginner)", "Azure(Basics)"],
    "ML & Analytics": ["Scikit-learn", "Pandas", "NumPy", "CNN/RNN", "Streamlit"],
    "Tools": ["FastAPI", "Tableau", "Power BI"]
  },
    
    projects: [
      {
      title: "Kisan Mitra",
      description: "Built a content-based Movie Recommendation System using Python, ML, and Streamlit. Deployed an interactive UI for real-time suggestions based on user preferences. Applied analytical skills to fine-tune the model and rigorously tested it to reduce errors and improve user experience.",
      tech: ["NODE.JS", "MONGODB", "EXPRESS.JS"],
      featured: true
    },
      {
      title: "Deepfake Detection System",
      description: "Developed a deepfake detection pipeline leveraging CNNs for spatial feature extraction from facial images and RNNs for temporal modeling of frame sequences in videos. Integrated the model into a Streamlit-based application enabling image/video uploads and instant prediction results.",
      tech: ["Python", "CNN", "RNN", "Streamlit"],
      demo: "https://ntn-deepfake-detector.streamlit.app/",
      github: "https://github.com/SamudralaNeha14/DeepFakeDetection",
      featured: true
    },
      {
      title: "Movie Recommendation System",
      description: "Built a content-based Movie Recommendation System using Python, ML, and Streamlit. Deployed an interactive UI for real-time suggestions based on user preferences. Applied analytical skills to fine-tune the model and rigorously tested it to reduce errors and improve user experience.",
      tech: ["Python", "Streamlit", "Machine Learning", "Pandas"],
      github: "https://github.com/SamudralaNeha14/Movie-Recomendation",
      featured: true
    },
    {
      title: "NEWS-BOT AGENT",
      description: " Developed an AI-powered News-Bot Agent using LangChain and Groq API to fetch and summarize real-time news articles based on user queries. Implemented advanced prompt engineering techniques to enhance the bot's contextual understanding and response accuracy. Deployed the application on Streamlit for an interactive user experience.",
      tech: ["Python", "Streamlit", "LangChain", "Groq API"],
      demo: "https://newsbot-assistant.streamlit.app/",
      github: "https://github.com/SamudralaNeha14/NEWSBOT",
      featured: true
    },
    {
      title: "RESUMAKE",
      description: " Developed a Streamlit-based web app for building ATS-friendly resumes, featuring an ATS scanner to evaluate compatibility and a Chatbot that provides real-time resume guidance. The interactive platform allows users to create, edit, and optimize professional resumes efficiently.",
      tech: ["Python", "Streamlit", "LangChain", "Groq API"],
      demo: "https://resumake.streamlit.app/",
      github: "https://github.com/SamudralaNeha14/RESUMAKE.git",
      featured: true
    },
    
    ],
    
    experience: [
    {
      title: "Intern",
      company: "Inam Solutions",
      period: "June 2024 - Dec 2024",
      location: "Hyderabad, India",
      achievements: [
        "Built automated data pipelines using Python and SQL to process 150K+ records, reducing reporting time by 30% and supporting ETL integration with MySQL dashboards.",
        "Prototyped a customer churn prediction model and ensured data quality and standardization across analytics workflows."
      ]
    }
  ],
  };

  const sections = [
    { id: 'about', label: 'About', icon: <Code size={16} /> },
    { id: 'education', label: 'Education', icon: <Award size={16} /> },
    { id: 'skills', label: 'Skills', icon: <ChevronRight size={16} /> },
    { id: 'projects', label: 'Projects', icon: <Github size={16} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={16} /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Work+Sans:wght@300;400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Work Sans', sans-serif;
          overflow-x: hidden;
        }
        
        .playfair {
          font-family: 'Playfair Display', serif;
        }
        
        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        .stagger-3 { animation-delay: 0.3s; opacity: 0; }
        .stagger-4 { animation-delay: 0.4s; opacity: 0; }
        .stagger-5 { animation-delay: 0.5s; opacity: 0; }
        
        .project-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s;
        }
        
        .project-card:hover::before {
          left: 100%;
        }
        
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        
        .skill-badge {
          transition: all 0.3s ease;
        }
        
        .skill-badge:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
        }
        
        .nav-item {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
          transition: width 0.3s ease;
        }
        
        .nav-item.active::after,
        .nav-item:hover::after {
          width: 100%;
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .accent-line {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
          border-radius: 2px;
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-pink-600/10"></div>
        <div className="container mx-auto px-6 py-20 relative">
          <div className={`max-w-5xl ${isLoaded ? 'fade-in' : ''}`}>
            <div className="mb-6">
              <div className="accent-line mb-4"></div>
              <p className="text-violet-400 text-sm uppercase tracking-widest font-semibold">Portfolio 2026</p>
            </div>
            <h1 className="playfair text-7xl md:text-8xl font-bold mb-6 leading-none">
              {portfolioData.personal.name}
            </h1>
            <h2 className="text-3xl md:text-4xl text-slate-300 mb-8 font-light">
              {portfolioData.personal.title}
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mb-12 leading-relaxed">
              {portfolioData.personal.bio}
            </p>
            
            <div className="flex flex-wrap gap-6 items-center">
              <a href={`mailto:${portfolioData.personal.email}`} 
                 className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 font-medium">
                <Mail size={18} />
                <span>Get in Touch</span>
              </a>
              
              <a href={portfolioData.personal.github} 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 px-6 py-3 glass-effect rounded-full hover:bg-white/10 transition-all duration-300">
                <Github size={18} />
                <span>GitHub</span>
              </a>
              
              <a href={portfolioData.personal.linkedin}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 px-6 py-3 glass-effect rounded-full hover:bg-white/10 transition-all duration-300">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin size={18} />
                <span>{portfolioData.personal.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
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

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-20">
        
        {/* About Section */}
        {activeSection === 'about' && (
          <div className="max-w-4xl fade-in">
            <h2 className="playfair text-5xl font-bold mb-4">About Me</h2>
            <div className="accent-line mb-8"></div>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                {portfolioData.personal.bio}
              </p>
              <p>
                With a passion for clean code and user-centric design, I thrive on transforming complex challenges 
                into intuitive solutions. My journey in software development has been driven by curiosity and a 
                commitment to continuous learning.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <div className="max-w-4xl">
            <h2 className="playfair text-5xl font-bold mb-4">Education</h2>
            <div className="accent-line mb-12"></div>
            <div className="space-y-8">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className={`glass-effect rounded-2xl p-8 fade-in stagger-${index + 1}`}>
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-violet-400 mb-2">{edu.degree}</h3>
                      <p className="text-xl text-slate-300">{edu.institution}</p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar size={18} />
                      <span>{edu.year}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-400">
                        <ChevronRight size={18} className="mt-1 text-violet-400 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="max-w-5xl">
            <h2 className="playfair text-5xl font-bold mb-4">Skills</h2>
            <div className="accent-line mb-12"></div>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(portfolioData.skills).map(([category, skills], index) => (
                <div key={category} className={`fade-in stagger-${index + 1}`}>
                  <h3 className="text-2xl font-semibold mb-6 text-gradient playfair">{category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-badge px-4 py-2 glass-effect rounded-lg text-sm font-medium border border-violet-500/30 hover:border-violet-500/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="max-w-6xl">
            <h2 className="playfair text-5xl font-bold mb-4">Projects</h2>
            <div className="accent-line mb-12"></div>
            <div className="grid md:grid-cols-2 gap-8">
              {portfolioData.projects.map((project, index) => (
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
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <div className="max-w-4xl">
            <h2 className="playfair text-5xl font-bold mb-4">Work Experience</h2>
            <div className="accent-line mb-12"></div>
            <div className="space-y-8">
              {portfolioData.experience.map((exp, index) => (
                <div key={index} className={`glass-effect rounded-2xl p-8 fade-in stagger-${index + 1}`}>
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-violet-400 mb-1">{exp.title}</h3>
                      <p className="text-xl text-slate-300 mb-2">{exp.company}</p>
                      <p className="text-sm text-slate-500 flex items-center gap-2">
                        <MapPin size={14} />
                        {exp.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar size={18} />
                      <span className="whitespace-nowrap">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mt-6">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-400">
                        <ChevronRight size={18} className="mt-1 text-violet-400 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 mb-4">
            Built with React • Designed with passion
          </p>
          <p className="text-slate-500 text-sm">
            © 2026 {portfolioData.personal.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;