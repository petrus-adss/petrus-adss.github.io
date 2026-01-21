interface CondensedBenefit {
  title: string
  description: string
}

interface CondensedBenefitsProps {
  heading: string
  highlight?: string
  description: string
  benefits: CondensedBenefit[]
  backgroundColor?: string
  topGradient?: string
}

export function CondensedBenefits({
  heading,
  highlight,
  description,
  benefits,
  backgroundColor = "#0d1821",
  topGradient = "linear-gradient(90deg, #636366 0%, rgba(99, 99, 102, 0) 100%)",
}: CondensedBenefitsProps) {
  return (
    <section className="condensed-benefits-section py-12 md:py-16" style={{ backgroundColor }}>
      <div className="container relative mx-auto overflow-hidden px-4">

        <div className="max-w-4xl">
          <h3 className="text-3xl font-bold text-white md:text-4xl">
            {heading} {highlight && <span className="text-[#00ff00]">{highlight}</span>}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-white md:text-lg">{description}</p>
        </div>
        
        <div className="condensed-benefits-divider mt-10" style={{ background: topGradient }} aria-hidden="true" />
        
        <div className="condensed-benefits-grid mt-10">
          {benefits.map((benefit, index) => (
            <article key={index} className="condensed-benefit-card">
              <h5 className="text-xl font-semibold text-white">{benefit.title}</h5>
              <p className="mt-3 text-white leading-relaxed">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
