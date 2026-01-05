import Link from 'next/link'
import {
  FiArrowRight,
  FiCheckCircle,
  FiPhone,
  FiUsers,
} from 'react-icons/fi'

// -------------------- HERO --------------------
const HERO = {
  title: 'OPT Training Program for International Students',
  subtitle:
    'Job-ready training for F-1 OPT & STEM OPT students with real projects, mentorship, and interview prep.',
  badge: 'F-1 OPT / STEM OPT Friendly',
}

// -------------------- WHY OPT --------------------
const WHY_OPT = [
  'Job-role focused tracks (not generic tutorials)',
  'Hands-on projects + GitHub-ready portfolio',
  'Assignments with mentor feedback',
  'Resume & LinkedIn optimization',
  'Mock interviews (Technical + HR)',
  'OPT-friendly schedules (evenings / weekends)',
]

// -------------------- TRACKS --------------------
const TRACKS = [
  {
    title: 'Data Engineering (SQL + Python + ETL)',
    points: [
      'Advanced SQL & Python for data',
      'ETL pipelines & data modeling',
      'Capstone data pipeline project',
    ],
  },
  {
    title: 'Cloud Engineering (AWS + Azure)',
    points: [
      'Cloud foundations & IAM security',
      'Deploy, monitor & scale workloads',
      'Real-world cloud project',
    ],
  },
  {
    title: 'Snowflake (SQL + Python + ETL)',
    points: [
      'Snowflake Architecture, SQL Optimization & Python Integration',
      'Advanced SQL Queries & Python-Based Data Processing',
      'Enterprise-Scale ETL Pipelines & Dimensional Data Modeling',
    ],
  },
  {
    title: 'Full Stack Web Development (NEXT JS + POSTGRES + Azure)',
    points: [
        'Full-Stack Web Development (Next.js, PostgreSQL & Azure Cloud)',
        'Cloud Foundations & Identity / Access Management (IAM)',
        'Deploy, Monitor & Scale Cloud-Native Applications'
    ],
  }, 

  {
    title: 'Full Stack Development (Java + React)',
    points: [
      'Spring Boot APIs',
      'React / Next.js frontend',
      'Auth, integrations & deployment',
    ],
  },
  {
    title: 'Analytics (Power BI + SQL)',
    points: [
      'SQL-based reporting',
      'Dashboards & DAX basics',
      'Portfolio-ready analytics project',
    ],
  },
  
]

// -------------------- AI SECTION --------------------
const AI_POINTS = [
  'Faster learning with examples & practice tasks',
  'Code scaffolding & refactoring',
  'Debugging & performance improvements',
  'Project design: schemas, APIs, pipelines',
  'Documentation (README & architecture notes)',
  'Interview prep with AI mock interviews',
  'Responsible AI usage (industry-safe)',
]

// -------------------- FLOW --------------------
const FLOW = [
  'Week 1–2: Fundamentals refresh + tools + assessment',
  'Week 3–6: Track skills + assignments + mini projects',
  'Week 7–10: Capstone project + portfolio polish',
  'Final phase: Resume, LinkedIn & mock interviews',
]

// -------------------- FAQ --------------------
const FAQ = [
  {
    q: 'Can I join if I am already on OPT and working?',
    a: 'Yes. Our schedules are OPT-friendly and designed for working professionals.',
  },
  {
    q: 'Do you guarantee a job?',
    a: 'No job guarantees. We focus on skills, portfolio, and interview readiness.',
  },
  {
    q: 'Is the training remote?',
    a: 'Yes. 100% online with mentor support.',
  },
  {
    q: 'Do you provide immigration or legal advice?',
    a: 'No. Always consult your DSO or immigration attorney.',
  },
]

// -------------------- PAGE --------------------
export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black px-6 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#4f46e5_0,_transparent_55%)] opacity-60" />
        <div className="relative mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1 text-xs text-slate-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {HERO.badge}
          </span>

          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-white">
            {HERO.title}
          </h1>

          <p className="mt-4 max-w-2xl text-slate-200">
            {HERO.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/request-callback"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-600"
            >
              Talk to a Mentor
              <FiArrowRight />
            </Link>
            <Link
              href="/request-callback"
              className="inline-flex items-center gap-2 rounded-full border border-indigo-400/60 bg-slate-900/70 px-6 py-2.5 text-sm text-indigo-100 hover:bg-indigo-500 hover:text-white"
            >
              Request a Callback
              <FiPhone />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY OPT */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Why OPT students choose TINITIATE
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {WHY_OPT.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl bg-white border p-4"
              >
                <FiCheckCircle className="text-emerald-500 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section className="px-6 py-16 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Choose your OPT Track
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {TRACKS.map((track) => (
              <div
                key={track.title}
                className="rounded-2xl border bg-gray-50 p-5"
              >
                <h3 className="font-semibold text-lg mb-3">
                  {track.title}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {track.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <FiCheckCircle className="text-indigo-600 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            How AI helps OPT students
          </h2>
          <p className="text-gray-700 max-w-3xl mb-6">
            AI is a productivity advantage. We teach responsible, industry-safe AI usage to help you learn faster and deliver better.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {AI_POINTS.map((p) => (
              <div key={p} className="flex gap-2 bg-white border p-4 rounded-xl">
                <FiCheckCircle className="text-emerald-500 mt-1" />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section className="px-6 py-16 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Program Flow
          </h2>
          <ul className="space-y-3 text-gray-700">
            {FLOW.map((f) => (
              <li key={f} className="flex gap-2">
                <FiUsers className="text-indigo-600 mt-1" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SAFE NOTE */}
      <section className="px-6 py-10 bg-gray-50">
        <div className="mx-auto max-w-7xl text-sm text-gray-700">
          <strong>OPT / STEM OPT reminder:</strong>  
          We provide career training only. For OPT/STEM OPT rules, filings, and reporting,
          always confirm with your DSO or immigration attorney.
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">FAQs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {FAQ.map(({ q, a }) => (
              <div key={q} className="border rounded-2xl p-5 bg-gray-50">
                <h3 className="font-semibold mb-2">{q}</h3>
                <p className="text-sm text-gray-700">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
