import { Github, ExternalLink, Users, Zap } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: 'IzyGo - Site de Réservation de Bus',
      description: 'Développement des fonctionnalités clés dans un projet d\'équipe pour un système complet de réservation de transport.',
      technologies: ['Spring Boot', 'AngularJS', 'MySQL', 'QR Code API'],
      features: [
        'Système de réservation de places',
        'Gestion des annulations',
        'Génération de QR codes pour les tickets',
        'Système de billetterie électronique'
      ],
      github: 'https://github.com/Kevin-rm/Izygo-project.git',
      demo: null,
      type: 'team',
      gradient: 'from-blue-500 to-cyan-500',
      icon: '🚌'
    },
    {
      title: 'Application Mobile Cryptomonnaie',
      description: 'Application complète de trading de cryptomonnaies avec suivi en temps réel et gestion sécurisée des transactions.',
      technologies: ['React Native', 'Firebase', 'CoinGecko API', 'Redux'],
      features: [
        'Suivi des cours en temps réel',
        'Système de dépôt et retrait',
        'Interface utilisateur intuitive',
        'Gestion sécurisée des transactions'
      ],
      github: 'https://github.com/Yoannah05/Cryptomonnaie-mobile.git',
      demo: null,
      type: 'personal',
      gradient: 'from-purple-500 to-pink-500',
      icon: '₿'
    },
    {
      title: 'Site Vitrine Nerona',
      description: 'Site web institutionnel moderne et responsive avec optimisation des performances et design contemporain.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Netlify'],
      features: [
        'Interface moderne et responsive',
        'Présentation des services',
        'Optimisation des performances',
        'Design mobile-first'
      ],
      github: null,
      demo: 'https://nerona.netlify.app/',
      type: 'personal',
      gradient: 'from-green-500 to-teal-500',
      icon: '🌐'
    },
    {
      title: 'Gestion d\'Atelier de Réparation',
      description: 'Application de gestion complète pour atelier de réparation d\'ordinateurs avec interface administrative avancée.',
      technologies: ['Spring Boot', 'PostgreSQL', 'Thymeleaf', 'Bootstrap'],
      features: [
        'Gestion des réparations d\'ordinateurs',
        'Suivi des interventions',
        'Interface administrative',
        'Leadership d\'équipe'
      ],
      github: 'https://github.com/Yoannah05/Reparation-Ordi.git',
      demo: null,
      type: 'leadership',
      gradient: 'from-orange-500 to-red-500',
      icon: '🔧'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Projets Réalisés
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez une sélection de mes projets académiques et personnels qui démontrent mes compétences techniques
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Project Header */}
                <div className={`bg-gradient-to-r ${project.gradient} p-6 relative overflow-hidden`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{project.icon}</div>
                    <div className="flex gap-2">
                      {project.type === 'team' && <Users className="text-white/80" size={20} />}
                      {project.type === 'leadership' && <Zap className="text-white/80" size={20} />}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 2).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-medium">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white/10 rounded-full"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                      Fonctionnalités Principales
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                      Technologies Utilisées
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                      >
                        <Github size={16} />
                        Code Source
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        Voir le Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Intéressé par mes projets ?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Je suis toujours ouverte à de nouvelles opportunités et collaborations. 
                N'hésitez pas à me contacter pour discuter de vos projets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:yoannahrj@gmail.com"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
                >
                  Discuter d'un projet
                </a>
                <a
                  href="https://github.com/Yoannah05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-medium flex items-center justify-center gap-2"
                >
                  <Github size={20} />
                  Plus de projets
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )