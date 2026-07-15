'use client'

import Image from 'next/image'
import Link from 'next/link'
import ServiceCards from '@/app/components/ServiceCard'
import { CheckCircle, CloudCog, FileLock, Globe2, Network, ShieldCheck, Users } from 'lucide-react'

export default function GCCConsultingPage() {
  const capabilities = [
    {
      icon: <Globe2 className="w-6 h-6 text-emerald-600" />,
      title: 'GCC Operating Model',
      points: [
        'Capability center roadmap and phased setup',
        'Governance, ownership, and escalation structure',
        'Delivery metrics, reporting cadence, and controls',
      ],
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: 'Team Structure & Execution',
      points: [
        'Role design for product, cloud, data, and support teams',
        'Remote onboarding, workflows, and collaboration rituals',
        'Embedded architects for parallel execution support',
      ],
    },
    {
      icon: <CloudCog className="w-6 h-6 text-indigo-600" />,
      title: 'Cloud, Data & Platform Setup',
      points: [
        'Cloud landing zones and secure environments',
        'Data platform, DevOps, and automation foundations',
        'Cost visibility and scalable infrastructure patterns',
      ],
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-600" />,
      title: 'Security & Compliance Readiness',
      points: [
        'Access controls, audit trails, and delivery governance',
        'NDA-driven remote execution practices',
        'Compliance-aligned documentation and handover',
      ],
    },
  ]

  return (
    <main className="bg-white text-gray-800">
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              GCC Setup & Remote Delivery Consulting
            </h1>
            <p className="text-lg text-gray-200 mb-4">
              Build a Global Capability Center that is structured, secure, cost-effective, and ready to scale.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              We help organizations define the operating model, technical foundation, team structure, governance, and automation roadmap needed to run distributed engineering and operations with confidence.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/banners/enterprise.jpg"
              alt="GCC Consulting"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">What We Help You Build</h2>
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
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why Teams Choose Us for GCC Setup</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {[
              'Enterprise-grade governance with startup-level execution speed',
              'Remote-native delivery model with clear ownership and reporting',
              'Architecture, DevOps, data, and operations expertise under one roof',
              'Cost-conscious setup that avoids heavy full-time overhead too early',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="text-green-600 w-5 h-5 mt-1 shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Secure, Governed, and Measurable</h2>
          <p className="text-gray-600 mb-6">
            We define the controls, documentation, and reporting layers needed for leadership visibility while keeping teams focused on execution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-700 text-sm">
            <div className="flex items-center gap-2"><FileLock className="w-5 h-5 text-green-600" /> Access governance</div>
            <div className="flex items-center gap-2"><Network className="w-5 h-5 text-blue-600" /> Distributed delivery</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-purple-600" /> Compliance support</div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white border-gray-300 mb-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">Our Expertise</h2>
          <ServiceCards />
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-tr from-emerald-900 to-emerald-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your GCC?</h2>
          <p className="mb-6">
            We can help define the roadmap, team model, governance, and platform foundation.
          </p>
          <Link
            href="/request-callback?service=gcc-consulting"
            className="inline-flex items-center px-8 py-3 rounded-full bg-white text-emerald-800 hover:bg-emerald-50 transition font-semibold"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </main>
  )
}
