// app/page.js
"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Globe, Users, Clock, UserCheck, Briefcase, CheckCircle, Star, BookOpen, Code2, FileText, ClipboardCheck, UserCircle2 } from 'lucide-react'


const services = [
  {
    title: 'IT Development Services',
    href: '/it-development',
    image: '/images/services-development.jpg',
  },
  {
    title: 'IT Training',
    href: '/it-training',
    image: '/images/services-training.png',
  },
  {
    title: 'Work Experience Program',
    href: '/work-experience',
    image: '/images/work-experience-program.png',
  },
  {
    title: 'Remote Consulting',
    href: '/remote-consulting',
    image: '/images/Remote-consulting.png',
  },
]

const programs = [
  {
    title: 'Python AWS Developer Program',
    duration: '3 Months',
    image: '/images/IT-training/Python-AWS-Developer-Program.png',
    description: 'Master Python backend, AWS Lambda, API Gateway, and DynamoDB through hands-on projects.',
  },
  {
    title: 'Power BI Developer Program',
    duration: '2 Months',
    image: '/images/IT-training/Power-BI-Developer-Program.png',
    description: 'Learn powerful BI reporting, data modeling, and dashboard creation using real-world business data.',
  },
  {
    title: 'AWS DevOps Program',
    duration: '3 Months',
    image: '/images/IT-training/AWS-DevOps-Program.png',
    description: 'Gain expertise in CI/CD pipelines, infrastructure as code, containerization, and cloud deployment.',
  },
]


const itServices = [
  {
    title: 'Data Engineering',
    image: '/images/IT-development/data-engineering.png',
  },
  {
    title: 'App Development',
    image: '/images/IT-development/app-development.jpg',
  },
  {
    title: 'Web/Backend Development',
    image: '/images/IT-development/web-backend.png',
  },
  {
    title: 'Testing and Support',
    image: '/images/IT-development/testing-support.png',
  },
]




const guidanceData = [
  {
    icon: Briefcase,
    title: 'IT Career Guidance',
    description: 'Personalized guidance from industry experts to align your goals with real-world roles in IT.',
  },
  {
    icon: BookOpen,
    title: 'Basics to Advanced Learning',
    description: 'Step-by-step learning paths from foundational concepts to advanced tech stacks and real use cases.',
  },
  {
    icon: Code2,
    title: 'Hands-On Coding Exercises',
    description: 'Daily challenges and practice labs to build strong coding logic and practical development skills.',
  },
  {
    icon: FileText,
    title: 'Live Projects',
    description: 'Build real-world applications with mentorship support to strengthen your portfolio and confidence.',
  },
  {
    icon: UserCircle2,
    title: 'Resume Preparation',
    description: 'Get help crafting a standout, recruiter-friendly resume tailored for your desired job roles.',
  },
  {
    icon: ClipboardCheck,
    title: 'Interview Preparation',
    description: 'Mock interviews, HR tips, and technical assessments to boost your readiness and confidence.',
  },
]

export default function HomePage() {
  return (
    <main className="text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-100 to-white py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-gray-900">
          Empowering Careers with Real Time Experience
        </h1>
        <p className="max-w-xl mx-auto text-lg text-gray-700 mb-8">
          TINITIATE provides job-ready IT training, hands-on coding, and real-world consulting services led by 15+ years of industry expertise.
        </p>
        <Link
          href="#about"
          className="inline-block px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition"
        >
          Learn More
        </Link>
      </section>

      {/* Training Programs */}
<section id="programs" className="py-16 px-6 bg-white ">
  <h2 className="text-3xl font-bold text-center mb-12">
    Our Top Training Programs
  </h2>
  <div className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8">
    {programs.map((prog) => (
      <div
        key={prog.title}
        className="rounded-xl shadow-sm bg-white overflow-hidden flex flex-col transition-all hover:shadow-md"
      >
        {/* Smaller, full-cover image */}
        <div className="relative w-2/3 h-40">
          <Image
            src={prog.image}
            alt={prog.title}
            fill
            className=""
          />
        </div>

        <div className="p-6 flex flex-col justify-between grow">
          <div className="mb-6">
            <h3 className="text-lg text-gray-900 font-semibold mb-2">
              {prog.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Duration: {prog.duration}
            </p>
             <p className="text-sm text-gray-700 mb-2">
              {prog.description}
            </p>
          </div>
          <Link
            href={`/programs/${prog.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="inline-block px-4 py-2 bg-blue-400 text-white text-sm rounded-lg text-center hover:bg-blue-700 transition"
          >
            Register Course
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>

<section className="bg-gradient-to-br from-gray-100 to-white py-24 px-6 text-center">
  <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-gray-900">
    Building Powerful Solutions with Custom IT Development
  </h1>
  <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
    From full-stack applications to data pipelines and backend automation, our expert-led development services are tailored for scale, speed, and success — trusted by startups and enterprises alike.
  </p>
  {/* <Link
    href="/services/it-development"
    className="inline-block px-8 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-800 transition"
  >
    Explore IT Development Services
  </Link> */}
</section>

<section className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          IT Development Services
        </h2>
        {/* <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We offer a range of modern development services tailored to your business goals — from data engineering to full-stack development, testing, and deployment support.
        </p> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {itServices.map(({ title, image }) => (
            <div
              key={title}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg text-gray-800 font-semibold text-center">
                  {title}
                </h3>
              </div>
            </div>
          ))}
        </div>


        {/* <Link
  href="/services/it-development"
  className="inline-block px-8 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
>
  Explore Development Services
</Link> */}
        <Link
  href="/it-development"
  className="inline-block px-8 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
>
  Explore
</Link>
      </div>
    </section>
  


        {/* About Us */}
        {/*
        <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Why Choose TINITIATE?
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                With <strong>15+ years of hands-on IT experience</strong>, our training isn’t just theory—It&apos;s real-time knowledge paired with live projects, bonus technologies, and business domain immersion.
              </p>
              <ul className="space-y-3">
                {[
                  'Expert faculty with deep industry background',
                  'Structured training from basics to advanced',
                  'Business domain training included',
                  'Extensive hands-on exercises',
                  'Bonus technologies taught free-of-cost',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Perfect for:</h3>
              <ul className="space-y-3 pl-3 list-disc text-gray-700">
                <li>USA OPT Candidates</li>
                <li>Freshers</li>
                <li>Career Gap Professionals</li>
                <li>Working IT Professionals</li>
              </ul>
              <div className="mt-6">
                <Image
                  src="/images/services-training.png"
                  width={450}
                  height={300}
                  alt="TINITIATE Training"
                  className="rounded-xl shadow-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
       */}


<section id="about" className="py-20 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
      Why Choose TINITIATE?
    </h2>
    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* Left: Why Choose TINITIATE */}
      <div>
        <p className="text-gray-700 mb-6 leading-relaxed">
          With <strong>15+ years of hands-on IT experience</strong>, our training isn’t just theory—It's real-time knowledge paired with live projects, bonus technologies, and business domain immersion.
        </p>
        <ul className="space-y-3">
          {[
            'Expert faculty with deep industry background',
            'Structured training from basics to advanced',
            'Business domain training included',
            'Extensive hands-on exercises',
            'Bonus technologies taught free-of-cost',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: IT Development Services */}
      <div>
        <h4 className="text-xl font-bold mb-4 text-gray-900">
          IT Development Services
        </h4>
        <p className="text-gray-700 mb-4 leading-relaxed">
          From scalable backend systems to robust data pipelines and mobile apps, TINITIATE offers full-spectrum development services tailored to modern business needs.
        </p>
        <ul className="space-y-3">
          {[
            'Custom application development (Android, Web)',
            'Data engineering using AWS & Azure',
            'API integrations and backend systems',
            'IoT backend and message queue handling',
            'Comprehensive testing & deployment support',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Career Support
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {guidanceData.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div className="mb-4 bg-blue-100 p-3 rounded-full">
                <Icon className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc) => (
            <Link
              key={svc.href}
              href={svc.href}
              className="group relative rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all bg-white"
            >
              <Image
                src={svc.image}
                alt={svc.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-xl text-center text-gray-800">{svc.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    
    </main>
  )
}