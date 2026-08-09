import { ArrowRight } from "lucide-react"

export function EditorialBanner() {
  return (
    <section id="magazine" className="bg-secondary">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">Maison Magazine</p>
          <h2 className="font-serif text-3xl font-light leading-snug text-balance text-secondary-foreground md:text-4xl">
            &ldquo;좋은 옷은 나를 설명하지 않아도 되게 한다&rdquo;
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            30대의 취향은 더 이상 유행을 좇지 않습니다. MAISON ÉCLAT는 오래도록 곁에 둘 수 있는
            물건, 그리고 그 안에 담긴 이야기를 큐레이션합니다.
          </p>
          <a
            href="#magazine"
            className="group mt-8 inline-flex items-center gap-2 text-sm tracking-wide text-secondary-foreground transition-colors hover:text-primary"
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
              <p className="font-serif text-2xl font-light text-primary md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
