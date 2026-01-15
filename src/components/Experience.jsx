import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = ({ data }) => {
  return (
    <div className="max-w-4xl">
      <h2 className="playfair text-5xl font-bold mb-4">Work Experience</h2>
      <div className="accent-line mb-12"></div>
      <div className="space-y-8">
        {data.map((exp, index) => (
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
  );
};

export default Experience;