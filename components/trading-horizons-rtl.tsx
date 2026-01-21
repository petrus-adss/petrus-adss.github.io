import Image from "next/image"

interface TradingHorizon {
  icon: string
  title: string
  description: string
  linkText?: string
  linkUrl?: string
}

interface TradingHorizonsRtlProps {
  title?: string
  subtitle?: string
  items?: TradingHorizon[]
}

export function TradingHorizonsRtl({
  title = "وسّع آفاق التداول الخاصة بك مع ADSS",
  subtitle = "بفضل تقنياتنا المتقدمة وشراكاتنا العالمية الاستراتيجية، نوفر باقة متكاملة من المنتجات والخدمات التي تضم:",
  items = [
    {
      icon: "https://www.adss.com/wp-content/uploads/2023/04/ADSS_Forex-1.svg",
      title: "الفوركس",
      description:
        "مع توفر أكثر من 60 زوجاً من العملات، ستدخل إلى السوق الأكبر والأكثر سيولة في العالم. تداول الفوركس واستفد من فروقات الأسعار المنخفضة والتقلبات العالية والتداول على مدار 24 ساعة.",
    },
    {
      icon: "https://www.adss.com/wp-content/uploads/2023/04/icon_02-2.svg",
      title: "المؤشرات",
      description:
        "تتبع وتداول أداء المؤشرات العالمية الرئيسية. باستخدام عقود فروقات المؤشرات، يمكنكم المضاربة على تحرّكات الأسعار لقطاعات أو اقتصادات بأكملها.",
    },
    {
      icon: "https://www.adss.com/wp-content/uploads/2023/04/condensed.svg",
      title: "الأسهم",
      description:
        "تداول عقود الفروقات على بعض أكبر الشركات في العالم. استفد من تحرّكات الأسعار دون امتلاك الأسهم الفعلية مما يجعلها طريقة خفيفة التكلفة للوصول إلى سوق الأسهم.",
    },
    {
      icon: "https://www.adss.com/wp-content/uploads/2023/04/commodites_oil_icon_v2.svg",
      title: "السلع",
      description:
        "بعيداً عن الذهب، اكتشف سلعاً أخرى مثل الفضة والنفط والغاز الطبيعي. نوّع محفظتك الاستثمارية وتحوّط ضد تقلبات السوق باستخدام عقود الفروقات هذه.",
    },
  ],
}: TradingHorizonsRtlProps) {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#0d1821" }} dir="rtl">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-right">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-white text-lg">{subtitle}</p>
          <div className="mt-6 h-px bg-gray-700" />
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* Icon container with fixed height */}
              <div className="h-24 flex items-start justify-end mb-4 overflow-hidden">
                <Image
                  src={item.icon || "/placeholder.svg"}
                  alt={item.title}
                  width={28}
                  height={28}
                  style={{ width: "1.75rem", height: "1.75rem" }}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-right">
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

// Named export alias for consistency
export { TradingHorizonsRtl as TradingHorizonsRTL }
