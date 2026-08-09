import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { NEW_PRODUCTS } from "@/lib/products"

const FEATURED_PRODUCTS = NEW_PRODUCTS.slice(0, 4)

export function ProductGrid() {
  return (
    <section id="new" className="mx-auto max-w-7xl px-4 py-12 md:py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">Just arrived</p>
          <h2 className="font-serif text-3xl font-light text-foreground md:text-4xl">신상품</h2>
        </div>
        <Link
          href="/new"
          className="hidden border-b border-foreground/30 pb-1 text-sm tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary sm:inline-block"
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
