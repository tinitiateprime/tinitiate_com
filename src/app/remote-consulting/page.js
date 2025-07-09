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
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-24 bg-gradient-to-br from-gray-100 to-white"
      >
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-gray-900 leading-tight">
          Enterprise Remote Consulting
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Empower your database architecture with expert-led consulting services tailored to scalability, reliability, and performance — all delivered remotely.
        </p>
      </motion.section>

      {/* Zig-Zag Services Sections */}
      {services.map(({ title, description, icon, href }, idx) => (
        <motion.section
          key={idx}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`py-16 px-6 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
        >
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>
            <p className="text-lg text-gray-600 mb-6">{description}</p>
            <Link href={href} className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Learn More
            </Link>
          </div>
          <motion.div
            className="md:w-1/2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="relative w-full h-64">
              <Image
                src={icon}
                alt={title}
                fill
                className="object-contain drop-shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </motion.section>
      ))}
    </main>
  )
}
