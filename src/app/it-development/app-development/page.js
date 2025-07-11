"use client"

import Image from 'next/image'
import Link from 'next/link'
const serviceData = {
  title: 'App Development Services',
  image: '/images/banners/app-development.jpg', // 🔁 Use your actual image path
  duration: 'Custom Timeline',
  overview:
    'Build cross-platform mobile and web apps tailored to client needs with seamless UX, secure APIs, and scalable architecture.',
  details: [
    'Custom app design and architecture planning',
    'Development using React Native, Flutter, and modern web stacks',
    'API integration with backend services and third-party platforms',
    'CI/CD setup and deployment to App Store/Play Store',
    'End-to-end testing, performance tuning, and versioning'
  ],
  benefits: [
    'Faster time to market with agile iterations',
    'Rich user experiences across devices',
    'Secure and scalable infrastructure',
    'Long-term maintenance and support'
  ]
}

export default function AppDevelopmentPage() {
  return (
    <main className="text-gray-800 bg-white">
      {/* Hero Section with dark background */}
      <section className="relative w-full py-20 px-6 overflow-hidden bg-black">
        {/* Optional background image theme or overlay can go here if needed */}

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

          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              {serviceData.title}
            </h1>
            <p className="text-lg text-white mb-3">{serviceData.overview}</p>
            <p className="text-sm text-white mb-4">
              <strong>Timeline:</strong> {serviceData.duration}
            </p>
            {/* <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
              Request Consultation
            </button> */}
              <Link
             href={`/request-callback/`}
            className="mt-7 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
          >
             Request Consultation
          </Link>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Service Offerings</h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          {serviceData.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </section>

      {/* Benefits Section */}
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
