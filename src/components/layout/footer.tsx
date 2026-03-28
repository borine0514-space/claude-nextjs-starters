import { Separator } from '@/components/ui/separator'
import { FOOTER_LINKS, SITE_CONFIG } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* 상단 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 로고 + 설명 */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-xs font-bold">
                MS
              </div>
              <span className="font-bold">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* 링크 그룹 */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.group}>
              <h4 className="text-sm font-semibold mb-4">{group.group}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator />

        {/* 저작권 */}
        <div className="mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {SITE_CONFIG.name}. 모든 권리 보유.
          </p>
        </div>
      </div>
    </footer>
  )
}
