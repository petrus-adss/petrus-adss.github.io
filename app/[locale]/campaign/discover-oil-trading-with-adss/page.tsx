import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeaderRTL } from "@/components/header-rtl"
import { FooterRTL } from "@/components/footer-rtl"
import { HeroSection } from "@/components/hero-section"
import { HeroSectionRTL } from "@/components/hero-section-rtl"
import { TextSection } from "@/components/text-section"
import { TrustHeading } from "@/components/trust-heading"
import { TwoColumnFeatures } from "@/components/two-column-features"
import { TradingPlatforms } from "@/components/trading-platforms"
import { TradingHorizons } from "@/components/trading-horizons"
import { DemoPromo } from "@/components/demo-promo"
import { AboutUs } from "@/components/about-us"
import { AboutUsRTL } from "@/components/about-us-rtl"
import { FaqSection } from "@/components/faq-section"
import type { Metadata } from "next"

type PageProps = {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    en: "Oil trading – Trade CFDs on Brent and WTI crude oil with ADSS",
    ar: "تداول النفط – تداول عقود الفروقات على خام برنت وخام غرب تكساس",
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
  }
}

export default async function OilTradingPage({ params }: PageProps) {
  const { locale } = await params

  if (locale === "ar") {
    return (
      <div className="min-h-screen flex flex-col" dir="rtl">
        <HeaderRTL locale={locale} />
        <main className="flex-1 pt-20 flex items-center justify-center">
          <p className="text-white text-2xl">المحتوى قريباً</p>
        </main>
        <FooterRTL />
      </div>
    )
  }

  const HeroComponent = locale === "ar" ? HeroSectionRTL : HeroSection
  const AboutUsComponent = locale === "ar" ? AboutUsRTL : AboutUs

  return (
    <div className="min-h-screen flex flex-col" dir={locale === "ar" ? "rtl" : "ltr"}>
      <Header locale={locale} />

      <main className="flex-1 pt-16">
        <HeroComponent
          headingImage={{
            src: "https://www.adss.com/wp-content/uploads/2025/04/2_Discover-oil-trading-with-ADSS-1024x178.png",
            alt: "Discover oil trading with ADSS",
            width: 737,
            height: 127,
          }}
          description={
            <>
              Buy or sell Brent and WTI CFDs, with leverage up to 100:1. Enjoy{" "}
              <strong className="text-[#00b570]">low spreads cut by up to 40%</strong> – plus zero commission fees and
              seamless trading on our advanced, sophisticated platforms.
            </>
          }
          primaryCta={{
            text: "Start trading",
            href: "https://my.adss.com/client-portal-web/signup/",
          }}
          secondaryCta={{
            text: "Try a demo",
            href: "https://www.adss.com/en/campaign/demo-account/",
          }}
          chartImage={{
            src: "https://www.adss.com/wp-content/uploads/2025/04/UK-OIL-1-1.svg",
            alt: "Trade Oil with ADSS",
          }}
        />

        <TextSection
          heading="Access global oil markets"
          content={
            <>
              <p>
                Crude oil is the world's most traded{" "}
                <a href="https://www.adss.com/en/markets/commodities/" className="text-[#00b570]">
                  commodity
                </a>{" "}
                contract, split across different standards including the UK's Brent and US West Texas Intermediate. With
                an ADSS oil trading account, you can trade{" "}
                <a href="https://www.adss.com/en/markets/commodities/uk-crude/" className="text-[#00b570]">
                  Brent
                </a>{" "}
                and{" "}
                <a href="https://www.adss.com/en/markets/commodities/us-crude/" className="text-[#00b570]">
                  WTI CFDs
                </a>{" "}
                and capitalise on energy market volatility and trends.
              </p>
              <p>
                Benefit from 24/5 market access, high liquidity, and consistent opportunities, whether you're looking to
                capture short-term moves or diversify your portfolio with a key global asset.
              </p>
            </>
          }
        />

        <TrustHeading />

        <TwoColumnFeatures
          theme="light"
          columns={[
            {
              heading: "Why trade oil with ADSS?",
              description:
                "Access competitive spreads, high leverage, and advanced trading platforms designed for both beginner and experienced traders.",
            },
            {
              heading: "24/5 market access",
              description:
                "Trade oil markets around the clock during the trading week, taking advantage of global market movements and volatility.",
            },
          ]}
        />

        <TwoColumnFeatures
          theme="light"
          columns={[
            {
              heading: "Low spreads",
              description:
                "Benefit from reduced spreads of up to 40% on oil CFDs, giving you better pricing and more competitive trading conditions.",
            },
            {
              heading: "High leverage",
              description:
                "Maximize your trading potential with leverage up to 100:1 on oil positions, while managing your risk effectively.",
            },
          ]}
        />

        <TradingPlatforms
          platforms={[
            {
              id: "adss",
              heading: "The ultimate",
              headingHighlight: "trading destination",
              features: [
                {
                  icon: "https://www.adss.com/wp-content/uploads/2023/05/Intuitive-Interface.svg",
                  text: "Powerfully intuitive",
                },
                {
                  icon: "https://www.adss.com/wp-content/uploads/2023/05/Dynamic-01.svg",
                  text: "Dynamic interface",
                },
                {
                  icon: "https://www.adss.com/wp-content/uploads/2023/05/Global-Markets.svg",
                  text: "Seamless trading",
                },
                {
                  icon: "https://www.adss.com/wp-content/uploads/2023/05/Emirati-Broker.svg",
                  text: "Comprehensive charting",
                },
              ],
              backgroundImage: "https://www.adss.com/wp-content/uploads/2025/03/Swap-Free-Platforms-ADSS-scaled.webp",
              imageAlt: "ADSS Trading Platform",
              tabTitle: "ADSS platform: Trade with confidence",
              tabDescription: "The platform with everything you need for fast & secure trading.",
            },
            {
              id: "mt4",
              heading: "Trusted. Reliable.",
              headingHighlight: "Bespoke.",
              features: [
                {
                  icon: "https://www.adss.com/wp-content/uploads/2023/05/Web-Platform.svg",
                  text: "Customised charting",
                },
                {
                  icon: "https://www.adss.com/wp-content/uploads/2023/05/Competitive-Spreads.svg",
                  text: "Spreads from zero",
                },
                {
                  icon: "https://www.adss.com/wp-content/uploads/2024/06/Innovative.svg",
                  text: "Expert advisors",
                },
                {
                  icon: "https://www.adss.com/wp-content/uploads/2023/05/Secure.svg",
                  text: "Risk management",
                },
              ],
              backgroundImage: "https://www.adss.com/wp-content/uploads/2025/03/Swap-Free-Platforms-MT4-scaled.webp",
              imageAlt: "MT4 Trading Platform",
              tabTitle: "MT4: A powerful trading partnership",
              tabDescription:
                "Get all the advantages of the award-winning MT4 platform with our competitive pricing, liquidity, and support",
            },
            {
              id: "mt5",
              heading: "For traders who want",
              headingHighlight: "more.",
              features: [
                {
                  icon: "https://www.adss.com/wp-content/uploads/2023/05/technical-indicators3.svg",
                  text: "Advanced analytical tools",
                },
                {
                  icon: "https://www.adss.com/wp-content/uploads/2025/03/MT5-AnalyticalTools.svg",
                  text: "More technical indicators",
                },
                {
                  icon: "https://www.adss.com/wp-content/uploads/2023/05/economic-calendar.svg",
                  text: "In-depth economic calendar",
                },
                {
                  icon: "https://www.adss.com/wp-content/uploads/2025/03/MT5-EAs.svg",
                  text: "Expert Advisors (EAs)",
                },
              ],
              backgroundImage: "https://www.adss.com/wp-content/uploads/2025/03/Swap-Free-Platforms-MT51-scaled.webp",
              imageAlt: "MT5 Trading Platform",
              tabTitle: "MT5: A next-generation trading platform",
              tabDescription:
                "Benefit from advanced charting, fast and precise execution tools, automatic trading, and more.",
            },
          ]}
        />

        <TradingHorizons
          title="Expand your trading horizons with ADSS"
          subtitle="Our state-of-the-art technology and the power of our global partnerships combine to deliver the following:"
          items={[
            {
              icon: "https://www.adss.com/wp-content/uploads/2023/04/ADSS_Forex-1.svg",
              title: "Forex",
              description:
                "With over 60 currency pairs available, enter the world's largest and most liquid market. Trade forex and benefit from tight spreads, 24-hour trading, and high volatility.",
              linkText: "forex",
              linkUrl: "https://www.adss.com/en/campaign/master-the-forex-market-with-adss/",
            },
            {
              icon: "https://www.adss.com/wp-content/uploads/2023/04/icon_02-2.svg",
              title: "Indices",
              description:
                "Track and trade the performance of major global market indices. With indices CFDs, you can speculate on price movements of entire sectors or economies.",
              linkText: "indices",
              linkUrl: "https://www.adss.com/en/campaign/trade-swap-free-indices/",
            },
            {
              icon: "https://www.adss.com/wp-content/uploads/2023/04/condensed.svg",
              title: "Shares",
              description:
                "Trade CFDs on some of the world's biggest companies. Take advantage of price movements without owning the actual shares, making it a more affordable way to access the stock market.",
              linkText: "shares",
              linkUrl: "https://www.adss.com/en/campaign/trade-shares-with-adss/",
            },
            {
              icon: "https://www.adss.com/wp-content/uploads/2023/04/commodites_oil_icon_v2.svg",
              title: "Commodities",
              description:
                "Beyond gold, explore other commodities like silver, oil, and natural gas. Diversify your portfolio and hedge against market volatility with these CFDs.",
              linkText: "oil",
              linkUrl: "https://www.adss.com/en/campaign/discover-oil-trading-with-adss/",
            },
          ]}
        />

        <DemoPromo />

        <AboutUsComponent />

        <FaqSection
          faqs={[
            {
              id: "faq-1",
              question: "What is a spread in oil trading and how does it affect my energy trading experience?",
              answer:
                "The spread is the difference between the buy (ask) and sell (bid) price of a financial asset. At ADSS, we offer competitive spreads on both Brent (UKCRUDE) and West Texas Intermediate (USCRUDE) contracts, allowing oil traders to enter and exit positions efficiently, with minimal cost. Our transparent pricing structure for commodity contracts ensures you know exactly what you're paying with no hidden fees or commissions.",
            },
            {
              id: "faq-2",
              question: "When can I trade oil CFDs in global energy markets?",
              answer:
                "Oil CFDs are available for trading during market hours, typically running 23 hours a day, five days a week. Energy trading opens on Sunday evening (UAE time) and continues until Friday evening, giving you plenty of opportunities to respond to oil demand fluctuations, geopolitical events, and financial markets developments that affect both Brent and West Texas Intermediate prices. During major holidays trading hours may be altered, so we recommend checking our platform or contacting customer support for live information on when to trade oil CFDs.",
            },
            {
              id: "faq-3",
              question: "How can I manage risk when using leverage to trade oil CFD commodity contracts?",
              answer:
                "Leveraged trading allows traders to open large directional positions with less capital, starting from $100. Because leverage increases the size of losses as well as gains, basic risk management practise is important. For example, implementing stop-loss orders to automatically close positions or limiting position sizes to a small percentage of your overall capital. ADSS offer CFD trading in multiple classes, so you can diversify your portfolio beyond global energy markets.",
            },
          ]}
        />
      </main>

      <Footer />
    </div>
  )
}
