import React from 'react';
import type { AboutData } from '../data/aboutData';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Avatar from "../assets/avatar.png"

interface AboutProps {
  data: AboutData;
}

const About: React.FC<AboutProps> = ({ data }) => {
  const navItems = [
    { name: "Introduction", id: "introduction" },
    { name: "Work Experience", id: "work-experience" },
    { name: "Studies", id: "studies" },
    { name: "Technical skills", id: "technical-skills" }
  ];

  return (
   <div className="min-h-screen w-full flex flex-col lg:flex-row text-white font-sans overflow-x-hidden">

    <aside className="w-full lg:fixed lg:top-0 lg:left-0 lg:w-120 lg:h-screen p-8 lg:p-20 flex flex-col justify-between items-center lg:items-start border-r border-white/5 bg-black/30 backdrop-blur-sm">
        <div className="flex flex-col items-center lg:items-start space-y-10 w-full">

          {/* Avatar & Location */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <div className="relative group">
               <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
               <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/10">
                 <img src={Avatar} alt="Wali Muhammad" className="w-full h-full object-cover" />
               </div>
            </div>

            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-white">Wali Muhammad</h1>
              <p className="text-gray-400 text-lg mt-1 font-medium">Full-Stack Web Developer</p>
            </div>

            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-400 uppercase tracking-[0.2em]">
              <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
              Rawalpindi, Pakistan
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex flex-col space-y-6 w-full pt-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-bold text-gray-500 hover:text-white transition-all"
              >
                <span className="h-px w-8 bg-gray-800 group-hover:w-16 group-hover:bg-white transition-all duration-500" />
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 pt-10">
          <a href="https://github.com/Itswali" target='blank' className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"><Github size={22} /></a>
          <a href="www.linkedin.com/in/its-wali/" target='blank' className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"><Linkedin size={22} /></a>
          <a href="mailto:luckywali0986@gmail.com" target='blank' className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"><Mail size={22} /></a>
        </div>
      </aside>

      {/* RIGHT SIDE: Content Area */}
      <section className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth lg:ml-120">
        <div className="max-w-4xl mx-auto px-8 lg:px-24 py-20 lg:py-32 space-y-40">

          {/* Introduction*/}
          <section id="introduction" className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-bold hover:bg-cyan-500/10 transition-colors cursor-pointer group">
              <a href="https://drive.google.com/file/d/1EtOtTXFtqn7Vo_HGkYDhZmnW-mJbEUCk/view" target='blank'>Check my resume</a> <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>

            <h1 className="text-7xl font-extrabold tracking-tighter text-white">Wali Muhammad</h1>
            <p className="text-xl text-gray-400 leading-relaxed font-medium max-w-2xl">
              {data.intro.description}
            </p>
          </section>

          {/* Work Experience */}
          <section id="work-experience" className="space-y-16">
            <h2 className="text-4xl font-bold tracking-tight text-white border-b border-white/5 pb-6">Work Experience</h2>
            {data.work.experiences.map((exp, i) => (
              <div key={i} className="group relative space-y-6">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-baseline gap-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.company}</h3>
                  <span className="text-sm text-gray-500 font-mono tracking-tighter">{exp.timeframe}</span>
                </div>
                <p className="text-cyan-500 font-bold uppercase tracking-widest text-xs">{exp.role}</p>
                <ul className="space-y-5">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx} className="text-gray-400 text-base leading-relaxed flex gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/40 mt-2.5 shrink-0" />
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Studies */}
          <section id="studies" className="space-y-16">
             <h2 className="text-4xl font-bold tracking-tight text-white border-b border-white/5 pb-6">Studies</h2>
            <div className="grid gap-12">
              {data.studies.institutions.map((inst, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">{inst.name}</h3>
                  <p className="text-lg text-gray-400 font-medium">{inst.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
<section id="technical-skills" className="space-y-16 pb-32 max-w-4xl">
  <h2 className="text-4xl font-bold tracking-tight text-white border-b border-white/5 pb-6">
    Technical skills
  </h2>

  <div className="flex flex-col gap-12">
    {data.technical.skills.map((skill, i) => (
      <div key={i} className="space-y-4 group">
        {/* Category Title */}
        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
          {skill.title}
        </h3>

        {/* Professional Description */}
        <p className="text-gray-400 leading-relaxed text-lg">
          {skill.description}
        </p>

        {/* Inline Tags */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
  {skill.tags.map((tag, t) => (
    <span
      key={t}
      className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan-500/80"
    >
      {tag.name} {t < skill.tags.length - 1 && "•"}
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
