interface DemoPromoProps {
  backgroundColor?: string
  heading?: string
  description?: string
  buttonText?: string
  buttonLink?: string
  image?: string
  imageAlt?: string
  imageMobile?: string
  variant?: "default" | "promo36"
}

export function DemoPromo({
  backgroundColor = "#00b570",
  heading = "Practise with Our Free Demo",
  description = "Explore our platform and test your trading strategies with a free demo account. No risk, no commitment – just pure trading experience.",
  buttonText = "Open demo account",
  buttonLink = "https://www.adss.com/en/campaign/demo-account/",
  image = "https://www.adss.com/wp-content/uploads/2023/07/free_demo_account.png",
  imageAlt = "Free demo account",
  imageMobile,
  variant = "default",
}: DemoPromoProps) {
  const buttonClasses =
    variant === "promo36"
      ? "link1 inline-block text-center no-underline mt-2 md:mt-0"
      : "inline-block bg-[#262f37] text-white font-semibold border border-[#262f37] text-center no-underline mt-2 md:mt-0 min-w-[10rem] px-7 py-3 rounded-[2rem] hover:bg-[#1a2229] transition-colors"

  return (
    <section
      style={{ backgroundColor }}
      className={`py-12 md:py-16 ${variant === "promo36" ? "promo_banner promo_banner36" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-[1340px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left column - Text content */}
            <div className="w-full md:w-1/2 text-center md:text-left mb-7 md:mb-0">
              <div className="pb-5">
                <h2 className="text-[1.85rem] md:text-4xl lg:text-3xl text-white mb-4 leading-10 font-bold">{heading}</h2>
                {description && <p className="text-white text-lg leading-relaxed">{description}</p>}
              </div>
              <div className="flex flex-col md:flex-row justify-center md:justify-start">
                <a href={buttonLink} className={buttonClasses}>
                  {buttonText}
                </a>
              </div>
            </div>

            {/* Right column - Image */}
            <div className="w-full md:w-1/2">
              <img src={image || "/placeholder.svg"} alt={imageAlt} className="w-full h-auto hidden md:block" />
              <img src={imageMobile || image} alt={imageAlt} className="w-full h-auto md:hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
