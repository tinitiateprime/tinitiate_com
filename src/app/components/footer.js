"use client"

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t pt-10 pb-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-gray-700 text-sm">
        
        {/* Company Intro */}
        <div>
        <Link href="/" className="block w-[160px] md:w-[220px] lg:w-[260px] xl:w-[300px] mb-3">
  <img
    src="/images/tinitiatelogo.png" // Make sure your logo exists at public/images/logo.png
    alt="TINITIATE Logo"
    className="w-full h-auto object-contain"
  />
</Link>

          <h4 className="text-base font-semibold text-gray-900 mb-3">
            TECHNICAL INITIATE Technologies Pvt Ltd
          </h4>
          <p className="leading-relaxed">
          TINITIATE is a leading IT consulting, development and training company, dedicated to empowering businesses with cutting-edge technology solutions and high-quality professional training. A highly experienced team with years of expertise in IT services, database management, and cloud computing, we deliver tailored solutions to meet the evolving demands of enterprises worldwide.


          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-base font-semibold text-gray-900 mb-3">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-blue-600 transition">About Us</Link>
            </li>
            <li>
              <Link href="/pricing-policy" className="hover:text-blue-600 transition">Pricing Policy</Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-600 transition">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/refund-policy" className="hover:text-blue-600 transition">Refund Policy</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-blue-600 transition">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-base font-semibold text-gray-900 mb-3">Contact Us</h4>
          <address className="not-italic space-y-3">
            <div>
              <span className="font-medium">Head Office:</span><br />
              Plot No. B 503, Ace Ajanta,<br />
              Beside Indu Aranya, Nagole,<br />
              Hayathnagar, R.R. – 500068,<br />
              Telangana, India
            </div>
            <div>
              📧 <a href="mailto:contact@tinitiate.com" className="hover:text-blue-600 transition">contact@tinitiate.com</a>
            </div>
            <div>
              <span className="font-medium">USA:</span> +1 (973) 653-6870, +1 (206) 802-4102
            </div>
            <div>
              <span className="font-medium">India:</span> +91 95534 95553
            </div>
          </address>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} TINITIATE Technologies Pvt Ltd. All rights reserved.
      </div>
    </footer>
  )
}
