import { ArrowRight } from "lucide-react"

export function EditorialBanner() {
  return (
    <section id="magazine" className="bg-secondary">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="eyebrow mb-4">Maison Magazine</p>
          <h2 className="section-title text-balance leading-snug text-secondary-foreground">
            &ldquo;좋은 옷은 나를 설명하지 않아도 되게 한다&rdquo;
          </h2>
          <p className="body-copy mt-6 max-w-md text-pretty">
            30대의 취향은 더 이상 유행을 좇지 않습니다. MAISON ÉCLAT는 오래도록 곁에 둘 수 있는
            물건, 그리고 그 안에 담긴 이야기를 큐레이션합니다.
          </p>
          <a
            href="#magazine"
            className="link-refined group mt-8 inline-flex items-center gap-2 text-secondary-foreground transition-colors hover:text-primary"
          >
            매거진 읽기
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { value: "12,000+", label: "함께하는 고객" },
            { value: "98%", label: "재구매 만족도" },
            { value: "24H", label: "빠른 배송" },
          ].map((stat) => (
            <div key={stat.label} className="border-l border-border pl-4">
              <p className="font-display text-2xl font-light tracking-[0.02em] text-primary md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-[11px] font-light leading-relaxed tracking-[0.04em] text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
