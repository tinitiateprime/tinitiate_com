// src/app/it-development/data-engineering/page.jsx
"use client"

import Image from 'next/image'

const serviceData = {
    title: 'Data Engineering Services',
    image: '/images/it-development/data-engineering-2.jpg',
    duration: 'Project Based',
  overview:
    'Design and build scalable data pipelines and warehousing solutions using AWS, Azure, and modern data tools.',
  details: [
    'Real-time and batch data pipelines with Spark, Glue, and Kafka',
    'ETL/ELT workflows across AWS, Azure, Snowflake, and Redshift',
    'Data lake and data warehouse design',
    'Integration with third-party APIs and databases',
    'Monitoring, logging, and alerting for pipeline health'
  ],
  benefits: [
    'Scalable and efficient data processing',
    'Faster business insights through data modeling',
    'Cloud-native optimized architecture',
    'Improved data governance and quality control'
  ]
}

export default function DataEngineeringPage() {
  return (
    <main className="text-gray-800 bg-white">
    {/* Hero Section */}
      <section className="w-full bg-black to-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={serviceData.image}
              alt={serviceData.title}
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>
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

      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Service Offerings</h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          {serviceData.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </section>

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