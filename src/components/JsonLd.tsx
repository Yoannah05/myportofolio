export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Yoannah Rajoelson",
    "jobTitle": "Développeuse Web et Mobile",
    "description": "Développeuse web et mobile passionnée par les technologies modernes, spécialisée en React Native, Spring Boot et Next.js",
    "url": "https://yoannah-portfolio.netlify.app",
    "email": "yoannahrj@gmail.com",
    "telephone": "+261326322334",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Antananarivo",
      "addressCountry": "Madagascar"
    },
    "knowsLanguage": [
      {
        "@type": "Language",
        "name": "Malgache",
        "fluency": "Native"
      },
      {
        "@type": "Language", 
        "name": "Français",
        "fluency": "B2"
      },
      {
        "@type": "Language",
        "name": "Anglais", 
        "fluency": "B2"
      },
      {
        "@type": "Language",
        "name": "Espagnol",
        "fluency": "A2"
      }
    ],
    "knowsAbout": [
      "Développement Web",
      "Développement Mobile", 
      "React Native",
      "Spring Boot",
      "Next.js",
      "JavaScript",
      "Java",
      "Python",
      "Node.js",
      "Vue.js",
      "Angular",
      "MySQL",
      "PostgreSQL",
      "MongoDB"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "IT University Madagascar"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Développeuse Web et Mobile",
      "occupationLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Antananarivo",
          "addressCountry": "Madagascar"
        }
      }
    },
    "sameAs": [
      "https://github.com/Yoannah05",
      "mailto:yoannahrj@gmail.com"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}