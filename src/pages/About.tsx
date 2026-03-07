import React from 'react';
import { Calendar, GraduationCap, Code2, Briefcase, ShieldCheck, CheckCircle2 } from 'lucide-react';

const AboutPage = ({ data }) => {
  return (
    <main className="max-w-4xl mx-auto px-6 pt-32 pb-20 space-y-24">

      {/* 1. Intro Section */}
      <section className="space-y-6">
        <h2 className="text-xs font-mono text-gray-500 uppercase tracking-widest">
          {data.intro.title}
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          {data.description}
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
          {data.intro.description}
        </p>

        {data.calendar.display && (
          <a
            href={data.calendar.link}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-white/10 transition-colors"
          >
            <Calendar size={16} /> Schedule a call
          </a>
        )}
      </section>

      {/* 2. Technical Skills Grid */}
      <section className="space-y-12">
        <h2 className="text-xs font-mono text-gray-500 uppercase tracking-widest border-b border-white/5 pb-4">
          {data.technical.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {data.technical.skills.map((skill, index) => (
            <div key={index} className="p-6 rounded-3xl bg-[#111] border border-white/5 hover:border-white/10 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/5 rounded-lg text-cyan-400">
                  {/* Dynamic icon mapping placeholder */}
                  <Code2 size={20} />
                </div>
                <h3 className="text-lg font-medium">{skill.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-black rounded-full text-[10px] font-medium text-gray-300 border border-white/5">
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Work Experience */}
      <section className="space-y-12">
        <h2 className="text-xs font-mono text-gray-500 uppercase tracking-widest border-b border-white/5 pb-4">
          {data.work.title}
        </h2>
        <div className="space-y-12">
          {data.work.experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l border-white/10">
              <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[6.5px] top-1.5 ring-4 ring-[#0a0a0a]" />
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-cyan-400 text-sm">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500 mt-1 md:mt-0">{exp.timeframe}</span>
              </div>
              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                    <CheckCircle2 size={16} className="text-gray-600 shrink-0 mt-0.5" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Education */}
      <section className="space-y-12">
        <h2 className="text-xs font-mono text-gray-500 uppercase tracking-widest border-b border-white/5 pb-4">
          {data.studies.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.studies.institutions.map((inst, index) => (
            <div key={index} className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <GraduationCap className="text-gray-500" size={24} />
              <div>
                <h4 className="font-medium">{inst.name}</h4>
                <p className="text-sm text-gray-400">{inst.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default AboutPage;
