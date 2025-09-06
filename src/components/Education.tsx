import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

export function Education() {
  const educationData = [
    {
      degree: 'Licence en Informatique',
      institution: 'IT University Madagascar',
      location: 'Antananarivo, Madagascar',
      period: '2022 - Présent',
      status: 'En cours',
      description: 'Formation complète en développement logiciel, programmation orientée objet, base de données, et gestion de projets informatiques.',
      highlights: [
        'Développement Web & Mobile',
        'Programmation Orientée Objet',
        'Gestion de Base de Données',
        'Gestion de Projets Informatiques'
      ],
      gradient: 'from-blue-500 to-purple-500',
      icon: '🎓'
    },
    {
      degree: 'Baccalauréat Scientifique (Série C)',
      institution: 'Stella Maris La Salle',
      location: 'Toamasina, Madagascar',
      period: '2022',
      status: 'Diplômé',
      description: 'Baccalauréat scientifique avec spécialisation en mathématiques et sciences physiques.',
      highlights: [
        'Mathématiques avancées',
        'Sciences Physiques',
        'Logique et Raisonnement',
        'Méthodologie Scientifique'
      ],
      gradient: 'from-green-500 to-teal-500',
      icon: '🔬'
    },
    {
      degree: 'Baccalauréat Scientifique (Série D)',
      institution: 'God\'s Titan School',
      location: 'Toamasina, Madagascar',
      period: '2021',
      status: 'Diplômé',
      description: 'Baccalauréat scientifique avec spécialisation en sciences naturelles et mathématiques.',
      highlights: [
        'Sciences Naturelles',
        'Biologie',
        'Mathématiques',
        'Méthodes d\'Analyse'
      ],
      gradient: 'from-orange-500 to-red-500',
      icon: '🧬'
    }
  ]

  const certifications = [
    'Développement Web avec JavaScript',
    'Programmation Java Avancée',
    'Développement Mobile React Native',
    'Gestion de Base de Données SQL'
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Formation & Éducation
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un parcours académique solide qui m'a permis d'acquérir les bases théoriques et pratiques du développement informatique
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            <div className="space-y-12">
              {educationData.map((education, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } items-center gap-8`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                    <div className={`w-8 h-8 bg-gradient-to-r ${education.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                      <GraduationCap className="text-white" size={16} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''} ml-12 md:ml-0`}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
                      {/* Header */}
                      <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} mb-4`}>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{education.icon}</span>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            education.status === 'En cours' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {education.status}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {education.degree}
                        </h3>
                        <p className="text-lg font-semibold text-blue-600 mb-2">
                          {education.institution}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{education.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{education.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {education.description}
                      </p>

                      {/* Highlights */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                          Compétences Acquises
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {education.highlights.map((highlight, highlightIndex) => (
                            <span
                              key={highlightIndex}
                              className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Compétences Techniques Développées
              </h3>
              <p className="text-gray-600">
                À travers mes études et projets personnels
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <Award className="text-white" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {cert}
                  </h4>
                  <p className="text-sm text-gray-600">
                    Maîtrisé à travers projets académiques
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Stats */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-2">
                  3+
                </div>
                <div className="text-gray-700 font-medium">
                  Années d'études
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text mb-2">
                  2
                </div>
                <div className="text-gray-700 font-medium">
                  Baccalauréats
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-2">
                  10+
                </div>
                <div className="text-gray-700 font-medium">
                  Projets réalisés
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text mb-2">
                  100%
                </div>
                <div className="text-gray-700 font-medium">
                  Motivation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}