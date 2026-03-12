import React from 'react';
import type { AboutData } from '../data/aboutData';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Avatar from "../assets/Avatar.JPG"

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
    <div className="h-screen w-full bg-black flex flex-col lg:flex-row text-white overflow-hidden font-sans">

      {/* LEFT SIDE: Fixed Sidebar (Based on Hamid's Design) */}
      <aside className="w-full lg:w-[480px] p-8 lg:p-20 flex flex-col justify-between items-center lg:items-start border-r border-white/5 bg-black/50 backdrop-blur-sm">
        <div className="flex flex-col items-center lg:items-start space-y-10 w-full">

          {/* Avatar & Location */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
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
                <span className="h-[1px] w-8 bg-gray-800 group-hover:w-16 group-hover:bg-white transition-all duration-500" />
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 pt-10">
          <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"><Github size={22} /></a>
          <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"><Linkedin size={22} /></a>
          <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"><Mail size={22} /></a>
        </div>
      </aside>

      {/* RIGHT SIDE: Content Area */}
      <section className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth bg-[#030303]">
        <div className="max-w-4xl mx-auto px-8 lg:px-24 py-20 lg:py-32 space-y-40">

          {/* Introduction with Hamid's Header Style */}
          <section id="introduction" className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-bold hover:bg-cyan-500/10 transition-colors cursor-pointer group">
              Check my resume <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
          <section id="technical-skills" className="space-y-16 pb-32">
            <h2 className="text-4xl font-bold tracking-tight text-white border-b border-white/5 pb-6">Technical skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.technical.skills.map((skill, i) => (
                <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                  <h3 className="font-bold text-lg text-white mb-6 uppercase tracking-widest text-xs text-cyan-500">{skill.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag, t) => (
                      <span key={t} className="px-4 py-2 rounded-xl bg-white/5 text-[11px] font-bold text-gray-300 border border-white/5 hover:border-cyan-500/50 transition-colors">
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
