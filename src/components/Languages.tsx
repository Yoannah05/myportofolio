import { Globe, Star } from 'lucide-react'
import { SectionHeader } from './SectionHeader'

export function Languages() {
  const languages = [
    {
      name: 'Malgache',
      level: 'Langue maternelle',
      proficiency: 100,
      flag: '🇲🇬',
      description: 'Ma langue natale, parlée couramment dans tous les contextes.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Français',
      level: 'B2 - Avancé',
      proficiency: 85,
      flag: '🇫🇷',
      description: 'Maîtrise avancée pour la communication professionnelle et académique.',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Anglais',
      level: 'B2 - Avancé',
      proficiency: 80,
      flag: '🇬🇧',
      description: 'Niveau avancé, utilisation courante dans le domaine technique.',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      name: 'Espagnol',
      level: 'A2 - Élémentaire',
      proficiency: 45,
      flag: '🇪🇸',
      description: 'Niveau élémentaire, apprentissage en cours d\'amélioration.',
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  const getStars = (proficiency: number) => {
    const fullStars = Math.floor(proficiency / 20)
    const hasHalfStar = proficiency % 20 >= 10
    return { fullStars, hasHalfStar }
  }

  return (
    <section id="languages" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Compétences Linguistiques"
            subtitle="Une communication multilingue pour un environnement de travail international"
          />

          {/* Languages Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {languages.map((language, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${language.gradient} p-6 relative overflow-hidden`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{language.flag}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {language.name}
                        </h3>
                        <p className="text-white/90 font-medium">
                          {language.level}
                        </p>
                      </div>
                    </div>
                    <Globe className="text-white/80 group-hover:rotate-12 transition-transform" size={24} />
                  </div>

                  {/* Progress Bar */}
                  <div className="bg-white/20 rounded-full h-2 mb-2">
                    <div
                      className="bg-white rounded-full h-2 transition-all duration-1000 ease-out"
                      style={{ width: `${language.proficiency}%` }}
                    ></div>
                  </div>
                  <div className="text-white/90 text-sm font-medium">
                    {language.proficiency}% de maîtrise
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white/10 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {language.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}