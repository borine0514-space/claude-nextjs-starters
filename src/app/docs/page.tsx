import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">돌아가기</span>
          </Link>
          <h1 className="text-xl font-bold">문서</h1>
          <div className="w-20" />
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">문서</h1>
          <p className="text-lg text-muted-foreground">
            Modern Starter Kit의 기능과 사용법을 알아보세요.
          </p>
        </div>

        {/* Quick Start */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">시작하기</h2>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>설치</CardTitle>
                <CardDescription>프로젝트 설정</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`npm install
npm run dev`}</code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>프로젝트 구조</CardTitle>
                <CardDescription>파일 구성</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`src/
  ├── app/              # Next.js App Router
  ├── components/       # React 컴포넌트
  │   ├── ui/          # shadcn UI 컴포넌트
  │   ├── layout/      # 레이아웃 컴포넌트
  │   └── theme/       # 테마 관련
  ├── hooks/           # 커스텀 훅
  └── lib/             # 유틸리티, 상수`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">주요 기능</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: '다크모드',
                description: 'next-themes를 사용한 완벽한 다크모드 지원',
              },
              {
                title: '폼 관리',
                description: 'react-hook-form과 zod를 사용한 검증',
              },
              {
                title: '컴포넌트 라이브러리',
                description: '37개 이상의 shadcn UI 컴포넌트',
              },
              {
                title: '타입 안정성',
                description: 'TypeScript strict 모드 설정',
              },
              {
                title: '반응형 디자인',
                description: 'Tailwind CSS로 모든 기기 지원',
              },
              {
                title: '데이터 테이블',
                description: '@tanstack/react-table 통합',
              },
            ].map((feature, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">기술 스택</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { name: 'Next.js', version: 'v15' },
              { name: 'React', version: 'v19' },
              { name: 'TypeScript', version: 'v5' },
              { name: 'Tailwind CSS', version: 'v4' },
              { name: 'shadcn/ui', version: 'v4' },
              { name: 'next-themes', version: 'latest' },
            ].map((tech, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-base">{tech.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{tech.version}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pages */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">페이지</h2>
          <div className="grid gap-4">
            {[
              {
                path: '/',
                name: '랜딩 페이지',
                description: 'Hero, Features, Stats, CTA 섹션',
              },
              {
                path: '/login',
                name: '로그인',
                description: 'react-hook-form + zod 폼 예시',
              },
              {
                path: '/dashboard',
                name: '대시보드',
                description: 'Sidebar + 통계카드 + 데이터 테이블',
              },
            ].map((page, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-lg">{page.name}</CardTitle>
                  <CardDescription>{page.path}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{page.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">시작할 준비가 되었나요?</h2>
          <p className="text-muted-foreground mb-8">
            이 스타터킷으로 멋진 웹 애플리케이션을 만들어보세요.
          </p>
          <Link href="/">
            <Button size="lg">홈으로 돌아가기</Button>
          </Link>
        </section>
      </main>
    </div>
  )
}
