"use client"

import { useState } from "react"
import Image from "next/image"

interface Feature {
  icon: string
  text: string
}

interface Platform {
  id: string
  heading: string
  headingHighlight: string
  features: Feature[]
  backgroundImage: string
  tabTitle: string
  tabDescription: string
}

interface TradingPlatformsProps {
  platforms: Platform[]
}

export function TradingPlatforms({ platforms }: TradingPlatformsProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#0d1821" }}>
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl text-white text-center mb-12 md:mb-16">
          <strong>Our Trading Platforms</strong>
        </h2>

        {/* Main Content Area with Background Image */}
        <div className="relative mb-12 md:mb-16">
          <div
            className="relative rounded-lg overflow-hidden"
            style={{
              backgroundImage: `url(${platforms[activeTab].backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Aspect ratio spacer - 40% padding creates the height */}
            <div className="block pt-[40%] md:pt-[40%]" />

            {/* Absolutely positioned content overlay */}
            <div className="absolute top-0 left-0 w-full h-full p-6 md:p-12 flex items-center">
              <div className="max-w-xl space-y-6 md:space-y-8">
                <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                  {platforms[activeTab].heading}{" "}
                  <span className="text-[#00FF00]">{platforms[activeTab].headingHighlight}</span>
                </h3>

                <ul className="space-y-3 md:space-y-4">
                  {platforms[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 md:gap-4">
                      <div className="flex-shrink-0 h-9 md:h-10 w-9 md:w-10 relative">
                        <Image
                          src={feature.icon || "/placeholder.svg"}
                          alt=""
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <p className="text-white text-base md:text-lg">{feature.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tabs with Gradient Bars */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {platforms.map((platform, index) => (
            <button
              key={platform.id}
              onClick={() => setActiveTab(index)}
              className="text-left pt-5 pb-4 px-0 transition-all duration-300 relative"
              style={{ fontWeight: 300 }}
            >
              <div
                className="absolute top-0 left-0 h-0.5 transition-all duration-300"
                style={{
                  width: "100%",
                  background: "linear-gradient(90deg, rgba(255,255,255,.4) 49%, rgba(255,255,255,0) 100%)",
                }}
              />

              {activeTab === index && (
                <div
                  className="absolute top-0 left-0 h-0.5"
                  style={{
                    width: "57.5%",
                    background: "linear-gradient(90deg, rgba(0,255,0,.6) 49%, rgba(255,255,255,0) 100%)",
                  }}
                />
              )}

              <h4
                className="mb-2 transition-colors duration-300"
                style={{ fontWeight: 400, fontSize: "1.15rem", lineHeight: "1.5rem" }}
              >
                <span className={activeTab === index ? "text-[#00FF00]" : "text-white"}>{platform.tabTitle}</span>
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">{platform.tabDescription}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
