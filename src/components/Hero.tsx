import { Mail, Phone, MapPin, Github } from 'lucide-react'

export function Hero() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Disponible pour de nouveaux projets
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Bonjour, je suis{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Yoannah
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
            Développeuse Web et Mobile passionnée par les technologies modernes
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
            Autonome et rigoureuse, je suis convaincue que mes compétences techniques
            et mon esprit d'équipe me permettront d'apporter une réelle valeur ajoutée
            à vos projets.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4 mb-8">
            <a href="mailto:yoannahrj@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Mail size={18} />
              <span>yoannahrj@gmail.com</span>
            </a>
            <a href="tel:+261326322334" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Phone size={18} />
              <span>+261 32 63 223 34</span>
            </a>
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin size={18} />
              <span>Antananarivo, Madagascar</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-medium text-center"
            >
              Voir mes projets
            </a>
            <a
              href="https://github.com/Yoannah05"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-medium text-center flex items-center justify-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>

        {/* Image / Visual */}
        <div className="flex-shrink-0 mt-8 lg:mt-0">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-1">
              <div className="w-full h-full bg-white rounded-full p-4">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                  <div className="text-6xl text-gray-400">👩‍💻</div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg animate-bounce">
              <span className="text-2xl">⚡</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-400 rounded-full p-3 shadow-lg animate-pulse">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}