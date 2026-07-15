'use client'

import Image from 'next/image'
import Link from 'next/link'
import ServiceCards from '@/app/components/ServiceCard'
import { Activity, CheckCircle, CloudCog, Database, FileText, Gauge, Headphones, Shield } from 'lucide-react'

export default function ManagedServicesPage() {
  const capabilities = [
    {
      icon: <Activity className="w-6 h-6 text-slate-700" />,
      title: 'Monitoring & Incident Response',
      points: [
        'Application, database, cloud, and job monitoring',
        'Incident triage, root-cause analysis, and response playbooks',
        'Status reporting and operational visibility',
      ],
    },
    {
      icon: <CloudCog className="w-6 h-6 text-blue-600" />,
      title: 'Cloud & DevOps Operations',
      points: [
        'CI/CD maintenance and deployment support',
        'Infrastructure updates, backup checks, and environment hygiene',
        'Cost optimization and resource right-sizing',
      ],
    },
    {
      icon: <Database className="w-6 h-6 text-purple-600" />,
      title: 'Database & Data Platform Support',
      points: [
        'Performance tuning and query optimization',
        'Backup, recovery, migration, and replication support',
        'Warehouse, ETL, and reporting pipeline operations',
      ],
    },
    {
      icon: <Headphones className="w-6 h-6 text-green-600" />,
      title: 'Embedded Remote Support',
      points: [
        'Ongoing expert team for platform reliability',
        'Ticket-based support and planned improvement backlog',
        'Documentation, handover, and knowledge continuity',
      ],
    },
  ]

  return (
    <main className="bg-white text-gray-800">
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Managed Services
            </h1>
            <p className="text-lg text-gray-200 mb-4">
              Keep your platforms stable, monitored, optimized, and ready for continuous improvement.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              We provide remote managed services across cloud, databases, DevOps, reporting, and application support so your team can focus on product and business outcomes while we protect operational continuity.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/banners/devops.jpg"
              alt="Managed Services"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">What We Manage</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {capabilities.map(({ title, icon, points }) => (
              <div key={title} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  {icon}
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Service Model</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Stabilize',
                desc: 'Assess the current system, close operational gaps, and put monitoring and response basics in place.',
              },
              {
                title: 'Operate',
                desc: 'Run ongoing support with clear ownership, ticket flow, reporting, and escalation paths.',
              },
              {
                title: 'Improve',
                desc: 'Continuously optimize performance, cost, reliability, automation, and documentation.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-base">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Our Managed Services?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {[
              'Senior technical support without full-time hiring overhead',
              'Cloud, database, DevOps, and application support in one remote team',
              'Clear reporting, ticket ownership, and continuous improvement rhythm',
              'Security-conscious operations with documented processes and handover',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="text-green-600 w-5 h-5 mt-1 shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Operational Confidence, Delivered Remotely</h2>
          <p className="text-gray-600 mb-6">
            We use defined ticket queues, response workflows, documentation, and periodic reviews so every engagement remains transparent and measurable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-700 text-sm">
            <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-green-600" /> Secure operations</div>
            <div className="flex items-center gap-2"><Gauge className="w-5 h-5 text-blue-600" /> Performance focus</div>
            <div className="flex items-center gap-2"><FileText className="w-5 h-5 text-slate-700" /> Clear reporting</div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white border-gray-300 mb-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">Our Expertise</h2>
          <ServiceCards />
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-tr from-slate-900 to-slate-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Need Reliable Remote Operations?</h2>
          <p className="mb-6">
            We can help stabilize, operate, and improve your cloud, database, DevOps, and platform workloads.
          </p>
          <Link
            href="/request-callback?service=managed-services"
            className="inline-flex items-center px-8 py-3 rounded-full bg-white text-slate-800 hover:bg-slate-100 transition font-semibold"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </main>
  )
}
