import Image from "next/image"
import Link from "next/link"

export function NewProductsHero() {
  return (
    <section className="relative border-b border-border">
      <div className="relative h-44 w-full overflow-hidden md:h-56 lg:h-64">
        <Image
          src="/images/hero.png"
          alt="2026 Spring Collection 신상품"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_82%] scale-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/55 via-foreground/25 to-foreground/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-end px-4 pb-8 md:pb-10">
        <nav
          aria-label="breadcrumb"
          className="mb-4 text-[13px] font-light tracking-[0.04em] text-background/80"
        >
          <Link href="/" className="transition-colors hover:text-background">
            홈
          </Link>
          <span className="mx-2">/</span>
          <span className="text-background">신상품</span>
        </nav>
        <p className="font-display mb-3 text-[11px] font-normal uppercase tracking-[0.38em] text-background/90">
          Just arrived
        </p>
        <h1 className="section-title text-4xl text-background md:text-5xl">신상품</h1>
        <p className="mt-3 max-w-xl text-[15px] font-light leading-[1.85] tracking-[0.02em] text-background/85">
          2026 Spring Collection의 새로운 아이템을 카테고리별로 만나보세요.
        </p>
      </div>
    </section>
  )
}
