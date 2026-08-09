import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { NewProductsList } from "@/components/new-products-list"
import { NEW_PRODUCTS } from "@/lib/products"

export const metadata: Metadata = {
  title: "신상품 — MAISON ÉCLAT",
  description: "2026 Spring Collection 신상품. 매일을 특별하게 만드는 새로운 셀렉션을 만나보세요.",
}

export default function NewProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
            <nav aria-label="breadcrumb" className="mb-6 text-sm text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-primary">
                홈
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">신상품</span>
            </nav>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">Just arrived</p>
            <h1 className="font-serif text-4xl font-light text-foreground md:text-5xl">신상품</h1>
            <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              2026 Spring Collection의 새로운 아이템을 소개합니다. 계절의 변화에 맞춰
              큐레이션한 {NEW_PRODUCTS.length}가지 신상품을 만나보세요.
            </p>
          </div>
        </section>

        <NewProductsList />
      </main>
      <SiteFooter />
    </div>
  )
}
