import { Header } from "@/components/header"
import { HeaderRTL } from "@/components/header-rtl"
import { FooterRTL } from "@/components/footer-rtl"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { HeroSectionRTL } from "@/components/hero-section-rtl"
import { CompactBenefits } from "@/components/compact-benefits"
import { TradingPlatforms } from "@/components/trading-platforms"
import { AccountComparison } from "@/components/account-comparison"
import { TradeSharesInfo } from "@/components/trade-shares-info"
import { AboutUs } from "@/components/about-us"
import FeaturedIn from "@/components/featured-in"
import { FaqSection } from "@/components/faq-section"
import type { Metadata } from "next"

type PageProps = {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  return {
    title: locale === "ar" ? "تداول الأسهم مع إي دي إس إس" : "Trade Shares with ADSS - ADSS",
  }
}

export default async function TradeSharesPage({ params }: PageProps) {
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

      <main className="flex-1">
        <HeroComponent
          headingImage={{
            src: "https://www.adss.com/wp-content/uploads/2023/05/tradeshares-tag.png",
            alt: "Trade Shares with ADSS",
            width: 500,
            height: 117,
          }}
          description="Invest in some of the world's biggest brands. Expand your portfolio with a range of equities including Apple, Nvidia, Netflix and more."
          primaryCta={{
            text: "Start trading",
            href: "https://my.adss.com/client-portal-web/signup/",
          }}
          secondaryCta={{
            text: "Try a demo",
            href: "https://www.adss.com/en/campaign/demo-account/",
          }}
          chartImage={{
            src: "https://www.adss.com/wp-content/uploads/2023/05/ADSS_platform2023_Equities_1080w.png",
            alt: "ADSS Trading platform showing equities",
          }}
        />

        <CompactBenefits
          items={[
            {
              icon: "https://www.adss.com/wp-content/uploads/2023/05/Indexes.svg",
              heading: "Ultra-low spreads",
            },
            {
              icon: "https://www.adss.com/wp-content/uploads/2023/02/Charting_tools.svg",
              heading: "Up to 20:1 leverage",
            },
            {
              icon: "https://www.adss.com/wp-content/uploads/2023/02/Commission_free.svg",
              heading: "No commission",
            },
            {
              icon: "https://www.adss.com/wp-content/uploads/2023/02/Fund_Instantly.svg",
              heading: "Fund instantly",
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
              tabTitle: "ADSS Platform",
              tabDescription:
                "Trade with confidence - The platform with everything you need for fast & secure trading.",
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
              tabTitle: "MT4",
              tabDescription:
                "A powerful trading partnership - Get all the advantages of the award-winning MT4 platform with our competitive pricing, liquidity, and support",
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
              tabTitle: "MT5",
              tabDescription:
                "A next-generation trading platform - Benefit from advanced charting, fast and precise execution tools, automatic trading, and more.",
            },
          ]}
        />

        <AccountComparison />

        <TradeSharesInfo />

        <AboutUs />

        <FeaturedIn />

        <FaqSection
          faqs={[
            {
              id: "item-1",
              question: "What payment method can I use?",
              answer:
                "Bank wire transfer, credit card, online bank transfer, and UAEPGS (for UAE bank account holders).",
            },
            {
              id: "item-2",
              question: "Are you regulated in the MENA region?",
              answer: "We are regulated in the UAE by the Securities and Commodities Authority (SCA).",
            },
            {
              id: "item-3",
              question: "How long does it take to fund my account?",
              answer:
                "You can fund your account in as little as 30 minutes using UAEPGS (for UAE bank account holders). Payments by credit card usually take place instantly. Alternatively, other payment options can take up to 48 hours to fund.",
            },
            {
              id: "item-4",
              question: "How do I withdraw?",
              answer:
                "You can withdraw funds from your account in multiple ways including bank wire transfer, credit card, online bank transfer, Skrill, Neteller and Cash U. We are also the only broker in the UAE to offer funding via UAEPGS.",
            },
            {
              id: "item-5",
              question: "What platforms are available to trade?",
              answer: "You can trade on our next-gen ADSS trading platform or our bespoke version of MT4.",
            },
            {
              id: "item-6",
              question: "What products are available to trade with ADSS?",
              answer: "You can trade with leverage currency pairs, equities, indices, commodities and more.",
            },
            {
              id: "item-7",
              question: "How do I contact support?",
              answer:
                "You can contact our experienced support team 24/5 via email at ts@adss.com or via phone at +971 2 657 2414.",
            },
            {
              id: "item-8",
              question: "What are your trading hours?",
              answer:
                "You can trade Monday to Friday, from when the markets open in Asia/Australia, along with the European markets, and all the way through to the close of trading in the US.",
            },
            {
              id: "item-9",
              question: "What is leveraged trading?",
              answer:
                "Leveraged trading involves borrowing money from a broker to increase the size of your position when placing a trade. At ADSS, we offer leverage of up to 333:1 on indices and 500:1 on FX pairs.",
            },
          ]}
        />
      </main>

      <Footer />
    </div>
  )
}
