"use client"

import { useState } from "react"
import { Search, ShoppingBag, User, Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "신상품", href: "/new" },
  { label: "의류", href: "#clothing" },
  { label: "가방", href: "#bags" },
  { label: "액세서리", href: "#accessories" },
  { label: "매거진", href: "#magazine" },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground">
        <p className="mx-auto max-w-7xl px-4 py-2 text-center text-[11px] font-light tracking-[0.22em]">
          첫 구매 시 10% 할인 · 5만원 이상 무료배송
        </p>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:py-5">
        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex items-center justify-center text-foreground md:hidden"
          aria-label="메뉴 열기"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        {/* Brand */}
        <a
          href="/"
          className="brand-logo text-foreground"
        >
          MAISON ÉCLAT
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="주요 메뉴">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 text-foreground">
          <button type="button" aria-label="검색" className="transition-colors hover:text-primary">
            <Search className="size-5" />
          </button>
          <button
            type="button"
            aria-label="마이페이지"
            className="hidden transition-colors hover:text-primary sm:block"
          >
            <User className="size-5" />
          </button>
          <button type="button" aria-label="장바구니" className="relative transition-colors hover:text-primary">
            <ShoppingBag className="size-5" />
            <span className="absolute -right-1.5 -top-1.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav
          className="border-t border-border md:hidden"
          aria-label="모바일 메뉴"
        >
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="nav-link block py-3"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
