import { User, MapPin, Calendar } from 'lucide-react'
import { useState } from 'react'

export default function About() {
  const [currentPage, setCurrentPage] = useState(0)
  const [showFullText, setShowFullText] = useState(false)

  const whatIDoItems = [
    {
      id: 1,
      title: "Web Development",
      description: "Build responsive and user-friendly web applications",
      details: "I create modern, responsive websites using React, Tailwind CSS, and other cutting-edge technologies to ensure the best user experience across all devices."
    },
    {
      id: 2,
      title: "API Development",
      description: "Design and implement RESTful APIs",
      details: "I develop robust backend services using Node.js, Express, and databases like MongoDB and PostgreSQL to handle data efficiently and securely."
    },
    {
      id: 3,
      title: "Mobile Development",
      description: "Build user-friendly mobile applications",
      details: "I create mobile experiences for Android and cross-platform solutions, focusing on smooth interfaces, responsive features, and clean app architecture."
    },
    {
      id: 4,
      title: "Team Collaboration",
      description: "Collaborate with cross-functional teams",
      details: "I work closely with designers, product managers, and other developers to deliver high-quality solutions that meet business requirements."
    },
    {
      id: 5,
      title: "Performance Optimization",
      description: "Optimize application performance and user experience",
      details: "I implement performance optimization techniques, code splitting, lazy loading, and caching strategies to ensure fast and smooth applications."
    },
    {
      id: 6,
      title: "Continuous Learning",
      description: "Stay updated with latest web technologies",
      details: "I continuously learn and adapt to new technologies, frameworks, and best practices to stay at the forefront of web development."
    }
  ]

  const handleSelect = (index) => {
    if (index === currentPage) return

    setCurrentPage(index)
    setShowFullText(false)
  }

  const currentItem = whatIDoItems[currentPage]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 relative overflow-hidden">
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="transition-all duration-200 ease-out">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hello! I'm Ericka Tresenio Brudo, a passionate developer with a love for creating beautiful 
                and functional web applications. I believe in writing clean, efficient code and continuously 
                learning new technologies to stay at the forefront of web development.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mt-6">
                My journey in tech has been driven by curiosity and a desire to solve real-world problems 
                through innovative solutions. I enjoy collaborating with teams and bringing ideas to life 
                through code.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <a
                href="https://www.facebook.com/ericka.brudo.7/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-3d flex items-center space-x-3 p-4 rounded-lg hover:bg-primary-700 transition-colors duration-300"
              >
                <User className="text-primary-400" size={20} />
                <span className="text-gray-200 font-medium">Ericka Tresenio Brudo</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Alaminos+City+Pangasinan+Philippines"
                target="_blank"
                rel="noopener noreferrer"
                className="card-3d flex items-center space-x-3 p-4 rounded-lg hover:bg-primary-700 transition-colors duration-300"
              >
                <MapPin className="text-primary-400" size={20} />
                <span className="text-gray-200 font-medium">Alaminos City, Pangasinan, Philippines</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl transform rotate-3 opacity-20"></div>
            <div className="relative bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">What I Do</h3>

              <div className="flex flex-wrap gap-3 mb-6">
                {whatIDoItems.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(index)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ease-out ${
                      index === currentPage
                        ? 'border-primary-400 bg-primary-700 text-white shadow-md shadow-primary-900/40'
                        : 'border-primary-600 bg-primary-800/60 text-gray-300 hover:border-primary-400 hover:text-white'
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              <div className="relative min-h-[220px] overflow-hidden">
                <div className="bg-primary-700/50 rounded-xl p-6 border-l-4 border-primary-400 transition-all duration-200 h-full">
                  <h4 className="text-xl font-bold text-white mb-2">{currentItem.title}</h4>
                  <p className="text-gray-200 mb-4">{currentItem.description}</p>

                  <div className="overflow-hidden transition-all duration-200 ease-out">
                    {showFullText && (
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {currentItem.details}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowFullText((prev) => !prev)}
                    className="mt-4 text-sm font-medium text-primary-300 hover:text-white transition-colors"
                  >
                    {showFullText ? 'Read less' : 'Read more'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
