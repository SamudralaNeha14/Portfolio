import React from 'react';
import { Calendar, Award, ExternalLink } from 'lucide-react';

const Certifications = ({ data }) => {
  return (
    <div className="max-w-5xl">
      <h2 className="playfair text-5xl font-bold mb-4">Certifications</h2>
      <div className="accent-line mb-12"></div>
      <div className="grid md:grid-cols-2 gap-6">
        {data.map((cert, index) => (
          <div key={index} className={`glass-effect rounded-2xl p-6 fade-in stagger-${index + 1} hover:bg-white/5 transition-all duration-300`}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-violet-600 to-pink-600 rounded-lg flex-shrink-0">
                <Award size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-violet-400 mb-2">{cert.name}</h3>
                <p className="text-slate-300 mb-3">{cert.issuer}</p>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      <span>View Certificate</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                {cert.credentialId && (
                  <p className="text-xs text-slate-500 mt-2">ID: {cert.credentialId}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;