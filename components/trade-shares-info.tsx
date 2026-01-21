export function TradeSharesInfo() {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: "#0d1821" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
          {/* Left column - Heading and bullet list */}
          <div className="w-full lg:w-7/12 text-center lg:text-left px-5 lg:px-0">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center lg:text-left">
              Trade shares with ADSS
            </h3>

            <ul className="space-y-4 text-left inline-block">
              <li className="relative pl-7 text-white text-base md:text-lg leading-relaxed">
                <span
                  className="absolute left-0 top-1.5 w-3 h-3 bg-no-repeat bg-contain"
                  style={{
                    backgroundImage:
                      "url('https://www.adss.com/wp-content/themes/eprefix-bootstrap/img/ADSS_BULLET.svg')",
                  }}
                />
                A wide range of educational guides to help you master the markets
              </li>
              <li className="relative pl-7 text-white text-base md:text-lg leading-relaxed">
                <span
                  className="absolute left-0 top-1.5 w-3 h-3 bg-no-repeat bg-contain"
                  style={{
                    backgroundImage:
                      "url('https://www.adss.com/wp-content/themes/eprefix-bootstrap/img/ADSS_BULLET.svg')",
                  }}
                />
                Commission-free trades and competitive spreads
              </li>
              <li className="relative pl-7 text-white text-base md:text-lg leading-relaxed">
                <span
                  className="absolute left-0 top-1.5 w-3 h-3 bg-no-repeat bg-contain"
                  style={{
                    backgroundImage:
                      "url('https://www.adss.com/wp-content/themes/eprefix-bootstrap/img/ADSS_BULLET.svg')",
                  }}
                />
                Daily market research from our expert analysts
              </li>
              <li className="relative pl-7 text-white text-base md:text-lg leading-relaxed">
                <span
                  className="absolute left-0 top-1.5 w-3 h-3 bg-no-repeat bg-contain"
                  style={{
                    backgroundImage:
                      "url('https://www.adss.com/wp-content/themes/eprefix-bootstrap/img/ADSS_BULLET.svg')",
                  }}
                />
                Sophisticated charting tools on our next-gen, intuitive platform or MT4
              </li>
              <li className="relative pl-7 text-white text-base md:text-lg leading-relaxed">
                <span
                  className="absolute left-0 top-1.5 w-3 h-3 bg-no-repeat bg-contain"
                  style={{
                    backgroundImage:
                      "url('https://www.adss.com/wp-content/themes/eprefix-bootstrap/img/ADSS_BULLET.svg')",
                  }}
                />
                Regulated by the Securities and Commodities Authority (SCA) in the UAE
              </li>
            </ul>
          </div>

          {/* Right column - What you can trade table */}
          <div className="w-full lg:w-5/12 mt-8 lg:mt-0">
            <img
              src="https://www.adss.com/wp-content/uploads/2023/05/Shares_table.svg"
              alt="What you can trade - Popular shares including META, Apple, Tesla, Boeing, Nike, Warner Bros, Netflix, Salesforce, and Amazon"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
