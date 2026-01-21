export function StocksOffering() {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: "#0d1821" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-[1340px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Image column - appears first on desktop */}
            <div className="w-full md:w-5/12 order-2 md:order-1">
              <img
                src="https://www.adss.com/wp-content/uploads/2025/04/Stock-and-Market-Offering-EN.svg"
                alt="Stocks and market offering"
                className="w-full h-auto"
              />
            </div>

            {/* Text column */}
            <div className="w-full md:w-5/12 md:ml-auto order-1 md:order-2 px-5 md:px-0">
              <h3 className="text-center text-white text-2xl md:text-3xl font-bold mb-6">Stocks and market offering</h3>

              <div className="mt-3 mb-6">
                <p style={{ color: "#d8d8d8" }} className="leading-relaxed">
                  ADSS clients can invest in US and regional stocks as well as ETFs. Our most popular stocks cover key
                  sectors: energy, utilities, pharmaceuticals, consumer goods, finance, and car manufacturers. We offer
                  direct stock investment to major US companies like{" "}
                  <a href="https://www.adss.com/en/markets/equities/citigroup/" style={{ color: "#00b570" }}>
                    Citigroup
                  </a>
                  ,{" "}
                  <a href="https://www.adss.com/en/markets/equities/exxonmobil/" style={{ color: "#00b570" }}>
                    Exxon Mobil
                  </a>
                  , and big tech names including{" "}
                  <a href="https://www.adss.com/en/markets/equities/meta/" style={{ color: "#00b570" }}>
                    Meta
                  </a>{" "}
                  (formerly Facebook),{" "}
                  <a href="https://www.adss.com/en/markets/equities/amazon/" style={{ color: "#00b570" }}>
                    Amazon
                  </a>
                  , and{" "}
                  <a href="https://www.adss.com/en/markets/equities/microsoft/" style={{ color: "#00b570" }}>
                    Microsoft
                  </a>
                  , all from a UAE-regulated brokerage account.
                </p>
              </div>

              <p className="text-center mt-8">
                <a
                  href="https://www.adss.com/en/markets/equities/nvidia/"
                  className="inline-block px-6 py-3 rounded-md text-white font-medium transition-colors hover:opacity-90"
                  style={{ backgroundColor: "#00b570" }}
                >
                  Check the price of NVIDIA now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
