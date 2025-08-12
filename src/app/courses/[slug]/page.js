// "use client"

// import { useEffect, useState } from 'react'
// import { useParams, notFound } from 'next/navigation'
// import Image from 'next/image'
// import { FaChalkboardTeacher, FaCode, FaBriefcase, FaUserTie, FaProjectDiagram, FaTools } from 'react-icons/fa'

// export default function CourseDetailPage() {
//   const { slug } = useParams()
//   const [course, setCourse] = useState(null)

//   useEffect(() => {
//     fetch('/courses/courses.json')
//       .then(res => res.json())
//       .then(data => {
//         const found = data.find((item) => item.slug === slug)
//         if (!found) return notFound()
//         setCourse(found)
//       })
//   }, [slug])

//   if (!course) {
//     return (
//       <div className="flex justify-center items-center min-h-[50vh] text-gray-600 text-lg bg-white">
//         Loading course...
//       </div>
//     )
//   }

//   return (
//  <main className="text-gray-800 w-full bg-white px-2 sm:px-4 md:px-8">
//       {/* Hero Section */}
//  <section className="w-full bg-gradient-to-br from-blue-100 to-white min-h-[50vh] flex items-center px-6 ">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full py-16">
//           <div className="relative w-full h-60 md:h-64">
//             <Image
//               src={course.image}
//               alt={course.title}
//               fill
//               className="object-contain rounded-xl shadow-md"
//             />
//           </div>
//           <div>
//             <h1 className="text-4xl font-extrabold text-blue-600 mb-4">{course.title}</h1>
//             <p className="text-lg text-gray-700 mb-4">{course.description}</p>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li><strong>📆 Duration:</strong> {course.duration}</li>
//               <li><strong>📊 Level:</strong> {course.level}</li>
//             </ul>
//             <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//               Enroll Now
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Learnings */}
//       <section className="py-14 px-6 max-w-6xl mx-auto bg-white ">
//         <h2 className="text-2xl font-bold text-gray-900 mb-6">What You&apos;ll Learn</h2>
//         <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6 text-gray-700">
//           {course.learnings.map((item, i) => (
//             <li key={i}>{item}</li>
//           ))}
//         </ul>
//       </section>

//       {/* Outcomes */}
//       {/* <section className="py-14 px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Outcomes</h2>
//           <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6 text-gray-700">
//             {course.outcomes.map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       </section> */}

//       {/* Course Offerings */}
//       {/* <section className="py-14 px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
//           <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6 text-gray-700">
//             {course.offerings.map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       </section> */}

//       {/* Offerings - Static with FontAwesome */}
//       <section className="py-14 px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-2xl font-bold text-gray-900 mb-10 ">What We Offer</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
//             <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
//               <FaCode className="text-3xl text-blue-600 mb-3" />
//               <p className="text-gray-800 font-semibold">Coding Tutorials</p>
//               <p className="text-sm text-gray-600 mt-2">Hands-on coding practices to build foundational and advanced programming skills.</p>
//             </div>
//             <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
//               <FaProjectDiagram className="text-3xl text-blue-600 mb-3" />
//               <p className="text-gray-800 font-semibold">Live Projects</p>
//               <p className="text-sm text-gray-600 mt-2">Work on real-world projects to showcase your expertise and enhance your portfolio.</p>
//             </div>
//             <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
//               <FaBriefcase className="text-3xl text-blue-600 mb-3" />
//               <p className="text-gray-800 font-semibold">Business Knowledge</p>
//               <p className="text-sm text-gray-600 mt-2">Understand real industry use-cases and domain-specific scenarios to gain business context.</p>
//             </div>
//             <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
//               <FaUserTie className="text-3xl text-blue-600 mb-3" />
//               <p className="text-gray-800 font-semibold">Interview Preparation</p>
//               <p className="text-sm text-gray-600 mt-2">Get mock interview sessions and tips to boost your confidence and success rate.</p>
//             </div>
//             <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
//               <FaChalkboardTeacher className="text-3xl text-blue-600 mb-3" />
//               <p className="text-gray-800 font-semibold">1:1 Mentorship</p>
//               <p className="text-sm text-gray-600 mt-2">Personal guidance from industry experts to help shape your learning journey.</p>
//             </div>
//             <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
//               <FaTools className="text-3xl text-blue-600 mb-3" />
//               <p className="text-gray-800 font-semibold">Placement Assistance</p>
//               <p className="text-sm text-gray-600 mt-2">Support with resume building, job search, and application to relevant roles.</p>
//             </div>
//           </div>
//         </div>
//       </section>

      
//     </main>
//   )
// }





"use client"

import { useEffect, useState } from 'react'
import { useParams, notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import {
  FaChalkboardTeacher,
  FaCode,
  FaBriefcase,
  FaUserTie,
  FaProjectDiagram,
  FaTools,
  
} from 'react-icons/fa'

export default function CourseDetailPage() {
  const { slug } = useParams()
  const [course, setCourse] = useState(null)

  useEffect(() => {
    fetch('/courses/courses.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find((item) => item.slug === slug)
        if (!found) return notFound()
        setCourse(found)
      })
  }, [slug])

  if (!course) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] text-gray-600 text-lg bg-white">
        Loading course...
      </div>
    )
  }

  return (
    <main className="text-gray-800 w-full bg-white px-2 sm:px-4 md:px-8">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-blue-100 to-white min-h-[50vh] flex items-center px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full py-16">
          <div className="relative w-full h-60 md:h-64">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-contain rounded-xl shadow-md"
            />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-blue-600 mb-4">{course.title}</h1>
            <p className="text-lg text-gray-700 mb-4">{course.description}</p>
            <ul className="space-y-2 text-sm text-gray-600 mb-4">
              <li><strong>📆 Duration:</strong> {course.duration}</li>
              <li><strong>📊 Level:</strong> {course.level}</li>
            </ul>
            {/* <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Enroll Now
            </button> */}

    <Link
  href={`/request-callback?course=${encodeURIComponent(course.title)}`}
  className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
  Enroll Now
</Link>
          </div>
        </div>
      </section>

      {/* Learnings */}
      {/* <section className="py-14 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What You&apos;ll Learn</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6 text-gray-700">
          {course.learnings.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section> */}

      {/* Course Structure */}
      {course.courseStructure && (
        <section className="py-14 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Course Structure</h2>
          <div className="space-y-6">
            {course.courseStructure.map((section, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">{section.title}</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  {section.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Offerings - Static with FontAwesome */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
              <FaCode className="text-3xl text-blue-600 mb-3" />
              <p className="text-gray-800 font-semibold">Coding Tutorials</p>
              <p className="text-sm text-gray-600 mt-2">
                Hands-on coding practices to build foundational and advanced programming skills.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
              <FaProjectDiagram className="text-3xl text-blue-600 mb-3" />
              <p className="text-gray-800 font-semibold">Live Projects</p>
              <p className="text-sm text-gray-600 mt-2">
                Work on real-world projects to showcase your expertise and enhance your portfolio.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
              <FaBriefcase className="text-3xl text-blue-600 mb-3" />
              <p className="text-gray-800 font-semibold">Business Knowledge</p>
              <p className="text-sm text-gray-600 mt-2">
                Understand real industry use-cases and domain-specific scenarios to gain business context.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
              <FaUserTie className="text-3xl text-blue-600 mb-3" />
              <p className="text-gray-800 font-semibold">Interview Preparation</p>
              <p className="text-sm text-gray-600 mt-2">
                Get mock interview sessions and tips to boost your confidence and success rate.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
              <FaChalkboardTeacher className="text-3xl text-blue-600 mb-3" />
              <p className="text-gray-800 font-semibold">1:1 Mentorship</p>
              <p className="text-sm text-gray-600 mt-2">
                Personal guidance from industry experts to help shape your learning journey.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
              <FaTools className="text-3xl text-blue-600 mb-3" />
              <p className="text-gray-800 font-semibold">Placement Assistance</p>
              <p className="text-sm text-gray-600 mt-2">
                Support with resume building, job search, and application to relevant roles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}