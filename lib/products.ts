export type Product = {
  id: number
  name: string
  price: string
  tag: "NEW" | "BEST" | null
  image: string
  category: string
}

export type ProductSort = "default" | "price-asc" | "price-desc"

export function parsePrice(price: string): number {
  return Number(price.replace(/,/g, ""))
}

export function formatPrice(price: number): string {
  return price.toLocaleString("ko-KR")
}

export const NEW_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "오버사이즈 울 코트",
    price: "289,000",
    tag: "NEW",
    image: "/images/product-1.png",
    category: "아우터",
  },
  {
    id: 2,
    name: "실크 블라우스",
    price: "129,000",
    tag: "BEST",
    image: "/images/product-2.png",
    category: "블라우스",
  },
  {
    id: 3,
    name: "포인티드 레더 힐",
    price: "198,000",
    tag: null,
    image: "/images/product-3.png",
    category: "슈즈",
  },
  {
    id: 4,
    name: "캐시미어 니트",
    price: "156,000",
    tag: "NEW",
    image: "/images/product-4.png",
    category: "니트",
  },
  {
    id: 5,
    name: "플리츠 미디 스커트",
    price: "118,000",
    tag: "NEW",
    image: "/images/product-5.png",
    category: "스커트",
  },
  {
    id: 6,
    name: "린넨 블렌드 셔츠",
    price: "98,000",
    tag: "NEW",
    image: "/images/product-6.png",
    category: "셔츠",
  },
  {
    id: 7,
    name: "소프트 레더 토트백",
    price: "245,000",
    tag: "NEW",
    image: "/images/product-7.png",
    category: "가방",
  },
  {
    id: 8,
    name: "골드 체인 목걸이",
    price: "72,000",
    tag: "NEW",
    image: "/images/product-8.png",
    category: "액세서리",
  },
]

export const PRICE_RANGE = {
  min: Math.min(...NEW_PRODUCTS.map((product) => parsePrice(product.price))),
  max: Math.max(...NEW_PRODUCTS.map((product) => parsePrice(product.price))),
}

export const PRODUCT_CATEGORIES = [
  ...new Set(NEW_PRODUCTS.map((product) => product.category)),
]
