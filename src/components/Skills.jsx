import React from 'react';

const Skills = ({ data }) => {
  return (
    <div className="max-w-5xl">
      <h2 className="playfair text-5xl font-bold mb-4">Skills</h2>
      <div className="accent-line mb-12"></div>
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(data).map(([category, skills], index) => (
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
  );
};

export default Skills;