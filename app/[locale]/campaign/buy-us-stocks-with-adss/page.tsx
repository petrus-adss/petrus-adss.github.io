import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { CompactBenefits } from "@/components/compact-benefits"
import { StockMarketInfo } from "@/components/stock-market-info"
import { DemoPromo } from "@/components/demo-promo"
import { WhyInvest } from "@/components/why-invest"
import { TwoColumnFeatures } from "@/components/two-column-features"
import { DiversifyPortfolio } from "@/components/diversify-portfolio"
import { StocksOffering } from "@/components/stocks-offering"
import { PlatformFeatures } from "@/components/platform-features"
import { AboutUs } from "@/components/about-us"
import FeaturedIn from "@/components/featured-in"
import { FaqSection } from "@/components/faq-section"
import { HeaderRTL } from "@/components/header-rtl"
import { FooterRTL } from "@/components/footer-rtl"

type PageProps = {
  params: Promise<{
    locale: string
  }>
}

export default async function BuyUSStocksPage({ params }: PageProps) {
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

  return (
    <div className="min-h-screen flex flex-col" dir={locale === "ar" ? "rtl" : "ltr"}>
      <Header locale={locale} />

      <main className="flex-1 pt-16">
        <HeroSection
          headingImage={{
            src: "https://www.adss.com/wp-content/uploads/2025/03/text_stocks-1024x239.png",
            alt: "Buy US stocks with ADSS",
            width: 550,
            height: 118,
          }}
          description="Invest in major stocks including NVIDIA and APPLE, plus ETFs such as the SPDR S&P500. Start investing in American stock markets today with no commission, no fees, and from as little as $1 per position on ADSS' proprietary trading platform."
          primaryCta={{
            text: "Invest now",
            href: "https://my.adss.com/client-portal-web/signup/",
          }}
          secondaryCta={{
            text: "Try a demo",
            href: "https://demo.adss.com/signup",
          }}
          chartImage={{
            src: "https://www.adss.com/wp-content/uploads/2025/05/Tesla-Apple-EN.svg",
            alt: "Buy US stocks with ADSS",
          }}
        />

        <CompactBenefits
          items={[
            {
              icon: "https://www.adss.com/wp-content/uploads/2023/05/Indexes.svg",
              heading: "Zero fees",
            },
            {
              icon: "https://www.adss.com/wp-content/uploads/2023/02/Charting_tools.svg",
              heading: "SCA regulated",
            },
            {
              icon: "https://www.adss.com/wp-content/uploads/2023/02/Commission_free.svg",
              heading: "Low costs",
            },
            {
              icon: "https://www.adss.com/wp-content/uploads/2023/02/Fund_Instantly.svg",
              heading: "No commission",
            },
          ]}
        />

        <StockMarketInfo />

        <DemoPromo
          backgroundColor="#17202a"
          headings={["Open a demo account", "and try out ADSS today"]}
          buttonText="Open Demo Account"
          buttonLink="https://demo.adss.com/signup"
          buttonStyle="secondary"
          image="https://www.adss.com/wp-content/uploads/2025/04/Open-a-demo-trading-account-EN-2.svg"
          imageAlt="Open a demo trading account"
          imageMobile="https://www.adss.com/wp-content/uploads/2025/04/Open-a-demo-trading-account-EN-2.svg"
        />

        <WhyInvest />

        <TwoColumnFeatures
          columns={[
            {
              heading: "Invest in US stock markets",
              description:
                "Access the international market through your local stock investing account. As a leading broker, we offer comprehensive access to major American exchanges, including NYSE and NASDAQ-listed US shares.",
              button: {
                text: "View share price of APPLE today",
                link: "https://adss.com/en/markets/equities/apple",
              },
            },
            {
              heading: "Direct market access",
              description:
                "Engage in direct stock investing with fair pricing and efficient execution. Buy and sell cash equities in the US market by choosing ADSS as your UAE stock investment partner.",
            },
          ]}
        />

        <DiversifyPortfolio />

        <StocksOffering />

        <PlatformFeatures
          heading="Exclusively on the ADSS trading platform app"
          description="The ADSS trading platform app provides essential tools for stock investing. Through the platform, you can access all relevant market and portfolio data."
          features={[
            {
              title: "Portfolio overview",
              content:
                "The platform hub for stock investing is your portfolio overview, where you can see an overview of your stock investing account and track overall account performance.",
              image: "https://www.adss.com/wp-content/uploads/2025/04/Portfolio-Overview-EN-1.svg",
            },
            {
              title: "Market orders",
              content:
                'ADSS direct stock investing <a href="https://www.adss.com/en/learn/platform-guide/placing-a-trade/#:~:text=A%20market%20order%20is%20an,if%20they%20are%20not%20executed." style="color: #00b570;">market orders</a> ensure you don\'t miss out on favourable price moves. Execute at the best price available and give your stock investments the maximum chance to succeed.',
              image: "https://www.adss.com/wp-content/uploads/2025/04/Market-Order-EN-2.svg",
            },
            {
              title: "Opening a stock trading account",
              content:
                "We offer a simple process to open a stock investing account with ADSS. First, open a regular CFD trading account, and then request a stock investing account through the app. Alternatively, go to our client portal application page and sign-up directly. During the application process you will be able to choose between a CFD and stock trading account, and receive further instructions accordingly.",
              image: "https://www.adss.com/wp-content/uploads/2025/04/Opening-SI-Trading-Account-EN-3.svg",
              button: {
                text: "Open live account now",
                link: "https://my.adss.com/client-portal-web/signup/step/1",
              },
            },
            {
              title: "Switch between stock and CFD accounts",
              content:
                "ADSS offer a broad range of stock, bond, forex, and commodity CFDs, and our trading platform allows you to switch directly between them. Diversify your stock portfolio with CFD trading positions, and make long-term stock investments to support your CFD trading bottom line.",
              image: "https://www.adss.com/wp-content/uploads/2025/04/Switch-Between-Stock-and-CFD-EN-2.svg",
            },
            {
              title: "Platform availability",
              content:
                'Our offering of US stocks and ETFs is available exclusively through the ADSS trading platform app. These cannot be accessed via browser or MT4. Learn more about our proprietary trading platform <a href="https://www.adss.com/en/platforms/" style="color: #00ff00;">here</a>.',
              image: "https://www.adss.com/wp-content/uploads/2025/04/Platform-Availability-EN-2.svg",
            },
            {
              title: "Secure Emirati brokerage",
              content:
                "As a UAE stock broker, ADSS is regulated by the Securities and Commodities Authority (SCA), which provides full regulatory oversight of our activities and ensure your funds are protected. We comply to strict capital and fund segregation requirements to protect your money.",
              image: "https://www.adss.com/wp-content/uploads/2025/04/Secure-Emirati-Brokerage-EN-3.svg",
            },
            {
              title: "Fund Transfers",
              content:
                "UAE bank account holders benefit from UAEPGS for transfers, withdrawals, and deposits, provided by the Central Bank of the UAE.",
              image: "https://www.adss.com/wp-content/uploads/2025/04/Fund-Transfers-EN-2.svg",
            },
            {
              title: "Transparency and data security",
              content:
                "A local broker, we maintain close communication with clients compared to our multinational rivals. Our team is available to all clients 24/5 via phone and email. We take data security seriously and protect your personal and financial information through ISO/IEC 27001 security standards. We will never share information with third parties without your consent.",
              image: "https://www.adss.com/wp-content/uploads/2025/04/Transparency-and-data-security-EN-AR-2.svg",
            },
            {
              title: "Customer Support",
              content:
                "We offer all clients 24/5 assistance in Arabic, English, Urdu, Hindi and French. ADSS investors have direct contact with experienced agents for trading and non-trading queries.",
              image: "https://www.adss.com/wp-content/uploads/2025/04/Customer-Support-EN-2.svg",
            },
          ]}
        />

        <AboutUs />

        <FeaturedIn />

        <FaqSection
          faqs={[
            {
              id: "faq-1",
              question: "What payment method can I use?",
              answer:
                "You can fund your account via bank wire, credit card, online bank transfer, or UAEPGS. Withdrawals can be made via bank wire, credit card, Skrill, Neteller, Cash U, or UAEPGS.",
            },
            {
              id: "faq-2",
              question: "Are you regulated in the MENA region?",
              answer:
                "Yes, ADSS is regulated by the Securities and Commodities Authority (SCA) in the UAE. Our SCA license number is 305027.",
            },
            {
              id: "faq-3",
              question: "How long does it take to fund my account?",
              answer:
                "Funding times vary by payment method. Credit card and online transfers typically take 30 minutes to 2 hours, while bank wires can take 24-48 hours.",
            },
            {
              id: "faq-4",
              question: "How do I withdraw?",
              answer:
                "You can withdraw funds via bank wire, credit card, Skrill, Neteller, Cash U, or UAEPGS. Withdrawal requests are typically processed within 1-2 business days.",
            },
            {
              id: "faq-5",
              question: "What platforms are available to trade?",
              answer:
                "ADSS offers two trading platforms: our proprietary ADSS trading platform and MetaTrader 4 (MT4). US stocks are exclusively available on the ADSS platform app.",
            },
            {
              id: "faq-6",
              question: "What products are available to trade with ADSS?",
              answer:
                "ADSS offers a wide range of products including currency pairs, equities, indices, commodities, bonds, and ETFs. You can trade both CFDs and direct stocks.",
            },
            {
              id: "faq-7",
              question: "How do I contact support?",
              answer:
                "You can reach our support team via email at ts@adss.com or by phone at +971 2 657 2414. We offer 24/5 support in multiple languages including Arabic, English, Urdu, Hindi, and French.",
            },
            {
              id: "faq-8",
              question: "What are your trading hours?",
              answer:
                "Trading hours vary by market. Generally, we offer trading from Monday to Friday, covering Asian, European, and US market hours. Specific hours depend on the instrument you're trading.",
            },
            {
              id: "faq-9",
              question: "What is leveraged trading?",
              answer:
                "Leveraged trading allows you to borrow money from your broker to increase your trading position. ADSS offers leverage up to 333:1 on indices and 500:1 on FX pairs. Note that leverage magnifies both profits and losses.",
            },
          ]}
        />
      </main>

      <Footer />
    </div>
  )
}
