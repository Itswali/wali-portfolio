import React from 'react';
import type { AboutData } from '../data/aboutData';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

interface AboutProps {
  data: AboutData;
}

const About: React.FC<AboutProps> = ({ data }) => {
  const navItems = ["Introduction", "Work Experience", "Studies", "Technical Skills"];

  return (
    /* h-screen and overflow-hidden on the parent
       prevents the entire window from scrolling.
    */
    <div className="h-screen w-full flex flex-col lg:flex-row bg-[#0a0a0a] text-white overflow-hidden">

      {/* LEFT SIDE: Fixed Sidebar */}
      <aside className="w-full lg:w-[450px] p-8 lg:p-24 flex flex-col justify-between border-r border-white/5 bg-[#0a0a0a]">
        <div className="space-y-8">
          {/* Profile Header */}
          <div className="space-y-6">
            <div className="w-24 h-24 rounded-full overflow-hidden border border-white/10">
              <img src="/avatar.jpg" alt="Wali Muhammad" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tighter">Wali Muhammad</h1>
              <p className="text-gray-400 mt-2">Full-Stack Web Developer</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest">
              <span className="w-2 h-2 bg-orange-500 rounded-full" />
              Rawalpindi, Pakistan
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block space-y-4 pt-10">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="group flex items-center gap-3 text-sm font-medium text-gray-500 hover:text-white transition-all"
              >
                <span className="h-[1px] w-6 bg-gray-800 group-hover:w-12 group-hover:bg-white transition-all" />
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Social Links at Bottom */}
        <div className="flex gap-4 pt-8">
          <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors"><Mail size={20} /></a>
        </div>
      </aside>

      {/* RIGHT SIDE: Independent Scroll Area */}
      <section className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth">

        <div className="max-w-3xl p-8 lg:p-24 space-y-32">


          {/* Introduction */}
          <section id="introduction" className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter">Wali Muhammad</h1>
            <p className="text-2xl text-gray-300 leading-relaxed font-light">
              {data.intro.description}
            </p>
          </section>

          {/* Work Experience */}
          <section id="work-experience" className="space-y-12">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">{data.work.title}</h2>
            {data.work.experiences.map((exp, i) => (
              <div key={i} className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <span className="text-sm text-gray-600 font-mono">{exp.timeframe}</span>
                </div>
                <p className="text-cyan-400 text-sm">{exp.role}</p>
                <ul className="space-y-4">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx} className="text-gray-400 text-sm leading-relaxed flex gap-3">
                      <span className="text-white/20 mt-1.5">•</span>
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Studies */}
          <section id="studies" className="space-y-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">{data.studies.title}</h2>
            <div className="space-y-8">
              {data.studies.institutions.map((inst, i) => (
                <div key={i}>
                  <h3 className="text-lg font-medium">{inst.name}</h3>
                  <p className="text-gray-400 mt-1">{inst.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section id="technical-skills" className="space-y-12 pb-20">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">{data.technical.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.technical.skills.map((skill, i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                  <h3 className="font-medium text-white mb-4">{skill.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag, t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-mono text-gray-400 border border-white/10">
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </section>
    </div>
  );
};

export default About;
