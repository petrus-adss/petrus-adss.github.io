import Link from "next/link"

export function FooterRTL() {
  const legalLinks = [
    { href: "/ar/legal", label: "الشؤون القانونية" },
    { href: "/ar/legal/cookies", label: "ملفات تعريف الارتباط" },
    { href: "/ar/legal/privacy-policy", label: "سياسة الخصوصية" },
    { href: "/ar/legal/fraud-warning", label: "تحذير من الإحتيال" },
    { href: "/ar/legal/regulation", label: "الهيئات التنظيمية" },
    { href: "/ar/legal/user-terms", label: "شروط المستخدم" },
  ]

  return (
    <footer className="bg-[#0D1821] text-[#818181] py-10 md:py-16" dir="rtl">
      <div className="container mx-auto px-4 max-w-[1340px]">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <hr className="border-[#636366] mb-6" />
          <div className="flex items-center justify-between">
            <ul className="flex flex-wrap gap-6 m-0 p-0 list-none text-right">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#818181] hover:opacity-80 transition-opacity text-[0.9rem]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="text-white text-left">© ADSS 2025</div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <hr className="border-[#636366] mt-5 mb-4" />
          <div className="text-white mb-4 text-right">© ADSS 2025</div>
          <hr className="border-[#636366] mb-4" />
          <div className="grid grid-cols-2 gap-2 text-right">
            {legalLinks.map((link) => (
              <div key={link.href} className="mb-2">
                <Link href={link.href} className="text-white hover:opacity-80 transition-opacity text-[0.9rem]">
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer Section */}
        <hr className="border-[#636366] my-6" />
        <div className="mt-8">
          <div className="text-[0.9rem] text-[#818181] leading-relaxed text-right">
            <p className="mb-4">
              ينطوي التداول بالرافعة المالية على درجة عالية من المخاطرة بأنك ستخسر أموالك بسبب استخدام ا��رافعة المالية،
              خاصة في الأسواق سريعة الحركة حيث قد تؤدي أي حركة صغيرة نسبياً في السعر إلى حركة أكبر نسبياً في قيمة
              الاستثمار الخاصة بك. وقد ينتج عن هذا خسائر تتجاوز الأموال الموجودة في حسابك. عليك التفكير ملياً بطريقة عمل
              التداول بالرافعة المالية ويجب عليك طلب المشورة المستقلة إن اقتضى الأمر.
            </p>
            <p className="mb-4">
              إي دي إس سيكيوريتيز ذ.م.م – ش.ش.و ("إي دي إس إس") هي شركة مرخّصة ومُنظّمة من قبل هيئة الأوراق المالية والسلع
              في دولة الإمارات العربية المتحدة، ولديها ترخيص الفئة الأولى التعامل في الأوراق المالية وترخيص الفئة
              الخامسة الترتيب والمشورة (التعريف). إي دي إس إس هي شركة ذات مسؤولية محدودة – شركة الشخص الواحد تأسست بموجب
              القانون المعمول به في دولة الإمارات العربية المتحدة. وهي مسجلة لدى دائرة التنمية الاقتصادية في أبوظبي (رقم
              1190047) ويقع مقر عملها الرئيسي في الطابق الثامن، برج CI، شارع الكورنيش، صندوق بريد:93894، أبو ظبي،
              الإمارات العربية المتحدة.
            </p>
            <p>
              إن المعلومات المقدمة غير مخصصة للتوزيع أو الاستخدام من قبل أي شخص في أي بلد غير مستهدف أو حيث يكون التوزيع
              أو الاستخدام مخالفاً للقوانين المحلية.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
