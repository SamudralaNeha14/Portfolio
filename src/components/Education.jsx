import { Calendar } from 'lucide-react';

const Education = ({ data }) => {
  return (
    <div className="max-w-4xl">
      <h2 className="playfair text-5xl font-bold mb-4">Education</h2>
      <div className="accent-line mb-12"></div>
      <div className="space-y-8">
        {data.map((edu, index) => (
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
              {/* {edu.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-400">
                  <ChevronRight size={18} className="mt-1 text-violet-400 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))} */}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;