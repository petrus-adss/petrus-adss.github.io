"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FaqItem {
  id: string
  question: string
  answer: ReactNode
}

interface FaqSectionProps {
  faqs: FaqItem[]
  itemsPerPage?: number
}

const ITEMS_PER_PAGE = 6

export function FaqSection({ faqs = [], itemsPerPage = ITEMS_PER_PAGE }: FaqSectionProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [openId, setOpenId] = useState<string | null>(null)

  if (!faqs || faqs.length === 0) {
    return null
  }

  const totalPages = Math.ceil(faqs.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentFaqs = faqs.slice(startIndex, endIndex)

  const handleToggle = (id: string) => {
    setOpenId((prev: string | null) => (prev === id ? null : id))
  }

  return (
    <section className="faq-section relative py-12 md:py-16">
      <div className="faq-anchor" />
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">FAQ</h2>

        <div className="mt-10 space-y-4">
          {currentFaqs.map((faq) => {
            const isOpen = openId === faq.id

            return (
              <div key={faq.id} className={`faq-accordion-holder ${isOpen ? "active" : ""}`}>
                <button
                  className="faq-accordion-header"
                  type="button"
                  onClick={() => handleToggle(faq.id)}
                  aria-expanded={isOpen}
                >
                  <div className="faq-accordion-question">
                    <h5>{faq.question}</h5>
                  </div>
                  <span className="faq-accordion-toggle">
                    <ChevronDown size={16} />
                  </span>
                </button>

                <div className={`faq-accordion-content ${isOpen ? "open" : ""}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>

        {totalPages > 1 && (
          <div className="faq-pagination">
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1
              const isActive = page === currentPage

              return (
                <button key={page} onClick={() => setCurrentPage(page)} className={isActive ? "active" : ""}>
                  {page}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
