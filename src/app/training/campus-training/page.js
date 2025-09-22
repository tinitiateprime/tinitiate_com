"use client"

import Link from "next/link"
import { useMemo } from "react"
import { FiShield, FiUsers, FiTrendingUp, FiBookOpen, FiServer, FiActivity, FiClock, FiPlayCircle, FiCheckCircle, FiLogIn,FiCode, FiMonitor, FiTerminal  } from "react-icons/fi"
import { motion } from "framer-motion"

// Small helpers
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut", delay },
})

const Pill = ({ children }) => (
  <span className="px-3 py-1 rounded-full border border-white/30 bg-white/5 text-white/90 text-sm backdrop-blur">
    {children}
  </span>
)

export default function ClassroomToCodebasePage() {
  const valueProps = useMemo(() => ([
    {
      title: "Industry-Grade Delivery",
      desc: "Remote experts teach, on-site trainers coach. Students build real projects with code reviews and CI/CD.",
      Icon: FiServer,
    },
    {
      title: "Measured & Transparent",
      desc: "Biometric attendance, daily admin reports, weekly KPIs, and recorded masterclasses for revision.",
      Icon: FiActivity,
    },
    {
      title: "Placement-Ready Outcomes",
      desc: "Projects, quizzes, and interview preparation build a portfolio that hiring managers trust.",
      Icon: FiTrendingUp,
    },
  ]), [])

  const programs = useMemo(() => ([
    { title: "Python & Data Engineering", desc: "ETL, SQL, cloud basics, pipelines, and dashboards.", Icon: FiServer },
    { title: "Full-Stack Web", desc: "React/Node, APIs, testing, CI/CD, and deployments.", Icon: FiBookOpen },
    { title: "SQL Server Performance Tuning", desc: "Plans, indexes, Query Store, and wait stats.", Icon: FiActivity },
  ]), [])

  const steps = useMemo(() => ([
    { step: "Step 1", title: "Set Up the Room", desc: "Projector, laptop, audio, and biometric device tested. LMS accounts issued to students." },
    { step: "Step 2", title: "Run the Day", desc: "Attendance → live lecture → guided lab → project work → quiz → check-out." },
    { step: "Step 3", title: "Report & Improve", desc: "Admin daily report + weekly KPIs (attendance, quiz averages, lab completion, at-risk flags)." },
  ]), [])

  return (
    <main className="bg-white text-gray-900">
      {/* Decorative background grid */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(59,130,246,0.20),transparent),radial-gradient(1200px_600px_at_10%_10%,rgba(99,102,241,0.18),transparent)]" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* HERO */}
            <section className="relative w-full bg-gradient-to-br from-gray-950 to-gray-800 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            From Classroom to Codebase
          </h1>
          <p className="mt-4 inline-block rounded-full px-4 py-1 text-sm font-medium bg-indigo-100 text-indigo-700">
            Academia × Industry: Real Projects, Real Impact
          </p>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Empowering the next generation of software engineers — delivered inside your campus with
            live lectures, guided labs, biometric attendance, and masterclasses from reputed instructors.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="#contact"
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Book a Campus Demo
            </Link>
            <Link
              href="#brochure"
              className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition"
            >
              Download Program Brochure
            </Link>
          </div>

          {/* Proof bar */}
          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-white/80">
            <span className="px-3 py-1 rounded-full border border-white/30">
              Biometric-verified attendance
            </span>
            <span className="px-3 py-1 rounded-full border border-white/30">
              On-site admin oversight
            </span>
            <span className="px-3 py-1 rounded-full border border-white/30">
              Live + remote trainers
            </span>
            <span className="px-3 py-1 rounded-full border border-white/30">
              Masterclasses recorded
            </span>
          </div>
        </div>
      </section>
      
      {/* VALUE PROPS */}
       <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="relative text-3xl md:text-4xl font-bold text-gray-900 text-center mb-14 flex justify-center">
            <span className="relative inline-block">
              What You Get
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-blue-500 rounded" />
            </span>
          </h2>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {valueProps.map(({ title, desc, Icon }, i) => (
              <motion.article key={i} {...fadeUp(0.05 * i)} className="relative rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-white p-3 shadow-sm text-indigo-600">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
                  <p className="text-base leading-relaxed text-gray-600">{desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      
      {/* HOW IT WORKS */}
      <section className="py-16 px-6 bg-gray-50/70">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item, i) => (
              <motion.div key={i} className="p-8 rounded-2xl border bg-white shadow-sm" {...fadeUp(0.05 * i)}>
                <div className="text-sm font-medium text-indigo-700">{item.step}</div>
                <h3 className="mt-2 font-semibold text-lg">{item.title}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          {/* <div className="mt-10 max-w-4xl mx-auto">
            <ol className="relative border-s border-indigo-200">
              {[
                { t: "Kickoff & Hardware Check", d: "Week 0", i: FiShield },
                { t: "Curriculum Mapping", d: "Week 1", i: FiBookOpen },
                { t: "Trainer Pod Assigned", d: "Week 1", i: FiUsers },
                { t: "Launch Day", d: "Week 2", i: FiPlayCircle },
                { t: "First KPI Review", d: "Week 3", i: FiTrendingUp },
              ].map(({ t, d, i: Icon }, idx) => (
                <li key={idx} className="ms-6 py-4">
                  <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white ring-4 ring-white">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <h4 className="text-sm font-semibold leading-6 text-gray-900">{t}</h4>
                  <p className="mt-1 text-xs text-gray-600">{d}</p>
                </li>
              ))}
            </ol>
          </div> */}
        </div>
      </section>

      {/* DAILY SCHEDULE */}
 <section className="py-16 px-6 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <header className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
        Daily Schedule (Sample)
      </h2>
      <p className="mt-2 text-gray-600 text-sm">
        A structured day that balances instruction, practice, and assessment.
      </p>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Morning */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h3 className="text-sm font-medium text-gray-500 mb-4">Morning</h3>
        <ul className="space-y-5">
          <li className="flex items-start gap-4">
            <div className="shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
              <FiLogIn className="h-5 w-5" />
            </div>
            <div className="flex items-baseline gap-3 w-full">
              <div className="text-sm font-semibold text-gray-900 min-w-[110px]">09:20–09:30</div>
              <span className="text-gray-400">:</span>
              <div className="text-sm text-gray-700">Biometric check-in</div>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
              <FiMonitor className="h-5 w-5" />
            </div>
            <div className="flex items-baseline gap-3 w-full">
              <div className="text-sm font-semibold text-gray-900 min-w-[110px]">09:30–10:45</div>
              <span className="text-gray-400">:</span>
              <div className="text-sm text-gray-700">Live lecture (on-site / remote)</div>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
              <FiCode className="h-5 w-5" />
            </div>
            <div className="flex items-baseline gap-3 w-full">
              <div className="text-sm font-semibold text-gray-900 min-w-[110px]">11:00–12:15</div>
              <span className="text-gray-400">:</span>
              <div className="text-sm text-gray-700">Guided lab</div>
            </div>
          </li>
        </ul>
      </div>

      {/* Afternoon */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h3 className="text-sm font-medium text-gray-500 mb-4">Afternoon</h3>
        <ul className="space-y-5">
          <li className="flex items-start gap-4">
            <div className="shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
              <FiUsers className="h-5 w-5" />
            </div>
            <div className="flex items-baseline gap-3 w-full">
              <div className="text-sm font-semibold text-gray-900 min-w-[110px]">13:00–14:15</div>
              <span className="text-gray-400">:</span>
              <div className="text-sm text-gray-700">Project work (pairs)</div>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
              <FiClock className="h-5 w-5" />
            </div>
            <div className="flex items-baseline gap-3 w-full">
              <div className="text-sm font-semibold text-gray-900 min-w-[110px]">14:30–15:30</div>
              <span className="text-gray-400">:</span>
              <div className="text-sm text-gray-700">Quiz &amp; review</div>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
              <FiCheckCircle className="h-5 w-5" />
            </div>
            <div className="flex items-baseline gap-3 w-full">
              <div className="text-sm font-semibold text-gray-900 min-w-[110px]">16:00</div>
              <span className="text-gray-400">:</span>
              <div className="text-sm text-gray-700">Check-out + exit survey</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* PROGRAMS */}
     {/* PROGRAMS */}
<section className="py-16 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
      Programs We Deliver
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {programs.map((prog, i) => (
        <motion.article
          key={i}
          className="relative p-8 rounded-3xl bg-white shadow-md hover:shadow-lg transition overflow-hidden"
          {...fadeUp(0.05 * i)}
        >
          <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_120%,#e0e7ff_0deg,transparent_60deg)] opacity-30" />
          <div className="relative flex flex-col gap-4">
            {/* Program header */}
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-indigo-50 p-3 text-indigo-600 shadow-sm">
                <prog.Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">{prog.title}</h3>
            </div>

            {/* Program points with blue ticks */}
            <ul className="space-y-3 mt-2">
              {prog.desc.split(",").map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                  <FiCheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{point.trim()}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>

      {/* MASTERCLASSES */}
      <section className="py-16 px-6 bg-indigo-50/60">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border bg-white p-10 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Masterclasses by Reputed Instructors
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Deep-dive sessions with recordings and notes. Each masterclass includes a short quiz or
              reflection to reinforce learning.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-700">
              <span className="px-3 py-1 rounded-full border">Recorded & shared</span>
              <span className="px-3 py-1 rounded-full border">Moderated Q&A</span>
              <span className="px-3 py-1 rounded-full border">Ties into lab work</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-start mb-6">
            FAQs
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[ 
              { q: "Is this fully on-campus?", a: "Yes—delivered in your classrooms with remote experts joining as needed." },
              { q: "What if internet fails?", a: "We switch to offline lecture + lab packs; attendance is queued and synced later." },
              { q: "Can you customize the syllabus?", a: "Absolutely. We map to department goals and semester timelines." },
              { q: "Do students get certificates?", a: "Yes—based on attendance, assessments, and capstone completion." },
            ].map(({ q, a }, i) => (
              <details key={i} className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm open:shadow-md transition">
                <summary className="cursor-pointer list-none flex items-center justify-between">
                  <span className="text-base font-semibold text-gray-900">{q}</span>
                  <FiCheckCircle className="h-5 w-5 text-indigo-600 opacity-70 group-open:rotate-45 transition-transform" />
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bring industry-grade training to your campus
          </h2>
          <p className="mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
            Schedule a walkthrough, review the timetable, and meet the trainer pod.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#contact"
              className="px-6 py-3 rounded-full bg-white text-blue-700 font-semibold hover:bg-gray-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              Request a Campus Walkthrough
            </Link>
            <Link
              href="#syllabus"
              className="px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-blue-700 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              View Syllabus & Rubrics
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
