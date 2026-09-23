import { Github, Linkedin, MessageCircle, Download } from 'lucide-react'
import profileImage from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
      {/* Abstract IT-themed background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(to right, #64748B 1px, transparent 1px),
            linear-gradient(to bottom, #64748B 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-700 rounded-full opacity-[0.18] blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary-600 rounded-full opacity-[0.12] blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-primary-800 rounded-full opacity-[0.16] blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Profile Picture */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="hero-3d relative w-44 h-44 md:w-56 md:h-56 mx-16 my-16 md:mx-24 md:my-20">
              <div className="profile-halo" aria-hidden="true" />

              <div className="relative z-10 w-full h-full rounded-full overflow-hidden bg-primary-950 shadow-[0_25px_50px_rgba(15,23,42,0.6)] border border-primary-400/30">
                <img
                  src={profileImage}
                  alt="Ericka Tresenio Brudo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'flex'
                  }}
                />
                <div className="w-full h-full rounded-full bg-white items-center justify-center hidden">
                  <span className="text-5xl font-bold text-gradient">ETB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text */}
          <div className="text-center md:text-left md:pr-4 order-1 md:order-2">
            <h1 className="text-5xl md:text-7xl font-bold mb-10 text-white">
              Hi, It's Ericka Tresenio Brudo
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Full Stack Developer | Creative Problem Solver | Tech Enthusiast
            </p>

            <div className="flex justify-center md:justify-start space-x-6 mb-12">
              <a
                href="https://www.linkedin.com/in/ericka-tresenio-brudo-1a72302a3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-white"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/erickatres"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-white"
              >
                <Github size={24} />
              </a>
              <a
                href="https://discord.gg/d2RFNvgSQ"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-white"
                aria-label="Discord"
              >
                <MessageCircle size={24} />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <button
                className="px-8 py-3 bg-primary-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-primary-600 transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Hire me
              </button>
              <a
                href="https://ap.wps.com/cms/docs/d/cbCaiuQZ0erkGUGB"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-primary-400 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-primary-800 hover:border-primary-300 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
