'use client'

import Image from 'next/image'
import Link from 'next/link'
import ServiceCards from '@/app/components/ServiceCard'
import { Bot, CheckCircle, ClipboardList, Cpu, GitBranch, ShieldCheck, Workflow, Zap } from 'lucide-react'

export default function AIAutomationPage() {
  const capabilities = [
    {
      icon: <Workflow className="w-6 h-6 text-cyan-600" />,
      title: 'Workflow Discovery & Redesign',
      points: [
        'Identify repetitive, manual, and approval-heavy processes',
        'Map workflow owners, systems, inputs, and exception paths',
        'Prioritize automation by ROI, risk, and implementation effort',
      ],
    },
    {
      icon: <Bot className="w-6 h-6 text-blue-600" />,
      title: 'AI Agents & Assistants',
      points: [
        'Internal assistants for support, operations, and knowledge search',
        'Human-in-the-loop review for sensitive decisions',
        'Prompt, tool, and retrieval design for reliable outputs',
      ],
    },
    {
      icon: <GitBranch className="w-6 h-6 text-indigo-600" />,
      title: 'API & System Automation',
      points: [
        'Connect CRMs, databases, cloud services, and internal tools',
        'Automate handoffs, notifications, reports, and approvals',
        'Build auditable workflows with logs and rollback paths',
      ],
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-purple-600" />,
      title: 'Reporting & Governance',
      points: [
        'Dashboards for automation performance and exceptions',
        'Cost, quality, and cycle-time measurement',
        'Security controls, access rules, and documentation',
      ],
    },
  ]

  return (
    <main className="bg-white text-gray-800">
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              AI Automation Consulting
            </h1>
            <p className="text-lg text-gray-200 mb-4">
              Convert repetitive work into intelligent, measurable, and secure automated workflows.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              We help startups and enterprises use AI agents, workflow automation, integrations, and reporting systems to reduce manual effort while keeping humans in control where judgment matters.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/it-development/ai-powered.jpg"
              alt="AI Automation Consulting"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">What We Automate</h2>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-10">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Automation Roadmap',
                desc: 'A clear priority list of workflows, owners, integrations, risks, and measurable outcomes.',
              },
              {
                title: 'Embedded Build Support',
                desc: 'We design and implement automation like a remote extension of your engineering or operations team.',
              },
              {
                title: 'Control & Visibility',
                desc: 'Logs, dashboards, review steps, and documentation so automation stays reliable after launch.',
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
          <h2 className="text-3xl font-bold mb-10">Why Choose Us for AI Automation?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {[
              'Process-first approach before choosing tools or models',
              'Practical AI with human review for high-risk steps',
              'Cloud, API, data, and reporting experience in one team',
              'Automation built for measurable business outcomes',
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
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Reliable AI, Not Black-Box Automation</h2>
          <p className="text-gray-600 mb-6">
            We build with access controls, fallback paths, audit logs, and review checkpoints so teams can trust automation in daily operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-700 text-sm">
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-green-600" /> Guardrails</div>
            <div className="flex items-center gap-2"><Cpu className="w-5 h-5 text-blue-600" /> Model-aware design</div>
            <div className="flex items-center gap-2"><Zap className="w-5 h-5 text-cyan-600" /> Faster execution</div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white border-gray-300 mb-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">Our Expertise</h2>
          <ServiceCards />
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-tr from-cyan-900 to-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Smarter?</h2>
          <p className="mb-6">
            We can help identify high-impact workflows and build practical AI automation around them.
          </p>
          <Link
            href="/request-callback?service=ai-automation"
            className="inline-flex items-center px-8 py-3 rounded-full bg-white text-cyan-800 hover:bg-cyan-50 transition font-semibold"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </main>
  )
}
