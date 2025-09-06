import { SectionHeader } from './SectionHeader'

export function About() {
  const stats = [
    { number: '3+', label: "Années d'étude" },
    { number: '10+', label: 'Projets réalisés' },
    { number: '8+', label: 'Technologies maîtrisées' },
    { number: '100%', label: 'Passion' }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="À Propos de Moi" />

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* ... rest of your component JSX is unchanged ... */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Une développeuse passionnée par l'innovation
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Passionnée par les technologies, autonome et rigoureuse, je suis convaincue
                que mes compétences techniques et mon esprit d'équipe me permettront d'apporter
                une réelle valeur ajoutée au sein de votre structure.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Actuellement étudiante en Licence Informatique à l'IT University Madagascar,
                je développe continuellement mes compétences en développement web et mobile,
                avec une approche axée sur les solutions innovantes et performantes.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Spécialisations</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Développement Web
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      Applications Mobile
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Base de Données
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Approche</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      Mobile-First
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                      Performance
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      User Experience
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-700 text-sm font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}