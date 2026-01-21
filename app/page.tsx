import { redirect } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FaqSection } from "@/components/faq-section"
import { HowToStart } from "@/components/how-to-start"
import { HeroSection } from "@/components/hero-section"

export default function RootPage() {
  redirect("/en/campaign/trade-gold-with-adss")

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-16">
        <HeroSection />
        <HowToStart />
      </main>
      <FaqSection />
      <Footer />
    </div>
  )
}