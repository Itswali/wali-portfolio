import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-full  text-white selection:bg-cyan-500/30 m-0 p-0 overflow-x-hidden">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-32 md:pb-12">
        {/* Profile Pill */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2 px-4 py-1.5 border border-white/10 rounded-full hover:border-white/20 transition-colors cursor-pointer">

            <span className="text-sm font-medium text-gray-300">
              Recent Project | BookHive
            </span>
          </div>
        </div>

        {/* Hero Text */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            Engineering Scalable <br />
            <span className="text-gray-500 italic">Full-Stack Solutions.</span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
            Hi, I'm Wali — a Full-Stack Developer and CS Graduate building high-performance apps with Next.js, TypeScript, and Node.js.
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2 px-4 py-1.5  border border-white/10 rounded-full hover:border-white/20 transition-colors cursor-pointer">

            <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-orange-400 to-purple-500 overflow-hidden" />
            <span className="text-sm font-medium text-gray-300">
              About — Wali Muhammad
            </span>
          </div>
        </div>

        {/* Project Card */}
        {/* <section className="space-y-8">
          <div className="group relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 bg-[#111] cursor-pointer">
            <img
              src="/project-preview.jpg"
              alt="Once UI Preview"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          </div>

          <div className="space-y-4 pt-2">
            <h2 className="text-2xl font-medium tracking-tight">
              Once UI: Open-source design system
            </h2>
            <div className="h-[1px] w-full bg-white/5" />

            <div className="flex items-center justify-between">
              <p className="text-gray-500 text-sm">Case Study — 2024</p>
              <button className="text-sm text-cyan-400 hover:underline">
                Read more →
              </button>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
