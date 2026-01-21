import Image from "next/image"
import Link from "next/link"

export default function FeaturedIn() {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: "#0d1821" }}>
      <div className="container mx-auto px-4">
        <h4 className="text-center text-white text-2xl font-bold mb-8">As featured in</h4>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center justify-items-center">
            {/* FXEmpire Logo */}
            <Link
              href="https://www.fxempire.com/brokers/adssecurities"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full"
            >
              <Image
                src="https://www.adss.com/wp-content/uploads/2023/02/fxempire.svg"
                alt="FXEmpire"
                width={158}
                height={65}
                className="max-w-full h-auto"
              />
            </Link>

            {/* Finance Magnates Logo */}
            <Link
              href="https://directory.financemagnates.com/forex-brokers/adss/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full"
            >
              <Image
                src="https://www.adss.com/wp-content/uploads/2023/02/finanmag.svg"
                alt="Finance Magnates"
                width={160}
                height={69}
                className="max-w-full h-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
