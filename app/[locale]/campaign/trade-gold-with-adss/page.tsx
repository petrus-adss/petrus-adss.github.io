import { Header } from "@/components/header"
import { HeaderRTL } from "@/components/header-rtl"
import { Footer } from "@/components/footer"
import { FooterRTL } from "@/components/footer-rtl"
import { FaqSection } from "@/components/faq-section"
import { HowToStart } from "@/components/how-to-start"
import { HeroSection } from "@/components/hero-section"
import { HeroSectionRTL } from "@/components/hero-section-rtl"
import { BenefitsSection } from "@/components/benefits-section"
import { PlatformFeatures } from "@/components/platform-features"
import { TradingHorizons } from "@/components/trading-horizons"
import { TradingHorizonsRTL } from "@/components/trading-horizons-rtl"
import { DemoPromo } from "@/components/demo-promo"
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
    title: locale === "ar" ? "تداول الذهب بفروقات أسعار ثابتة" : "Trade Gold with fixed spreads - ADSS",
  }
}

export default async function TradeGoldPage({ params }: PageProps) {
  const { locale } = await params

  const heroProps =
    locale === "ar"
      ? {
          headingImage: {
            src: "https://www.adss.com/wp-content/uploads/2025/09/Gold-Fixed-Spreads-Header-AR4-768x498.webp",
            alt: "تداول الذهب بفروقات أسعار ثابتة",
            width: 768,
            height: 498,
          },
          description:
            "شهدت أسعار الذهب في عام 2025 ارتفاعات قوية فتحت آفاقاً واسعة لفرص استثمارية واعدة. افتح حسابك اليوم واستفد من عرضنا المُميز لتداول المعدن الثمين كعقود فروقات بسبريد ثابت عند 20 سنتاً. تُطبّق الشروط والأحكام.",
          termsLink: {
            text: "",
            href: "#faq",
          },
          primaryCta: {
            text: "ابدأ التداول",
            href: "https://my.adss.com/client-portal-web/signup/",
          },
          secondaryCta: {
            text: "جرّب حساباً تجريبياً",
            href: "https://demo.adss.com/signup",
          },
          chartImage: {
            src: "https://www.adss.com/wp-content/uploads/2025/09/Gold-Fixed-Spreads-Header-AR6.png",
            alt: "رسم بياني لتداول الذهب",
          },
        }
      : {
          headingImage: {
            src: "https://www.adss.com/wp-content/uploads/2025/08/Gold-Fixed-Spreads-Header-Elements-03B-1024x474.webp",
            alt: "Trade Gold with Fixed Spreads",
            width: 566,
            height: 262,
          },
          description:
            "Gold prices have soared in 2025. Ready to trade? Open an account today and buy or sell the precious metal as a CFD with spreads fixed at 20 cents.",
          termsLink: {
            text: "*T&Cs apply.",
            href: "#faq",
          },
          primaryCta: {
            text: "Start trading",
            href: "https://my.adss.com/client-portal-web/signup/",
          },
          secondaryCta: {
            text: "Try a demo",
            href: "https://demo.adss.com/signup",
          },
          chartImage: {
            src: "https://www.adss.com/wp-content/uploads/2025/08/Gold-Fixed-Spreads-Header-Elements-02A.webp",
            alt: "Gold Trading Chart",
          },
        }

  const goldBenefits = [
    {
      icon: "https://www.adss.com/wp-content/uploads/2023/08/D22593-ADSS-Web-Icons-Amends-tradegold.png",
      title: "New fixed spreads",
      description:
        "New from ADSS – we've locked in our gold spreads at 20 cents to help you reduce your costs and boost your potential returns.",
    },
    {
      icon: "https://www.adss.com/wp-content/uploads/2023/08/iconAsset-12.svg",
      title: "Market-leading leverage",
      description:
        "With leverage up to 200:1 you increase your trading opportunities and open the door to potential higher returns.",
    },
    {
      icon: "https://www.adss.com/wp-content/uploads/2023/08/iconAsset-3.svg",
      title: "Trusted Emirati broker",
      description:
        "Born in the UAE, we've been operating locally since 2010, giving us a strong edge in market knowledge and client trust.",
    },
    {
      icon: "https://www.adss.com/wp-content/uploads/2023/08/D22593-ADSS-Web-Icons-Amends-No_Commission.png",
      title: "No deposit or withdrawal fees",
      description:
        "ADSS does not charge deposit or withdrawal fees allowing you to trade without worrying about extra costs.",
    },
    {
      icon: "https://www.adss.com/wp-content/uploads/2023/08/iconAsset-1.svg",
      title: "Advanced trading platform",
      description:
        "Experience our next-generation platform with a seamless, user-friendly interface designed to support your trading strategy.",
    },
    {
      icon: "https://www.adss.com/wp-content/uploads/2023/08/D22593-ADSS-Web-Icons-Amends-live_chat_support.png",
      title: "24/5 support",
      description:
        "Get expert support through phone, email, or chat from our friendly team. They've been supporting traders in the UAE for 15 years.",
    },
  ]

  const platformFeatures = [
    {
      title: "Intuitive interface",
      description:
        "Keep your trading streamlined and simple with a powerful yet easy-to-navigate interface that is fast and secure.",
    },
    {
      title: "Seamless experience",
      description:
        "Whether you're on your mobile, desktop or tablet, the seamless experience gives you the power to trade whenever and wherever you like.",
    },
    {
      title: "Dynamic features",
      description:
        "Explore your favourite markets and discover new ones with smart features like 'Recently Viewed' and your personalised 'Watchlist'.",
    },
    {
      title: "Comprehensive charting",
      description:
        "Easily explore price history with interactive charts: tap, zoom, and add indicators with a single touch.",
    },
  ]

  const tradingHorizons = [
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
  ]

  const HeroComponent = locale === "ar" ? HeroSectionRTL : HeroSection
  const AboutUsComponent = locale === "ar" ? AboutUsRTL : AboutUs
  const TradingHorizonsComponent = locale === "ar" ? TradingHorizonsRTL : TradingHorizons

  const howToStartProps =
    locale === "ar"
      ? {
          heading: "كيف تبدأ التداول مع ADSS",
          description: "اتبع هذه الخطوات لإعداد حسابك وابدأ تداول الذهب اليوم",
          buttonText: "افتح حساب حقيقي",
        }
      : {}

  const demoPromoProps =
    locale === "ar"
      ? {
          heading: "مارس التداول مع حسابنا التجريبي المجاني",
          description:
            "استكشف تداول الذهب دون مخاطرة. اختبر استراتيجياتك وعزز ثقتك واعتد على ظروف السوق الحقيقية – كل ذلك قبل بدء التداول الفعلي. ابدأ حسابك التجريبي المجاني مع ADSS اليوم.",
          buttonText: "افتح حساب تجريبي",
        }
      : {}

  return (
    <div className="min-h-screen flex flex-col" dir={locale === "ar" ? "rtl" : "ltr"}>
      {locale === "ar" ? <HeaderRTL /> : <Header />}

      <main className="flex-1 pt-16">
        <HeroComponent {...heroProps} />
        <HowToStart {...howToStartProps} />
        <BenefitsSection title="Unveil golden opportunities with ADSS" benefits={goldBenefits} />
        <PlatformFeatures
          heading="ADSS platform: Trade with confidence"
          description="The platform with everything you need for fast & secure trading."
          features={platformFeatures}
          image="https://www.adss.com/wp-content/uploads/2025/08/ADSS-Half-Image-Gold2.png"
          imageAlt="ADSS trading platform interface"
        />
        <TradingHorizonsComponent
          title={locale === "ar" ? undefined : "Expand your trading horizons with ADSS"}
          subtitle={
            locale === "ar"
              ? undefined
              : "Our state-of-the-art technology and the power of our global partnerships combine to deliver the following:"
          }
          items={locale === "ar" ? undefined : tradingHorizons}
        />
        <DemoPromo {...demoPromoProps} />
        <AboutUsComponent />
        <FaqSection />
      </main>

      {locale === "ar" ? <FooterRTL /> : <Footer />}
    </div>
  )
}
