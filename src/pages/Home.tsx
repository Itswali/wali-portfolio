import Navbar from "../components/Navbar";
import { projects } from "../data/projects"; // Import your projects array
import { Mail, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const featuredProject = projects[1];

  return (
    <div className="min-h-screen w-full text-white selection:bg-cyan-500/30 m-0 p-0 overflow-x-hidden">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-32">
        {/* --- Hero Section --- */}
        <section className="max-w-4xl mx-auto mb-32">
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-2 px-4 py-1.5 border border-white/10 rounded-full hover:border-white/20 transition-colors cursor-pointer bg-white/5">
              <span className="text-sm font-medium text-gray-300">
                Full-Stack Developer & CS Graduate
              </span>
            </div>
          </div>

          <div className="text-center space-y-6 mb-12">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              Engineering Scalable <br />
              <span className="text-gray-500 italic">Full-Stack Solutions.</span>
            </h1>
            <p className="max-w-xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
              Hi, I'm Wali — building high-performance apps with Next.js, TypeScript, and Node.js.
            </p>
          </div>
        </section>

        {/* --- Featured Project Section --- */}
        <section className="max-w-5xl mx-auto mb-32">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Featured Work</h2>
            <Link to="/work" className="text-sm text-cyan-400 hover:underline flex items-center gap-1">
              View All Projects <ArrowRight size={14} />
            </Link>
          </div>

          <div className="group relative bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-white/20 transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-8 items-center">

              <div className="aspect-square md:aspect-video overflow-hidden">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>


              <div className="p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-3 text-xs font-mono text-cyan-400">
                  {featuredProject.infoProject[0]} • {featuredProject.technologies[0]}
                </div>
                <h3 className="text-4xl font-bold">{featuredProject.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {featuredProject.description}
                </p>
                <div className="flex gap-4 pt-4">
                  <a
                    href={featuredProject.linkLiveVersion}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-colors"
                  >
                    View Project <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-white/5 my-24" />

        {/* --- Contact Section --- */}
        <section id="contact" className="max-w-4xl mx-auto pb-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-400">Have a project in mind? Let's build something great together.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm currently looking for new opportunities. My inbox is always open.
              </p>

              <div className="flex items-center gap-4 text-cyan-400">
                <div className="p-3 bg-cyan-400/10 rounded-xl">
                  <a href="mailto:luckywali0986@gmail.com">
                  <Mail size={24} />
                  </a>
                </div>
                <div>
                  <a href="mailto:luckywali0986@gmail.com">
                  <p className="text-xs text-gray-500 uppercase font-bold">Email me at</p>
                  <p className="text-lg">luckywali0986@gmail.com</p>
                </a>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-white"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-white"
              ></textarea>
              <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 group">
                Send Message
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
