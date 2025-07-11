"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
      {/* Hero Section */}
{/* <section className="relative px-4 py-16 sm:py-24 text-center overflow-hidden">
    Background Image Container (with height)
    <div className="absolute inset-0 w-full h-full ">
      <Image
        src="/images/banners/remote-consulting.jpg" // Replace with your actual image
        alt="Remote Consulting Background"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      Optional dark overlay to enhance text contrast
      <div className="absolute inset-0 bg-black/60" />
    </div>

    Foreground Text Content
    <div className="relative z-10 max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-white leading-tight">
        Enterprise Remote Consulting
      </h1>
      <p className="text-base sm:text-lg text-white mb-6">
        Empower your database architecture with expert-led consulting services tailored to scalability, reliability, and performance — all delivered remotely.
      </p>
    </div>
  </section> */}

  <section className="relative bg-black py-20 sm:py-10 md:py-15 ">
    <div className="max-w-7xl sm:px-5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      
      {/* Text Section */}
      <div className="text-center md:text-left">

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          Enterprise Remote Consulting
        </h1>
        <p className="text-base sm:text-lg text-white mb-6 max-w-xl">
          Empower your database architecture with expert-led consulting services tailored to scalability, reliability, and performance — all delivered remotely.
        </p>
      </div>
  
      {/* Image Section */}
      <div className="relative w-full h-64 p-2 sm:h-80 md:h-[22rem] rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/banners/remote-consulting.jpg" // Replace with a real high-quality hero image
          alt="IT Development Solutions"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
    </section>

      {/* Zig-Zag Services Sections */}
      {services.map(({ title, description, icon, href }, idx) => (
        <div     key={href || idx}  // ✅ Safe fallback using idx 
         className={`py-10 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-6 md:gap-12`}
        >
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{title}</h3>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">{description}</p>
            <Link href={href} className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition">
              Learn More
            </Link>
          </div>
          <div
            className="md:w-1/2 w-full"
          >
            <div className="relative w-full h-48 sm:h-64">
              <Image
                src={icon}
                alt={title}
                fill
                className="object-contain drop-shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      ))}
    </main>
  )
}
