import type React from "react"
interface TextSectionProps {
  heading: string | React.ReactNode
  content: string | string[] | React.ReactNode | React.ReactNode[]
  backgroundColor?: string
  className?: string
}

export { TextSection }
export default function TextSection({
  heading,
  content,
  backgroundColor = "#0d1821",
  className = "",
}: TextSectionProps) {
  const renderContent = () => {
    if (Array.isArray(content)) {
      return content.map((paragraph, index) => (
        <p key={index} className="text-[#f5f5f5] mb-4 last:mb-0">
          {paragraph}
        </p>
      ))
    }

    if (typeof content === "string") {
      return <p className="text-[#f5f5f5]">{content}</p>
    }

    return content
  }

  return (
    <section className={`pt-[4rem] pb-[3.5rem] ${className}`} style={{ backgroundColor }}>
      <div className="container">
        <div className="max-w-none">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">{heading}</h2>
          <div className="text-base md:text-lg leading-relaxed text-white">{renderContent()}</div>
        </div>
      </div>
    </section>
  )
}
