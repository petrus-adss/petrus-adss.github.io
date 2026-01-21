import Link from "next/link"

interface HeroSectionRtlProps {
  headingImage: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  description: string
  termsLink?: {
    text: string
    href: string
  }
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  chartImage?: {
    src: string
    alt: string
  }
}

export function HeroSectionRtl({
  headingImage,
  description,
  termsLink,
  primaryCta,
  secondaryCta,
  chartImage,
}: HeroSectionRtlProps) {
  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: "#0d1821" }}>
      <div className="container">
        <div className="max-w-[1340px] mx-[-15px]">
          <div className="flex flex-col md:flex-row-reverse justify-between items-center" dir="rtl">
            {chartImage && (
              <div className="w-full md:w-1/2 md:px-4">
                <img
                  src={chartImage.src || "/placeholder.svg"}
                  alt={chartImage.alt}
                  className="w-full h-auto"
                  fetchPriority="high"
                />
              </div>
            )}

            <div className="w-full md:w-1/2 px-0 md:px-4">
              {/* Heading Image */}
              <div className="mt-8 md:mt-12">
                <img
                  src={headingImage.src || "/placeholder.svg"}
                  alt={headingImage.alt}
                  className="w-full h-auto"
                  width={headingImage.width || 566}
                  height={headingImage.height || 262}
                  fetchPriority="high"
                />
              </div>

              {/* Description */}
              <div className="mt-6">
                <h5 className="text-white text-base md:text-lg leading-relaxed text-right">
                  {description}{" "}
                  {termsLink && (
                    <Link href={termsLink.href} className="text-[#00b570] hover:underline">
                      {termsLink.text}
                    </Link>
                  )}
                </h5>
              </div>

              {/* CTA Buttons - RTL layout */}
              <div className="mt-8 md:mt-12 flex flex-wrap gap-3 items-center justify-end md:justify-start">
                <Link
                  href={primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block ml-8 md:ml-[50px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00FF00]"
                >
                  <span className="inline-flex items-center rounded-[10px] border border-[#00FF00] bg-[#00FF00] px-4 py-2 text-[#0d1821] font-normal transition-colors duration-200 group-hover:bg-transparent group-hover:text-[#00FF00]">
                    {primaryCta.text}
                  </span>
                  <span
                    className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center rounded-[10px] bg-[#0C6F5F] px-[11px] md:px-[14px] lg:px-[16px] xl:px-[18px] py-[0.68rem]"
                    style={{ left: "-2.77rem" }}
                  >
                    <span className="text-[#00FF00] leading-none" style={{ fontSize: "1.3rem" }}>
                      ‹
                    </span>
                  </span>
                </Link>

                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 py-2 px-1 text-white font-normal ml-6 md:ml-[22px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00FF00]"
                  >
                    <span
                      className="text-[#00FF00] leading-none transition-transform duration-200 group-hover:-translate-x-1"
                      style={{ fontSize: "1.3rem" }}
                    >
                      ‹
                    </span>
                    {secondaryCta.text}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { HeroSectionRtl as HeroSectionRTL }
