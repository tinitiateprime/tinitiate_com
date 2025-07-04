// // src/app/it-development/page.jsx
// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'

// const itDevelopmentServices = [
//   {
//     title: 'Data Engineering',
//     duration: 'Project Based',
//     image: '/images/it-development/data-engineering.png',
//     description: 'Design and build scalable data pipelines and warehousing solutions using AWS, Azure, and modern data tools.',
//     href: '/it-development/data-engineering',
//   },
//   {
//     title: 'App Development',
//     duration: 'Custom Timeline',
//     image: '/images/it-development/app-development.jpg',
//     description: 'Build cross-platform mobile and web apps tailored to client needs with seamless UX and secure APIs.',
//     href: '/services/it-development/app-development',
//   },
//   {
//     title: 'Web/Backend Development',
//     duration: 'Project Based',
//     image: '/images/it-development/web-backend.png',
//     description: 'Develop scalable, secure backend systems and responsive web applications using modern frameworks.',
//     href: '/services/it-development/web-backend',
//   },
//   {
//     title: 'Testing and Support',
//     duration: 'Ongoing',
//     image: '/images/it-development/testing-support.png',
//     description: 'Ensure quality through automated/manual testing, bug fixing, and continuous support for deployments.',
//     href: '/services/it-development/testing-support',
//   },
// ]


// const developmentOverview = [
//     "We provide a wide range of IT development services designed to meet the diverse needs of modern businesses. Our data engineering expertise allows us to transform raw data into valuable insights, utilizing cloud platforms like Azure and AWS to build robust data pipelines and integrate various data sources efficiently.",
//     "In app development, we create custom applications tailored to your business requirements, focusing on both Android and iOS platforms. Our team ensures a seamless development process, delivering high-quality, user-friendly apps.",
//     "Our backend development services are focused on creating scalable and secure backend systems that support your applications. We specialize in developing IoT backend systems with message queues and offer API development on AWS and Azure to ensure smooth communication between your applications and external services.",
//     "To ensure your software's quality and reliability, we offer comprehensive testing and support services. Our testing includes both automated and manual methods to identify and fix issues, while our ongoing support ensures your applications remain up-to-date and secure."
//   ];
  

// function ServiceGrid({ title, services }) {
//     return (
//         <section className="py-20 px-6 bg-white">
//           <div className="max-w-7xl mx-auto">
//             <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">{title}</h2>
    
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//               {services.map(({ title, image, duration, description, href }) => (
//                 <div
//                   key={title}
//                   className="bg-gray-50 border hover:shadow-md rounded-2xl p-5 flex flex-col transition-all"
//                 >
//                   <div className="relative w-full h-40 mb-4 rounded overflow-hidden shadow-sm">
//                     <Image src={image} alt={title} fill className="object-cover rounded" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
//                   <p className="text-xs text-gray-500 mb-1">Timeline: {duration}</p>
//                   <p className="text-sm text-gray-700 flex-grow">{description}</p>
//                   <Link
//                     href={href}
//                     className="mt-4 text-sm font-medium inline-block px-4 py-2 rounded-full text-white bg-blue-400 hover:bg-blue-600 transition"
//                   >
//                     Explore Service
//                   </Link>
//                 </div>
//               ))}
//             </div>
    
//             {/* Overview Below Cards */}
//             <div className="mt-20 border-t pt-10">
//               <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
//                 Why Choose Our Development Services?
//               </h3>
//               <div className="max-w-4xl mx-auto space-y-5 text-gray-700 text-base leading-relaxed text-center">
//                 {developmentOverview.map((para, idx) => (
//                   <p key={idx}>{para}</p>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       )
//     }

// export default function ITDevelopmentPage() {
//   return (
//     <main className="text-gray-800">
//       <section className="bg-gradient-to-br from-blue-100 to-white py-20 text-center px-6">
//         <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-gray-900">IT Development Services</h1>
//         <p className="max-w-2xl mx-auto text-lg text-gray-700">
//           Explore our professional development services, offering end-to-end solutions in engineering, applications, backend systems, and deployment support.
//         </p>
//       </section>
//       <ServiceGrid title="Explore Our Expertise" services={itDevelopmentServices} />
//     </main>
//   )
// }







// // src/app/it-development/page.js
// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'

// const itDevelopmentServices = [
//   {
//     title: 'Data Engineering',
//     duration: 'Project Based',
//     image: '/images/it-development/data-engineering.png',
//     description: 'Design and build scalable data pipelines and warehousing solutions using AWS, Azure, and modern data tools.',
//     href: '/it-development/data-engineering',
//   },
//   {
//     title: 'App Development',
//     duration: 'Custom Timeline',
//     image: '/images/it-development/app-development.jpg',
//     description: 'Build cross-platform mobile and web apps tailored to client needs with seamless UX and secure APIs.',
//     href: '/it-development/app-development',
//   },
//   {
//     title: 'Web/Backend Development',
//     duration: 'Project Based',
//     image: '/images/it-development/web-backend.png',
//     description: 'Develop scalable, secure backend systems and responsive web applications using modern frameworks.',
//     href: '/it-development/web-backend',
//   },
//   {
//     title: 'Testing and Support',
//     duration: 'Ongoing',
//     image: '/images/it-development/testing-support.png',
//     description: 'Ensure quality through automated/manual testing, bug fixing, and continuous support for deployments.',
//     href: '/it-development/testing-support',
//   },
// ]

// const developmentOverview = [
//   "We provide a wide range of IT development services designed to meet the diverse needs of modern businesses. Our data engineering expertise allows us to transform raw data into valuable insights, utilizing cloud platforms like Azure and AWS to build robust data pipelines and integrate various data sources efficiently.",
//   "In app development, we create custom applications tailored to your business requirements, focusing on both Android and iOS platforms. Our team ensures a seamless development process, delivering high-quality, user-friendly apps.",
//   "Our backend development services are focused on creating scalable and secure backend systems that support your applications. We specialize in developing IoT backend systems with message queues and offer API development on AWS and Azure to ensure smooth communication between your applications and external services.",
//   "To ensure your software's quality and reliability, we offer comprehensive testing and support services. Our testing includes both automated and manual methods to identify and fix issues, while our ongoing support ensures your applications remain up-to-date and secure."
// ]

// function ServiceGrid({ title, services }) {
//   return (
//     <section className="py-20 px-6 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">{title}</h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map(({ title, image, duration, description, href }) => (
//             <div
//               key={title}
//               className="bg-gray-50 border hover:shadow-md rounded-2xl p-5 flex flex-col transition-all"
//             >
//               <div className="relative w-full h-40 mb-4 rounded overflow-hidden shadow-sm">
//                 <Image src={image} alt={title} fill className="object-cover rounded" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
//               <p className="text-xs text-gray-500 mb-1">Timeline: {duration}</p>
//               <p className="text-sm text-gray-700 flex-grow">{description}</p>
//               <Link
//                 href={href}
//                 className="mt-4 text-sm font-medium inline-block px-4 py-2 rounded-full text-white bg-blue-400 hover:bg-blue-600 transition"
//               >
//                 Explore Service
//               </Link>
//             </div>
//           ))}
//         </div>

//         <div className="mt-20 border-t pt-10">
//           <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
//             Why Choose Our Development Services?
//           </h3>
//           <div className="max-w-4xl mx-auto space-y-5 text-gray-700 text-base leading-relaxed text-center">
//             {developmentOverview.map((para, idx) => (
//               <p key={idx}>{para}</p>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default function ITDevelopmentPage() {
//   return (
//     <main className="text-gray-800">
//       <section className="bg-gradient-to-br from-blue-100 to-white py-20 text-center px-6">
//         <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-gray-900">IT Development Services</h1>
//         <p className="max-w-2xl mx-auto text-lg text-gray-700">
//           Explore our professional development services, offering end-to-end solutions in engineering, applications, backend systems, and deployment support.
//         </p>
//       </section>
//       <ServiceGrid title="Explore Our Expertise" services={itDevelopmentServices} />
//     </main>
//   )
// }












'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const itDevelopmentServices = [
  {
    title: 'Data Engineering',
    duration: 'Project Based',
    image: '/images/it-development/data-engineering.png',
    description: 'Design and build scalable data pipelines and warehousing solutions using AWS, Azure, and modern data tools.',
    href: '/it-development/data-engineering',
  },
  {
    title: 'App Development',
    duration: 'Custom Timeline',
    image: '/images/it-development/app-development.jpg',
    description: 'Build cross-platform mobile and web apps tailored to client needs with seamless UX and secure APIs.',
    href: '/it-development/app-development',
  },
  {
    title: 'Web/Backend Development',
    duration: 'Project Based',
    image: '/images/it-development/web-backend.png',
    description: 'Develop scalable, secure backend systems and responsive web applications using modern frameworks.',
    href: '/it-development/web-backend',
  },
  {
    title: 'Testing and Support',
    duration: 'Ongoing',
    image: '/images/it-development/testing-support.png',
    description: 'Ensure quality through automated/manual testing, bug fixing, and continuous support for deployments.',
    href: '/it-development/testing-support',
  },
]

const developmentOverview = [
  "We provide a wide range of IT development services designed to meet the diverse needs of modern businesses. Our data engineering expertise allows us to transform raw data into valuable insights, utilizing cloud platforms like Azure and AWS to build robust data pipelines and integrate various data sources efficiently.",
  "In app development, we create custom applications tailored to your business requirements, focusing on both Android and iOS platforms. Our team ensures a seamless development process, delivering high-quality, user-friendly apps.",
  "Our backend development services are focused on creating scalable and secure backend systems that support your applications. We specialize in developing IoT backend systems with message queues and offer API development on AWS and Azure to ensure smooth communication between your applications and external services.",
  "To ensure your software's quality and reliability, we offer comprehensive testing and support services. Our testing includes both automated and manual methods to identify and fix issues, while our ongoing support ensures your applications remain up-to-date and secure."
]

function ServiceGrid({ title, services, onCardClick }) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ title, image, duration, description, href }) => (
            <div
              key={title}
              onClick={() => onCardClick(href)}
              className="bg-gray-50 border hover:shadow-md rounded-2xl p-5 flex flex-col transition-all cursor-pointer"
            >
              <div className="relative w-full h-40 mb-4 rounded overflow-hidden shadow-sm">
                <Image src={image} alt={title} fill className="object-cover rounded" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
              <p className="text-xs text-gray-500 mb-1">Timeline: {duration}</p>
              <p className="text-sm text-gray-700 flex-grow">{description}</p>
              <span className="mt-4 text-sm font-medium inline-block px-4 py-2 rounded-full text-white bg-blue-400 hover:bg-blue-600 transition text-center">
                Explore Service
              </span>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t pt-10">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Why Choose Our Development Services?
          </h3>
          <div className="max-w-4xl mx-auto space-y-5 text-gray-700 text-base leading-relaxed text-center">
            {developmentOverview.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ITDevelopmentPage() {
  const router = useRouter()
  const pathname = usePathname()
  const [selectedService, setSelectedService] = useState(null)

  useEffect(() => {
    const match = itDevelopmentServices.find(service =>
      pathname === service.href
    )
    setSelectedService(match || null)
  }, [pathname])

  const handleNavigate = (href) => {
    router.push(href)
  }

  return (
    <main className="text-gray-800">
      <section className="bg-gradient-to-br from-blue-100 to-white py-20 text-center px-6">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-gray-900">IT Development Services</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Explore our professional development services, offering end-to-end solutions in engineering, applications, backend systems, and deployment support.
        </p>
      </section>

      {selectedService ? (
        <div className="max-w-4xl mx-auto py-16 px-6">
          <button
            onClick={() => router.push('/it-development')}
            className="text-sm text-blue-500 hover:underline mb-6"
          >
            ← Back to All Services
          </button>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="relative w-full h-60 mb-4">
              <Image src={selectedService.image} alt={selectedService.title} fill className="object-cover rounded" />
            </div>
            <h2 className="text-3xl font-bold mb-2">{selectedService.title}</h2>
            <p className="text-sm text-gray-500 mb-4">Timeline: {selectedService.duration}</p>
            <p className="text-base text-gray-700">{selectedService.description}</p>
          </div>
        </div>
      ) : (
        <ServiceGrid
          title="Explore Our Expertise"
          services={itDevelopmentServices}
          onCardClick={handleNavigate}
        />
      )}
    </main>
  )
}
