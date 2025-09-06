'use client'

import { useState } from 'react'
import { Code, Layers, Database, ToolCase } from 'lucide-react'

export function Skills() {
  const [activeTab, setActiveTab] = useState('languages')

  const skillsData = {
    languages: {
      icon: Code,
      title: 'Langages',
      skills: [
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'TypeScript', level: 75 },
        { name: 'PHP', level: 70 },
        { name: 'C#', level: 65 },
        { name: 'C', level: 60 }
      ]
    },
    frameworks: {
      icon: Layers,
      title: 'Frameworks',
      skills: [
        { name: 'React Native', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Spring Boot', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Vue.js', level: 75 },
        { name: 'Angular.js', level: 70 },
        { name: 'ASP.NET MVC', level: 65 }
      ]
    },
    databases: {
      icon: Database,
      title: 'Base de données',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Microsoft SQL Server', level: 75 },
        { name: 'Oracle Database', level: 70 },
        { name: 'Firebase', level: 85 }
      ]
    },
    tools: {
      icon: ToolCase,
      title: 'Outils & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Netlify', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 70 },
        { name: 'Postman', level: 80 }
      ]
    }
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compétences Techniques
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une expertise technique diversifiée acquise à travers mes études et mes projets personnels
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillsData).map(([key, category]) => {
              const IconComponent = category.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:shadow-md hover:text-blue-600'
                  }`}
                >
                  <IconComponent size={20} />
                  {category.title}
                </button>
              )
            })}
          </div>

          {/* Skills Display */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {skillsData[activeTab as keyof typeof skillsData].skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-sm font-medium text-gray-600">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animation: `slideIn 1s ease-out ${index * 0.1}s both`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Skills Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Objectifs</h3>
              <p className="text-gray-600">
                Développer des solutions innovantes et performantes en utilisant les dernières technologies
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Apprentissage</h3>
              <p className="text-gray-600">
                Toujours en quête de nouveaux défis techniques et de technologies émergentes
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">
                Expérience en travail d'équipe et gestion de projets collaboratifs
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
      `}</style>
    </section>
  )
}