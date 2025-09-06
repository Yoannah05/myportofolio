interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}