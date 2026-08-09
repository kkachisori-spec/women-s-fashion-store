const FOOTER_COLUMNS = [
  {
    title: "쇼핑",
    links: ["신상품", "의류", "가방", "액세서리", "세일"],
  },
  {
    title: "고객센터",
    links: ["주문/배송 조회", "교환/반품", "자주 묻는 질문", "1:1 문의"],
  },
  {
    title: "회사 정보",
    links: ["브랜드 스토리", "매장 안내", "채용", "이용약관"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="brand-logo text-foreground">
              MAISON ÉCLAT
            </p>
            <p className="body-copy mt-4 max-w-xs text-[14px]">
              당신의 하루를 더 아름답게. 30대 여성을 위한 세련된 셀렉트숍.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[13px] font-normal tracking-[0.1em] text-foreground">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] font-light tracking-[0.04em] text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-[11px] font-light tracking-[0.06em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 MAISON ÉCLAT. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-primary">
              개인정보처리방침
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              이용약관
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
