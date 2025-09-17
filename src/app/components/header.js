// // src/app/components/Header.jsx
// "use client"

// import { useState } from 'react'
// import Link from 'next/link'
// import { Menu, X } from 'lucide-react'

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false)

//   const navItems = [
//     { label: 'Home', href: '/' },
//     { label: 'Remote Consulting', href: '/remote-consulting' },
//     { label: 'Work Experience Program', href: '/work-experience' },
//     { label: 'IT Development Services', href: '/IT-Development-Services' },
//     { label: 'IT Training', href: '/It-training' },
//     { label: 'Company', href: '/company' },
//   ]

//   return (
//     <header className="bg-white  sticky top-0 z-50">
//       <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
//         <div className="text-2xl font-semibold text-black">TINITIATE</div>

//         {/* Hamburger menu button */}
//         <button
//           className="md:hidden text-gray-800"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         {/* Desktop Nav */}
//         <ul className="hidden md:flex space-x-8 text-gray-800">
//           {navItems.map((item) => (
//             <li key={item.href} className="hover:bg-[#f2f2f2] rounded-full px-4 py-2 transition">
//               <Link href={item.href}>{item.label}</Link>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden bg-white px-6 pb-4 space-y-4 text-gray-800">
//           {navItems.map((item) => (
//             <li key={item.href} className="hover:bg-[#f2f2f2] rounded-sm px-4 py-2 transition">
//               <Link href={item.href} onClick={() => setIsOpen(false)}>
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </header>
//   )
// }












// "use client"

// import { useState, useRef } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { useRouter } from 'next/navigation'
// import { Menu, X, ChevronDown } from 'lucide-react'

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [showDropdown, setShowDropdown] = useState(false)
//   const dropdownRef = useRef(null)
//   const timeoutRef = useRef(null)
//   const router = useRouter()

//   const navItems = [
//     { label: 'Home', href: '/' },
//     { label: 'Remote Consulting', href: '/remote-consulting' },
//     { label: 'Work Experience Program', href: '/work-experience-program' },
//     { label: 'IT Development Services', href: '/it-development' },
//     { label: 'IT Training', href: '/it-training' },
//     { label: 'Company', href: '/company' },
//   ]

//   const handleMouseEnter = () => {
//     clearTimeout(timeoutRef.current)
//     setShowDropdown(true)
//   }

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setShowDropdown(false)
//     }, 200) // Delay to allow pointer to move to dropdown
//   }

//   return (
//     <header className="bg-white sticky top-0 z-50 ">
//       <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
//         {/* <div className="text-2xl font-semibold text-black">TINITIATE</div> */}
//         <Link href="/" className="block w-[160px] md:w-[220px] lg:w-[260px] xl:w-[300px]">
//   <Image
//     src="/images/tinitiatelogo.png" // ensure your image is at public/images/logo.png
//     alt="TINITIATE Logo"
//     width={594}
//     height={82}
//     className="h-auto w-full object-contain"
//     priority
//   />
// </Link>



//         <button
//           className="md:hidden text-gray-800"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         <ul className="hidden md:flex space-x-8 text-gray-800 relative">
//           {navItems.map((item) =>
//             item.dropdown ? (
//               <li
//                 key={item.label}
//                 className="relative"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <div className="flex items-center gap-1 px-4 py-2 rounded-full hover:bg-[#f2f2f2] cursor-pointer transition">
//                   {item.label}
//                   <ChevronDown size={16} />
//                 </div>

//                 {showDropdown && (
//                   <ul
//                     ref={dropdownRef}
//                     className="absolute left-0 top-full mt-2 bg-white border rounded-lg shadow-lg w-64 z-50"
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     {item.dropdown.map((sub) => (
//                       <li
//                         key={sub.href}
//                         className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
//                         onClick={() => {
//                           setShowDropdown(false)
//                           router.push(sub.href)
//                         }}
//                       >
//                         {sub.label}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ) : (
//               <li
//                 key={item.href}
//                 className="hover:bg-[#f2f2f2] rounded-full px-1 py-2 transition cursor-pointer"
//                 onClick={() => router.push(item.href)}
//               >
//                 {item.label}
//               </li>
//             )
//           )}
//         </ul>
//       </nav>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden bg-white px-6 pb-4 space-y-4 text-gray-800">
//           {navItems.map((item) =>
//             item.dropdown ? (
//               <li key={item.label}>
//                 <span className="block font-semibold mb-1">{item.label}</span>
//                 <ul className="ml-4 space-y-2">
//                   {item.dropdown.map((sub) => (
//                     <li
//                       key={sub.href}
//                       className="hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer text-sm"
//                       onClick={() => {
//                         setIsOpen(false)
//                         router.push(sub.href)
//                       }}
//                     >
//                       {sub.label}
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ) : (
//               <li
//                 key={item.href}
//                 className="hover:bg-[#f2f2f2] rounded-sm px-4 py-2 transition cursor-pointer"
//                 onClick={() => {
//                   setIsOpen(false)
//                   router.push(item.href)
//                 }}
//               >
//                 {item.label}
//               </li>
//             )
//           )}
//         </ul>
//       )}
//     </header>
//   )
// }



















"use client"

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)
  const router = useRouter()

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Remote Consulting', href: '/remote-consulting' },
  { label: 'Work Experience Program', href: '/work-experience-program' },
  { label: 'IT Development Services', href: '/it-development' },
  // { label: 'IT Training', href: '/it-training' }, // keep your existing IT Training page
  {
    label: 'Training',
    href: '/training',
    dropdown: [
      // { label: 'New Batches', href: '/training/new-batches' },
      // { label: 'Online Training', href: '/training/online-training' },
      { label: 'IT Training', href: '/training/it-training' },
      { label: 'Personalized Training', href: '/training/personalized-training' },
      { label: 'Corporate Training', href: '/training/corporate-training' },
      // { label: 'Campus Training', href: '/training/campus-training' },
    ],
  },
  { label: 'Company', href: '/company' },
];


  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current)
    setShowDropdown(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false)
    }, 200)
  }

  return (
    <header className="bg-white sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="block w-[140px] md:w-[170px] lg:w-[220px] xl:w-[220px]">
          <Image
            src="/images/tinitiatelogo.png"
            alt="TINITIATE Logo"
            width={594}
            height={82}
            className="h-auto w-full object-contain"
            priority
          />
        </Link>

        {/* Hamburger Menu Button: visible below 1536px */}
        <button
          className="max-[1280px]:block hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu: visible only at or above 1536px */}
        <ul className="hidden min-[1280px]:flex space-x-8 text-gray-800 relative">
          {navItems.map((item) =>
            item.dropdown ? (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-1 px-4 py-2 rounded-full hover:bg-[#f2f2f2] cursor-pointer transition">
                  {item.label}
                  <ChevronDown size={16} />
                </div>

                {showDropdown && (
                  <ul
                    ref={dropdownRef}
                    className="absolute left-0 top-full mt-2 bg-white rounded-lg shadow-lg w-64 z-50"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.dropdown.map((sub) => (
                      <li
                        key={sub.href}
                        className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                        onClick={() => {
                          setShowDropdown(false)
                          router.push(sub.href)
                        }}
                      >
                        {sub.label}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li
                key={item.href}
                className="hover:bg-[#f2f2f2] rounded-full px-1 py-2 transition cursor-pointer "
                onClick={() => router.push(item.href)}
              >
                {item.label}
              </li>
            )
          )}
          <li>
  <button
    onClick={() => router.push('/request-callback')}
    className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition text-sm font-medium"
  >
    Contact Us
  </button>
</li>

        </ul>
      </nav>

      {/* Mobile Menu: visible only below 1536px */}
      {isOpen && (
        <ul className="min-[1280px]:hidden bg-white px-4 pb-4 space-y-4 text-gray-800">
          {navItems.map((item) =>
            item.dropdown ? (
              <li key={item.label}>
                <span className="block font-semibold mb-1">{item.label}</span>
                <ul className="ml-4 space-y-2">
                  {item.dropdown.map((sub) => (
                    <li
                      key={sub.href}
                      className="hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer text-sm"
                      onClick={() => {
                        setIsOpen(false)
                        router.push(sub.href)
                      }}
                    >
                      {sub.label}
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li
                key={item.href}
                className="hover:bg-[#f2f2f2] rounded-sm px-4 py-2 transition cursor-pointer"
                onClick={() => {
                  setIsOpen(false)
                  router.push(item.href)
                }}
              >
                {item.label}
              </li>
            )
          )}
          <li>
  <button
    onClick={() => router.push('/request-callback')}
    className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition text-sm font-medium"
  >
    Contact Us
  </button>
</li>

        </ul>
      )}
    </header>
  )
}