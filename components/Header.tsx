'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Promotional banner removed as per user request */}

      {/* Primary Header */}
      <header className="fixed left-0 z-9999 w-full bg-white transition-all duration-300 ease-in-out top-0">
        <div className="xl: relative flex items-center justify-between px-4 py-2 sm:px-8 xl:gap-7 xl:py-0 2xl:gap-0">
          {/* Logo */}
          <div className="flex w-full max-w-[165px] items-center">
            <Link className="inline-block" aria-label="logo" href="/">
              <img 
                src=" https://i.ibb.co/nqksxmsR/gemini-2-5-flash-image-preview-nano-banana-improve-the-make-it-Edited-Edited.png" 
                alt="Logo" 
                width="299" 
                height="5" 
                className="object-contain"
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className={`navbar duration-400 absolute right-4 top-full order-3 h-0 w-[288px] items-center justify-between xl:visible xl:static xl:order-2 xl:flex xl:h-auto xl:w-auto bg-white ${isMenuOpen ? 'visible' : 'invisible'}`}>
            <nav>
              <ul className="flex flex-col gap-0 xl:flex-row xl:items-center xl:gap-0">
                {/* Services Link */}
                <li className="group relative xl:py-5.5">
                  <Link
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg px-3.5 py-1.5 text-base font-medium text-black bg-white group-hover:bg-primary/[.04] group-hover:text-primary"
                    href="/services"
                  >
                    Services
                  </Link>
                </li>

                {/* About Us Link */}
                <li className="group relative xl:py-5.5">
                  <Link
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg px-3.5 py-1.5 text-base font-medium text-black bg-white group-hover:bg-primary/[.04] group-hover:text-primary"
                    href="/about"
                  >
                    About Us
                  </Link>
                </li>

                {/* Support Link */}
                <li className="group relative xl:py-5.5">
                  <Link
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg px-3.5 py-1.5 text-base font-medium text-black bg-white group-hover:bg-primary/[.04] group-hover:text-primary"
                    href="/support"
                  >
                    Support
                  </Link>
                </li>

                {/* Contact Link */}
                <li className="group relative xl:py-5.5">
                  <Link
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg px-3.5 py-1.5 text-base font-medium text-black bg-white group-hover:bg-primary/[.04] group-hover:text-primary"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Search and Controls */}
          <div className="order-2 flex flex-wrap items-center justify-end gap-6 xl:order-3 xl:w-auto">
            <div className="flex flex-wrap items-center gap-5">
              {/* Search Bar */}
              <div className="hidden sm:block">
                <div className="relative">
                  <label
                    htmlFor="searchButton"
                    className="flex h-11 w-[160px] cursor-text items-center rounded-lg border border-gray-3 bg-white pl-8 text-left text-body outline-none hover:bg-gray-1 xl:w-[140px] 2xl:w-[190px]"
                  >
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-body">
                      <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.93231 1.5786C3.25168 1.5786 1.0786 3.75168 1.0786 6.43231C1.0786 9.11294 3.25168 11.286 5.93231 11.286C8.61294 11.286 10.786 9.11294 10.786 6.43231C10.786 3.75168 8.61294 1.5786 5.93231 1.5786ZM0 6.43231C0 3.15599 2.65599 0.5 5.93231 0.5C9.20864 0.5 11.8646 3.15599 11.8646 6.43231C11.8646 7.87619 11.3487 9.19982 10.4912 10.2285L12.842 12.5794C13.0527 12.79 13.0527 13.1314 12.842 13.342C12.6314 13.5527 12.29 13.5527 12.0794 13.342L9.72849 10.9912C8.69982 11.8487 7.37619 12.3646 5.93231 12.3646C2.65599 12.3646 0 9.70864 0 6.43231Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    Search
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#B5B5B5]">⌘K</span>
                  </label>
                </div>
              </div>

              {/* Social Icons */}
              <div className="hidden sm:flex items-center gap-3">
                {/* Social media icons removed as per user request */}
              </div>

              {/* All-Access Pass Button */}
              <a
                href="#"
                className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-[#8B8CF8] text-white text-sm font-medium hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                All-Access Pass
              </a>

              {/* Sign In & Admin */}
              <div className="hidden sm:flex items-center gap-4">
              </div>

              {/* Mobile Menu Button */}
              <button
                className="xl:hidden bg-white rounded-md p-2 shadow-md"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 12H21M3 6H21M3 18H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}