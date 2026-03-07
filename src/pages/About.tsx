import React from 'react';
import type { AboutData } from '../data/aboutData';

interface AboutProps {
  data: AboutData;
}

const About: React.FC<AboutProps> = ({ data }) => {
  // Navigation items based on sections
  const navItems = ["Introduction", "Work Experience", "Studies", "Technical Skills"];

  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 flex gap-20">

      {/* LEFT SIDEBAR: Fixed Navigation */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-32 space-y-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="block text-sm text-gray-500 hover:text-white transition-colors"
            >
              — {item}
            </a>
          ))}
        </div>
      </aside>

      {/* RIGHT SIDEBAR: Content */}
      <div className="flex-1 space-y-24">

        {/* Intro Section */}
        <section id="introduction">
          <h1 className="text-4xl font-bold mb-6">{data.title}</h1>
          <p className="text-xl text-gray-400 leading-relaxed">{data.intro.description}</p>
        </section>

        {/* Work Experience */}
        <section id="work-experience">
          <h2 className="text-xl font-semibold mb-8">{data.work.title}</h2>
          <div className="space-y-12">
            {data.work.experiences.map((exp, i) => (
              <div key={i}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-medium">{exp.company}</h3>
                    <p className="text-cyan-400 text-sm">{exp.role}</p>
                  </div>
                  <span className="text-sm text-gray-500">{exp.timeframe}</span>
                </div>
                <ul className="space-y-3 list-disc list-inside text-gray-400 text-sm">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Studies */}
        <section id="studies">
          <h2 className="text-xl font-semibold mb-8">{data.studies.title}</h2>
          <div className="space-y-6">
            {data.studies.institutions.map((inst, i) => (
              <div key={i}>
                <h3 className="font-medium">{inst.name}</h3>
                <p className="text-sm text-gray-400">{inst.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section id="technical-skills">
          <h2 className="text-xl font-semibold mb-8">{data.technical.title}</h2>
          <div className="space-y-8">
            {data.technical.skills.map((skill, i) => (
              <div key={i}>
                <h3 className="font-medium mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag, t) => (
                    <span key={t} className="px-3 py-1 border border-white/10 rounded-full text-xs">
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
};

export default About;
