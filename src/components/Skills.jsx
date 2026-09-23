import { Code2, Database, Layout, Server, Smartphone, Terminal } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      icon: <Layout size={28} />,
      title: 'Frontend',
      skills: ['React', 'HTML5', 'TailwindCSS', 'JavaScript', 'TypeScript']
    },
    {
      icon: <Server size={28} />,
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'REST APIs']
    },
    {
      icon: <Database size={28} />,
      title: 'Database',
      skills: ['MongoDB', 'MySQL', 'XAMPP', 'Firebase']
    },
    {
      icon: <Code2 size={28} />,
      title: 'Tools',
      skills: ['Git', 'Docker', 'AWS', 'Vite', 'XAMPP']
    },
    {
      icon: <Smartphone size={28} />,
      title: 'Mobile',
      skills: ['React Native', 'Flutter', 'Android App Development', 'iOS App Development']
    },
    {
      icon: <Terminal size={28} />,
      title: 'Other',
      skills: ['Agile', 'Scrum', 'Unit Testing', 'Debugging']
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card-3d rounded-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-primary-700 text-primary-200 rounded-full text-sm font-medium hover:bg-primary-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
