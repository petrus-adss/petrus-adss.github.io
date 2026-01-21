import { HeroSection } from "@/components/hero-section"
import { HeroSectionRTL } from "@/components/hero-section-rtl"
import Header from "@/components/header"
import HeaderRTL from "@/components/header-rtl"
import Footer from "@/components/footer"
import { FaqSection } from "@/components/faq-section"
import FeaturedIn from "@/components/featured-in"
import { AboutUs } from "@/components/about-us"
import { AboutUsRTL } from "@/components/about-us-rtl"
import { WhySwitchToAdss } from "@/components/why-switch-to-adss"
import { AccountComparison } from "@/components/account-comparison"
import { TradingPlatforms } from "@/components/trading-platforms"
import type { Metadata } from "next"

type PageProps = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  return {
    title: locale === "ar" ? "انتقل إلى ADSS واكسب 1000 دولار" : "Switch to ADSS and Earn $1,000",
  }
}

export default async function SwitchToAdssPage({ params }: PageProps) {
  const { locale } = await params

  const HeaderComponent = locale === "ar" ? HeaderRTL : Header
  const HeroComponent = locale === "ar" ? HeroSectionRTL : HeroSection
  const AboutUsComponent = locale === "ar" ? AboutUsRTL : AboutUs

  const faqs = [
    {
      id: "faq-1",
      question: "How do I get this welcome credit?",
      answer:
        "Open an account with ADSS, email your relationship manager with proof of the account you hold with another broker (such as your last account statement), and you will receive your ADSS welcome reward. We'll match your first deposit with us up to $1,000.",
    },
    {
      id: "faq-2",
      question: "Are you regulated in the MENA region?",
      answer: "We are regulated in the UAE by the Securities and Commodities Authority (SCA).",
    },
    {
      id: "faq-3",
      question: "How do I withdraw my welcome credit?",
      answer:
        "To be able to withdraw it, you need to trade a notional volume of $50,000,000. Don't worry, you'll receive your welcome credit after the first fund, and you'll be able to use it to trade with ADSS.",
    },
    {
      id: "faq-4",
      question: "What is the notional volume?",
      answer:
        "It's the total value of all your trades – not just the cash you deposit. Think of it like a super-powered multiplier! For example: Deposit $100, use 200:1 leverage, and you could place a gold trade of 1 lot (100 ounces, worth about $380,000). That entire $380,000 counts toward your notional volume.",
    },
    {
      id: "faq-5",
      question: "How do I contact support?",
      answer:
        "You can contact our experienced support team 24/5 via email at ts@adss.com or via phone at +971 2 657 2414.",
    },
  ]

  const platforms = [
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
      tabTitle: "ADSS Platform",
      tabDescription: "Trade with confidence - The platform with everything you need for fast & secure trading.",
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
      tabTitle: "MT5",
      tabDescription:
        "A next-generation trading platform - Benefit from advanced charting, fast and precise execution tools, automatic trading, and more.",
    },
  ]

  if (locale === "ar") {
    return (
      <div className="min-h-screen bg-[#0d1821]">
        <HeaderRTL />
        <HeroComponent
          headingImage={{
            src: "https://www.adss.com/wp-content/uploads/2025/11/ADSS-Switcher-Header-AR-1.svg",
            alt: "ADSS welcome offer",
          }}
          description="افتح حسابك اليوم وتداول بثقة – فقط موّل حسابك، وستحصل على رصيد ترحيبي يصل إلى 1,000 دولار."
          termsLink={{
            text: "*تُطبق الشروط والأحكام.",
            href: "https://www.adss.com/wp-content/uploads/2025/11/Bonus-Terms-Conditions-AR-11222025.pdf",
          }}
          chartImage={{
            src: "https://www.adss.com/wp-content/uploads/2023/04/Platform-page-promo-banner-03-1080w.png",
            alt: "ADSS trading platform",
          }}
          primaryCta={{
            text: "ابدأ التداول",
            href: "https://my.adss.com/client-portal-web/ar/signup/",
          }}
          secondaryCta={{
            text: "اختبر حسابنا التجريبي",
            href: "https://www.adss.com/ar/campaign/demo-account/",
          }}
        />
        <TradingPlatforms platforms={platforms} />
        <AccountComparison />
        <WhySwitchToAdss />
        <AboutUsComponent />
        <FeaturedIn />
        <FaqSection faqs={faqs} />
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0d1821]">
      <Header />
      <HeroComponent
        headingImage={{
          src: "https://www.adss.com/wp-content/uploads/2025/11/ADSS-Switcher-Header-11182025.svg",
          alt: "ADSS welcome offer",
        }}
        description="Simply open an account with us, deposit, and we'll match it with a welcome credit up to $1,000."
        termsLink={{
          text: "*T&Cs apply.",
          href: "https://www.adss.com/wp-content/uploads/2025/11/Bonus-Terms-Conditions-EN-11122025.pdf",
        }}
        chartImage={{
          src: "https://www.adss.com/wp-content/uploads/2023/04/Platform-page-promo-banner-03-1080w.png",
          alt: "ADSS trading platform",
        }}
        primaryCta={{
          text: "Start trading",
          href: "https://my.adss.com/client-portal-web/signup/",
        }}
        secondaryCta={{
          text: "Try a demo",
          href: "https://www.adss.com/en/campaign/demo-account/",
        }}
      />
      <TradingPlatforms platforms={platforms} />
      <AccountComparison />
      <WhySwitchToAdss />
      <AboutUsComponent />
      <FeaturedIn />
      <FaqSection faqs={faqs} />
      <Footer />
    </div>
  )
}
