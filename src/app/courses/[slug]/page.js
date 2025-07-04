'use client'

import { useEffect, useState } from 'react'
import { useParams, notFound } from 'next/navigation'
import Image from 'next/image'

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
    <main className="text-gray-800 w-full bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-blue-100 to-white min-h-[50vh] flex items-center px-6 ">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full py-16">
          <div className="relative w-full h-72 md:h-80">
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
            <ul className="space-y-2 text-sm text-gray-600">
              <li><strong>📆 Duration:</strong> {course.duration}</li>
              <li><strong>📊 Level:</strong> {course.level}</li>
            </ul>
            <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-green-700 transition">
              Enroll Now
            </button>
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section className="py-14 px-6 max-w-6xl mx-auto bg-white ">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6 text-gray-700">
          {course.learnings.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Outcomes */}
      {/* <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Outcomes</h2>
          <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6 text-gray-700">
            {course.outcomes.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section> */}

      {/* Course Offerings */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
          <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6 text-gray-700">
            {course.offerings.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
