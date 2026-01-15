import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = ({ data, setActiveSection }) => {
  const handleDownloadResume = () => {
    // Alternative method - opens PDF in new tab for viewing/downloading
    window.open('/resume.pdf', '_blank');
  };

  const handleGetInTouch = () => {
    // Navigate to contact section
    if (setActiveSection) {
      setActiveSection('contact');
    }
    setTimeout(() => {
      const container = document.querySelector('.container');
      if (container) {
        window.scrollTo({
          top: container.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className="relative overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-pink-600/10"></div>
      <div className="container mx-auto px-6 py-20 relative">
        <div className="max-w-5xl">
          <div className="mb-6">
            <div className="accent-line mb-5"></div>
            {/* <p className="text-violet-400 text-sm uppercase tracking-widest font-semibold">Portfolio 2026</p> */}
          </div>
          <h1 className="playfair text-7xl md:text-8xl font-bold mb-6 leading-none">
            {data.name}
          </h1>
          <h2 className="text-3xl md:text-4xl text-slate-300 mb-8 font-light">
            {data.title}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mb-12 leading-relaxed">
            {data.bio}
          </p>
          
          <div className="flex flex-wrap gap-6 items-center">
            <button
              onClick={handleGetInTouch}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 font-medium cursor-pointer">
              <Mail size={18} />
              <span>Get in Touch</span>
            </button>
            
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-6 py-3 glass-effect rounded-full hover:bg-white/10 transition-all duration-300 font-medium cursor-pointer border border-violet-500/30 hover:border-violet-500/60">
              <Download size={18} />
              <span>Download Resume</span>
            </button>
            
            <a href={data.github} 
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 px-6 py-3 glass-effect rounded-full hover:bg-white/10 transition-all duration-300">
              <Github size={18} />
              <span>GitHub</span>
            </a>
            
            <a href={data.linkedin}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 px-6 py-3 glass-effect rounded-full hover:bg-white/10 transition-all duration-300">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin size={18} />
              <span>{data.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;