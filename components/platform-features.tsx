"use client"
import Image from "next/image"
import Link from "next/link"

interface Feature {
  title: string
  description: string
}

interface PlatformFeaturesProps {
  topHeading?: string
  topHeadingHighlight?: string
  heading: string
  description: string
  features: Feature[]
  image: string
  imageAlt?: string
  showAppButtons?: boolean
}

export function PlatformFeatures({
  topHeading = "The ultimate",
  topHeadingHighlight = "trading destination",
  heading,
  description,
  features,
  image,
  imageAlt = "Platform features",
  showAppButtons = true,
}: PlatformFeaturesProps) {
  return (
    <section className="py-12" style={{ backgroundColor: "#0d1821" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-[1340px] mx-auto">
          {/* Top heading - centered */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#ffffff" }}>
              {topHeading} <span style={{ color: "#00b570" }}>{topHeadingHighlight}</span>
            </h2>
          </div>

          {/* Two column layout */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Left column - Text content */}
            <div className="w-full md:w-1/2 text-center md:text-left px-5 md:px-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
                {heading}
              </h3>
              <p className="mb-6" style={{ color: "#ffffff" }}>
                {description}
              </p>

              {/* Features list with green bullets */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="relative pl-7">
                    {/* Green bullet icon */}
                    <div
                      className="absolute left-0 top-1"
                      style={{
                        width: "0.75rem",
                        height: "0.75rem",
                        backgroundImage:
                          "url('https://www.adss.com/wp-content/themes/eprefix-bootstrap/img/ADSS_BULLET.svg')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                      }}
                    />
                    <p className="m-0">
                      <strong style={{ color: "#00b570" }}>{feature.title} </strong>
                      <span style={{ color: "#ffffff" }}>{feature.description}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* App Store buttons */}
              {showAppButtons && (
                <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
                  <Link href="https://adss.go.link/9ggUS" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="https://www.adss.com/wp-content/uploads/2024/07/app-store-1.svg"
                      alt="Download on the App Store"
                      width={160}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </Link>
                  <Link href="https://adss.go.link/9ggUS" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="https://www.adss.com/wp-content/uploads/2024/07/google-play-badge-300x89.png"
                      alt="Get it on Google Play"
                      width={144}
                      height={43}
                      className="h-10 w-auto"
                    />
                  </Link>
                </div>
              )}
            </div>

            {/* Right column - Image */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <Image
                src={image || "/placeholder.svg"}
                alt={imageAlt}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
