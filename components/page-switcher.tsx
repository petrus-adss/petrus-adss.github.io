"use client"

import type React from "react"

import { useRouter, usePathname } from "next/navigation"

export default function PageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  const pages = [
    { name: "Trade Gold", path: "/en/campaign/trade-gold-with-adss" },
    { name: "MT5", path: "/en/campaign/mt5" },
    { name: "MT4", path: "/en/campaign/mt4" },
    { name: "Trade Shares", path: "/en/campaign/trade-shares-with-adss" },
    { name: "Discover Oil Trading", path: "/en/campaign/discover-oil-trading-with-adss" },
    { name: "Trade Swap Free Indices", path: "/en/campaign/trade-swap-free-indices" },
    { name: "Switch to ADSS", path: "/en/campaign/switch-to-adss-and-earn-1000" },
    { name: "Buy US Stocks", path: "/en/campaign/buy-us-stocks-with-adss" },
    { name: "Emirati Broker", path: "/en/campaign/emirati-broker" },
    { name: "Master Forex Market", path: "/en/campaign/master-the-forex-market-with-adss" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(e.target.value)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <select
        value={pathname}
        onChange={handleChange}
        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm shadow-lg"
      >
        <option value="">Switch Landing Page...</option>
        {pages.map((page) => (
          <option key={page.path} value={page.path}>
            {page.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export { PageSwitcher }
