"use client"

import Image from 'next/image'
import Link from 'next/link'
const services = [
  {
    title: 'MySQL Database Service',
    description:
      'Expert MySQL consulting for performance tuning, replication, backup strategies, and HA/DR solutions tailored for mission-critical applications.',
    icon: '/images/remote-consulting/mysql.png',
    href: '/remote-consulting/mysql'
  },
  {
    title: 'Oracle Database Services',
    description:
      'Specialized support for Oracle RAC, Data Guard, performance optimization, and licensing strategies for enterprises.',
    icon: '/images/remote-consulting/oracle.png',
    href: '/remote-consulting/oracle'
  },
  {
    title: 'PostgreSQL Database Services',
    description:
      'Design and support for scalable PostgreSQL clusters, logical/physical replication, partitioning, and open-source extension tuning.',
    icon: '/images/remote-consulting/postgresql.png',
    href: '/remote-consulting/postgresql'
  },
  {
    title: 'SQL Server Database Services',
    description:
      'End-to-end SQL Server support including Always On, indexing strategies, ETL tuning, and data warehouse optimization.',
    icon: '/images/remote-consulting/sqlserver.png',
    href: '/remote-consulting/sqlserver'
  },
  {
    title: 'Amazon Redshift Services',
    description:
      'Modern Redshift consulting covering workload management (WLM), spectrum queries, data lake integration, and cost-effective scaling.',
    icon: '/images/remote-consulting/redshift.png',
    href: '/remote-consulting/redshift'
  },
]

export default function RemoteConsultingPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero */}
      <section className="text-center py-24 bg-gradient-to-br from-gray-100 to-white">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-gray-900 leading-tight">
          Enterprise Remote Consulting
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Empower your database architecture with expert-led consulting services tailored to scalability, reliability, and performance — all delivered remotely.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map(({ title, description, icon, href }, idx) => (
          <Link
            key={idx}
            href={href}
            className="group bg-gray-50 hover:bg-white shadow hover:shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition-all"
          >
            <div className="relative w-24 h-24 mb-4">
              <Image src={icon} alt={title} fill className="object-contain drop-shadow-md" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {description}
            </p>
          </Link>
        ))}
      </section>
    </main>
  )
}



















// "use client"

// import Image from 'next/image'

// const services = [
//   {
//     title: 'MySQL Database Service',
//     description:
//       'Expert MySQL consulting for performance tuning, replication, backup strategies, and HA/DR solutions tailored for mission-critical applications.',
//     icon: '/images/remote-consulting/mysql.png',
//   },
//   {
//     title: 'Oracle Database Services',
//     description:
//       'Specialized support for Oracle RAC, Data Guard, performance optimization, and licensing strategies for enterprises.',
//     icon: '/images/remote-consulting/oracle.png',
//   },
//   {
//     title: 'PostgreSQL Database Services',
//     description:
//       'Design and support for scalable PostgreSQL clusters, logical/physical replication, partitioning, and open-source extension tuning.',
//     icon: '/images/remote-consulting/postgresql.png',
//   },
//   {
//     title: 'SQL Server Database Services',
//     description:
//       'End-to-end SQL Server support including Always On, indexing strategies, ETL tuning, and data warehouse optimization.',
//     icon: '/images/remote-consulting/sqlserver.png',
//   },
//   {
//     title: 'Amazon Redshift Services',
//     description:
//       'Modern Redshift consulting covering workload management (WLM), spectrum queries, data lake integration, and cost-effective scaling.',
//     icon: '/images/remote-consulting/redshift.png',
//   },
// ]

// export default function RemoteConsultingPage() {
//   return (
//     <main className="bg-white text-gray-800">
//       {/* Hero */}
//       <section className="text-center py-24 bg-gradient-to-br from-gray-100 to-white">
//         <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-gray-900 leading-tight">
//           Enterprise Remote Consulting
//         </h1>
//         <p className="max-w-3xl mx-auto text-lg text-gray-700">
//           Empower your database architecture with expert-led consulting services tailored to scalability, reliability, and performance — all delivered remotely.
//         </p>
//       </section>

//       {/* Services List */}
//       <section className="py-24 max-w-7xl mx-auto space-y-24">
//         {services.map(({ title, description, icon }, idx) => (
//           <div
//             key={idx}
//             className={`grid grid-cols-1 md:grid-cols-2 items-center gap-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
//           >
//             <div className="flex justify-center">
//               <div className="relative w-60 h-60 md:w-72 md:h-72">
//                 <Image src={icon} alt={title} fill className="object-contain drop-shadow-xl" />
//               </div>
//             </div>
//             <div>
//               <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">{title}</h3>
//               <p className="text-lg text-gray-700 leading-relaxed max-w-xl">{description}</p>
//             </div>
//           </div>
//         ))}
//       </section>
//     </main>
//   )
// }
