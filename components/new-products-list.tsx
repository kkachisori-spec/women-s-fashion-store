"use client"

import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { PriceRangeSlider } from "@/components/price-range-slider"
import {
  NEW_PRODUCTS,
  PRICE_RANGE,
  PRODUCT_CATEGORIES,
  formatPrice,
  parsePrice,
  type ProductSort,
} from "@/lib/products"

const SORT_OPTIONS: { value: ProductSort; label: string }[] = [
  { value: "default", label: "추천순" },
  { value: "price-asc", label: "낮은 가격순" },
  { value: "price-desc", label: "높은 가격순" },
]

function filterAndSortProducts(
  products: typeof NEW_PRODUCTS,
  query: string,
  category: string,
  sort: ProductSort,
  priceRange: [number, number],
) {
  const normalizedQuery = query.trim().toLowerCase()
  const [minPrice, maxPrice] = priceRange

  let result = products.filter((product) => {
    const price = parsePrice(product.price)
    const matchesQuery =
      !normalizedQuery ||
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.category.toLowerCase().includes(normalizedQuery)

    const matchesCategory = category === "all" || product.category === category
    const matchesPrice = price >= minPrice && price <= maxPrice

    return matchesQuery && matchesCategory && matchesPrice
  })

  if (sort === "price-asc") {
    result = [...result].sort((a, b) => parsePrice(a.price) - parsePrice(b.price))
  } else if (sort === "price-desc") {
    result = [...result].sort((a, b) => parsePrice(b.price) - parsePrice(a.price))
  }

  return result
}

function isPriceRangeDefault(priceRange: [number, number]) {
  return priceRange[0] === PRICE_RANGE.min && priceRange[1] === PRICE_RANGE.max
}

export function NewProductsList() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("all")
  const [sort, setSort] = useState<ProductSort>("default")
  const [priceRange, setPriceRange] = useState<[number, number]>([
    PRICE_RANGE.min,
    PRICE_RANGE.max,
  ])

  const filteredProducts = useMemo(
    () => filterAndSortProducts(NEW_PRODUCTS, query, category, sort, priceRange),
    [query, category, sort, priceRange],
  )

  const hasActiveFilters =
    Boolean(query) ||
    category !== "all" ||
    sort !== "default" ||
    !isPriceRangeDefault(priceRange)

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
  }

  function handleReset() {
    setQuery("")
    setCategory("all")
    setSort("default")
    setPriceRange([PRICE_RANGE.min, PRICE_RANGE.max])
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-20">
      <div className="mb-8 space-y-4 rounded-lg border border-border bg-background p-4 md:p-6">
        <form onSubmit={handleSearch} className="flex flex-col gap-4 lg:flex-row lg:items-end">
          <div className="flex-1">
            <label htmlFor="product-search" className="mb-2 block text-sm text-foreground">
              상품 검색
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="product-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="상품명 또는 카테고리로 검색"
                className="h-10 w-full rounded-lg border border-border bg-background pl-10 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:w-auto lg:grid-cols-2">
            <div>
              <label htmlFor="product-category" className="mb-2 block text-sm text-foreground">
                카테고리
              </label>
              <select
                id="product-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-10 w-full min-w-[140px] rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
              >
                <option value="all">전체</option>
                {PRODUCT_CATEGORIES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="product-sort" className="mb-2 block text-sm text-foreground">
                가격 정렬
              </label>
              <select
                id="product-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as ProductSort)}
                className="h-10 w-full min-w-[140px] rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>

        <div className="border-t border-border pt-4">
          <PriceRangeSlider
            min={PRICE_RANGE.min}
            max={PRICE_RANGE.max}
            value={priceRange}
            onChange={setPriceRange}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
          <p className="text-sm text-muted-foreground">
            총 <span className="font-medium text-foreground">{filteredProducts.length}</span>개 상품
            {query && (
              <span>
                {" "}
                · &quot;{query}&quot; 검색 결과
              </span>
            )}
            {!isPriceRangeDefault(priceRange) && (
              <span>
                {" "}
                · ₩ {formatPrice(priceRange[0])} - ₩ {formatPrice(priceRange[1])}
              </span>
            )}
          </p>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleReset}
              className="text-sm text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              필터 초기화
            </button>
          )}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} showCategory />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-border px-6 py-16 text-center">
          <p className="font-serif text-2xl font-light text-foreground">검색 결과가 없습니다</p>
          <p className="mt-3 text-sm text-muted-foreground">
            다른 검색어나 가격 범위로 다시 조회해 보세요.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="mt-6 inline-flex items-center bg-primary px-5 py-2.5 text-sm tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            전체 상품 보기
          </button>
        </div>
      )}
    </section>
  )
}
