import { ExternalLink, Github as GithubIcon } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'BizClear',
      description: 'A business permit processing and inspection tracking system with audit trail management for organized compliance workflows.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Audit Trail'],
      image: 'bg-gradient-to-br from-primary-400 to-primary-700',
      github: '#',
      demo: '#'
    },
    {
      title: 'Travel Go',
      description: 'A travel planning application designed to help users explore destinations, manage trips, and organize travel itineraries easily.',
      technologies: ['React', 'TailwindCSS', 'API Integration'],
      image: 'bg-gradient-to-br from-primary-300 to-primary-600',
      github: '#',
      demo: '#'
    },
    {
      title: 'Derma Scan',
      description: 'A skin analysis and dermatology support tool focused on scanning, tracking, and visual assessment for skin concerns.',
      technologies: ['React', 'UI/UX', 'Healthcare App'],
      image: 'bg-gradient-to-br from-primary-500 to-primary-800',
      github: '#',
      demo: '#'
    },
    {
      title: 'PawSalon',
      description: 'A pet grooming and salon booking platform that helps pet owners schedule services with convenience and clarity.',
      technologies: ['React', 'Booking System', 'Pet Services'],
      image: 'bg-gradient-to-br from-primary-400 to-primary-600',
      github: '#',
      demo: '#'
    },
    {
      title: 'Object Odessey',
      description: 'A game project built around exploration, object collection, and playful interactive challenge mechanics.',
      technologies: ['Game Design', 'JavaScript', 'UI/UX'],
      image: 'bg-gradient-to-br from-primary-500 to-primary-700',
      github: '#',
      demo: '#'
    },
    {
      title: 'NailScape',
      description: 'A nail appointment booking app for salon clients to reserve services, browse styles, and manage bookings seamlessly.',
      technologies: ['React', 'Booking Flow', 'Salon App'],
      image: 'bg-gradient-to-br from-primary-300 to-primary-700',
      github: '#',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 relative overflow-hidden">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-3d rounded-xl overflow-hidden"
            >
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <span className="text-white text-2xl font-bold opacity-80">{project.title}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-700 text-primary-200 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    <GithubIcon size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
