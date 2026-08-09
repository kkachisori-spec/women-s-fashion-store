import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { NEW_PRODUCTS } from "@/lib/products"

const FEATURED_PRODUCTS = NEW_PRODUCTS.slice(0, 4)

export function ProductGrid() {
  return (
    <section id="new" className="mx-auto max-w-7xl px-4 py-12 md:py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="eyebrow mb-2">Just arrived</p>
          <h2 className="section-title text-foreground">신상품</h2>
        </div>
        <Link
          href="/new"
          className="link-refined hidden border-b border-foreground/30 pb-1 text-foreground transition-colors hover:border-primary hover:text-primary sm:inline-block"
        >
          전체보기
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {FEATURED_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
