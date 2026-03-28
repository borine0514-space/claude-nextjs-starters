import {
  BarChart3,
  Lightbulb,
  Settings,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export const SITE_CONFIG = {
  name: 'Modern Starter',
  description: '빠른 웹 개발을 위한 완벽한 스타터킷',
  url: 'https://modern-starter.example.com',
} as const

export const NAV_LINKS: Array<{ label: string; href: string }> = [
  { label: '기능', href: '/#features' },
  { label: '예제', href: '/#examples' },
  { label: '문서', href: '/docs' },
  { label: '블로그', href: '/blog' },
]

export const FOOTER_LINKS: Array<{
  group: string
  links: Array<{ label: string; href: string }>
}> = [
  {
    group: '제품',
    links: [
      { label: '기능', href: '/#features' },
      { label: '가격', href: '/#pricing' },
      { label: '보안', href: '/security' },
    ],
  },
  {
    group: '개발자',
    links: [
      { label: '문서', href: '/docs' },
      { label: 'API 레퍼런스', href: '/docs#api-reference' },
      { label: 'GitHub', href: 'https://github.com' },
    ],
  },
  {
    group: '회사',
    links: [
      { label: 'About', href: '/about' },
      { label: '블로그', href: '/blog' },
      { label: '연락처', href: '/contact' },
    ],
  },
]

export const SIDEBAR_MENU: Array<{
  label: string
  href: string
  icon: LucideIcon
}> = [
  { label: '대시보드', href: '/dashboard', icon: BarChart3 },
  { label: '인사이트', href: '/dashboard/insights', icon: Lightbulb },
  { label: '성능', href: '/dashboard/performance', icon: Zap },
  { label: '설정', href: '/dashboard/settings', icon: Settings },
]
