export function AboutUs() {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: "#0d1821" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-[50%] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">About Us</h2>

          <h4 className="text-lg md:text-xl text-left mb-2" style={{ color: "#f5f5f5" }}>
            Discover ADSS, the award-winning leading MENA broker
          </h4>

          <p className="text-justify mb-6 leading-relaxed" style={{ color: "#d8d8d8" }}>
            ADSS is an Abu Dhabi-born MENA broker. Founded in 2010, we're one of the only brokerages headquartered in
            the GCC. We operate in the Middle East and in other regions and financial markets across the globe. We have
            a paid up capital of $585 million and are regulated by the Securities and Commodities Authority (SCA) in the
            UAE.
          </p>

          <p className="text-center">
            <a
              href="https://www.adss.com/wp-content/uploads/2025/02/LIC-0004615_Certificate__20250205170848.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
              style={{ color: "#00b570" }}
            >
              SCA license number: 305027
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
