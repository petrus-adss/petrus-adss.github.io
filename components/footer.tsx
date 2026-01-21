import Link from "next/link"

const legalLinks = [
  { href: "https://www.adss.com/en/legal/", label: "Legal" },
  { href: "https://www.adss.com/en/legal/cookies/", label: "Cookies" },
  { href: "https://www.adss.com/en/legal/privacy-policy/", label: "Privacy policy" },
  { href: "https://www.adss.com/en/legal/fraud-warning/", label: "Fraud warning" },
  { href: "https://www.adss.com/en/legal/regulation/", label: "Regulation" },
  { href: "https://www.adss.com/en/legal/user-terms/", label: "User terms" },
]

const disclaimerText =
  "Investing in leveraged trading involves a high degree of risk that you will lose your money due to the use of leverage, particularly in fast moving markets, where a relatively small movement in the price can lead to a proportionately larger movement in the value of your investment. This can result in loses that exceed the funds in your account. You should consider whether you understand how leveraged trading works and you should seek independent advice if necessary. ADS Securities LLC – S.P.C (“ADSS”) is authorised and regulated by the Securities and Commodities Authority (“SCA”) in the United Arab Emirates under First Category: Dealing in Securities and Fifth category: Arrangement and advice (Introduction). ADSS is a Limited Liability Company – Sole Proprietorship Company incorporated under United Arab Emirates law. The company is registered with the Department of Economic Development of Abu Dhabi (No. 1190047) and has its principal place of business at 8th Floor, CI Tower, Corniche Road, P.O. Box 93894, Abu Dhabi, United Arab Emirates. The information presented is not intended for distribution to, or use by, any person in any country which is not specifically targeted or where the distribution or use is contrary to local law."

export function Footer() {
  return (
    <footer className="footerholder flex-shrink-0 py-6 pt-8 md:py-10 md:pt-12">
      <div className="container mx-auto px-4">
        {/* Desktop */}
        <div className="hidden md:block text-white">
          <hr className="my-6" />
          <div className="flex flex-wrap items-center justify-between gap-6 text-white">
            <ul className="m-0 flex flex-wrap gap-6 p-0 text-white">
              {legalLinks.map((link) => (
                <li key={link.href} className="list-none">
                  <Link
                    href={link.href}
                    className="text-white transition-opacity hover:opacity-80 opacity-100"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <span className="text-white">© ADSS 2025</span>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <hr className="mt-6 mb-4" />
          <div className="text-white mb-4">© ADSS 2025</div>
          <hr className="mb-4" />
          <div className="grid grid-cols-2 gap-3 text-white">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:opacity-80" target="_blank" rel="noreferrer">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <hr className="my-6" />

        <div className="mt-6 text-justify text-sm leading-relaxed">
          <p>{disclaimerText}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
