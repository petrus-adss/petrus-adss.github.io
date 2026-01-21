interface Benefit {
  icon: string
  title: string
  description: string
}

interface BenefitsSectionProps {
  title: string
  benefits: Benefit[]
}

export function BenefitsSection({ title, benefits }: BenefitsSectionProps) {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h2>
        <div className="h-px bg-gray-200 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="mt-8 flex flex-col">
              <div className="mb-4 flex items-start">
                <img
                  src={benefit.icon || "/placeholder.svg"}
                  alt={benefit.title}
                  className="benefit-icon"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 py-3">
                <h4 className="text-xl font-bold text-[#00b570] mb-3">{benefit.title}</h4>
                <p className="text-[#0d1821] leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
