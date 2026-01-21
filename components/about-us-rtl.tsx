export function AboutUsRtl() {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: "#0d1821" }} dir="rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-[50%] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">نبذة عن الشركة</h2>

          <h4 className="text-lg md:text-xl text-right mb-2" style={{ color: "#f5f5f5" }}>
            اكتشف ADSS، الوسيط الرائد والحائز على جوائز مرموقة في الشرق الأوسط
          </h4>

          <p className="text-justify mb-6 leading-relaxed" style={{ color: "#d8d8d8" }}>
            ADSS هي شركة الوساطة الرائدة في الشرق الأوسط والتي تأسست في العاصمة الإماراتية أبوظبي عام 2010. نحن إحدى
            شركات الوساطة الوحيدة التي يقع مقرها الرئيسي في دول مجلس التعاون الخليجي. نعمل في الشرق الأوسط ومناطق أخرى
            في العالم. ويبلغ رأسمالنا المدفوع 585 مليون دولار، ونحن مرخّصون ومنظّمون بالكامل من قبل هيئة الأوراق المالية
            والسلع في دولة الإمارات العربية المتحدة.
          </p>

          <p className="text-center">
            <a
              href="https://www.adss.com/wp-content/uploads/2025/02/LIC-0004615_Certificate__20250205170848.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
              style={{ color: "#00b570" }}
            >
              رقم ترخيص هيئة الأوراق المالية والسلع: 305027
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

// Named export alias for consistency
export { AboutUsRtl as AboutUsRTL }
