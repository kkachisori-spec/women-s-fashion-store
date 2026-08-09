import Image from "next/image"
import { Heart } from "lucide-react"
import type { Product } from "@/lib/products"

type ProductCardProps = {
  product: Product
  showCategory?: boolean
}

export function ProductCard({ product, showCategory = false }: ProductCardProps) {
  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute left-3 top-3 bg-background/90 px-2.5 py-1 text-[10px] font-normal tracking-[0.2em] text-foreground">
            {product.tag}
          </span>
        )}
        <button
          type="button"
          aria-label={`${product.name} 찜하기`}
          className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 transition-opacity hover:text-primary group-hover:opacity-100"
        >
          <Heart className="size-4" />
        </button>
      </div>
      <div className="mt-3">
        {showCategory && (
          <p className="product-category">{product.category}</p>
        )}
        <h3 className="product-name text-foreground">{product.name}</h3>
        <p className="product-price mt-1">₩ {product.price}</p>
      </div>
    </article>
  )
}
