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

// const navItems = [
//   { label: 'Home', href: '/' },
//   { label: 'Consulting Services', href: '/remote-consulting' },
//   { label: 'Work Experience Program', href: '/work-experience-program' },
//   { label: 'Development Services', href: '/it-development' },

//   {
//     label: 'Training',
//     href: '/training',
//     dropdown: [
//       { label: 'Personalized Training', href: '/training/personalized-training' },
//       { label: 'Corporate Training', href: '/training/corporate-training' },
//       { label: 'Campus Training', href: '/training/campus-training' },
//     ],
//   },

//   {
//     label: 'Company',
//     href: '/company',
//     dropdown: [
//       { label: 'About Us', href: '/company' },
//       {
//         label: 'FAQ',
//         href: '/faq',
//         dropdown: [
//           { label: 'Why TINITIATE', href: '/faq/why-tinitiate' },
//           { label: 'STEM Students', href: '/faq/students-stem' },
//           { label: 'Non-STEM Students', href: '/faq/students-nonstem' },
//           { label: 'Parents — STEM', href: '/faq/parents-stem' },
//           { label: 'Parents — Non-STEM', href: '/faq/parents-nonstem' },
//         ],
//       },
//     ],
//   },
// ];


//   const handleMouseEnter = () => {
//     clearTimeout(timeoutRef.current)
//     setShowDropdown(true)
//   }

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setShowDropdown(false)
//     }, 200)
//   }

//   return (
//     <header className="bg-white sticky top-0 z-50">
//       <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <Link href="/" className="block w-[140px] md:w-[170px] lg:w-[220px] xl:w-[220px]">
//           <Image
//             src="/images/tinitiatelogo.png"
//             alt="TINITIATE Logo"
//             width={594}
//             height={82}
//             className="h-auto w-full object-contain"
//             priority
//           />
//         </Link>

//         {/* Hamburger Menu Button: visible below 1536px */}
//         <button
//           className="max-[1280px]:block hidden text-gray-800"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         {/* Desktop Menu: visible only at or above 1536px */}
//         <ul className="hidden min-[1280px]:flex space-x-8 text-gray-800 relative">
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
//                     className="absolute left-0 top-full mt-2 bg-white rounded-lg shadow-lg w-64 z-50"
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
//                 className="hover:bg-[#f2f2f2] rounded-full px-1 py-2 transition cursor-pointer "
//                 onClick={() => router.push(item.href)}
//               >
//                 {item.label}
//               </li>
//             )
//           )}
//           <li>
//   <button
//     onClick={() => router.push('/request-callback')}
//     className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition text-sm font-medium"
//   >
//     Contact Us
//   </button>
// </li>

//         </ul>
//       </nav>

//       {/* Mobile Menu: visible only below 1536px */}
//       {isOpen && (
//         <ul className="min-[1280px]:hidden bg-white px-4 pb-4 space-y-4 text-gray-800">
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
//           <li>
//   <button
//     onClick={() => router.push('/request-callback')}
//     className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition text-sm font-medium"
//   >
//     Contact Us
//   </button>
// </li>

//         </ul>
//       )}
//     </header>
//   )
// }





// File: src/app/components/header.js
"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);      // mobile menu
  const [openMenu, setOpenMenu] = useState(null);   // desktop top-level dropdown key
  const [openSub, setOpenSub] = useState(null);     // desktop nested dropdown key
  const [expanded, setExpanded] = useState({});     // mobile top-level expansion
  const [expandedSub, setExpandedSub] = useState({}); // mobile nested expansion

  // --- close delay timers to prevent flicker on hover gaps ---
  const menuCloseTimer = useRef(null);
  const subCloseTimer = useRef(null);

  const startMenuClose = () => {
    clearTimeout(menuCloseTimer.current);
    menuCloseTimer.current = setTimeout(() => {
      setOpenMenu(null);
      setOpenSub(null);
    }, 180); // small cushion
  };
  const cancelMenuClose = () => clearTimeout(menuCloseTimer.current);

  const startSubClose = () => {
    clearTimeout(subCloseTimer.current);
    subCloseTimer.current = setTimeout(() => setOpenSub(null), 180);
  };
  const cancelSubClose = () => clearTimeout(subCloseTimer.current);

  const router = useRouter();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Consulting Services", href: "/remote-consulting" },
    { label: "Work Experience Program", href: "/work-experience-program" },
    { label: "Development Services", href: "/it-development" },

    {
      label: "Training",
      href: "/training",
      dropdown: [
        { label: "Personalized Training", href: "/training/personalized-training" },
        { label: "Corporate Training", href: "/training/corporate-training" },
        { label: "Campus Training", href: "/training/campus-training" },
      ],
    },

    {
      label: "Company",
      href: "/company",
      dropdown: [
        { label: "About Us", href: "/company" },
        {
          label: "FAQ",
          href: "/faq",
          dropdown: [
            { label: "Why TINITIATE", href: "/faq/why-tinitiate" },
            { label: "STEM Students", href: "/faq/students-stem" },
            { label: "Non-STEM Students", href: "/faq/students-nonstem" },
            { label: "Parents — STEM", href: "/faq/parents-stem" },
            { label: "Parents — Non-STEM", href: "/faq/parents-nonstem" },
          ],
        },
      ],
    },
  ];

  const toggleExpand = (key) =>
    setExpanded((p) => ({ ...p, [key]: !p[key] }));

  const toggleExpandSub = (key) =>
    setExpandedSub((p) => ({ ...p, [key]: !p[key] }));

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
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

        {/* Hamburger — visible below 1280px */}
        <button
          className="max-[1280px]:block hidden text-gray-800 p-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu — visible at/above 1280px */}
        <ul className="hidden min-[1280px]:flex space-x-2 text-gray-800 relative items-center">
          {navItems.map((item) => {
            const hasDropdown = Array.isArray(item.dropdown) && item.dropdown.length > 0;

            if (!hasDropdown) {
              return (
                <li key={item.href} className="px-1 py-1">
                  <Link
                    href={item.href}
                    className="px-4 py-2 rounded-full hover:bg-[#f2f2f2] transition inline-block whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            return (
              <li
                key={item.label}
                className="relative px-1 py-1"
                onMouseEnter={() => {
                  cancelMenuClose();
                  setOpenMenu(item.label);
                }}
                onMouseLeave={startMenuClose}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-4 py-2 rounded-full hover:bg-[#f2f2f2] transition"
                  aria-haspopup="true"
                  aria-expanded={openMenu === item.label}
                >
                  {item.label}
                  <ChevronDown size={16} />
                </button>

                {/* First-level dropdown */}
                {openMenu === item.label && (
                  <div
                    className="absolute left-0 top-full mt-2 bg-white rounded-lg shadow-lg w-64 z-50 border border-gray-200 p-2"
                    onMouseEnter={cancelMenuClose}
                    onMouseLeave={startMenuClose}
                  >
                    <ul className="text-sm">
                      {item.dropdown.map((sub) => {
                        const hasNested = Array.isArray(sub.dropdown) && sub.dropdown.length > 0;

                        if (!hasNested) {
                          return (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                className="block px-3 py-2 rounded-md hover:bg-gray-100"
                                onClick={() => {
                                  setOpenMenu(null);
                                  setOpenSub(null);
                                }}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          );
                        }

                        // Nested submenu (Company → FAQ → items)
                        return (
                          <li
                            key={sub.label}
                            className="relative"
                            onMouseEnter={() => {
                              cancelSubClose();
                              setOpenSub(sub.label);
                            }}
                            onMouseLeave={startSubClose}
                          >
                            <button
                              type="button"
                              className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-100"
                              aria-haspopup="true"
                              aria-expanded={openSub === sub.label}
                            >
                              {sub.label}
                              <ChevronRight size={16} />
                            </button>

                            {openSub === sub.label && (
                              <div
                                className="absolute left-full top-0 ml-2 w-64 rounded-lg border border-gray-200 bg-white shadow-lg p-2"
                                onMouseEnter={cancelSubClose}
                                onMouseLeave={startSubClose}
                              >
                                <ul className="text-sm">
                                  {sub.dropdown.map((leaf) => (
                                    <li key={leaf.href}>
                                      <Link
                                        href={leaf.href}
                                        className="block px-3 py-2 rounded-md hover:bg-gray-100"
                                        onClick={() => {
                                          setOpenMenu(null);
                                          setOpenSub(null);
                                        }}
                                      >
                                        {leaf.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}

          {/* Desktop CTA */}
          <li className="pl-2">
            <Link
              href="/request-callback"
              className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition text-sm font-medium"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu — visible below 1280px */}
      {isOpen && (
        <ul className="min-[1280px]:hidden bg-white px-4 pb-4 space-y-2 text-gray-800 border-t border-gray-100">
          {navItems.map((item) => {
            const hasDropdown = Array.isArray(item.dropdown) && item.dropdown.length > 0;

            if (!hasDropdown) {
              return (
                <li key={item.href} className="hover:bg-[#f2f2f2] rounded-md px-3 py-2 transition">
                  <Link href={item.href} onClick={() => setIsOpen(false)} className="block">
                    {item.label}
                  </Link>
                </li>
              );
            }

            const topKey = item.label;
            const isTopOpen = !!expanded[topKey];

            return (
              <li key={topKey} className="rounded-md">
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-100"
                  onClick={() => setExpanded((p) => ({ ...p, [topKey]: !p[topKey] }))}
                  aria-expanded={isTopOpen}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`transition-transform ${isTopOpen ? "rotate-180" : ""}`}
                    size={18}
                  />
                </button>

                {isTopOpen && (
                  <ul className="ml-3 mt-1 space-y-1 border-l border-gray-200 pl-3">
                    {item.dropdown.map((sub) => {
                      const hasNested = Array.isArray(sub.dropdown) && sub.dropdown.length > 0;

                      if (!hasNested) {
                        return (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className="block px-3 py-2 rounded-md hover:bg-gray-100 text-sm"
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        );
                      }

                      const subKey = `${topKey}::${sub.label}`;
                      const isSubOpen = !!expandedSub[subKey];

                      return (
                        <li key={subKey}>
                          <button
                            type="button"
                            className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-100 text-sm"
                            onClick={() => setExpandedSub((p) => ({ ...p, [subKey]: !p[subKey] }))}
                            aria-expanded={isSubOpen}
                          >
                            <span>{sub.label}</span>
                            <ChevronDown
                              className={`transition-transform ${isSubOpen ? "rotate-180" : ""}`}
                              size={16}
                            />
                          </button>

                          {isSubOpen && (
                            <ul className="ml-3 mt-1 space-y-1 border-l border-gray-200 pl-3">
                              {sub.dropdown.map((leaf) => (
                                <li key={leaf.href}>
                                  <Link
                                    href={leaf.href}
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100 text-sm"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {leaf.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}

          {/* Mobile CTA */}
          <li className="pt-2">
            <button
              onClick={() => {
                setIsOpen(false);
                router.push("/request-callback");
              }}
              className="bg-blue-600 text-white w-full px-5 py-2 rounded-full hover:bg-blue-700 transition text-sm font-medium"
            >
              Contact Us
            </button>
          </li>
        </ul>
      )}
    </header>
  );
}
