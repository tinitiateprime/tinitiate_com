'use client'

import Image from 'next/image'

export default function WorkExperienceProgramPage() {
  return (
    <main className="text-gray-800 bg-white">
      {/* 🏁 Hero Section */}
      <section className="relative w-full py-19 px-6 overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Work Experience Training Program
            </h1>
            <p className="text-lg mb-6">
              Designed to equip individuals with universal IT skills and hands-on experience to secure and sustain employment in today&apos;s competitive environment.
            </p>
            <p className="text-sm opacity-80">
              Conducted both onsite and remotely, this program builds your confidence, professionalism, and technical capabilities through structured guidance and real projects.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full h-64 md:h-80">
            <Image
              src="/images/banners/work-experience.jpg" // 🔁 Replace with actual image path
              alt="Work Experience Banner"
              fill
              className="object-contain md:object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* 🗓️ Program Overview */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">6-Month Work Experience Program</h2>

        <div className="grid gap-10">
          {[
            {
              month: '📅 Month 1 & 2: Training Phase',
              objective: 'Equip participants with the necessary technical skills and knowledge.',
              items: [
                'Technical Skill Development',
                'Workshops & Lectures',
                'Soft Skills Development'
              ]
            },
            {
              month: '🚀 Month 3: Project Onboarding',
              objective: 'Transition from training to real-world project work.',
              items: [
                'Project Introduction',
                'Technology Stack Selection',
                'Team Meetings & Planning'
              ]
            },
            {
              month: '🔧 Month 4: Project Development',
              objective: 'Contribute to core functionality of the project.',
              items: [
                'Core Development',
                'Version Control (Git)',
                'Cross-Team Collaboration'
              ]
            },
            {
              month: '🔍 Month 5: Development & Testing',
              objective: 'Finalize code and conduct complete testing.',
              items: [
                'Code Optimization & Cleanup',
                'Testing & Debugging',
                'Mentor Feedback Sessions'
              ]
            },
            {
              month: '🚀 Month 6: Deployment & Enhancements',
              objective: 'Deploy and maintain your project in a live environment.',
              items: [
                'Deployment to Production',
                'Monitoring & Bug Fixes',
                'Post-deployment Improvements'
              ]
            }
          ].map((phase, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold text-blue-700">{phase.month}</h3>
              <p className="text-gray-700 mb-2">{phase.objective}</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                {phase.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 🎁 Benefits */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">💼 Program Benefits</h2>
          <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6 text-gray-700">
            <li>Hands-on Experience with real-world projects</li>
            <li>Mentorship from seasoned professionals</li>
            <li>Networking with industry experts and peers</li>
            <li>3 Months Payroll from Tinitiate</li>
            <li>Certification upon successful completion</li>
          </ul>
        </div>
      </section>

      {/* 💳 Fee Structure */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">💳 Program Fee</h2>
        <p className="text-gray-700 mb-2">
          The fee covers:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-1">
          <li>Technical and soft skills training during Month 1 & 2</li>
          <li>All project-related resources</li>
          <li>Alumni access & job placement assistance</li>
        </ul>
      </section>
    </main>
  )
}