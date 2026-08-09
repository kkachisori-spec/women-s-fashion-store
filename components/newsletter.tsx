"use client"

import type React from "react"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="eyebrow mb-3">Newsletter</p>
        <h2 className="section-title text-balance text-foreground">
          가장 먼저 만나보세요
        </h2>
        <p className="body-copy mt-4 text-pretty">
          신상품 소식과 회원 전용 혜택을 이메일로 전해드립니다.
        </p>

        {submitted ? (
          <p className="link-refined mt-8 text-primary">
            구독해 주셔서 감사합니다. 곧 특별한 소식으로 찾아뵐게요.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              이메일 주소
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일 주소를 입력하세요"
              className="flex-1 border border-border bg-card px-4 py-3 text-[13px] font-light tracking-[0.03em] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
            <button
              type="submit"
              className="btn-text bg-primary px-7 py-3 text-primary-foreground transition-opacity hover:opacity-90"
            >
              구독하기
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
