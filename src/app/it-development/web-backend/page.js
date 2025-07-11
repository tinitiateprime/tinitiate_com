"use client"

import Image from 'next/image'

const serviceData = {
  title: 'Web & Backend Development Services',
  image: '/images/banners/web-backend.jpg', // 🔁 Replace with your actual image path
  duration: 'Project Based or Retainer Model',
  overview:
    'Develop robust, secure, and scalable backend systems and web applications using modern frameworks and APIs tailored to business needs.',
  details: [
    'Custom website and web app development with React, Next.js, and Angular',
    'Backend APIs using Node.js, Express, Django, or Spring Boot',
    'Database modeling and integration with PostgreSQL, MySQL, and MongoDB',
    'Authentication, authorization, and role-based access control (RBAC)',
    'DevOps and deployment on AWS, Azure, or self-managed servers'
  ],
  benefits: [
    'High-performance and secure web platforms',
    'Custom workflows tailored to business logic',
    'Future-ready architecture for scalability',
    'Ongoing support and maintenance options'
  ]
}

export default function WebBackendDevelopmentPage() {
  return (
    <main className="text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="relative w-full py-20 px-6 overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={serviceData.image}
              alt={serviceData.title}
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>

          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              {serviceData.title}
            </h1>
            <p className="text-lg text-white mb-3">{serviceData.overview}</p>
            <p className="text-sm text-white">
              <strong>Timeline:</strong> {serviceData.duration}
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
              Request Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Service Offerings</h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          {serviceData.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Why Choose This Service</h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          {serviceData.benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}
