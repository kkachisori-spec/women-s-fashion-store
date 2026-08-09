import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { NewProductsHero } from "@/components/new-products-hero"
import { NewProductsList } from "@/components/new-products-list"

export const metadata: Metadata = {
  title: "신상품 — MAISON ÉCLAT",
  description: "2026 Spring Collection 신상품. 매일을 특별하게 만드는 새로운 셀렉션을 만나보세요.",
}

export default function NewProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <NewProductsHero />
        <NewProductsList />
      </main>
      <SiteFooter />
    </div>
  )
}
