import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeaderRTL } from "@/components/header-rtl"
import { FooterRTL } from "@/components/footer-rtl"

type PageProps = {
  params: Promise<{
    locale: string
  }>
}

export default async function EmiratibrokerPage({ params }: PageProps) {
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
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Emirati Broker</h1>
            <p className="text-xl text-gray-400 mb-8">Coming Soon</p>
            <p className="text-gray-500">This page is currently under construction</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
