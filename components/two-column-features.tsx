interface ColumnItem {
  heading: string
  description: string
  button?: {
    text: string
    link: string
  }
}

interface TwoColumnFeaturesProps {
  columns: ColumnItem[]
  theme?: "dark" | "light"
}

export function TwoColumnFeatures({ columns, theme = "dark" }: TwoColumnFeaturesProps) {
  const contentColumns = columns.slice(0, 2)

  const headingColor = theme === "dark" ? "#ffffff" : "#00b570"
  const textColor = theme === "dark" ? "#d8d8d8" : "#262f37"
  const backgroundColor = theme === "dark" ? "#0d1821" : "#f5f5f5"
  const borderColor = "#636366"

  return (
    <section className="py-12 md:py-3" style={{ backgroundColor }}>
      <div className="container mx-auto">
        <div className="max-w-[1340px] mx-auto">
          <div className="flex flex-col gap-6 md:gap-0 md:flex-row" style={{ minHeight: "250px" }}>
            <div className="hidden md:block md:w-1/3" />

            {contentColumns.map((column, index) => (
              <div
                key={index}
                className="flex flex-col md:w-1/3 relative"
                style={{
                  paddingLeft: "2.5rem",
                  borderLeft: `1px solid ${borderColor}`, // Added border back to content columns only
                }}
              >
                <div className="pr-6">
                  <h4 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: headingColor }}>
                    {column.heading}
                  </h4>
                  <div className="mt-3">
                    <p style={{ color: textColor }}>{column.description}</p>
                  </div>
                </div>

                {column.button && (
                  <div className="mt-auto pt-6">
                    <a
                      href={column.button.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 rounded-md font-semibold transition-colors hover:opacity-90"
                      style={{
                        color: "#ffffff",
                        backgroundColor: "#00b570",
                      }}
                    >
                      {column.button.text}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
