"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

interface HeaderProps {
  locale?: string
}

export function Header({ locale = "en" }: HeaderProps) {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="menu_holder fixed top-0 left-0 right-0 z-50 w-full dark_menu bg-[#0D1821]">
      <div className="container mx-auto px-4 max-w-[1340px] h-full">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="ADSS Home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 166.63 71.51"
                className="h-10 w-auto"
                role="img"
                aria-labelledby="adssLogoTitle"
              >
                <title id="adssLogoTitle">ADSS logo</title>
                <g fill="currentColor">
                  <path
                    id="Path_15"
                    className="logo_colour"
                    d="M165.64,39a11.4,11.4,0,0,0-2.7-3.71,14.5,14.5,0,0,0-3.77-2.46,26.83,26.83,0,0,0-4.35-1.47,20.82,20.82,0,0,1-5.88-2.13,3.73,3.73,0,0,1-2.13-3.33,2.75,2.75,0,0,1,.43-1.48,3.82,3.82,0,0,1,1.2-1.2A6.23,6.23,0,0,1,152,22.1a10.12,10.12,0,0,1,2.68.36,14.7,14.7,0,0,1,2.39.91,19.44,19.44,0,0,1,1.69,1l5.56-5.56a2.44,2.44,0,0,0-.27-.29,13.74,13.74,0,0,0-2.63-1.92,19.28,19.28,0,0,0-3.95-1.51,20.59,20.59,0,0,0-5.36-.64,18.43,18.43,0,0,0-6.42,1,13.42,13.42,0,0,0-4.55,2.72,8.59,8.59,0,0,0-1.8,2.4,12.8,12.8,0,0,0-1,2.65c-2.09,9.07,3.68,12.47,5,13.29.16.1.48.3.73.43a17,17,0,0,0,4,1.54,28.78,28.78,0,0,1,6.8,2.45A3.86,3.86,0,0,1,157,44.43a3.53,3.53,0,0,1-.54,1.84,4,4,0,0,1-1.35,1.4,6,6,0,0,1-1.84.88,6.64,6.64,0,0,1-2,.3,10.82,10.82,0,0,1-3.25-.46,13,13,0,0,1-2.77-1.17,15.29,15.29,0,0,1-2.36-1.6c-.32-.27-.89-.76-1.16-1l0,.12V45a13.12,13.12,0,0,1-1.47,6.21,14.67,14.67,0,0,1-1.34,2.13,22.08,22.08,0,0,0,2.67,1.52,21,21,0,0,0,4.4,1.52,23.55,23.55,0,0,0,5.42.57,18.62,18.62,0,0,0,6-.94,15,15,0,0,0,4.83-2.63,13,13,0,0,0,3.23-4,10.68,10.68,0,0,0,1.2-5,13,13,0,0,0-1-5.37"
                  />
                  <path
                    id="Path_16"
                    className="logo_colour"
                    d="M84.27,56.16,69.42,15.36H59.35L44.51,56.16h9.65L64.39,28.05,74.62,56.16Z"
                  />
                  <path
                    id="Path_17"
                    className="logo_colour"
                    d="M112.38,36a24.27,24.27,0,0,0-1.6-9.23,16.81,16.81,0,0,0-4.46-6.42,18.41,18.41,0,0,0-6.8-3.73,28.63,28.63,0,0,0-8.58-1.22H73.67l2.09,5.72,4.75,13.16-.06-.16,4.41,12.24V23.5H90.4a15.87,15.87,0,0,1,5.6.88,9.88,9.88,0,0,1,6.18,6.43,16.33,16.33,0,0,1,.75,5.1,11.86,11.86,0,0,1-3.25,8.83A12.65,12.65,0,0,1,90.4,48h-5l3,8.2h2.48a28.65,28.65,0,0,0,8.58-1.25,18.72,18.72,0,0,0,6.8-3.8,17.67,17.67,0,0,0,4.49-6.3A22.16,22.16,0,0,0,112.38,36"
                  />
                  <path
                    id="Path_18"
                    className="logo_colour"
                    d="M 137.73 39.06 A 11.26 11.26 0 0 0 135 35.33 a 14.44 14.44 0 0 0 -3.8 -2.47 a 27.75 27.75 0 0 0 -4.37 -1.48 a 21.06 21.06 0 0 1 -5.9 -2.13 a 3.76 3.76 0 0 1 -2.14 -3.34 a 2.79 2.79 0 0 1 0.44 -1.49 a 3.75 3.75 0 0 1 1.2 -1.21 a 6.15 6.15 0 0 1 1.66 -0.83 a 6.5 6.5 0 0 1 1.91 -0.29 a 9.79 9.79 0 0 1 2.69 0.35 a 16.25 16.25 0 0 1 2.4 0.92 a 60.89 60.89 0 0 1 6.08 3.58 a 20.13 20.13 0 0 1 0.56 -4.77 a 16.44 16.44 0 0 1 1.14 -3 a 5.51 5.51 0 0 0 -0.7 -0.75 a 14.65 14.65 0 0 0 -2.71 -1.83 a 19.23 19.23 0 0 0 -4 -1.51 a 20.69 20.69 0 0 0 -5.38 -0.64 a 18.55 18.55 0 0 0 -6.44 1 a 13.53 13.53 0 0 0 -4.57 2.73 a 11.42 11.42 0 0 0 -2.32 3.15 a 19 19 0 0 1 3.07 5.07 A 26.37 26.37 0 0 1 115.54 36 c 0 0.25 0 0.49 0 0.77 c 0.12 0.06 0.2 0.14 0.32 0.2 a 19 19 0 0 0 4.2 1.58 A 29.2 29.2 0 0 1 126.86 41 a 3.88 3.88 0 0 1 2.18 3.5 a 3.67 3.67 0 0 1 -0.53 1.85 a 4.33 4.33 0 0 1 -1.36 1.4 a 6.3 6.3 0 0 1 -1.85 0.88 a 7 7 0 0 1 -2 0.3 a 11.27 11.27 0 0 1 -3.26 -0.46 a 13.91 13.91 0 0 1 -2.78 -1.18 a 16 16 0 0 1 -2.37 -1.62 c -0.32 -0.27 -0.6 -0.54 -0.89 -0.82 c 0 0.12 -0.08 0.27 -0.14 0.4 a 19.18 19.18 0 0 1 -4.77 6.67 L 109 52 c 0.31 0.28 0.61 0.55 1 0.83 A 21.15 21.15 0 0 0 113.52 55 A 21.7 21.7 0 0 0 118 56.51 a 23.66 23.66 0 0 0 5.44 0.57 a 18.78 18.78 0 0 0 6 -0.94 a 15.3 15.3 0 0 0 4.85 -2.65 a 12.81 12.81 0 0 0 3.24 -4 a 10.67 10.67 0 0 0 1.2 -5 a 13.15 13.15 0 0 0 -1 -5.4"
                  />
                  <path
                    id="Path_20"
                    className="logo_colour"
                    d="M47.09,71.51A42.17,42.17,0,0,1,34.64,55.65a47.15,47.15,0,0,1,.46-40.09A42,42,0,0,1,47.93,0a64.49,64.49,0,0,0-9.5,17A55.85,55.85,0,0,0,38,54.31a63.66,63.66,0,0,0,9.11,17.2"
                  />
                </g>
                <path
                  id="Path_19"
                  d="M20,68.56A55,55,0,0,1,20,48.9,63.52,63.52,0,0,1,38.43,14.2a55.1,55.1,0,0,1,16.31-11,117.86,117.86,0,0,0-13.49,13.6,91.07,91.07,0,0,0-17.5,32.93A116.71,116.71,0,0,0,20,68.57"
                  fill="#00b570"
                />
                <path
                  id="Path_21"
                  d="M73.66,40.05a55,55,0,0,1-18.17,7.52,63.53,63.53,0,0,1-39.12-3.8A55.1,55.1,0,0,1,0,32.88a117.94,117.94,0,0,0,17.73,7.28,91,91,0,0,0,37.13,3.6,116.64,116.64,0,0,0,18.8-3.71"
                  fill="#ff0000"
                />
              </svg>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("platform")}
              className="text-white hover:text-gray-300 transition-colors text-lg font-medium"
            >
              Platforms
            </button>
            <button
              onClick={() => scrollToSection("accounts")}
              className="text-white hover:text-gray-300 transition-colors text-lg font-medium"
            >
              Accounts
            </button>
            <button
              onClick={() => scrollToSection("about-us")}
              className="text-white hover:text-gray-300 transition-colors text-lg font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("faqs")}
              className="text-white hover:text-gray-300 transition-colors text-lg font-medium"
            >
              FAQ
            </button>
          </nav>

          {/* Right Side - Language & CTA */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors text-lg font-medium"
              >
                {locale.toUpperCase()}
                <ChevronDown className="h-4 w-4" />
              </button>
              {languageDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded shadow-lg py-1 min-w-[120px] z-50">
                  <a
                    href={typeof window !== "undefined" ? window.location.pathname.replace("/en/", "/ar/") : "/ar/"}
                    onClick={() => setLanguageDropdownOpen(false)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    AR العربية
                  </a>
                </div>
              )}
            </div>

            {/* Start Trading Button */}
            <a
              href="https://my.adss.com/client-portal-web/signup/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00ff7f] hover:bg-[#00e070] text-black font-medium px-6 py-2 rounded-full text-sm transition-colors rounded-pill janna_rg cta_btn"
            >
              Start trading
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
