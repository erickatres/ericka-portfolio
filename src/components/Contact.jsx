import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'name') {
      const sanitizedValue = value.replace(/[^A-Za-z .'-]/g, '')
      setFormData({
        ...formData,
        name: sanitizedValue
      })
      return
    }

    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 relative overflow-hidden">
      {/* Abstract IT-themed background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="mt-4 text-primary-200 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-4 bg-primary-800 rounded-lg text-primary-300">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Email</h3>
                <p className="text-primary-200">erickabrudo2@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-4 bg-primary-800 rounded-lg text-primary-300">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Phone</h3>
                <p className="text-primary-200">+63 951 987 8479</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-4 bg-primary-800 rounded-lg text-primary-300">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Location</h3>
                <p className="text-primary-200">Alaminos City, Pangasinan, Philippines</p>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Let's Connect</h3>
              <p className="text-primary-200 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Feel free to reach out through any of the above channels or fill out the form.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-3d rounded-2xl p-8 backdrop-blur-[1px]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-700 bg-[#111214]/60 px-4 py-3 text-white outline-none transition-all placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-700 bg-[#111214]/60 px-4 py-3 text-white outline-none transition-all placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-gray-700 bg-[#111214]/60 px-4 py-3 text-white outline-none transition-all placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:from-primary-600 hover:to-primary-700 hover:shadow-xl"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
