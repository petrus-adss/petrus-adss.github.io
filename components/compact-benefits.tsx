"use client"

interface CompactBenefitsProps {
  items: {
    icon: string
    heading: string
  }[]
}

export function CompactBenefits({ items }: CompactBenefitsProps) {
  return (
    <div className="condensed_benefits condensed_benefits4" style={{ backgroundColor: "#0d1821" }}>
      <style jsx>{`
        .condensed_benefits .benefits-container::before {
          content: '';
          width: 100%;
          height: 1px;
          position: absolute;
          top: 0;
          opacity: 0.27;
          background: linear-gradient(90deg, rgba(0, 255, 0, 0) 0%, #00ff00 100%);
        }
        .condensed_benefits img {
          height: 1.75rem;
          width: auto;
        }
        @media (max-width: 767px) {
          .condensed_benefits img {
            height: 1.5rem;
          }
        }
      `}</style>
      <div className="container mx-auto px-4">
        <div className="benefits-container relative overflow-hidden max-w-[1340px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 md:mt-16">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col">
                <img src={item.icon || "/placeholder.svg"} alt="" className="self-start" />
                <div className="py-3">
                  <p>
                    <span style={{ color: "#ffffff" }}>
                      <strong>{item.heading}</strong>
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
