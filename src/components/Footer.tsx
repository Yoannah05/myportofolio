import { Github, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg text-gray-800">Yoannah Rajoelson</h3>
            <p className="text-sm text-gray-600">
              © {currentYear} • Développé avec Next.js & Tailwind CSS
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Yoannah05"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:yoannahrj@gmail.com"
              aria-label="Send an email"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}