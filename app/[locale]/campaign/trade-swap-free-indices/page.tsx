import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { HeroSectionRTL } from "@/components/hero-section-rtl"
import { CompactBenefits } from "@/components/compact-benefits"
import { HowToStart } from "@/components/how-to-start"
import { TrustHeading } from "@/components/trust-heading"
import { TwoColumnFeatures } from "@/components/two-column-features"
import { TradingPlatforms } from "@/components/trading-platforms"
import { AccountComparison } from "@/components/account-comparison"
import { WhyChooseAdss } from "@/components/why-choose-adss"
import { HeaderRTL } from "@/components/header-rtl"
import { FooterRTL } from "@/components/footer-rtl"

type PageProps = {
  params: Promise<{
    locale: string
  }>
}

export default async function SwapFreeIndicesPage({ params }: PageProps) {
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

  return (
    <div className="min-h-screen flex flex-col" dir={locale === "ar" ? "rtl" : "ltr"}>
      <Header locale={locale} />

      <main className="flex-1 pt-16">
        <HeroComponent
          headingImage={{
            src: "https://www.adss.com/wp-content/uploads/2025/02/TEXT-2-1024x178.png",
            alt: "Trade swap-free indices",
            width: 1504,
            height: 260,
          }}
          description="Trade major indices including US500, USNDX, GER40, UK100 and more without paying overnight fees for up to five days."
          primaryCta={{
            text: "Start trading",
            href: "https://my.adss.com/client-portal-web/signup/",
          }}
          secondaryCta={{
            text: "Try a demo",
            href: "https://www.adss.com/en/campaign/demo-account/",
          }}
          chartImage={{
            src: "https://www.adss.com/wp-content/uploads/2025/03/ADSS_platform2023_Indices.svg",
            alt: "ADSS platform indices",
          }}
        />

        <CompactBenefits
          items={[
            {
              icon: "https://www.adss.com/wp-content/uploads/2023/05/Knowledge_innovation.svg",
              heading: "Award-winning",
            },
            {
              icon: "https://www.adss.com/wp-content/uploads/2023/02/Charting_tools.svg",
              heading: "Up to 500:1 leverage",
            },
            {
              icon: "https://www.adss.com/wp-content/uploads/2023/02/Commission_free.svg",
              heading: "No commission",
            },
            {
              icon: "https://www.adss.com/wp-content/uploads/2023/05/Indexes.svg",
              heading: "Next-gen platform",
            },
          ]}
        />

        <HowToStart
          heading="How to start trading with ADSS"
          description="Follow these steps to set up your account, and start trading indices."
        />

        <TrustHeading />

        <TwoColumnFeatures
          backgroundColor="#f5f5f5"
          theme="light"
          columns={[
            {
              heading: "Tight spreads, zero commission",
              description:
                "At ADSS, we believe in transparent and fair trading conditions. Enjoy competitive spreads and trade major indices without paying commission fees.",
            },
            {
              heading: "A true Emirati broker",
              description:
                "Trade with confidence with a broker born in Abu Dhabi. Operating in the UAE since 2010, ADSS offers trusted, reliable brokerage services tailored to the local market.",
            },
          ]}
        />

        <TwoColumnFeatures
          backgroundColor="#f5f5f5"
          theme="light"
          columns={[
            {
              heading: "24/5 expert support",
              description:
                "Our support team is available around the clock, ready to assist. New traders benefit from personalised onboarding to master our platform, learn trading techniques, and optimise trades.",
            },
            {
              heading: "No deposit or withdrawal fees",
              description:
                "ADSS does not charge deposit or withdrawal fees allowing you to trade without worrying about extra costs.",
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
              tabTitle: "ADSS platform: Trade with confidence",
              tabDescription: "The platform with everything you need for fast & secure trading.",
            },
            {
              id: "mt4",
              heading: "Trusted. Reliable.",
              headingHighlight: "Bespoke",
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
              tabTitle: "MT4: A powerful trading partnership",
              tabDescription:
                "Get all the advantages of the award-winning MT4 platform with our competitive pricing, liquidity, and support",
            },
            {
              id: "mt5",
              heading: "For traders who want",
              headingHighlight: "more",
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
              tabTitle: "MT5: A next-generation trading platform",
              tabDescription:
                "Benefit from advanced charting, fast and precise execution tools, automatic trading, and more.",
            },
          ]}
        />

        <AccountComparison />

        <WhyChooseAdss />
      </main>

      <Footer />
    </div>
  )
}
