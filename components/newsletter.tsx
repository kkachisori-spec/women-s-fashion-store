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
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">Newsletter</p>
        <h2 className="font-serif text-3xl font-light text-balance text-foreground md:text-4xl">
          가장 먼저 만나보세요
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          신상품 소식과 회원 전용 혜택을 이메일로 전해드립니다.
        </p>

        {submitted ? (
          <p className="mt-8 text-sm text-primary">
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
              className="flex-1 border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
            <button
              type="submit"
              className="bg-primary px-7 py-3 text-sm tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
            >
              구독하기
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
