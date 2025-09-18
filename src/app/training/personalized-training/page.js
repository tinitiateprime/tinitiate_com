// 'use client'

// import Link from 'next/link'
// import {
//   FiUserCheck,
//   FiClock,
//   FiTarget,
//   FiLayers,
//   FiAward,
//   FiBriefcase,
//   FiCalendar,
//   FiCheckCircle,
//   FiPhone
// } from 'react-icons/fi'

// const TRACKS = [
//   'Python',
//   'Java',
//   'Node.js',
//   'C',
//   'C++',
//   'SQL & Databases',
//   'Data Engineering (AWS/Azure)',
//   'DevOps & CI/CD',
//   'Web Full-Stack',
//   'Power BI / Analytics',
// ]

// const FEATURES = [
//   { icon: FiUserCheck, title: 'Tailored Curriculum', desc: 'Plan built around your goals, background, and schedule.' },
//   { icon: FiClock, title: 'Flexible Scheduling', desc: 'Weekday / weekend options, pause & resume when needed.' },
//   { icon: FiLayers, title: 'Hands-on Projects', desc: 'Real-world assignments aligned to industry practices.' },
//   { icon: FiTarget, title: 'Mentor Guidance', desc: '1:1 feedback, code reviews, and interview prep.' },
//   { icon: FiAward, title: 'Assessments & Certs', desc: 'Periodic evaluations and course completion certificate.' },
//   { icon: FiBriefcase, title: 'Career Support', desc: 'Resume, LinkedIn, portfolio & mock interviews.' },
// ]

// const PLANS = [
//   {
//     name: '1:1 Mentorship',
//     tag: 'Best for fast-track learning',
//     points: [
//       'Fully customized path',
//       'Direct mentor access',
//       'Project & code reviews',
//       'Weekly progress check-ins',
//     ],
//   },
//   {
//     name: 'Small Cohort (2–5)',
//     tag: 'Learn together, stay accountable',
//     points: [
//       'Structured roadmap',
//       'Peer learning & pair coding',
//       'Doubt-clearing clinics',
//       'Weekly assignments',
//     ],
//   },
//   {
//     name: 'Corporate Team Plan',
//     tag: 'Outcome-driven for teams',
//     points: [
//       'Manager-aligned objectives',
//       'Capstone on your stack',
//       'Reports & skill tracking',
//       'Onsite/online delivery',
//     ],
//   },
// ]

// export default function PersonalizedTrainingPage() {
//   return (
//     <main className="mx-auto max-w-7xl px-4 py-10 text-gray-800">
//       {/* Hero */}
//       <section className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
//         <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
//           <div>
//             <h1 className="text-3xl font-bold tracking-tight text-gray-900">
//               Personalized Training (1:1 / Small Cohorts)
//             </h1>
//             <p className="mt-2 text-gray-600">
//               Master the skills you need with a tailored curriculum, flexible schedules, and hands-on projects—guided by mentors from TINITIATE Technologies.
//             </p>
//             <div className="mt-5 flex flex-wrap gap-3">
//               <Link
//                 href="/request-callback"
//                 className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
//               >
//                 <FiPhone className="h-4 w-4" />
//                 Request a Callback
//               </Link>
//               <Link
//                 href="/training/new-batches"
//                 className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50 transition"
//               >
//                 <FiCalendar className="h-4 w-4" />
//                 View New Batches
//               </Link>
//             </div>
//           </div>

//           {/* Tracks */}
//           <div className="md:w-[46%]">
//             <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-4">
//               <h2 className="mb-3 text-sm font-semibold text-gray-700">Popular Tracks</h2>
//               <div className="flex flex-wrap gap-2">
//                 {TRACKS.map((t) => (
//                   <span
//                     key={t}
//                     className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="mt-10">
//         <h2 className="mb-4 text-xl font-bold text-gray-900">Why choose Personalized Training?</h2>
//         <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {FEATURES.map(({ icon: Icon, title, desc }) => (
//             <li key={title} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition">
//               <div className="flex items-start gap-3">
//                 <div className="grid h-10 w-10 place-items-center rounded-xl bg-gray-50 ring-1 ring-gray-100">
//                   <Icon className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
//                   <p className="mt-1 text-sm text-gray-600">{desc}</p>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Plans */}
//       <section className="mt-10">
//         <h2 className="mb-4 text-xl font-bold text-gray-900">Plans that fit your goals</h2>
//         <div className="grid gap-4 md:grid-cols-3">
//           {PLANS.map((plan) => (
//             <div key={plan.name} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition">
//               <div className="mb-2 text-sm font-semibold text-blue-600">{plan.tag}</div>
//               <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
//               <ul className="mt-4 space-y-2">
//                 {plan.points.map((p) => (
//                   <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
//                     <FiCheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
//                     {p}
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-5">
//                 <Link
//                   href="/request-callback"
//                   className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
//                 >
//                   Get Study Plan
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* How it works */}
//       <section className="mt-10">
//         <h2 className="mb-4 text-xl font-bold text-gray-900">How it works</h2>
//         <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           {[
//             { step: 'Discovery Call', desc: 'Understand goals, timeline and current level.' },
//             { step: 'Personalized Plan', desc: 'Curriculum & schedule mapped to your needs.' },
//             { step: 'Weekly Sessions', desc: 'Instructor-led live classes & hands-on labs.' },
//             { step: 'Project & Review', desc: 'Capstone, evaluations & certificate.' },
//           ].map((s, i) => (
//             <li key={s.step} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
//               <div className="text-xs font-semibold text-gray-500">STEP {i + 1}</div>
//               <div className="mt-1 text-sm font-bold text-gray-900">{s.step}</div>
//               <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
//             </li>
//           ))}
//         </ol>
//       </section>

//       {/* FAQ */}
//       <section className="mt-10">
//         <h2 className="mb-4 text-xl font-bold text-gray-900">FAQ</h2>
//         <div className="grid gap-4 md:grid-cols-2">
//           {[
//             {
//               q: 'Can I switch tracks later?',
//               a: 'Yes. We can realign your plan during review—no extra charges for scope adjustments within your tenure.',
//             },
//             {
//               q: 'Do you offer recordings & materials?',
//               a: 'Yes. Sessions can be recorded and materials, labs and notes are shared via the portal.',
//             },
//             {
//               q: 'What if I miss a class?',
//               a: 'We provide a backup slot or a recap session depending on your plan and availability.',
//             },
//             {
//               q: 'Is there a certificate?',
//               a: 'Yes. You receive a TINITIATE completion certificate after evaluations.',
//             },
//           ].map(({ q, a }) => (
//             <div key={q} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
//               <div className="text-sm font-semibold text-gray-900">{q}</div>
//               <p className="mt-1 text-sm text-gray-600">{a}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="mt-10">
//         <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 text-blue-900">
//           <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
//             <div>
//               <h3 className="text-lg font-bold">Ready for your personalized study plan?</h3>
//               <p className="text-sm text-blue-800/80">Tell us your goals—career switch, upskilling, or interview prep—and we’ll map the path.</p>
//             </div>
//             <div className="flex gap-3">
//               <Link
//                 href="/request-callback"
//                 className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
//               >
//                 <FiPhone className="h-4 w-4" />
//                 Talk to an Advisor
//               </Link>
//               <Link
//                 href="/training/online-training"
//                 className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50 transition"
//               >
//                 Explore Online Training
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }













// 'use client'

// import Link from 'next/link'
// import {
//   FiUserCheck,
//   FiClock,
//   FiTarget,
//   FiLayers,
//   FiAward,
//   FiBriefcase,
//   FiCalendar,
//   FiCheckCircle,
//   FiPhone
// } from 'react-icons/fi'
// import {
//   SiPython,
//   SiJava,
//   SiNodedotjs,
//   SiC,         // might be undefined on older react-icons
//   SiCplusplus, // might be undefined on older react-icons
// } from 'react-icons/si'

// // ---- SAFE ICON FALLBACK ----
// function SafeIcon({ Icon, label, className = '' }) {
//   if (Icon) return <Icon className={className} aria-hidden />
//   // graceful fallback if the icon import is missing
//   return (
//     <span
//       className={`inline-flex items-center justify-center font-semibold text-xs text-gray-700 ${className}`}
//       aria-label={label}
//       title={label}
//     >
//       {label.slice(0, 3)}
//     </span>
//   )
// }

// // Course logos for the "Courses we offer" section
// const COURSES = [
//   { key: 'python', name: 'Python', href: '/training/python', Icon: SiPython, color: 'text-amber-500' },
//   { key: 'java',   name: 'Java',   href: '/training/java',   Icon: SiJava,   color: 'text-violet-500' },
//   { key: 'nodejs', name: 'Node.js',href: '/training/nodejs', Icon: SiNodedotjs, color: 'text-emerald-600' },
//   { key: 'c',      name: 'C',      href: '/training/c',      Icon: SiC,      color: 'text-indigo-600' },
//   { key: 'cpp',    name: 'C++',    href: '/training/cpp',    Icon: SiCplusplus, color: 'text-blue-600' },
// ]

// const TRACKS = [
//   'Python','Java','Node.js','C','C++','SQL & Databases','Data Engineering (AWS/Azure)',
//   'DevOps & CI/CD','Web Full-Stack','Power BI / Analytics',
// ]

// const FEATURES = [
//   { icon: FiUserCheck, title: 'Tailored Curriculum', desc: 'Plan built around your goals, background, and schedule.' },
//   { icon: FiClock,     title: 'Flexible Scheduling', desc: 'Weekday / weekend options, pause & resume when needed.' },
//   { icon: FiLayers,    title: 'Hands-on Projects',   desc: 'Real-world assignments aligned to industry practices.' },
//   { icon: FiTarget,    title: 'Mentor Guidance',     desc: '1:1 feedback, code reviews, and interview prep.' },
//   { icon: FiAward,     title: 'Assessments & Certs', desc: 'Periodic evaluations and course completion certificate.' },
//   { icon: FiBriefcase, title: 'Career Support',      desc: 'Resume, LinkedIn, portfolio & mock interviews.' },
// ]

// const PLANS = [
//   {
//     name: '1:1 Mentorship',
//     tag: 'Best for fast-track learning',
//     points: ['Fully customized path','Direct mentor access','Project & code reviews','Weekly progress check-ins'],
//   },
//   {
//     name: 'Small Cohort (2–5)',
//     tag: 'Learn together, stay accountable',
//     points: ['Structured roadmap','Peer learning & pair coding','Doubt-clearing clinics','Weekly assignments'],
//   },
//   {
//     name: 'Corporate Team Plan',
//     tag: 'Outcome-driven for teams',
//     points: ['Manager-aligned objectives','Capstone on your stack','Reports & skill tracking','Onsite/online delivery'],
//   },
// ]

// export default function PersonalizedTrainingPage() {
//   return (
//     <main className="mx-auto max-w-7xl px-4 py-10 text-gray-800">
//       {/* Hero */}
//       <section className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
//         <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
//           <div>
//             <h1 className="text-3xl font-bold tracking-tight text-gray-900">
//               Personalized Training (1:1 / Small Cohorts)
//             </h1>
//             <p className="mt-2 text-gray-600">
//               Master the skills you need with a tailored curriculum, flexible schedules, and hands-on projects—guided by mentors from TINITIATE Technologies.
//             </p>
//             <div className="mt-5 flex flex-wrap gap-3">
//               <Link
//                 href="/request-callback"
//                 className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
//               >
//                 <FiPhone className="h-4 w-4" />
//                 Request a Callback
//               </Link>
//               <Link
//                 href="/training/new-batches"
//                 className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50 transition"
//               >
//                 <FiCalendar className="h-4 w-4" />
//                 View New Batches
//               </Link>
//             </div>
//           </div>

//           {/* Tracks (chips) */}
//           <div className="md:w-[46%]">
//             <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-4">
//               <h2 className="mb-3 text-sm font-semibold text-gray-700">Popular Tracks</h2>
//               <div className="flex flex-wrap gap-2">
//                 {TRACKS.map((t) => (
//                   <span
//                     key={t}
//                     className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Courses we offer (logo grid) */}
//       <section className="mt-10">
//         <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
//           Courses we offer
//         </h2>
//         <p className="mt-1 text-gray-600">Choose from our most popular programs below.</p>

//         <ul className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
//           {COURSES.map(({ key, name, href, Icon, color }) => (
//             <li key={key}>
//               <Link
//                 href={href}
//                 className="group block rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition
//                            hover:-translate-y-0.5 hover:shadow-md"
//               >
//                 <div className="flex items-center gap-4">
//                   <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gray-50 ring-1 ring-gray-100">
//                     <SafeIcon Icon={Icon} label={name} className={`h-8 w-8 ${color}`} />
//                   </div>
//                   <div>
//                     <div className="text-base font-semibold leading-tight group-hover:text-blue-600">
//                       {name}
//                     </div>
//                     <div className="text-xs text-gray-500 mt-0.5">Explore syllabus</div>
//                   </div>
//                 </div>
//                 <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
//                 <div className="mt-3 flex items-center gap-2 text-sm text-blue-600">
//                   View details <span className="transition-transform group-hover:translate-x-0.5">›</span>
//                 </div>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Features */}
//       <section className="mt-10">
//         <h2 className="mb-4 text-xl font-bold text-gray-900">Why choose Personalized Training?</h2>
//         <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {FEATURES.map(({ icon: Icon, title, desc }) => (
//             <li key={title} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition">
//               <div className="flex items-start gap-3">
//                 <div className="grid h-10 w-10 place-items-center rounded-xl bg-gray-50 ring-1 ring-gray-100">
//                   <Icon className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
//                   <p className="mt-1 text-sm text-gray-600">{desc}</p>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Plans */}
//       <section className="mt-10">
//         <h2 className="mb-4 text-xl font-bold text-gray-900">Plans that fit your goals</h2>
//         <div className="grid gap-4 md:grid-cols-3">
//           {PLANS.map((plan) => (
//             <div key={plan.name} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition">
//               <div className="mb-2 text-sm font-semibold text-blue-600">{plan.tag}</div>
//               <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
//               <ul className="mt-4 space-y-2">
//                 {plan.points.map((p) => (
//                   <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
//                     <FiCheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
//                     {p}
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-5">
//                 <Link
//                   href="/request-callback"
//                   className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
//                 >
//                   Get Study Plan
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* How it works */}
//       <section className="mt-10">
//         <h2 className="mb-4 text-xl font-bold text-gray-900">How it works</h2>
//         <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           {[
//             { step: 'Discovery Call', desc: 'Understand goals, timeline and current level.' },
//             { step: 'Personalized Plan', desc: 'Curriculum & schedule mapped to your needs.' },
//             { step: 'Weekly Sessions', desc: 'Instructor-led live classes & hands-on labs.' },
//             { step: 'Project & Review', desc: 'Capstone, evaluations & certificate.' },
//           ].map((s, i) => (
//             <li key={s.step} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
//               <div className="text-xs font-semibold text-gray-500">STEP {i + 1}</div>
//               <div className="mt-1 text-sm font-bold text-gray-900">{s.step}</div>
//               <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
//             </li>
//           ))}
//         </ol>
//       </section>

//       {/* FAQ */}
//       <section className="mt-10">
//         <h2 className="mb-4 text-xl font-bold text-gray-900">FAQ</h2>
//         <div className="grid gap-4 md:grid-cols-2">
//           {[
//             { q: 'Can I switch tracks later?', a: 'Yes. We can realign your plan during review—no extra charges for scope adjustments within your tenure.' },
//             { q: 'Do you offer recordings & materials?', a: 'Yes. Sessions can be recorded and materials, labs and notes are shared via the portal.' },
//             { q: 'What if I miss a class?', a: 'We provide a backup slot or a recap session depending on your plan and availability.' },
//             { q: 'Is there a certificate?', a: 'Yes. You receive a TINITIATE completion certificate after evaluations.' },
//           ].map(({ q, a }) => (
//             <div key={q} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
//               <div className="text-sm font-semibold text-gray-900">{q}</div>
//               <p className="mt-1 text-sm text-gray-600">{a}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="mt-10">
//         <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 text-blue-900">
//           <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
//             <div>
//               <h3 className="text-lg font-bold">Ready for your personalized study plan?</h3>
//               <p className="text-sm text-blue-800/80">Tell us your goals—career switch, upskilling, or interview prep—and we’ll map the path.</p>
//             </div>
//             <div className="flex gap-3">
//               <Link
//                 href="/request-callback"
//                 className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
//               >
//                 <FiPhone className="h-4 w-4" />
//                 Talk to an Advisor
//               </Link>
//               <Link
//                 href="/training/online-training"
//                 className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50 transition"
//               >
//                 Explore Online Training
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }












import Link from 'next/link'
import { FiBox, FiPhone } from 'react-icons/fi'
import Image from 'next/image'
import {
  SiPython, SiReact, SiAngular, SiNextdotjs, SiHtml5, SiCss3, SiJavascript,
  SiMysql, SiPostgresql, SiMicrosoftsqlserver, SiPowerbi, SiMicrosoftazure,
  SiDocker, SiKubernetes, SiLinux, SiGit, SiDjango, SiSpring, SiExpress,
  SiDotnet, SiApachespark, SiTableau, SiApachekafka, SiC, SiCplusplus
} from 'react-icons/si'

// -------------------- HERO --------------------
const hero = {
  title: 'Personalized Training, Tailored to You',
  intro:
    'Learn faster with a custom curriculum, flexible scheduling, and hands-on projects—all guided by experienced mentors.',
  image: '/images/banners/personalized-training.jpg',
}

// -------------------- Safe Icon --------------------
// Default safe wrapper for react-icons
function SafeIcon({ Icon, className, label, style }) {
  const Ico = Icon ?? FiBox
  return <Ico className={className} aria-label={label} aria-hidden={!label} style={style} />
}

// -------------------- Devicons --------------------
// Some categories use multi-color Devicon logos instead of simple-icons
// -------------------- Devicons --------------------
const USE_DEVICON = new Set([])  // leave empty or only add real devicon logos
const DEVICON_CLASS = {}


// -------------------- Brand Colors --------------------
// Colors for simple-icons
const BRAND = {
  python: '#3776AB', react: '#61DAFB', angular: '#DD0031', nextjs: '#000000',
  html: '#E34F26', css: '#1572B6', javascript: '#F7DF1E',
  mysql: '#4479A1', postgresql: '#336791', 'sql-server': '#CC2927',
  'power-bi': '#F2C811', azure: '#0078D4', docker: '#2496ED', kubernetes: '#326CE5',
  linux: '#FCC624', git: '#F05032', django: '#092E20', spring: '#6DB33F',
  express: '#000000', dotnet: '#512BD4', spark: '#E25A1C', tableau: '#E97627',
  kafka: '#231F20', c: '#A8B9CC', cpp: '#00599C',
}

// -------------------- Courses --------------------
// NOTE: If no Icon is available, we pass `image` (from /public/images/courses/ folder)
// Example: place `aws.png` inside `public/images/courses/`
// -------------------- Courses --------------------
const COURSES = [
  { key: 'python', name: 'Python', href: '/training/python', Icon: SiPython },

  // Fallback to image
  { key: 'java', name: 'Java', href: '/training/java', Icon: null, image: '/images/courses/java.png' },
  { key: 'nodejs', name: 'Node.js', href: '/training/nodejs', Icon: null, image: '/images/courses/nodejs.png' },
  { key: 'aws', name: 'AWS', href: '/training/aws', Icon: null, image: '/images/courses/aws-devops.png' },

  // React icons available
  { key: 'react', name: 'React', href: '/training/react', Icon: SiReact },

  // Fallback to image for Microsoft tech
  { key: 'power-bi', name: 'Power BI', href: '/training/power-bi', Icon: null, image: '/images/courses/powerbi.png' },
  { key: 'sql-server', name: 'SQL Server', href: '/training/sql-server', Icon: null, image: '/images/courses/sql.png' },

  // The rest can still use icons
  { key: 'mysql', name: 'MySQL', href: '/training/mysql', Icon: SiMysql },
  { key: 'docker', name: 'Docker', href: '/training/docker', Icon: SiDocker },
  { key: 'kubernetes', name: 'Kubernetes', href: '/training/kubernetes', Icon: SiKubernetes },
  { key: 'angular', name: 'Angular', href: '/training/angular', Icon: SiAngular },
  { key: 'azure', name: 'Microsoft Azure', href: '/training/azure', Icon: null, image: '/images/courses/azure.png' },
  { key: 'css', name: 'CSS3', href: '/training/css', Icon: SiCss3 },
  { key: 'django', name: 'Django', href: '/training/django', Icon: SiDjango },
  { key: 'dotnet', name: '.NET', href: '/training/dotnet', Icon: null, image: '/images/courses/dotnet.png' },
  { key: 'express', name: 'Express.js', href: '/training/express', Icon: SiExpress },
  { key: 'git', name: 'Git & GitHub', href: '/training/git', Icon: SiGit },
  { key: 'html', name: 'HTML5', href: '/training/html', Icon: SiHtml5 },
  { key: 'javascript', name: 'JavaScript', href: '/training/javascript', Icon: SiJavascript },
  { key: 'linux', name: 'Linux', href: '/training/linux', Icon: SiLinux },
  { key: 'nextjs', name: 'Next.js', href: '/training/nextjs', Icon: SiNextdotjs },
  { key: 'postgresql', name: 'PostgreSQL', href: '/training/postgresql', Icon: SiPostgresql },
  { key: 'spark', name: 'Apache Spark', href: '/training/spark', Icon: SiApachespark },
  { key: 'spring', name: 'Spring', href: '/training/spring', Icon: SiSpring },
  { key: 'tableau', name: 'Tableau', href: '/training/tableau', Icon: SiTableau },
  { key: 'kafka', name: 'Apache Kafka', href: '/training/apache-kafka', Icon: SiApachekafka },
]


// -------------------- Categories --------------------
const CATEGORIES = [
  { name: 'Web & App Development', color: 'from-indigo-700 to-blue-400', items: ['react', 'angular', 'nextjs', 'express', 'javascript', 'html', 'css'] },
  { name: 'Mobile Development', color: 'from-indigo-700 to-blue-400', items: ['java', 'spring', 'dotnet', 'nodejs', 'c', 'cpp'] },
  { name: 'Databases', color: 'from-indigo-700 to-blue-400', items: ['mysql', 'postgresql', 'sql-server'] },
  { name: 'Cloud & DevOps', color: 'from-indigo-700 to-blue-400', items: ['aws', 'azure', 'docker', 'kubernetes', 'linux', 'git'] },
  { name: 'Data & Analytics', color: 'from-indigo-700 to-blue-400', items: ['python', 'spark', 'kafka', 'power-bi', 'tableau'] },
  { name: 'Frameworks', color: 'from-indigo-700 to-blue-400', items: ['django'] }
]

// -------------------- FAQ --------------------
const FAQ = [
  { q: 'What is Personalized Training?', a: 'A tailored program with flexible scheduling and mentor guidance based on your goals and background.' },
  { q: 'Do you provide recordings & materials?', a: 'Yes. Session recordings (where applicable), labs, and notes are shared through our portal.' },
  { q: 'Can I switch tracks?', a: 'Yes. We can realign your plan during periodic reviews within your enrolled tenure.' },
  { q: 'Is there a certificate?', a: 'Yes. You receive a TINITIATE completion certificate after evaluations.' },
]

// -------------------- Course Icon --------------------
// Priority:
// 1. Devicon (multi-color brand icons)
// 2. React-icons (mono with BRAND colors)
// 3. Image fallback (e.g., /images/courses/aws.png)
// 4. Neutral FiBox (last fallback)
function CourseIcon({ keyName, Icon, image }) {
  // Devicon logos
  if (USE_DEVICON.has(keyName)) {
    return <i className={`${DEVICON_CLASS[keyName]} text-[40px] leading-none`} aria-hidden />
  }

  // React-icon
  if (Icon) {
    return (
      <SafeIcon
        Icon={Icon}
        className="h-10 w-10"
        style={{ color: BRAND[keyName] ?? '#4B5563' }}
      />
    )
  }

  // Image fallback
  if (image) {
    return (
      <Image
        src={image}
        alt={keyName}
        width={40}
        height={40}
        className="h-10 w-10 object-contain"
      />
    )
  }

  // Last fallback (neutral box)
  return <FiBox className="h-10 w-10 text-gray-400" />
}

// -------------------- PAGE --------------------
export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="w-full bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={hero.image}
              alt={hero.title}
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
              className="object-contain rounded-lg"
              priority
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              {hero.title}
            </h1>
            <p className="text-lg text-white mb-3">{hero.intro}</p>
            <Link
              href="/request-callback"
              className="mt-7 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Request a Callback
            </Link>
          </div>
        </div>
      </section>

      {/* MODERN CATEGORY BLOCKS */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl space-y-12">
          <h2 className="text-2xl md:text-4xl text-center font-bold tracking-tight text-black-600 mb-12">
            Course Catalog
          </h2>

          {CATEGORIES.map(cat => (
            <div
              key={cat.name}
              className="rounded-3xl overflow-hidden shadow-md border border-gray-200 bg-white"
            >
              <div className={`px-6 py-4 bg-gradient-to-r ${cat.color}`}>
                <h3 className="text-lg md:text-xl font-bold text-white">{cat.name}</h3>
              </div>
              <div className="p-6">
                <ul className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  {cat.items.map(key => {
                    const course = COURSES.find(c => c.key === key)
                    if (!course) return null
                    const { name, href, Icon, image } = course
                    return (
                    <li key={key}>
                    <Link
                      href={href}
                      className="group block rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm 
                                transition hover:-translate-y-1 hover:shadow-lg hover:bg-white"
                    >
                      <div className="grid place-items-center">
                        <div
                          className="grid h-20 w-20 place-items-center rounded-xl bg-white ring-1 ring-gray-200 
                                    transition group-hover:scale-110 group-hover:ring-blue-400"
                        >
                          {/* NEW: Pass image fallback */}
                          <CourseIcon keyName={key} Icon={Icon} image={image} />
                        </div>
                        <div className="mt-3 text-center text-sm font-medium text-gray-900 group-hover:text-blue-600">
                          {name}
                        </div>
                      </div>
                    </Link>
                  </li>

                    )
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-12 bg-white">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">FAQ</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {FAQ.map(({ q, a }) => (
              <div key={q} className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
                <div className="text-sm font-semibold text-gray-900">{q}</div>
                <p className="mt-1 text-sm text-gray-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h4 className="text-lg font-bold text-gray-900">Want a personalized study plan?</h4>
                <p className="text-sm text-gray-700">
                  Tell us your goals—career switch, upskilling, or interview prep—and we’ll map the path.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/request-callback"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
                >
                  <FiPhone className="h-4 w-4" />
                  Request a Callback
                </Link>
                {/* Uncomment if you want a second CTA button */}
                {/*
                <Link
                  href="/training/online-training"
                  className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50 transition"
                >
                  Explore Online Training
                </Link>
                */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
