import Image from "next/image"

const CATEGORIES = [
  { id: "clothing", label: "의류", caption: "Clothing", image: "/images/cat-clothing.png" },
  { id: "bags", label: "가방", caption: "Bags", image: "/images/cat-bags.png" },
  {
    id: "accessories",
    label: "액세서리",
    caption: "Accessories",
    image: "/images/cat-accessories.png",
  },
]

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">Shop by category</p>
          <h2 className="font-serif text-3xl font-light text-foreground md:text-4xl">카테고리</h2>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
        {CATEGORIES.map((cat) => (
          <a
            key={cat.id}
            id={cat.id}
            href={`#${cat.id}`}
            className="group relative block aspect-[3/4] overflow-hidden"
          >
            <Image
              src={cat.image || "/placeholder.svg"}
              alt={`${cat.label} 카테고리`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-background/80">{cat.caption}</p>
              <h3 className="mt-1 font-serif text-2xl font-light text-background">{cat.label}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
