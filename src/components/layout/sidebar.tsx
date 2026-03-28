'use client'

import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { SIDEBAR_MENU, SITE_CONFIG } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const sidebarContent = (
    <nav className="flex flex-col gap-2 p-4">
      {/* 로고 */}
      <div className="flex items-center gap-2 font-bold mb-8 px-2">
        <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center text-sidebar-primary-foreground text-xs font-bold">
          MS
        </div>
        <span className="hidden lg:inline text-sm">{SITE_CONFIG.name}</span>
      </div>

      {/* 메뉴 아이템 */}
      {SIDEBAR_MENU.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
        const Icon = item.icon

        return (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
              isActive
                ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
            )}
            onClick={() => setIsOpen(false)}
          >
            <Icon className="h-5 w-5 flex-shrink-0" />
            <span className="hidden md:inline">{item.label}</span>
          </a>
        )
      })}
    </nav>
  )

  return (
    <>
      {/* 데스크톱 사이드바 */}
      <aside className="hidden md:flex w-64 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
        {sidebarContent}
      </aside>

      {/* 모바일 사이드바 (Sheet) */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="md:hidden absolute top-4 left-4 z-40 inline-flex items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 hover:bg-muted hover:text-foreground h-8 gap-1.5 px-2.5">
          <Menu className="h-5 w-5" />
          <span className="sr-only">사이드바</span>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="px-4 pt-4">
            <SheetTitle>{SITE_CONFIG.name}</SheetTitle>
          </SheetHeader>
          {sidebarContent}
        </SheetContent>
      </Sheet>
    </>
  )
}
