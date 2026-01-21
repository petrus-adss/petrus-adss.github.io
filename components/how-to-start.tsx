interface Step {
  number: string
  title: string
  description: string
}

interface HowToStartProps {
  heading?: string
  description?: string
  buttonText?: string
  buttonLink?: string
  steps?: Step[]
}

export function HowToStart({
  heading = "How to start trading with ADSS",
  description = "Follow these steps to set up your account, and start trading.",
  buttonText = "Open account",
  buttonLink = "https://my.adss.com/client-portal-web/signup/",
  steps = [
    {
      number: "1",
      title: "Register",
      description: "Open your account, with UAE Pass available to UAE residents.",
    },
    {
      number: "2",
      title: "Fund",
      description: "Fund your account, through credit or debit cards, UAEPGS, Apple or Samsung Pay.",
    },
    {
      number: "3",
      title: "Trade",
      description: "Trade online at home, work or on the go. You're in control",
    },
  ],
}: HowToStartProps) {
  return (
    <section className="bg-[#0d1821] py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-[1340px]">
        <div className="bg-[#1c2f3f] rounded-2xl px-6 py-10 md:px-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left side - Content and CTA */}
            <div className="w-full md:w-5/12 text-center md:text-left md:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{heading}</h2>
              <p className="text-[#a7abab] mb-6 md:mb-8">{description}</p>
              <a
                href={buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#4a5568] hover:bg-[#5a6578] text-white font-medium px-8 py-3 rounded-full transition-colors"
              >
                {buttonText}
              </a>
            </div>

            {/* Right side - Steps */}
            <div className="w-full md:w-7/12">
              <div className="flex flex-col md:flex-row text-center text-white gap-8 md:gap-0">
                {steps.map((step, index) => (
                  <div key={step.number} className={`flex-1 ${index < steps.length - 1 ? "md:pr-4" : ""}`}>
                    <div className="mb-4 relative">
                      <div className="text-5xl md:text-6xl font-bold mb-2">{step.number}</div>
                      {/* Connector line - hidden on mobile, only show if not last step */}
                      {index < steps.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 left-[60%] w-[80%] h-[2px] bg-white/30" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-[#a7abab] text-sm leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
