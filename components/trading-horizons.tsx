import Image from "next/image"

interface TradingHorizon {
  icon: string
  title: string
  description: string
  linkText?: string
  linkUrl?: string
}

interface TradingHorizonsProps {
  title: string
  subtitle: string
  items: TradingHorizon[]
}

export function TradingHorizons({ title, subtitle, items }: TradingHorizonsProps) {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#0d1821" }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-white text-lg">{subtitle}</p>
          <div className="mt-6 h-px bg-gray-700" />
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* Icon container with fixed height */}
              <div className="h-24 flex items-start mb-4 overflow-hidden">
                <Image
                  src={item.icon || "/placeholder.svg"}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[#d8d8d8] leading-relaxed">
                  {item.description.split(item.linkText || "").map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && item.linkText && item.linkUrl && (
                        <a href={item.linkUrl} className="text-[#00b570] hover:underline">
                          {item.linkText}
                        </a>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
