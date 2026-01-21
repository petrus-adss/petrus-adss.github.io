"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

interface AccountFeature {
  text: string
}

interface AccountType {
  name: string
  features: AccountFeature[]
  ctaUrl: string
}

interface AccountComparisonProps {
  title?: string
  accounts?: AccountType[]
}

export function AccountComparison({
  title = "Find the right account for you",
  accounts = [
    {
      name: "CLASSIC",
      features: [
        { text: "$100 min deposit" },
        { text: "Market Spreads" },
        { text: "500:1 Max Leverage" },
        { text: "24/5 Support" },
        { text: "Training courses" },
      ],
      ctaUrl: "https://my.adss.com/client-portal-web/signup/",
    },
    {
      name: "ELITE",
      features: [
        { text: "$25,000 min deposit" },
        { text: "25% lower spreads" },
        { text: "500:1 Max Leverage" },
        { text: "Dedicated Senior Manager" },
        { text: "+ Elite events" },
        { text: "Multi-base currency" },
      ],
      ctaUrl: "https://my.adss.com/client-portal-web/signup/",
    },
    {
      name: "PRO",
      features: [
        { text: "$25,000 deposit" },
        { text: "Spreads from zero pips" },
        { text: "Low commissions" },
        { text: "500:1 Max Leverage" },
        { text: "RM + Sales Trader" },
        { text: "+Elite events" },
      ],
      ctaUrl: "https://my.adss.com/client-portal-web/signup/",
    },
  ],
}: AccountComparisonProps) {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="9"
      viewBox="0 0 12 9"
      className="absolute left-0 top-1/2 -translate-y-1/2"
      style={{ width: "0.75rem", height: "0.5rem" }}
    >
      <path
        d="M1 4.5L4 7.5L11 1"
        stroke="#00ff00"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: "#0d1821" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 md:mb-16">{title}</h2>

        <div className="md:hidden space-y-2.5 max-w-2xl mx-auto">
          {accounts.map((account, index) => (
            <div
              key={index}
              className="relative px-5 py-4 rounded-lg"
              style={{
                background: "rgb(255 255 255 / 9%)",
              }}
            >
              {/* Decorative highlights for mobile */}
              <div className="absolute top-0 right-0 w-[7.6875rem] pointer-events-none">
                <Image
                  src="https://www.adss.com/wp-content/themes/eprefix-bootstrap/img/top_rt_green_flash.svg"
                  alt=""
                  width={123}
                  height={50}
                  className="w-full"
                />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[7.75rem] -bottom-2.5 pointer-events-none">
                <Image
                  src="https://www.adss.com/wp-content/themes/eprefix-bootstrap/img/green_flash.png"
                  alt=""
                  width={124}
                  height={50}
                  className="w-full"
                />
              </div>

              {/* Header with toggle */}
              <div className="flex justify-between items-center relative z-10">
                <h3 className="text-base font-normal text-white uppercase tracking-[0.2rem] mb-0">{account.name}</h3>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#141E26" }}
                  aria-label="Toggle account details"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 10.034 5.725"
                    className="h-1.5 transition-transform duration-250"
                    style={{
                      transform: openIndex === index ? "rotate(0deg)" : "rotate(180deg)",
                    }}
                  >
                    <path
                      d="M-4558.023,21340.8l4.664-4.664,4.663,4.664"
                      transform="translate(4558.376 -21335.426)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="1"
                    />
                  </svg>
                </button>
              </div>

              {/* Collapsible content */}
              {openIndex === index && (
                <div className="flex flex-col items-center pt-5">
                  <ul className="mb-10 w-full">
                    {account.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="relative py-1 pl-8 text-base text-white">
                        <CheckIcon />
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={account.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-12 py-3 rounded-full text-white font-medium transition-all mb-2"
                    style={{
                      border: "1px solid #00ff00",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#00ff00"
                      e.currentTarget.style.color = "#0d1821"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent"
                      e.currentTarget.style.color = "#ffffff"
                    }}
                  >
                    Open account
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {accounts.map((account, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center h-full rounded-lg"
              style={{
                background: "radial-gradient(circle, rgba(99,99,102,0.4) 0%, rgba(99,99,102,0.1) 100%)",
                padding: "2rem 1.5rem",
              }}
            >
              {/* Decorative highlight for desktop */}
              <div className="absolute left-1/2 -translate-x-1/2 w-[12.875rem] -top-2.5 pointer-events-none">
                <Image
                  src="https://www.adss.com/wp-content/themes/eprefix-bootstrap/img/white_flash.png"
                  alt=""
                  width={206}
                  height={50}
                  className="w-full"
                />
              </div>

              <div className="mb-auto w-full">
                <h3 className="text-xl font-normal text-white text-center uppercase mb-8 tracking-[0.2rem]">
                  {account.name}
                </h3>

                <ul className="mb-16">
                  {account.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="relative py-1 pl-8 text-xl text-white">
                      <CheckIcon />
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={account.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-3 rounded-full text-white font-medium transition-all"
                style={{
                  border: "1px solid #00ff00",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#00ff00"
                  e.currentTarget.style.color = "#0d1821"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.color = "#ffffff"
                }}
              >
                Open account
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
