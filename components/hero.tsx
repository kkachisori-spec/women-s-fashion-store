import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:gap-12 md:py-20">
        {/* Copy */}
        <div className="order-2 md:order-1">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-primary">
            2026 Spring Collection
          </p>
          <h1 className="font-serif text-4xl font-light leading-tight tracking-tight text-balance text-foreground md:text-6xl">
            매일이 특별해지는
            <br />
            나만의 무드
          </h1>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            바쁜 일상 속에서도 나를 잃지 않는 당신을 위해. 시간이 지나도 변치 않는
            우아함을 담은 셀렉션을 만나보세요.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/new"
              className="group inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
            >
              신상품 보기
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://www.naver.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-b border-foreground/30 pb-1 text-sm tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              브랜드 스토리
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/hero.png"
              alt="세련된 봄 컬렉션을 착용한 여성"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
