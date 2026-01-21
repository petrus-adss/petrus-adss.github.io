import { AboutUs } from "@/components/about-us"
import { AboutUsRTL } from "@/components/about-us-rtl"
import { BenefitsSection } from "@/components/benefits-section"
import { CondensedBenefits } from "@/components/condensed-benefits"
import { DemoPromo } from "@/components/demo-promo"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { FooterRTL } from "@/components/footer-rtl"
import { Header } from "@/components/header"
import { HeaderRTL } from "@/components/header-rtl"
import { HeroSection } from "@/components/hero-section"
import { HeroSectionRTL } from "@/components/hero-section-rtl"
import type { Metadata } from "next"

const heroDescription =
  "One of the world’s most popular trading platforms – now available through your local, Emirati broker. Benefit from advanced charting, fast execution tools, and more. Want to explore risk-free? Try a demo account with up to $5 million in virtual funds!"

const brokerBenefits = [
  {
    icon: "https://www.adss.com/wp-content/uploads/2025/06/MT5-Why-Trade-w-ADSS-Icons-1.svg",
    title: "Low spreads",
    description:
      "Trade confidently with ADSS’ competitive pricing that helps reduce your costs and boost your potential market returns.",
  },
  {
    icon: "https://www.adss.com/wp-content/uploads/2025/06/MT5-Why-Trade-w-ADSS-Icons-2.svg",
    title: "Market-leading leverage",
    description:
      "With leverage up to 500:1 you can increase your trading opportunities and unlock higher potential returns.",
  },
  {
    icon: "https://www.adss.com/wp-content/uploads/2025/06/MT5-Why-Trade-w-ADSS-Icons-3.svg",
    title: "Trusted Emirati broker",
    description:
      "Born in the UAE, we’ve been operating locally since 2010. Headquartered in Abu Dhabi and regulated by the SCA (licence no. 305027).",
  },
  {
    icon: "https://www.adss.com/wp-content/uploads/2025/06/MT5-Why-Trade-w-ADSS-Icons-4.svg",
    title: "No deposit or withdrawal fees",
    description: "Trade without worrying about extra costs—ADSS does not charge any deposit or withdrawal fees.",
  },
  {
    icon: "https://www.adss.com/wp-content/uploads/2025/06/MT5-Why-Trade-w-ADSS-Icons-7.svg",
    title: "Security of funds",
    description:
      "Your money is kept separate from our operational funds, giving you peace of mind that your funds are secure.",
  },
  {
    icon: "https://www.adss.com/wp-content/uploads/2025/06/MT5-Why-Trade-w-ADSS-Icons-6-A.svg",
    title: "24/5 support",
    description: "Get expert support 24 hours a day, five days a week, through phone, email, or WhatsApp.",
  },
]

const mt5Faqs = [
  {
    id: "mt5-faq-1",
    question: "How is MT5 different from MT4?",
    answer: (
      <>
        MT5 offers more timeframes, additional technical indicators, an integrated economic calendar, and access to a
        wider range of markets—making it the more advanced, versatile platform compared to MT4.
      </>
    ),
  },
  {
    id: "mt5-faq-2",
    question: "How do I open an MT5 account with ADSS?",
    answer: (
      <>
        Open a live or demo account directly on the ADSS website. Choose MT5 during onboarding, complete the fast
        verification, and you can start trading within minutes with 24/5 local support.
      </>
    ),
  },
  {
    id: "mt5-faq-3",
    question: "What markets can I trade on MT5?",
    answer: (
      <>
        With ADSS you can trade CFDs on forex, commodities, indices, equities, bonds, and cryptocurrencies—all from the
        same MT5 platform.
      </>
    ),
  },
  {
    id: "mt5-faq-4",
    question: "Is MT5 available on mobile and web?",
    answer: <>Yes. MT5 runs on desktop, iOS, Android, and any modern web browser so you can trade anytime, anywhere.</>,
  },
  {
    id: "mt5-faq-5",
    question: "How many charts and timeframes can I view?",
    answer: (
      <>
        MT5 supports up to 100 charts at once and gives you 21 different timeframes, ranging from 1-minute to 1-month
        intervals.
      </>
    ),
  },
  {
    id: "mt5-faq-6",
    question: "Does MT5 support automated trading?",
    answer: (
      <>
        Yes, MT5 fully supports automated trading through <strong>Expert Advisors (EAs)</strong> and offers advanced
        strategy tester tools so you can backtest and optimise your approach before going live.
      </>
    ),
  },
  {
    id: "mt5-faq-7",
    question: "Is MT5 secure?",
    answer: <>MT5 uses encryption protocols and secure data transmission to keep your trading sessions protected.</>,
  },
]

const mt5Benefits = [
  {
    title: "Advanced Analytical Tools",
    description:
      "It's built-in technical indicators, wide range of chart types, and 21 timeframes (ranging from minute to month) will provide you with more sophisticated options for market analysis and strategy development.",
  },
  {
    title: "Greater Efficiency and Performance",
    description:
      "Markets move in seconds, so make sure you don't miss out. MT5 delivers more efficient and faster execution, designed to handle larger data volumes and provide smoother operation.",
  },
  {
    title: "In-depth Economic Calendar",
    description:
      "Stay ahead of the game – keep on top of important market events that could impact your assets, such as Non Farm Payrolls and CPI numbers.",
  },
]

type PageProps = {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  return {
    title: locale === "ar" ? "تداول بذكاء مع ميتاتريدر 5" : "Trade Smarter with MetaTrader 5 | ADSS",
  }
}

export default async function Mt5CampaignPage({ params }: PageProps) {
  const { locale } = await params

  const HeroComponent = locale === "ar" ? HeroSectionRTL : HeroSection
  const AboutUsComponent = locale === "ar" ? AboutUsRTL : AboutUs

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0d1821]" dir={locale === "ar" ? "rtl" : "ltr"}>
      {locale === "ar" ? <HeaderRTL locale={locale} /> : <Header locale={locale} />}
      <main className="flex-1 pt-20">
        <div className="bg-[#0d1821]">
          <HeroComponent
            headingImage={{
              src:
                locale === "ar"
                  ? "https://www.adss.com/wp-content/uploads/2025/06/MT5-Header-AR-FINAL.svg"
                  : "https://www.adss.com/wp-content/uploads/2025/06/MT5-Header-EN-FINAL.svg",
              alt: locale === "ar" ? "MT5 with ADSS headline AR" : "MT5 with ADSS headline",
              width: 696,
              height: 473,
            }}
            description={heroDescription}
            primaryCta={{
              text: locale === "ar" ? "بدء التداول" : "Start trading",
              href: "https://my.adss.com/client-portal-web/signup/",
            }}
            secondaryCta={{
              text: locale === "ar" ? "تجربة حساب تجريبي" : "Try a demo",
              href: "https://www.adss.com/en/trade/mt5-demo-account/",
            }}
            chartImage={{
              src: "https://www.adss.com/wp-content/uploads/2025/06/MT5-Landing-Page-Header-Mobile.webp",
              alt: "MT5 trading interface preview",
            }}
          />
        </div>

        <section id="accounts">
          <BenefitsSection title="Why choose ADSS as your broker?" benefits={brokerBenefits} />
        </section>

        <section id="mt5-benefits">
          <CondensedBenefits
            heading="Why you should trade with"
            highlight="MT5"
            description="It's a next-generation trading platform built for serious traders. Whether you prefer manual trading or fully automated strategies, MT5 gives you the tools to execute with confidence. Trade with multiple features that let you fine-tune your strategy."
            benefits={mt5Benefits}
          />
        </section>

        <section id="demo-promo">
          <DemoPromo
            backgroundColor="#00b570"
            heading="Experience risk-free trading with our MT5 demo account"
            description="Test strategies, build confidence and get comfortable in real-market conditions — all before going live. Start your free demo with MT5 today."
            buttonText="Open demo account"
            buttonLink="https://www.adss.com/en/trade/mt5-demo-account/"
            image="https://www.adss.com/wp-content/uploads/2025/09/MT5-Platform-1.webp"
            imageAlt="MT5 Platform"
            variant="promo36"
          />
        </section>

        <section id="about-us">
          <AboutUsComponent />
        </section>

        <section id="faqs">
          <FaqSection faqs={mt5Faqs} />
        </section>
      </main>
      {locale === "ar" ? <FooterRTL /> : <Footer />}
    </div>
  )
}
