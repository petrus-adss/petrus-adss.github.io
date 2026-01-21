export function WhyChooseAdss() {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: "#17202a" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-[1340px] mx-auto">
          {/* Heading */}
          <h4 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">
            Why choose ADSS as your swap-free indices broker?
          </h4>

          {/* Two-column layout */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
            {/* Left column - List */}
            <div className="w-full md:w-1/2">
              <ul className="space-y-4">
                <li className="relative pl-8 text-white text-base md:text-lg">
                  <span
                    className="absolute left-0 top-1"
                    style={{
                      width: "0.75rem",
                      height: "0.75rem",
                      backgroundImage:
                        "url('https://www.adss.com/wp-content/themes/eprefix-bootstrap/img/ADSS_BULLET.svg')",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      display: "block",
                    }}
                  />
                  Beyond indices, ADSS offers a diverse range of products to trade, including forex, stocks and
                  commodity CFDs.
                </li>
                <li className="relative pl-8 text-white text-base md:text-lg">
                  <span
                    className="absolute left-0 top-1"
                    style={{
                      width: "0.75rem",
                      height: "0.75rem",
                      backgroundImage:
                        "url('https://www.adss.com/wp-content/themes/eprefix-bootstrap/img/ADSS_BULLET.svg')",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      display: "block",
                    }}
                  />
                  Fast account funding using UAEPGS – the transfer payment gateway from the Central Bank of the UAE.
                </li>
                <li className="relative pl-8 text-white text-base md:text-lg">
                  <span
                    className="absolute left-0 top-1"
                    style={{
                      width: "0.75rem",
                      height: "0.75rem",
                      backgroundImage:
                        "url('https://www.adss.com/wp-content/themes/eprefix-bootstrap/img/ADSS_BULLET.svg')",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      display: "block",
                    }}
                  />
                  Regulated by the Securities and Commodities Authority (SCA) in the UAE.
                </li>
                <li className="relative pl-8 text-white text-base md:text-lg">
                  <span
                    className="absolute left-0 top-1"
                    style={{
                      width: "0.75rem",
                      height: "0.75rem",
                      backgroundImage:
                        "url('https://www.adss.com/wp-content/themes/eprefix-bootstrap/img/ADSS_BULLET.svg')",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      display: "block",
                    }}
                  />
                  Your funds and data are safe – we hold the coveted ISO/IE 27001 certificate for protection of
                  sensitive info.
                </li>
              </ul>
            </div>

            {/* Right column - Table image */}
            <div className="w-full md:w-5/12 mt-4 md:mt-0">
              <img
                src="https://www.adss.com/wp-content/uploads/2023/05/broker_table.svg"
                alt="Trading products comparison table"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
