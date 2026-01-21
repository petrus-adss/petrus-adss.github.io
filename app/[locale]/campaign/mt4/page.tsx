import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { CompactBenefits } from "@/components/compact-benefits"
import { HeaderRTL } from "@/components/header-rtl"
import { FooterRTL } from "@/components/footer-rtl"
import { HeroSectionRTL } from "@/components/hero-section-rtl"
import { AboutUs } from "@/components/about-us"
import { AboutUsRTL } from "@/components/about-us-rtl"
import type { Metadata } from "next"

type PageProps = {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  return {
    title: locale === "ar" ? "منصة MT4 من إي دي إس إس" : "MT4 - ADSS",
  }
}

export default async function MT4Page({ params }: PageProps) {
  const { locale } = await params

  const heroProps = {
    headingImage: {
      src: "https://www.adss.com/wp-content/uploads/2023/05/06579f2c-trademt4-tag.png",
      alt: "Trade MT4",
      width: 647,
      height: 124,
    },
    description:
      "Take a view on a wide range of financial markets confidently with our innovative and bespoke version of the award-winning MT4 trading platform.",
    primaryCta: {
      text: "Start trading",
      href: "https://my.adss.com/client-portal-web/signup/",
    },
    secondaryCta: {
      text: "Try a demo",
      href: "https://www.adss.com/en/campaign/demo-account/",
    },
    chartImage: {
      src: "https://www.adss.com/wp-content/uploads/2023/02/adss_candlestick.png",
      alt: "ADSS Trading Chart",
    },
  }

  const benefits = [
    {
      icon: "https://www.adss.com/wp-content/uploads/2023/02/Competitive_prices.svg",
      heading: "Stop-loss tools",
    },
    {
      icon: "https://www.adss.com/wp-content/uploads/2023/02/Charting_tools.svg",
      heading: "Market scanner",
    },
    {
      icon: "https://www.adss.com/wp-content/uploads/2023/02/Commission_free.svg",
      heading: "Daily market reports",
    },
    {
      icon: "https://www.adss.com/wp-content/uploads/2023/02/Fund_Instantly.svg",
      heading: "Demo account",
    },
  ]

  const HeroComponent = locale === "ar" ? HeroSectionRTL : HeroSection
  const AboutUsComponent = locale === "ar" ? AboutUsRTL : AboutUs

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

  return (
    <div className="min-h-screen flex flex-col" dir={locale === "ar" ? "rtl" : "ltr"}>
      <Header locale={locale} />

      <main className="flex-1 pt-16">
        <HeroComponent {...heroProps} />
        <CompactBenefits items={benefits} />
        <AboutUsComponent />
      </main>

      <Footer />
    </div>
  )
}
