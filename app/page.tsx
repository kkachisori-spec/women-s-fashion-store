import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { CategoryGrid } from "@/components/category-grid"
import { ProductGrid } from "@/components/product-grid"
import { EditorialBanner } from "@/components/editorial-banner"
import { Newsletter } from "@/components/newsletter"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <CategoryGrid />
        <ProductGrid />
        <EditorialBanner />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  )
}
