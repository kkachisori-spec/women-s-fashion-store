import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative border-b border-border">
      <div className="relative h-52 w-full overflow-hidden md:h-64 lg:h-80">
        <Image
          src="/images/hero.png"
          alt="2026 Spring Collection"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_82%] scale-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-foreground/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-foreground/10 to-transparent" />
      </div>

      <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-end px-4 pb-8 md:pb-12">
        <p className="font-display mb-4 text-[11px] font-normal uppercase tracking-[0.38em] text-background/90">
          2026 Spring Collection
        </p>
        <h1 className="display-title max-w-3xl text-background">
          매일이 특별해지는
          <br />
          나만의 무드
        </h1>
        <p className="mt-4 max-w-lg text-[15px] font-light leading-[1.85] tracking-[0.02em] text-background/85">
          바쁜 일상 속에서도 나를 잃지 않는 당신을 위해. 시간이 지나도 변치 않는
          우아함을 담은 셀렉션을 만나보세요.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="/new"
            className="btn-text group inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-primary-foreground transition-opacity hover:opacity-90"
          >
            신상품 보기
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://www.naver.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-refined inline-flex items-center border-b border-background/40 pb-1 text-background transition-colors hover:border-background hover:text-background"
          >
            브랜드 스토리
          </a>
        </div>
      </div>
    </section>
  )
}
