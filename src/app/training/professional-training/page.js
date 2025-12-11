// import Link from 'next/link'
// import {
//   FiArrowRight,
//   FiClock,
//   FiUsers,
//   FiCheckCircle,
//   FiDatabase,
//   FiCloud,
//   FiCode,
//   FiSmartphone,
//   FiBarChart2,
//   FiCpu,
// } from 'react-icons/fi'
// import {
//   SiOracle,
//   SiMicrosoftsqlserver,
//   SiPostgresql,
//   SiMysql,
//   SiDocker,
//   SiKubernetes,
//   SiGit,
//   SiDjango,
//   SiFlask,
//   SiFastapi,
//   SiSpring,
//   SiApachespark,
//   SiTableau,
//   SiApachekafka,
//   SiGooglecloud,
//   SiReact,
//   SiNextdotjs,
//   SiAngular,
//   SiLangchain,
//   SiHuggingface,
//   SiOpenai,
// } from 'react-icons/si'

// // -------------------- HERO --------------------
// const HERO = {
//   title: 'Professional Training Tracks',
//   subtitle:
//     'Deep-dive programs for working professionals and serious learners in Databases, Cloud, DevOps, Web, Data Engineering, Analytics, and AI.',
//   badge: 'Hands-on, project-driven, enterprise focused',
// }

// // -------------------- TRACKS (Categories) --------------------
// const TRACKS = [
//   {
//     key: 'databases',
//     title: 'Databases & NoSQL',
//     Icon: FiDatabase,
//     color: 'from-emerald-500 to-teal-500',
//     level: 'Intermediate–Advanced',
//     focus: 'For DB developers, backend engineers, and data engineers.',
//   },
//   {
//     key: 'cloud-data-eng',
//     title: 'Cloud Data Engineering',
//     Icon: FiCloud,
//     color: 'from-sky-500 to-indigo-500',
//     level: 'Intermediate–Advanced',
//     focus: 'For data engineers and cloud professionals building data platforms.',
//   },
//   {
//     key: 'cloud-devops',
//     title: 'Cloud & DevOps',
//     Icon: FiCloud,
//     color: 'from-indigo-500 to-purple-500',
//     level: 'Intermediate–Advanced',
//     focus: 'For DevOps engineers, SREs, and infra-focused developers.',
//   },
//   {
//     key: 'web-dev',
//     title: 'Web Development',
//     Icon: FiCode,
//     color: 'from-amber-500 to-orange-500',
//     level: 'Intermediate',
//     focus: 'For web / full stack developers building modern UIs and APIs.',
//   },
//   {
//     key: 'app-dev',
//     title: 'Application Development',
//     Icon: FiSmartphone,
//     color: 'from-pink-500 to-rose-500',
//     level: 'Intermediate',
//     focus: 'For engineers targeting mobile and cross-platform apps.',
//   },
//   {
//     key: 'data-analytics',
//     title: 'Data & Analytics',
//     Icon: FiBarChart2,
//     color: 'from-cyan-500 to-blue-500',
//     level: 'Intermediate–Advanced',
//     focus: 'For analytics engineers, BI developers, and data engineers.',
//   },
//   {
//     key: 'ai',
//     title: 'AI Engineering',
//     Icon: FiCpu,
//     color: 'from-purple-500 to-fuchsia-500',
//     level: 'Intermediate–Advanced',
//     focus: 'For AI/ML engineers and developers building intelligent systems.',
//   },
// ]

// // -------------------- COURSES (Per-course data with icons) --------------------
// const COURSES = [
//   // Databases & NoSQL
//   {
//     key: 'oracle-db',
//     name: 'Oracle',
//     trackKey: 'databases',
//     Icon: SiOracle,
//     tagline: 'PL/SQL, performance tuning, and enterprise database design.',
//   },
//   {
//     key: 'mssql-db',
//     name: 'MS SQL Server',
//     trackKey: 'databases',
//     Icon: 'none',
//     tagline: 'T-SQL, stored procedures, and performance optimization.',
//   },
//   {
//     key: 'postgres-db',
//     name: 'PostgreSQL',
//     trackKey: 'databases',
//     Icon: SiPostgresql,
//     tagline: 'Open-source RDBMS for modern applications and analytics.',
//   },
//   {
//     key: 'mysql-db',
//     name: 'MySQL',
//     trackKey: 'databases',
//     Icon: SiMysql,
//     tagline: 'Relational database backbone for web apps and SaaS.',
//   },
//   {
//     key: 'mongodb-nosql',
//     name: 'MongoDB',
//     trackKey: 'databases',
//     Icon: FiDatabase,
//     tagline: 'Document database for high-scale modern applications.',
//   },
//   {
//     key: 'hadoop-nosql',
//     name: 'Hadoop (Hive / HBase)',
//     trackKey: 'databases',
//     Icon: FiDatabase,
//     tagline: 'Big data storage and querying with Hive & HBase.',
//   },

//   // Cloud Data Engineering
//   {
//     key: 'aws-data-eng',
//     name: 'AWS Data Engineering',
//     trackKey: 'cloud-data-eng',
//     Icon: 'none',
//     tagline: 'Data lakes, ETL pipelines, and analytics on AWS.',
//   },
//   {
//     key: 'azure-data-eng',
//     name: 'Azure Data Engineering',
//     trackKey: 'cloud-data-eng',
//     Icon: 'none',
//     tagline: 'Data Factory, Synapse, and end-to-end pipelines on Azure.',
//   },
//   {
//     key: 'gcp-data-eng',
//     name: 'GCP Data Engineering',
//     trackKey: 'cloud-data-eng',
//     Icon: SiGooglecloud,
//     tagline: 'BigQuery and GCP-native data engineering workflows.',
//   },
//   {
//     key: 'snowflake-data-eng',
//     name: 'Snowflake Data Engineering',
//     trackKey: 'cloud-data-eng',
//     Icon: FiCloud,
//     tagline: 'Cloud data warehousing and ELT on Snowflake.',
//   },
//   {
//     key: 'databricks-data-eng',
//     name: 'Databricks Data Engineering',
//     trackKey: 'cloud-data-eng',
//     Icon: FiCloud,
//     tagline: 'Lakehouse architecture and Spark on Databricks.',
//   },

//   // Cloud & DevOps
//   {
//     key: 'azure-devops',
//     name: 'Azure DevOps',
//     trackKey: 'cloud-devops',
//     Icon: 'none',
//     tagline: 'CI/CD, pipelines, and infra automation in Azure.',
//   },
//   {
//     key: 'aws-devops',
//     name: 'AWS DevOps',
//     trackKey: 'cloud-devops',
//     Icon: 'non',
//     tagline: 'DevOps practices and tooling on AWS.',
//   },
//   {
//     key: 'gcp-devops',
//     name: 'GCP DevOps',
//     trackKey: 'cloud-devops',
//     Icon: SiGooglecloud,
//     tagline: 'Google Cloud-native DevOps and SRE tooling.',
//   },
//   {
//     key: 'terraform',
//     name: 'Terraform',
//     trackKey: 'cloud-devops',
//     Icon: FiCloud,
//     tagline: 'Infrastructure as Code across cloud providers.',
//   },
//   {
//     key: 'jenkins',
//     name: 'Jenkins',
//     trackKey: 'cloud-devops',
//     Icon: FiCloud,
//     tagline: 'CI/CD orchestration with Jenkins pipelines.',
//   },
//   {
//     key: 'docker',
//     name: 'Docker',
//     trackKey: 'cloud-devops',
//     Icon: SiDocker,
//     tagline: 'Containerization and image workflows for apps.',
//   },
//   {
//     key: 'kubernetes',
//     name: 'Kubernetes',
//     trackKey: 'cloud-devops',
//     Icon: SiKubernetes,
//     tagline: 'Container orchestration with Kubernetes clusters.',
//   },
//   {
//     key: 'git',
//     name: 'Git',
//     trackKey: 'cloud-devops',
//     Icon: SiGit,
//     tagline: 'Version control, branching, and team workflows.',
//   },

//   // Web Development
//   {
//     key: 'webservices',
//     name: 'WebServices',
//     trackKey: 'web-dev',
//     Icon: FiCode,
//     tagline: 'REST, HTTP, and API-first backend design.',
//   },
//   {
//     key: 'react-tailwind',
//     name: 'React + Bootstrap/Tailwind',
//     trackKey: 'web-dev',
//     Icon: SiReact,
//     tagline: 'Modern component-driven UIs with React and CSS frameworks.',
//   },
//   {
//     key: 'nextjs-tailwind',
//     name: 'Next.js + Bootstrap/Tailwind',
//     trackKey: 'web-dev',
//     Icon: SiNextdotjs,
//     tagline: 'Full-stack React apps with SSR and routing.',
//   },
//   {
//     key: 'angular',
//     name: 'Angular',
//     trackKey: 'web-dev',
//     Icon: SiAngular,
//     tagline: 'Enterprise single-page applications with Angular.',
//   },
//   {
//     key: 'vue',
//     name: 'Vue',
//     trackKey: 'web-dev',
//     Icon: FiCode,
//     tagline: 'Progressive web apps using Vue.js.',
//   },
//   {
//     key: 'vite',
//     name: 'Vite',
//     trackKey: 'web-dev',
//     Icon: FiCode,
//     tagline: 'Lightning-fast dev bundler for modern frontends.',
//   },
//   {
//     key: 'django',
//     name: 'Django',
//     trackKey: 'web-dev',
//     Icon: SiDjango,
//     tagline: 'Python web apps with ORM, admin, and security.',
//   },
//   {
//     key: 'flask',
//     name: 'Flask',
//     trackKey: 'web-dev',
//     Icon: SiFlask,
//     tagline: 'Lightweight microservices and APIs in Python.',
//   },
//   {
//     key: 'fastapi',
//     name: 'FastAPI',
//     trackKey: 'web-dev',
//     Icon: SiFastapi,
//     tagline: 'High-performance async APIs with Python.',
//   },
//   {
//     key: 'spring',
//     name: 'Spring',
//     trackKey: 'web-dev',
//     Icon: SiSpring,
//     tagline: 'Enterprise Java backends with Spring Framework.',
//   },
//   {
//     key: 'springboot',
//     name: 'Spring Boot',
//     trackKey: 'web-dev',
//     Icon: SiSpring,
//     tagline: 'Production-ready microservices using Spring Boot.',
//   },

//   // Application Development
//   {
//     key: 'mobile-app-dev',
//     name: 'Mobile App Development',
//     trackKey: 'app-dev',
//     Icon: FiSmartphone,
//     tagline: 'End-to-end patterns for mobile app architecture.',
//   },
//   {
//     key: 'rn-ios',
//     name: 'React Native – iOS',
//     trackKey: 'app-dev',
//     Icon: FiSmartphone,
//     tagline: 'Building and testing iOS apps with React Native.',
//   },
//   {
//     key: 'rn-android',
//     name: 'React Native – Android',
//     trackKey: 'app-dev',
//     Icon: FiSmartphone,
//     tagline: 'React Native apps for Android devices.',
//   },

//   // Data & Analytics
//   {
//     key: 'quicksight',
//     name: 'QuickSight',
//     trackKey: 'data-analytics',
//     Icon: FiBarChart2,
//     tagline: 'Cloud-native dashboards with AWS QuickSight.',
//   },
//   {
//     key: 'powerbi',
//     name: 'Power BI',
//     trackKey: 'data-analytics',
//     Icon: FiBarChart2,
//     tagline: 'Business intelligence reports and models with Power BI.',
//   },
//   {
//     key: 'tableau',
//     name: 'Tableau',
//     trackKey: 'data-analytics',
//     Icon: SiTableau,
//     tagline: 'Interactive dashboards and data storytelling.',
//   },
//   {
//     key: 'spark',
//     name: 'Apache Spark',
//     trackKey: 'data-analytics',
//     Icon: SiApachespark,
//     tagline: 'Big data processing with Spark RDDs and DataFrames.',
//   },
//   {
//     key: 'kafka',
//     name: 'Apache Kafka',
//     trackKey: 'data-analytics',
//     Icon: SiApachekafka,
//     tagline: 'Streaming architectures and event-driven systems.',
//   },
//   {
//     key: 'airflow',
//     name: 'Apache Airflow',
//     trackKey: 'data-analytics',
//     Icon: FiBarChart2,
//     tagline: 'Workflow orchestration and pipeline scheduling.',
//   },

//   // AI Engineering
//   {
//     key: 'rag',
//     name: 'RAG',
//     trackKey: 'ai',
//     Icon: FiCpu,
//     tagline: 'Retrieval-Augmented Generation with vector search and LLMs.',
//   },
//   {
//     key: 'mcp',
//     name: 'MCP',
//     trackKey: 'ai',
//     Icon: FiCpu,
//     tagline: 'Model Context Protocol and tool-augmented AI flows.',
//   },
//   {
//     key: 'langchain',
//     name: 'LangChain',
//     trackKey: 'ai',
//     Icon: SiLangchain,
//     tagline: 'LLM apps, chains, and agents using LangChain.',
//   },
//   {
//     key: 'agentic-ai',
//     name: 'Agentic AI',
//     trackKey: 'ai',
//     Icon: FiCpu,
//     tagline: 'Designing multi-step, tool-using AI agents.',
//   },
//   {
//     key: 'openai',
//     name: 'OpenAI',
//     trackKey: 'ai',
//     Icon: SiOpenai,
//     tagline: 'Using OpenAI APIs to build AI products and features.',
//   },
//   {
//     key: 'huggingface',
//     name: 'Hugging Face',
//     trackKey: 'ai',
//     Icon: SiHuggingface,
//     tagline: 'Models, datasets, and pipelines with Hugging Face.',
//   },
// ]

// // -------------------- STEPS & FAQ --------------------
// const STEPS = [
//   {
//     title: 'Profile & Skill-Gap Analysis',
//     text: 'We understand your current role, tech stack, and target role (onsite, remote, product/company, etc.).',
//   },
//   {
//     title: 'Customized Learning Path',
//     text: 'We map your path across Databases, Cloud, DevOps, Web, Data, or AI based on your immediate and long-term goals.',
//   },
//   {
//     title: 'Intensive Hands-on Training',
//     text: 'Real-world projects, case studies, and assignments aligned with industry practices and interview expectations.',
//   },
//   {
//     title: 'Projects, Portfolio & Next Steps',
//     text: 'Create deployable projects, optimize your profile, and plan your next phase—job switch, promotion, or freelancing.',
//   },
// ]

// const FAQ = [
//   {
//     q: 'Who is this Professional Training for?',
//     a: 'Working professionals, final-year students, and serious learners who already know basics and want to move into specialised, high-paying roles.',
//   },
//   {
//     q: 'Can I pick more than one track?',
//     a: 'Yes. Many learners combine tracks such as Cloud Data Engineering + DevOps or Web Development + AI to build a strong profile.',
//   },
//   {
//     q: 'Are the projects real-time and practical?',
//     a: 'Yes. Projects are inspired by real implementations in product companies, startups, and service-based environments.',
//   },
//   {
//     q: 'Will you guide me on what to choose?',
//     a: 'Absolutely. We conduct a counselling call to suggest the exact track and path based on your experience and target role.',
//   },
// ]

// // -------------------- COMPONENTS --------------------
// function TrackCard({ track }) {
//   const { Icon } = track
//   const coursesForTrack = COURSES.filter((c) => c.trackKey === track.key)

//   return (
//     <div
//       className="group relative overflow-hidden rounded-3xl border border-slate-800/50 bg-slate-900/70
//                  p-5 shadow-lg shadow-slate-900/50 transition hover:-translate-y-1 hover:border-indigo-400/80"
//     >
//       {/* Gradient glow */}
//       <div
//         className={`pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b ${track.color} opacity-40 blur-3xl`}
//       />

//       {/* Header */}
//       <div className="relative flex items-start gap-4">
//         <div
//           className="flex h-14 w-14 items-center justify-center rounded-2xl 
//                      bg-slate-950/90 ring-2 ring-slate-700 group-hover:ring-indigo-400 transition"
//         >
//           <Icon className="h-8 w-8 text-white" />
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold text-white">
//             {track.title}
//           </h3>
//           <p className="mt-1 text-xs text-slate-300">
//             {track.level}
//           </p>
//           <p className="mt-1 text-[11px] text-slate-400">
//             {track.focus}
//           </p>
//         </div>
//       </div>

//       {/* Course logos & data */}
//       <div className="relative mt-4 grid grid-cols-2 gap-3">
//         {coursesForTrack.map((course) => {
//           const CourseIcon = course.Icon
//           return (
//             <div
//               key={course.key}
//               className="flex items-center gap-2 rounded-2xl bg-slate-900/80 px-3 py-2 transition group-hover:bg-slate-900"
//             >
//               <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950/80 ring-1 ring-slate-700">
//                 <CourseIcon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
//               </div>
//               <div className="flex-1">
//                 <p className="text-[11px] font-semibold text-slate-100 leading-snug">
//                   {course.name}
//                 </p>
//                 {course.tagline && (
//                   <p className="mt-0.5 text-[10px] text-slate-400">
//                     {course.tagline}
//                   </p>
//                 )}
//               </div>
//             </div>
//           )
//         })}
//       </div>

//       {/* Footer CTA */}
//       <div className="relative mt-5 flex items-center justify-between text-xs">
//         <div className="flex items-center gap-2 text-emerald-300">
//           <FiCheckCircle className="h-4 w-4" />
//           <span>Advanced professional track</span>
//         </div>
//         <Link
//           href="/request-callback"
//           className="inline-flex items-center gap-1 rounded-full bg-indigo-500/90 px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-indigo-600 transition"
//         >
//           Talk about this track
//           <FiArrowRight className="h-3 w-3" />
//         </Link>
//       </div>
//     </div>
//   )
// }

// // -------------------- PAGE --------------------
// export default function Page() {
//   return (
//     <main className="bg-slate-950 text-slate-50">
//       {/* HERO */}
//       <section className="relative overflow-hidden bg-black px-6 py-20">
//         {/* background glow */}
//         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#4f46e5_0,_transparent_55%)] opacity-60" />
//         <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,_#ec4899_0,_transparent_55%)] opacity-40" />
//         <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-10 md:flex-row md:items-center">
//           <div className="flex-1">
//             <span className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200">
//               <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
//               Professional Training • TINITIATE
//             </span>

//             <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
//               {HERO.title}
//             </h1>
//             <p className="mt-4 max-w-xl text-sm md:text-base text-slate-200">
//               {HERO.subtitle}
//             </p>

//             {/* Highlighted domains */}
//             <div className="mt-5 flex flex-wrap gap-2 text-xs md:text-sm">
//               {[
//                 'Databases',
//                 'Cloud Data Engineering',
//                 'Cloud & DevOps',
//                 'Web Development',
//                 'Application Development',
//                 'Data & Analytics',
//                 'AI Engineering',
//               ].map((item) => (
//                 <span
//                   key={item}
//                   className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-slate-100"
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>

//             <div className="mt-8 flex flex-wrap items-center gap-4">
//               <Link
//                 href="/request-callback"
//                 className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-600 transition"
//               >
//                 Schedule a counselling call
//                 <FiArrowRight className="h-4 w-4" />
//               </Link>
//               <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 md:text-sm">
//                 <div className="flex items-center gap-1.5">
//                   <FiClock className="h-4 w-4" />
//                   Weekend & weekday batches
//                 </div>
//                 <div className="flex items-center gap-1.5">
//                   <FiUsers className="h-4 w-4" />
//                   1:1 and small-group options
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right - “Skill Matrix” card */}
//           <div className="relative mt-8 flex-1 md:mt-0">
//             <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-4 shadow-xl shadow-black/60">
//               <div className="flex items-center justify-between text-xs text-slate-300">
//                 <span className="rounded-full bg-slate-900/80 px-3 py-1">
//                   Professional Skill Matrix
//                 </span>
//                 <span>Designed by TINITIATE</span>
//               </div>
//               <div className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-slate-100">
//                 <div className="space-y-1.5">
//                   <p className="font-semibold text-slate-50">Data & Cloud</p>
//                   <p className="rounded-xl bg-slate-900/80 px-3 py-2">
//                     Cloud Data Engineering on <span className="font-semibold">AWS, Azure, GCP</span> with{' '}
//                     <span className="font-semibold">Snowflake & Databricks</span>.
//                   </p>
//                   <p className="rounded-xl bg-slate-900/80 px-3 py-2">
//                     Strong <span className="font-semibold">ETL, pipelines, and orchestration</span> with Airflow.
//                   </p>
//                 </div>
//                 <div className="space-y-1.5">
//                   <p className="font-semibold text-slate-50">Dev, DevOps & AI</p>
//                   <p className="rounded-xl bg-slate-900/80 px-3 py-2">
//                     Modern <span className="font-semibold">Web & App Dev</span> with React, Next.js, Django, FastAPI, Spring.
//                   </p>
//                   <p className="rounded-xl bg-slate-900/80 px-3 py-2">
//                     <span className="font-semibold">DevOps + AI</span> stack: Docker, K8s, Terraform, RAG, LangChain, OpenAI.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* TRACKS + HOW IT WORKS */}
//       <section className="bg-slate-950 px-6 py-16">
//         <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[3fr,2fr]">
//           {/* Tracks grid */}
//           <div>
//             <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
//               Professional training tracks you can choose
//             </h2>
//             <p className="mt-2 text-sm text-slate-300 md:text-base">
//               Pick a single track or design a combined roadmap—for example, Databases + Cloud Data Engineering,
//               or Web Development + AI Engineering.
//             </p>

//             <div className="mt-6 grid gap-5 md:grid-cols-2">
//               {TRACKS.map((track) => (
//                 <TrackCard key={track.key} track={track} />
//               ))}
//             </div>
//           </div>

//           {/* How it works */}
//           <aside className="lg:pl-4">
//             <h3 className="text-xl font-semibold text-white">
//               How Professional Training works
//             </h3>
//             <p className="mt-2 text-sm text-slate-300">
//               Structured like a real project, not just theory classes.
//             </p>

//             <ol className="mt-5 space-y-4">
//               {STEPS.map((step, idx) => (
//                 <li key={step.title} className="flex gap-3">
//                   <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold">
//                     {idx + 1}
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-semibold text-slate-50">
//                       {step.title}
//                     </h4>
//                     <p className="text-xs text-slate-300 md:text-sm">
//                       {step.text}
//                     </p>
//                   </div>
//                 </li>
//               ))}
//             </ol>

//             <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-200 md:text-sm">
//               <p className="font-semibold text-slate-100">
//                 Not sure which track is right for you?
//               </p>
//               <p className="mt-1">
//                 Share your current role, years of experience, and target direction (onsite, salary hike,
//                 product company, remote work, etc.). We’ll suggest a precise combination of tracks.
//               </p>
//             </div>
//           </aside>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="bg-slate-950 px-6 pb-16">
//         <div className="mx-auto max-w-7xl border-t border-slate-800 pt-12">
//           <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
//             <div>
//               <h2 className="text-2xl font-bold text-white md:text-3xl">
//                 Professional training FAQs
//               </h2>
//               <p className="mt-2 text-sm text-slate-300 md:text-base">
//                 If you still have questions, we&apos;re just a callback away.
//               </p>
//             </div>
//             <Link
//               href="/request-callback"
//               className="inline-flex items-center gap-2 rounded-full border border-indigo-400/60 bg-slate-900/70 px-5 py-2 text-sm font-medium text-indigo-100 hover:bg-indigo-500 hover:text-white transition"
//             >
//               Request a Callback
//               <FiArrowRight className="h-4 w-4" />
//             </Link>
//           </div>

//           <div className="mt-8 grid gap-5 md:grid-cols-2">
//             {FAQ.map(({ q, a }) => (
//               <div
//                 key={q}
//                 className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200"
//               >
//                 <div className="mb-2 flex items-center gap-2">
//                   <FiCheckCircle className="h-4 w-4 text-emerald-400" />
//                   <h3 className="font-semibold text-slate-50">{q}</h3>
//                 </div>
//                 <p className="text-xs text-slate-300 md:text-sm">{a}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }


































import Link from 'next/link'
import {
  FiArrowRight,
  FiUsers,
  FiCheckCircle,
  FiDatabase,
  FiCloud,
  FiCode,
  FiSmartphone,
  FiBarChart2,
  FiCpu,
} from 'react-icons/fi'
import {
  SiOracle,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiSpring,
  SiApachespark,
  SiTableau,
  SiApachekafka,
  SiGooglecloud,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiLangchain,
  SiHuggingface,
  SiOpenai,
} from 'react-icons/si'

// -------------------- BRAND COLORS (same idea as other page) --------------------
const BRAND = {
  // Databases
  mysql: '#4479A1',
  postgresql: '#336791',
  'sql-server': '#CC2927',
  oracle: '#DD0031',

  // Cloud / DevOps / Tools
  docker: '#2496ED',
  kubernetes: '#326CE5',
  git: '#F05032',
  gcp: '#4285F4',
  'power-bi': '#F2C811',

  // Web / Frameworks
  react: '#61DAFB',
  nextjs: '#000000',
  angular: '#DD0031',
  django: '#092E20',
  flask: '#000000',
  fastapi: '#009688',
  spring: '#6DB33F',

  // Data / Analytics / Streaming
  spark: '#E25A1C',
  tableau: '#E97627',
  kafka: '#231F20',

  // AI / LLM
  langchain: '#1C3C3C',
  huggingface: '#FFCC4D',
  openai: '#412991',
}

// -------------------- HERO --------------------
const HERO = {
  title: 'Professional Training',
  subtitle:
    'Deep-dive programs for working professionals and serious learners in Databases, Cloud, DevOps, Web, Data Engineering, Analytics, and AI.',
  badge: 'Hands-on, project-driven, enterprise focused',
}

// -------------------- TRACKS (Categories) --------------------
const TRACKS = [
  {
    key: 'databases',
    title: 'Databases & NoSQL',
    Icon: FiDatabase,
    color: 'from-emerald-500 to-teal-500',
    level: 'Intermediate–Advanced',
    focus: 'For DB developers, backend engineers, and data engineers.',
  },
  {
    key: 'cloud-data-eng',
    title: 'Cloud Data Engineering',
    Icon: FiCloud,
    color: 'from-sky-500 to-indigo-500',
    level: 'Intermediate–Advanced',
    focus: 'For data engineers and cloud professionals building data platforms.',
  },
  {
    key: 'cloud-devops',
    title: 'Cloud & DevOps',
    Icon: FiCloud,
    color: 'from-indigo-500 to-purple-500',
    level: 'Intermediate–Advanced',
    focus: 'For DevOps engineers, SREs, and infra-focused developers.',
  },
  // {
  //   key: 'web-dev',
  //   title: 'Web Development',
  //   Icon: FiCode,
  //   color: 'from-amber-500 to-orange-500',
  //   level: 'Intermediate',
  //   focus: 'For web / full stack developers building modern UIs and APIs.',
  // },

    {
    key: 'data-analytics',
    title: 'Data & Analytics',
    Icon: FiBarChart2,
    color: 'from-cyan-500 to-blue-500',
    level: 'Intermediate–Advanced',
    focus: 'For analytics engineers, BI developers, and data engineers.',
  },

  {
  key: 'web-dev-node',
  title: 'Web Development – Node / JS',
  Icon: FiCode,
  color: 'from-amber-500 to-orange-500',
  level: 'Intermediate',
  focus: 'JavaScript / TypeScript stack for modern UIs and APIs.',
},
{
  key: 'web-dev-python',
  title: 'Web Development – Python',
  Icon: FiCode,
  color: 'from-emerald-500 to-teal-500',
  level: 'Intermediate',
  focus: 'Python frameworks for clean, scalable web backends.',
},
{
  key: 'web-dev-java',
  title: 'Web Development – Java',
  Icon: FiCode,
  color: 'from-indigo-500 to-purple-500',
  level: 'Intermediate',
  focus: 'Enterprise web backends using Java and Spring.',
},

  {
    key: 'app-dev',
    title: 'Mobile Application Development',
    Icon: FiSmartphone,
    color: 'from-pink-500 to-rose-500',
    level: 'Intermediate',
    focus: 'For engineers targeting mobile and cross-platform apps.',
  },

  {
    key: 'ai',
    title: 'AI Engineering',
    Icon: FiCpu,
    color: 'from-purple-500 to-fuchsia-500',
    level: 'Intermediate–Advanced',
    focus: 'For AI/ML engineers and developers building intelligent systems.',
  },
]

// -------------------- COURSES (Per-course data with icons) --------------------
// -------------------- COURSES (Per-course data with icons) --------------------
const COURSES = [
  // Databases & NoSQL
  {
    key: 'oracle-db',
    name: 'Oracle',
    trackKey: 'databases',
    Icon: SiOracle,
    brandKey: 'oracle',
    tagline: 'PL/SQL, performance tuning, and enterprise database design.',
  },
  {
    key: 'mssql-db',
    name: 'MS SQL Server',
    trackKey: 'databases',
    Icon: FiDatabase,
    brandKey: 'sql-server',
    tagline: 'T-SQL, stored procedures, and performance optimization.',
  },
  {
    key: 'postgres-db',
    name: 'PostgreSQL',
    trackKey: 'databases',
    Icon: SiPostgresql,
    brandKey: 'postgresql',
    tagline: 'Open-source RDBMS for modern applications and analytics.',
  },
  {
    key: 'mysql-db',
    name: 'MySQL',
    trackKey: 'databases',
    Icon: SiMysql,
    brandKey: 'mysql',
    tagline: 'Relational database backbone for web apps and SaaS.',
  },
  {
    key: 'mongodb-nosql',
    name: 'MongoDB',
    trackKey: 'databases',
    Icon: FiDatabase,
    tagline: 'Document database for high-scale modern applications.',
  },
  {
    key: 'hadoop-nosql',
    name: 'Hadoop (Hive / HBase)',
    trackKey: 'databases',
    Icon: FiDatabase,
    tagline: 'Big data storage and querying with Hive & HBase.',
  },

  // Cloud Data Engineering
  {
    key: 'aws-data-eng',
    name: 'AWS Data Engineering',
    trackKey: 'cloud-data-eng',
    Icon: FiCloud,
    tagline: 'Data lakes, ETL pipelines, and analytics on AWS.',
  },
  {
    key: 'azure-data-eng',
    name: 'Azure Data Engineering',
    trackKey: 'cloud-data-eng',
    Icon: FiCloud,
    tagline: 'Data Factory, Synapse, and end-to-end pipelines on Azure.',
  },
  {
    key: 'gcp-data-eng',
    name: 'GCP Data Engineering',
    trackKey: 'cloud-data-eng',
    Icon: SiGooglecloud,
    brandKey: 'gcp',
    tagline: 'BigQuery and GCP-native data engineering workflows.',
  },
  {
    key: 'snowflake-data-eng',
    name: 'Snowflake Data Engineering',
    trackKey: 'cloud-data-eng',
    Icon: FiCloud,
    tagline: 'Cloud data warehousing and ELT on Snowflake.',
  },
  {
    key: 'databricks-data-eng',
    name: 'Databricks Data Engineering',
    trackKey: 'cloud-data-eng',
    Icon: FiCloud,
    tagline: 'Lakehouse architecture and Spark on Databricks.',
  },
  {
    key: 'onprem-data-eng',
    name: 'On-Prem Data Engineering',
    trackKey: 'cloud-data-eng',
    Icon: FiCloud, // or FiDatabase if you prefer
    tagline: 'Data lakes, ETL, and batch processing on on-prem Hadoop / Spark platforms.',
  },

  // Cloud & DevOps
  {
    key: 'azure-devops',
    name: 'Azure DevOps',
    trackKey: 'cloud-devops',
    Icon: FiCloud,
    tagline: 'CI/CD, pipelines, and infra automation in Azure.',
  },
  {
    key: 'aws-devops',
    name: 'AWS DevOps',
    trackKey: 'cloud-devops',
    Icon: FiCloud,
    tagline: 'DevOps practices and tooling on AWS.',
  },
  {
    key: 'gcp-devops',
    name: 'GCP DevOps',
    trackKey: 'cloud-devops',
    Icon: SiGooglecloud,
    brandKey: 'gcp',
    tagline: 'Google Cloud-native DevOps and SRE tooling.',
  },
  {
    key: 'terraform',
    name: 'Terraform',
    trackKey: 'cloud-devops',
    Icon: FiCloud,
    tagline: 'Infrastructure as Code across cloud providers.',
  },
  {
    key: 'jenkins',
    name: 'Jenkins',
    trackKey: 'cloud-devops',
    Icon: FiCloud,
    tagline: 'CI/CD orchestration with Jenkins pipelines.',
  },
  {
    key: 'docker',
    name: 'Docker',
    trackKey: 'cloud-devops',
    Icon: SiDocker,
    brandKey: 'docker',
    tagline: 'Containerization and image workflows for apps.',
  },
  {
    key: 'kubernetes',
    name: 'Kubernetes',
    trackKey: 'cloud-devops',
    Icon: SiKubernetes,
    brandKey: 'kubernetes',
    tagline: 'Container orchestration with Kubernetes clusters.',
  },
  {
    key: 'git',
    name: 'Git',
    trackKey: 'cloud-devops',
    Icon: SiGit,
    brandKey: 'git',
    tagline: 'Version control, branching, and team workflows.',
  },

  // -------------------- Web Development (split into 3 sections) --------------------

  // 1. Web Development – Node / JS
  {
    key: 'webservices',
    name: 'WebServices',
    trackKey: 'web-dev-node',
    Icon: FiCode,
    tagline: 'REST, HTTP, and API-first backend design.',
  },
  {
    key: 'react-tailwind',
    name: 'React + Bootstrap/Tailwind',
    trackKey: 'web-dev-node',
    Icon: SiReact,
    brandKey: 'react',
    tagline: 'Modern component-driven UIs with React and CSS frameworks.',
  },
  {
    key: 'nextjs-tailwind',
    name: 'Next.js + Bootstrap/Tailwind',
    trackKey: 'web-dev-node',
    Icon: SiNextdotjs,
    brandKey: 'nextjs',
    tagline: 'Full-stack React apps with SSR, routing, and API routes.',
  },
  {
    key: 'angular',
    name: 'Angular',
    trackKey: 'web-dev-node',
    Icon: SiAngular,
    brandKey: 'angular',
    tagline: 'Enterprise single-page applications with Angular.',
  },
  {
    key: 'vue',
    name: 'Vue',
    trackKey: 'web-dev-node',
    Icon: FiCode,
    tagline: 'Progressive web apps using Vue.js.',
  },
  {
    key: 'vite',
    name: 'Vite',
    trackKey: 'web-dev-node',
    Icon: FiCode,
    tagline: 'Lightning-fast dev bundler for modern frontends.',
  },

  // 2. Web Development – Python
  {
    key: 'django',
    name: 'Django',
    trackKey: 'web-dev-python',
    Icon: SiDjango,
    brandKey: 'django',
    tagline: 'Python web apps with ORM, admin, and security.',
  },
  {
    key: 'flask',
    name: 'Flask',
    trackKey: 'web-dev-python',
    Icon: SiFlask,
    brandKey: 'flask',
    tagline: 'Lightweight microservices and APIs in Python.',
  },
  {
    key: 'fastapi',
    name: 'FastAPI',
    trackKey: 'web-dev-python',
    Icon: SiFastapi,
    brandKey: 'fastapi',
    tagline: 'High-performance async APIs with Python.',
  },
  {
    key: 'falcon',
    name: 'Falcon',
    trackKey: 'web-dev-python',
    Icon: FiCode,
    tagline: 'Minimal, high-performance Python framework for APIs and services.',
  },

  // 3. Web Development – Java
  {
    key: 'spring',
    name: 'Spring',
    trackKey: 'web-dev-java',
    Icon: SiSpring,
    brandKey: 'spring',
    tagline: 'Enterprise Java backends with Spring Framework.',
  },
  {
    key: 'springboot',
    name: 'Spring Boot',
    trackKey: 'web-dev-java',
    Icon: SiSpring,
    brandKey: 'spring',
    tagline: 'Production-ready microservices using Spring Boot.',
  },

  // Application Development
  {
    key: 'rn-ios',
    name: 'React Native – iOS',
    trackKey: 'app-dev',
    Icon: FiSmartphone,
    tagline: 'Building and testing iOS apps with React Native.',
  },
  {
    key: 'rn-android',
    name: 'React Native – Android',
    trackKey: 'app-dev',
    Icon: FiSmartphone,
    tagline: 'React Native apps for Android devices.',
  },

  // Data & Analytics
  {
    key: 'quicksight',
    name: 'QuickSight',
    trackKey: 'data-analytics',
    Icon: FiBarChart2,
    tagline: 'Cloud-native dashboards with AWS QuickSight.',
  },
  {
    key: 'powerbi',
    name: 'Power BI',
    trackKey: 'data-analytics',
    Icon: FiBarChart2,
    brandKey: 'power-bi',
    tagline: 'Business intelligence reports and models with Power BI.',
  },
  {
    key: 'tableau',
    name: 'Tableau',
    trackKey: 'data-analytics',
    Icon: SiTableau,
    brandKey: 'tableau',
    tagline: 'Interactive dashboards and data storytelling.',
  },
  {
    key: 'spark',
    name: 'Apache Spark',
    trackKey: 'data-analytics',
    Icon: SiApachespark,
    brandKey: 'spark',
    tagline: 'Big data processing with Spark RDDs and DataFrames.',
  },
  {
    key: 'kafka',
    name: 'Apache Kafka',
    trackKey: 'data-analytics',
    Icon: SiApachekafka,
    brandKey: 'kafka',
    tagline: 'Streaming architectures and event-driven systems.',
  },
  {
    key: 'airflow',
    name: 'Apache Airflow',
    trackKey: 'data-analytics',
    Icon: FiBarChart2,
    tagline: 'Workflow orchestration and pipeline scheduling.',
  },

  // AI Engineering
  {
    key: 'rag',
    name: 'RAG',
    trackKey: 'ai',
    Icon: FiCpu,
    tagline: 'Retrieval-Augmented Generation with vector search and LLMs.',
  },
  {
    key: 'mcp',
    name: 'MCP',
    trackKey: 'ai',
    Icon: FiCpu,
    tagline: 'Model Context Protocol and tool-augmented AI flows.',
  },
  {
    key: 'langchain',
    name: 'LangChain',
    trackKey: 'ai',
    Icon: SiLangchain,
    brandKey: 'langchain',
    tagline: 'LLM apps, chains, and agents using LangChain.',
  },
  {
    key: 'agentic-ai',
    name: 'Agentic AI',
    trackKey: 'ai',
    Icon: FiCpu,
    tagline: 'Designing multi-step, tool-using AI agents.',
  },
  {
    key: 'openai',
    name: 'OpenAI',
    trackKey: 'ai',
    Icon: SiOpenai,
    brandKey: 'openai',
    tagline: 'Using OpenAI APIs to build AI products and features.',
  },
  {
    key: 'huggingface',
    name: 'Hugging Face',
    trackKey: 'ai',
    Icon: SiHuggingface,
    brandKey: 'huggingface',
    tagline: 'Models, datasets, and pipelines with Hugging Face.',
  },
]


// -------------------- STEPS & FAQ --------------------
const STEPS = [
  {
    title: 'Profile & Skill-Gap Analysis',
    text: 'We understand your current role, tech stack, and target role (onsite, remote, product/company, etc.).',
  },
  {
    title: 'Customized Learning Path',
    text: 'We map your path across Databases, Cloud, DevOps, Web, Data, or AI based on your immediate and long-term goals.',
  },
  {
    title: 'Intensive Hands-on Training',
    text: 'Real-world projects, case studies, and assignments aligned with industry practices and interview expectations.',
  },
  {
    title: 'Projects, Portfolio & Next Steps',
    text: 'Create deployable projects, optimize your profile, and plan your next phase—job switch, promotion, or freelancing.',
  },
]

const FAQ = [
  {
    q: 'Who is this Professional Training for?',
    a: 'Working professionals, final-year students, and serious learners who already know basics and want to move into specialised, high-paying roles.',
  },
  {
    q: 'Can I pick more than one track?',
    a: 'Yes. Many learners combine tracks such as Cloud Data Engineering + DevOps or Web Development + AI to build a strong profile.',
  },
  {
    q: 'Are the projects real-time and practical?',
    a: 'Yes. Projects are inspired by real implementations in product companies, startups, and service-based environments.',
  },
  {
    q: 'Will you guide me on what to choose?',
    a: 'Absolutely. We conduct a counselling call to suggest the exact track and path based on your experience and target role.',
  },
]

// -------------------- COMPONENTS --------------------
function TrackCard({ track }) {
  const { Icon } = track
  const coursesForTrack = COURSES.filter((c) => c.trackKey === track.key)

  return (
    <div
      className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white
                 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-indigo-300"
    >
      {/* Gradient glow */}
      <div
        className={`pointer-events-none absolute inset-x-0 -top-24 h-40 bg-gradient-to-b ${track.color} opacity-25 blur-3xl`}
      />

      {/* Header */}
      <div className="relative flex items-start gap-4">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl 
                     bg-indigo-50 ring-2 ring-indigo-100 group-hover:ring-indigo-400 transition"
        >
          <Icon className="h-8 w-8 text-indigo-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {track.title}
          </h3>
          <p className="mt-1 text-xs text-gray-500">
            {track.level}
          </p>
          <p className="mt-1 text-[11px] text-gray-600">
            {track.focus}
          </p>
        </div>
      </div>

      {/* Course logos & data */}
      <div className="relative mt-4 grid grid-cols-2 gap-3">
        {coursesForTrack.map((course) => {
          const CourseIcon = course.Icon || FiCode
          const brandColor = BRAND[course.brandKey] || '#4B5563' // default gray if no brand
          return (
            <div
              key={course.key}
              className="flex items-center gap-2 rounded-2xl bg-gray-50 px-3 py-2 transition group-hover:bg-gray-100"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-gray-200">
                <CourseIcon
                  className="h-6 w-6 sm:h-7 sm:w-7"
                  style={{ color: brandColor }}
                />
              </div>
              <div className="flex-1">
                <p className="text-[11px] font-semibold text-gray-900 leading-snug">
                  {course.name}
                </p>
                {course.tagline && (
                  <p className="mt-0.5 text-[10px] text-gray-500">
                    {course.tagline}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// -------------------- PAGE --------------------
export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO (black) */}
      <section className="relative overflow-hidden bg-black px-6 py-20">
        <div className="pointer-events-none absolute inset-0 bg-black opacity-60" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-black opacity-40" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-10 md:flex-row md:items-center">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Professional Training • TINITIATE
            </span>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              {HERO.title}
            </h1>
            <p className="mt-4 max-w-xl text-sm md:text-base text-slate-200">
              {HERO.subtitle}
            </p>

            <div className="mt-5 flex flex-wrap gap-2 text-xs md:text-sm">
              {[
                'Databases',
                'Cloud Data Engineering',
                'Cloud & DevOps',
                'Web Development',
                'Application Development',
                'Data & Analytics',
                'AI Engineering',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/request-callback"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-600 transition"
              >
                Schedule a counselling call
                <FiArrowRight className="h-4 w-4" />
              </Link>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 md:text-sm">
                <div className="flex items-center gap-1.5">
                  <FiUsers className="h-4 w-4" />
                  1:1 and small-group options
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACKS + HOW IT WORKS (LIGHT) */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[3fr,2fr]">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
              Professional training you can choose
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {TRACKS.map((track) => (
                <TrackCard key={track.key} track={track} />
              ))}
            </div>
          </div>

          <aside className="lg:pl-4">
            <h3 className="text-xl font-semibold text-gray-900">
              How Professional Training works
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Structured like a real project, not just theory classes.
            </p>

            <ol className="mt-5 space-y-4">
              {STEPS.map((step, idx) => (
                <li key={step.title} className="flex gap-3">
                  <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-600 md:text-sm">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4 text-xs text-gray-700 md:text-sm">
              <p className="font-semibold text-gray-900">
                Not sure which track is right for you?
              </p>
              <p className="mt-1">
                Share your current role, years of experience, and target direction (onsite, salary hike,
                product company, remote work, etc.). We’ll suggest a precise combination of tracks.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ (LIGHT) */}
      <section className="bg-white px-6 pb-16">
        <div className="mx-auto max-w-7xl border-t border-gray-200 pt-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Professional training FAQs
              </h2>
              <p className="mt-2 text-sm text-gray-600 md:text-base">
                If you still have questions, we&apos;re just a callback away.
              </p>
            </div>
            <Link
              href="/request-callback"
              className="inline-flex items-center gap-2 rounded-full border border-indigo-500/60 bg-white px-5 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-500 hover:text-white transition"
            >
              Request a Callback
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {FAQ.map(({ q, a }) => (
              <div
                key={q}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800"
              >
                <div className="mb-2 flex items-center gap-2">
                  <FiCheckCircle className="h-4 w-4 text-emerald-500" />
                  <h3 className="font-semibold text-gray-900">{q}</h3>
                </div>
                <p className="text-xs text-gray-700 md:text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}






































// import Link from 'next/link'
// import {
//   FiArrowRight,
//   FiClock,
//   FiUsers,
//   FiCheckCircle,
//   FiDatabase,
//   FiCloud,
//   FiCode,
//   FiSmartphone,
//   FiBarChart2,
//   FiCpu,
//   FiPhone 
// } from 'react-icons/fi'
// import {
//   SiOracle,
//   SiPostgresql,
//   SiMysql,
//   SiDocker,
//   SiKubernetes,
//   SiGit,
//   SiDjango,
//   SiFlask,
//   SiFastapi,
//   SiSpring,
//   SiApachespark,
//   SiTableau,
//   SiApachekafka,
//   SiGooglecloud,
//   SiReact,
//   SiNextdotjs,
//   SiAngular,
//   SiLangchain,
//   SiHuggingface,
//   SiOpenai,
// } from 'react-icons/si'



// // -------------------- BRAND COLORS (same idea as other page) --------------------
// const BRAND = {
//   // Databases
//   mysql: '#4479A1',
//   postgresql: '#336791',
//   'sql-server': '#CC2927',
//   oracle: '#DD0031',

//   // Cloud / DevOps / Tools
//   docker: '#2496ED',
//   kubernetes: '#326CE5',
//   git: '#F05032',
//   gcp: '#4285F4',
//   'power-bi': '#F2C811',

//   // Web / Frameworks
//   react: '#61DAFB',
//   nextjs: '#000000',
//   angular: '#DD0031',
//   django: '#092E20',
//   flask: '#000000',
//   fastapi: '#009688',
//   spring: '#6DB33F',

//   // Data / Analytics / Streaming
//   spark: '#E25A1C',
//   tableau: '#E97627',
//   kafka: '#231F20',

//   // AI / LLM
//   langchain: '#1C3C3C',
//   huggingface: '#FFCC4D',
//   openai: '#412991',
// }
// // -------------------- HERO --------------------
// const HERO = {
//   title: 'Professional Training',
//   subtitle:
//     'Deep-dive programs for working professionals and serious learners in Databases, Cloud, DevOps, Web, Data Engineering, Analytics, and AI.',
//   badge: 'Hands-on, project-driven, enterprise focused',
// }

// // -------------------- TRACKS (Categories) --------------------
// const TRACKS = [
//   {
//     key: 'databases',
//     title: 'Databases & NoSQL',
//     Icon: FiDatabase,
//     color: 'from-emerald-500 to-teal-500',
//     level: 'Intermediate–Advanced',
//     focus: 'For DB developers, backend engineers, and data engineers.',
//   },
//   {
//     key: 'cloud-data-eng',
//     title: 'Cloud Data Engineering',
//     Icon: FiCloud,
//     color: 'from-sky-500 to-indigo-500',
//     level: 'Intermediate–Advanced',
//     focus: 'For data engineers and cloud professionals building data platforms.',
//   },
//   {
//     key: 'cloud-devops',
//     title: 'Cloud & DevOps',
//     Icon: FiCloud,
//     color: 'from-indigo-500 to-purple-500',
//     level: 'Intermediate–Advanced',
//     focus: 'For DevOps engineers, SREs, and infra-focused developers.',
//   },
//   // {
//   //   key: 'web-dev',
//   //   title: 'Web Development',
//   //   Icon: FiCode,
//   //   color: 'from-amber-500 to-orange-500',
//   //   level: 'Intermediate',
//   //   focus: 'For web / full stack developers building modern UIs and APIs.',
//   // },

//     {
//     key: 'data-analytics',
//     title: 'Data & Analytics',
//     Icon: FiBarChart2,
//     color: 'from-cyan-500 to-blue-500',
//     level: 'Intermediate–Advanced',
//     focus: 'For analytics engineers, BI developers, and data engineers.',
//   },

//   {
//   key: 'web-dev-node',
//   title: 'Web Development – Node / JS',
//   Icon: FiCode,
//   color: 'from-amber-500 to-orange-500',
//   level: 'Intermediate',
//   focus: 'JavaScript / TypeScript stack for modern UIs and APIs.',
// },
// {
//   key: 'web-dev-python',
//   title: 'Web Development – Python',
//   Icon: FiCode,
//   color: 'from-emerald-500 to-teal-500',
//   level: 'Intermediate',
//   focus: 'Python frameworks for clean, scalable web backends.',
// },
// {
//   key: 'web-dev-java',
//   title: 'Web Development – Java',
//   Icon: FiCode,
//   color: 'from-indigo-500 to-purple-500',
//   level: 'Intermediate',
//   focus: 'Enterprise web backends using Java and Spring.',
// },

//   {
//     key: 'app-dev',
//     title: 'Mobile Application Development',
//     Icon: FiSmartphone,
//     color: 'from-pink-500 to-rose-500',
//     level: 'Intermediate',
//     focus: 'For engineers targeting mobile and cross-platform apps.',
//   },

//   {
//     key: 'ai',
//     title: 'AI Engineering',
//     Icon: FiCpu,
//     color: 'from-purple-500 to-fuchsia-500',
//     level: 'Intermediate–Advanced',
//     focus: 'For AI/ML engineers and developers building intelligent systems.',
//   },
// ]

// // -------------------- COURSES (Per-course data with icons) --------------------
// const COURSES = [
//   // Databases & NoSQL
//   {
//     key: 'oracle-db',
//     name: 'Oracle',
//     trackKey: 'databases',
//     Icon: SiOracle,
//     tagline: 'PL/SQL, performance tuning, and enterprise database design.',
//   },
//   {
//     key: 'mssql-db',
//     name: 'MS SQL Server',
//     trackKey: 'databases',
//     Icon: FiDatabase,
//     tagline: 'T-SQL, stored procedures, and performance optimization.',
//   },
//   {
//     key: 'postgres-db',
//     name: 'PostgreSQL',
//     trackKey: 'databases',
//     Icon: SiPostgresql,
//     tagline: 'Open-source RDBMS for modern applications and analytics.',
//   },
//   {
//     key: 'mysql-db',
//     name: 'MySQL',
//     trackKey: 'databases',
//     Icon: SiMysql,
//     tagline: 'Relational database backbone for web apps and SaaS.',
//   },
//   {
//     key: 'mongodb-nosql',
//     name: 'MongoDB',
//     trackKey: 'databases',
//     Icon: FiDatabase,
//     tagline: 'Document database for high-scale modern applications.',
//   },
//   {
//     key: 'hadoop-nosql',
//     name: 'Hadoop (Hive / HBase)',
//     trackKey: 'databases',
//     Icon: FiDatabase,
//     tagline: 'Big data storage and querying with Hive & HBase.',
//   },

//   // Cloud Data Engineering
//   {
//     key: 'aws-data-eng',
//     name: 'AWS Data Engineering',
//     trackKey: 'cloud-data-eng',
//     Icon: FiCloud,
//     tagline: 'Data lakes, ETL pipelines, and analytics on AWS.',
//   },
//   {
//     key: 'azure-data-eng',
//     name: 'Azure Data Engineering',
//     trackKey: 'cloud-data-eng',
//     Icon: FiCloud,
//     tagline: 'Data Factory, Synapse, and end-to-end pipelines on Azure.',
//   },
//   {
//     key: 'gcp-data-eng',
//     name: 'GCP Data Engineering',
//     trackKey: 'cloud-data-eng',
//     Icon: SiGooglecloud,
//     tagline: 'BigQuery and GCP-native data engineering workflows.',
//   },
//   {
//     key: 'snowflake-data-eng',
//     name: 'Snowflake Data Engineering',
//     trackKey: 'cloud-data-eng',
//     Icon: FiCloud,
//     tagline: 'Cloud data warehousing and ELT on Snowflake.',
//   },
//   {
//     key: 'databricks-data-eng',
//     name: 'Databricks Data Engineering',
//     trackKey: 'cloud-data-eng',
//     Icon: FiCloud,
//     tagline: 'Lakehouse architecture and Spark on Databricks.',
//   },
//   {
//   key: 'onprem-data-eng',
//   name: 'On-Prem Data Engineering',
//   trackKey: 'cloud-data-eng',
//   Icon: FiCloud, // or FiDatabase if you prefer a DB icon
//   tagline: 'Data lakes, ETL, and batch processing on on-prem Hadoop / Spark platforms.',
// },


//   // Cloud & DevOps
//   {
//     key: 'azure-devops',
//     name: 'Azure DevOps',
//     trackKey: 'cloud-devops',
//     Icon: FiCloud,
//     tagline: 'CI/CD, pipelines, and infra automation in Azure.',
//   },
//   {
//     key: 'aws-devops',
//     name: 'AWS DevOps',
//     trackKey: 'cloud-devops',
//     Icon: FiCloud,
//     tagline: 'DevOps practices and tooling on AWS.',
//   },
//   {
//     key: 'gcp-devops',
//     name: 'GCP DevOps',
//     trackKey: 'cloud-devops',
//     Icon: SiGooglecloud,
//     tagline: 'Google Cloud-native DevOps and SRE tooling.',
//   },
//   {
//     key: 'terraform',
//     name: 'Terraform',
//     trackKey: 'cloud-devops',
//     Icon: FiCloud,
//     tagline: 'Infrastructure as Code across cloud providers.',
//   },
//   {
//     key: 'jenkins',
//     name: 'Jenkins',
//     trackKey: 'cloud-devops',
//     Icon: FiCloud,
//     tagline: 'CI/CD orchestration with Jenkins pipelines.',
//   },
//   {
//     key: 'docker',
//     name: 'Docker',
//     trackKey: 'cloud-devops',
//     Icon: SiDocker,
//     tagline: 'Containerization and image workflows for apps.',
//   },
//   {
//     key: 'kubernetes',
//     name: 'Kubernetes',
//     trackKey: 'cloud-devops',
//     Icon: SiKubernetes,
//     tagline: 'Container orchestration with Kubernetes clusters.',
//   },
//   {
//     key: 'git',
//     name: 'Git',
//     trackKey: 'cloud-devops',
//     Icon: SiGit,
//     tagline: 'Version control, branching, and team workflows.',
//   },

//   // Web Development
//   // {
//   //   key: 'webservices',
//   //   name: 'WebServices',
//   //   trackKey: 'web-dev',
//   //   Icon: FiCode,
//   //   tagline: 'REST, HTTP, and API-first backend design.',
//   // },
//   // {
//   //   key: 'react-tailwind',
//   //   name: 'React + Bootstrap/Tailwind',
//   //   trackKey: 'web-dev',
//   //   Icon: SiReact,
//   //   tagline: 'Modern component-driven UIs with React and CSS frameworks.',
//   // },
//   // {
//   //   key: 'nextjs-tailwind',
//   //   name: 'Next.js + Bootstrap/Tailwind',
//   //   trackKey: 'web-dev',
//   //   Icon: SiNextdotjs,
//   //   tagline: 'Full-stack React apps with SSR and routing.',
//   // },
//   // {
//   //   key: 'angular',
//   //   name: 'Angular',
//   //   trackKey: 'web-dev',
//   //   Icon: SiAngular,
//   //   tagline: 'Enterprise single-page applications with Angular.',
//   // },
//   // {
//   //   key: 'vue',
//   //   name: 'Vue',
//   //   trackKey: 'web-dev',
//   //   Icon: FiCode,
//   //   tagline: 'Progressive web apps using Vue.js.',
//   // },
//   // {
//   //   key: 'vite',
//   //   name: 'Vite',
//   //   trackKey: 'web-dev',
//   //   Icon: FiCode,
//   //   tagline: 'Lightning-fast dev bundler for modern frontends.',
//   // },
//   // {
//   //   key: 'django',
//   //   name: 'Django',
//   //   trackKey: 'web-dev',
//   //   Icon: SiDjango,
//   //   tagline: 'Python web apps with ORM, admin, and security.',
//   // },
//   // {
//   //   key: 'flask',
//   //   name: 'Flask',
//   //   trackKey: 'web-dev',
//   //   Icon: SiFlask,
//   //   tagline: 'Lightweight microservices and APIs in Python.',
//   // },
//   // {
//   //   key: 'fastapi',
//   //   name: 'FastAPI',
//   //   trackKey: 'web-dev',
//   //   Icon: SiFastapi,
//   //   tagline: 'High-performance async APIs with Python.',
//   // },
//   // {
//   //   key: 'spring',
//   //   name: 'Spring',
//   //   trackKey: 'web-dev',
//   //   Icon: SiSpring,
//   //   tagline: 'Enterprise Java backends with Spring Framework.',
//   // },
//   // {
//   //   key: 'springboot',
//   //   name: 'Spring Boot',
//   //   trackKey: 'web-dev',
//   //   Icon: SiSpring,
//   //   tagline: 'Production-ready microservices using Spring Boot.',
//   // },

//   // -------------------- Web Development (split into 3 sections) --------------------

// // 1. Web Development – Node / JS
// {
//   key: 'webservices',
//   name: 'WebServices',
//   trackKey: 'web-dev-node',
//   Icon: FiCode,
//   tagline: 'REST, HTTP, and API-first backend design.',
// },
// {
//   key: 'react-tailwind',
//   name: 'React + Bootstrap/Tailwind',
//   trackKey: 'web-dev-node',
//   Icon: SiReact,
//   tagline: 'Modern component-driven UIs with React and CSS frameworks.',
// },
// {
//   key: 'nextjs-tailwind',
//   name: 'Next.js + Bootstrap/Tailwind',
//   trackKey: 'web-dev-node',
//   Icon: SiNextdotjs,
//   tagline: 'Full-stack React apps with SSR, routing, and API routes.',
// },
// {
//   key: 'angular',
//   name: 'Angular',
//   trackKey: 'web-dev-node',
//   Icon: SiAngular,
//   tagline: 'Enterprise single-page applications with Angular.',
// },
// {
//   key: 'vue',
//   name: 'Vue',
//   trackKey: 'web-dev-node',
//   Icon: FiCode,
//   tagline: 'Progressive web apps using Vue.js.',
// },
// {
//   key: 'vite',
//   name: 'Vite',
//   trackKey: 'web-dev-node',
//   Icon: FiCode,
//   tagline: 'Lightning-fast dev bundler for modern frontends.',
// },

// // 2. Web Development – Python
// {
//   key: 'django',
//   name: 'Django',
//   trackKey: 'web-dev-python',
//   Icon: SiDjango,
//   tagline: 'Python web apps with ORM, admin, and security.',
// },
// {
//   key: 'flask',
//   name: 'Flask',
//   trackKey: 'web-dev-python',
//   Icon: SiFlask,
//   tagline: 'Lightweight microservices and APIs in Python.',
// },
// {
//   key: 'fastapi',
//   name: 'FastAPI',
//   trackKey: 'web-dev-python',
//   Icon: SiFastapi,
//   tagline: 'High-performance async APIs with Python.',
// },
// {
//   key: 'falcon',
//   name: 'Falcon',
//   trackKey: 'web-dev-python',
//   Icon: FiCode,
//   tagline: 'Minimal, high-performance Python framework for APIs and services.',
// },

// // 3. Web Development – Java
// {
//   key: 'spring',
//   name: 'Spring',
//   trackKey: 'web-dev-java',
//   Icon: SiSpring,
//   tagline: 'Enterprise Java backends with Spring Framework.',
// },
// {
//   key: 'springboot',
//   name: 'Spring Boot',
//   trackKey: 'web-dev-java',
//   Icon: SiSpring,
//   tagline: 'Production-ready microservices using Spring Boot.',
// },


//   // Application Development

//   {
//     key: 'rn-ios',
//     name: 'React Native – iOS',
//     trackKey: 'app-dev',
//     Icon: FiSmartphone,
//     tagline: 'Building and testing iOS apps with React Native.',
//   },
//   {
//     key: 'rn-android',
//     name: 'React Native – Android',
//     trackKey: 'app-dev',
//     Icon: FiSmartphone,
//     tagline: 'React Native apps for Android devices.',
//   },

//   // Data & Analytics
//   {
//     key: 'quicksight',
//     name: 'QuickSight',
//     trackKey: 'data-analytics',
//     Icon: FiBarChart2,
//     tagline: 'Cloud-native dashboards with AWS QuickSight.',
//   },
//   {
//     key: 'powerbi',
//     name: 'Power BI',
//     trackKey: 'data-analytics',
//     Icon: FiBarChart2,
//     tagline: 'Business intelligence reports and models with Power BI.',
//   },
//   {
//     key: 'tableau',
//     name: 'Tableau',
//     trackKey: 'data-analytics',
//     Icon: SiTableau,
//     tagline: 'Interactive dashboards and data storytelling.',
//   },
//   {
//     key: 'spark',
//     name: 'Apache Spark',
//     trackKey: 'data-analytics',
//     Icon: SiApachespark,
//     tagline: 'Big data processing with Spark RDDs and DataFrames.',
//   },
//   {
//     key: 'kafka',
//     name: 'Apache Kafka',
//     trackKey: 'data-analytics',
//     Icon: SiApachekafka,
//     tagline: 'Streaming architectures and event-driven systems.',
//   },
//   {
//     key: 'airflow',
//     name: 'Apache Airflow',
//     trackKey: 'data-analytics',
//     Icon: FiBarChart2,
//     tagline: 'Workflow orchestration and pipeline scheduling.',
//   },

//   // AI Engineering
//   {
//     key: 'rag',
//     name: 'RAG',
//     trackKey: 'ai',
//     Icon: FiCpu,
//     tagline: 'Retrieval-Augmented Generation with vector search and LLMs.',
//   },
//   {
//     key: 'mcp',
//     name: 'MCP',
//     trackKey: 'ai',
//     Icon: FiCpu,
//     tagline: 'Model Context Protocol and tool-augmented AI flows.',
//   },
//   {
//     key: 'langchain',
//     name: 'LangChain',
//     trackKey: 'ai',
//     Icon: SiLangchain,
//     tagline: 'LLM apps, chains, and agents using LangChain.',
//   },
//   {
//     key: 'agentic-ai',
//     name: 'Agentic AI',
//     trackKey: 'ai',
//     Icon: FiCpu,
//     tagline: 'Designing multi-step, tool-using AI agents.',
//   },
//   {
//     key: 'openai',
//     name: 'OpenAI',
//     trackKey: 'ai',
//     Icon: SiOpenai,
//     tagline: 'Using OpenAI APIs to build AI products and features.',
//   },
//   {
//     key: 'huggingface',
//     name: 'Hugging Face',
//     trackKey: 'ai',
//     Icon: SiHuggingface,
//     tagline: 'Models, datasets, and pipelines with Hugging Face.',
//   },
// ]

// // -------------------- STEPS & FAQ --------------------
// const STEPS = [
//   {
//     title: 'Profile & Skill-Gap Analysis',
//     text: 'We understand your current role, tech stack, and target role (onsite, remote, product/company, etc.).',
//   },
//   {
//     title: 'Customized Learning Path',
//     text: 'We map your path across Databases, Cloud, DevOps, Web, Data, or AI based on your immediate and long-term goals.',
//   },
//   {
//     title: 'Intensive Hands-on Training',
//     text: 'Real-world projects, case studies, and assignments aligned with industry practices and interview expectations.',
//   },
//   {
//     title: 'Projects, Portfolio & Next Steps',
//     text: 'Create deployable projects, optimize your profile, and plan your next phase—job switch, promotion, or freelancing.',
//   },
// ]

// const FAQ = [
//   {
//     q: 'Who is this Professional Training for?',
//     a: 'Working professionals, final-year students, and serious learners who already know basics and want to move into specialised, high-paying roles.',
//   },
//   {
//     q: 'Can I pick more than one track?',
//     a: 'Yes. Many learners combine tracks such as Cloud Data Engineering + DevOps or Web Development + AI to build a strong profile.',
//   },
//   {
//     q: 'Are the projects real-time and practical?',
//     a: 'Yes. Projects are inspired by real implementations in product companies, startups, and service-based environments.',
//   },
//   {
//     q: 'Will you guide me on what to choose?',
//     a: 'Absolutely. We conduct a counselling call to suggest the exact track and path based on your experience and target role.',
//   },
// ]

// // -------------------- COMPONENTS --------------------
// function TrackCard({ track }) {
//   const { Icon } = track
//   const coursesForTrack = COURSES.filter((c) => c.trackKey === track.key)

//   return (
//     <div
//       className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white
//                  p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-indigo-300"
//     >
//       {/* Gradient glow */}
//       <div
//         className={`pointer-events-none absolute inset-x-0 -top-24 h-40 bg-gradient-to-b ${track.color} opacity-25 blur-3xl`}
//       />

//       {/* Header */}
//       <div className="relative flex items-start gap-4">
//         <div
//           className="flex h-14 w-14 items-center justify-center rounded-2xl 
//                      bg-indigo-50 ring-2 ring-indigo-100 group-hover:ring-indigo-400 transition"
//         >
//           <Icon className="h-8 w-8 text-indigo-600" />
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold text-gray-900">
//             {track.title}
//           </h3>
//           <p className="mt-1 text-xs text-gray-500">
//             {track.level}
//           </p>
//           <p className="mt-1 text-[11px] text-gray-600">
//             {track.focus}
//           </p>
//         </div>
//       </div>

//       {/* Course logos & data */}
//       <div className="relative mt-4 grid grid-cols-2 gap-3">
//         {coursesForTrack.map((course) => {
//           const CourseIcon = course.Icon || FiCode
//           return (
//             <div
//               key={course.key}
//               className="flex items-center gap-2 rounded-2xl bg-gray-50 px-3 py-2 transition group-hover:bg-gray-100"
//             >
//               <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-gray-200">
//                 <CourseIcon className="h-6 w-6 sm:h-7 sm:w-7 text-gray-800" />
//               </div>
//               <div className="flex-1">
//                 <p className="text-[11px] font-semibold text-gray-900 leading-snug">
//                   {course.name}
//                 </p>
//                 {course.tagline && (
//                   <p className="mt-0.5 text-[10px] text-gray-500">
//                     {course.tagline}
//                   </p>
//                 )}
//               </div>
//             </div>
//           )
//         })}
//       </div>

//       {/* Footer CTA */}
//       {/* <div className="relative mt-5 flex items-center justify-between text-xs">
//         <div className="flex items-center gap-2 text-emerald-600">
//           <FiCheckCircle className="h-4 w-4" />
//           <span>Advanced professional track</span>
//         </div>

//       </div> */}
//     </div>
//   )
// }

// // -------------------- PAGE --------------------
// export default function Page() {
//   return (
//     <main className="bg-white text-gray-900">
//       {/* HERO (black) */}
//       <section className="relative overflow-hidden bg-black px-6 py-20">
//         {/* background glow */}
//         <div className="pointer-events-none absolute inset-0 bg-black opacity-60" />
//         <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-black opacity-40" />
//         <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-10 md:flex-row md:items-center">
//           <div className="flex-1">
//             <span className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200">
//               <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
//               Professional Training • TINITIATE
//             </span>

//             <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
//               {HERO.title}
//             </h1>
//             <p className="mt-4 max-w-xl text-sm md:text-base text-slate-200">
//               {HERO.subtitle}
//             </p>

//             {/* Highlighted domains */}
//             <div className="mt-5 flex flex-wrap gap-2 text-xs md:text-sm">
//               {[
//                 'Databases',
//                 'Cloud Data Engineering',
//                 'Cloud & DevOps',
//                 'Web Development',
//                 'Application Development',
//                 'Data & Analytics',
//                 'AI Engineering',
//               ].map((item) => (
//                 <span
//                   key={item}
//                   className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-slate-100"
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>

//             <div className="mt-8 flex flex-wrap items-center gap-4">
//               <Link
//                 href="/request-callback"
//                 className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-600 transition"
//               >
//                 Schedule a counselling call
//                 <FiArrowRight className="h-4 w-4" />
//               </Link>
//               <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 md:text-sm">
//                 {/* <div className="flex items-center gap-1.5">
//                   <FiClock className="h-4 w-4" />
//                   Weekend & weekday batches
//                 </div> */}
//                 <div className="flex items-center gap-1.5">
//                   <FiUsers className="h-4 w-4" />
//                   1:1 and small-group options
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right - “Skill Matrix” card */}
//           {/* <div className="relative mt-8 flex-1 md:mt-0">
//             <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-4 shadow-xl shadow-black/60">
//               <div className="flex items-center justify-between text-xs text-slate-300">
//                 <span className="rounded-full bg-slate-900/80 px-3 py-1">
//                   Professional Skill Matrix
//                 </span>
//                 <span>Designed by TINITIATE</span>
//               </div>
//               <div className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-slate-100">
//                 <div className="space-y-1.5">
//                   <p className="font-semibold text-slate-50">Data & Cloud</p>
//                   <p className="rounded-xl bg-slate-900/80 px-3 py-2">
//                     Cloud Data Engineering on <span className="font-semibold">AWS, Azure, GCP</span> with{' '}
//                     <span className="font-semibold">Snowflake & Databricks</span>.
//                   </p>
//                   <p className="rounded-xl bg-slate-900/80 px-3 py-2">
//                     Strong <span className="font-semibold">ETL, pipelines, and orchestration</span> with Airflow.
//                   </p>
//                 </div>
//                 <div className="space-y-1.5">
//                   <p className="font-semibold text-slate-50">Dev, DevOps & AI</p>
//                   <p className="rounded-xl bg-slate-900/80 px-3 py-2">
//                     Modern <span className="font-semibold">Web & App Dev</span> with React, Next.js, Django, FastAPI, Spring.
//                   </p>
//                   <p className="rounded-xl bg-slate-900/80 px-3 py-2">
//                     <span className="font-semibold">DevOps + AI</span> stack: Docker, K8s, Terraform, RAG, LangChain, OpenAI.
//                   </p>
//                 </div>
//               </div>
//             </div> 
//           </div> */}
//         </div>
//       </section>

//       {/* TRACKS + HOW IT WORKS (LIGHT) */}
//       <section className="bg-gray-50 px-6 py-16">
//         <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[3fr,2fr]">
//           {/* Tracks grid */}
//           <div>
//             <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
//               Professional training you can choose
//             </h2>


//             <div className="mt-6 grid gap-5 md:grid-cols-2">
//               {TRACKS.map((track) => (
//                 <TrackCard key={track.key} track={track} />
//               ))}
//             </div>
//           </div>

//           {/* How it works */}
//           {/* <aside className="lg:pl-4">
//             <h3 className="text-xl font-semibold text-gray-900">
//               How Professional Training works
//             </h3>
//             <p className="mt-2 text-sm text-gray-600">
//               Structured like a real project, not just theory classes.
//             </p>

//             <ol className="mt-5 space-y-4">
//               {STEPS.map((step, idx) => (
//                 <li key={step.title} className="flex gap-3">
//                   <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
//                     {idx + 1}
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-900">
//                       {step.title}
//                     </h4>
//                     <p className="text-xs text-gray-600 md:text-sm">
//                       {step.text}
//                     </p>
//                   </div>
//                 </li>
//               ))}
//             </ol>

//             <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4 text-xs text-gray-700 md:text-sm">
//               <p className="font-semibold text-gray-900">
//                 Not sure which track is right for you?
//               </p>
//               <p className="mt-1">
//                 Share your current role, years of experience, and target direction (onsite, salary hike,
//                 product company, remote work, etc.). We’ll suggest a precise combination of tracks.
//               </p>
//             </div>
//           </aside> */}
//         </div>
//       </section>

//       {/* FAQ (LIGHT) */}
//             {/* FAQS */}
//       <section className="px-6 py-12 bg-white">
//         <div className="mx-auto max-w-7xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-start mb-6">
//             FAQs
//           </h2>
      
//           <div className="grid gap-6 md:grid-cols-2">
//             {(Array.isArray(FAQ) ? FAQ : []).map(({ q, a }, i) => (
//               <div
//                 key={q ?? i}
//                 className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm hover:shadow-md transition"
//               >
//                 <div className="flex items-center gap-2 mb-3">
//                   <FiCheckCircle className="h-5 w-5 text-indigo-600 opacity-80" />
//                   <h3 className="text-base font-semibold text-gray-900">{q}</h3>
//                 </div>
//                 <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//             {/* CTA */}
//       <section className="px-6 py-12">
//         <div className="mx-auto max-w-7xl">
//           <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
//             <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//               <div>
//                 <h4 className="text-lg font-bold text-gray-900">Want a personalized study plan?</h4>
//                 <p className="text-sm text-gray-700">
//                   Tell us your goals—career switch, upskilling, or interview prep—and we’ll map the path.
//                 </p>
//               </div>
//               <div className="flex flex-wrap gap-3">
//                 <Link
//                   href="/request-callback"
//                   className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
//                 >
//                   <FiPhone className="h-4 w-4" />
//                   Request a Callback
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }
