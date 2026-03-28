import { ArrowRight, Zap, Shield, Rocket } from 'lucide-react'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function LandingPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="mb-4 inline-block" variant="outline">
            ✨ 최신 기술 스택
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            빠른 웹 개발을 위한
            <br />
            <span className="text-primary">완벽한 스타터킷</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Next.js v15, TypeScript, Tailwind CSS, shadcn/ui로 빌드된 프로덕션 레디 스타터킷.
            바로 개발을 시작하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" className="gap-2">
                시작하기 <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/docs">
              <Button size="lg" variant="outline">
                문서 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">강력한 기능</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              모던한 웹 애플리케이션 개발에 필요한 모든 것을 포함했습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: '번개처럼 빠른 성능',
                description: 'Next.js App Router와 최적화된 렌더링으로 뛰어난 성능을 제공합니다.',
              },
              {
                icon: Shield,
                title: '타입 안정성',
                description: 'TypeScript를 기본으로 제공하여 개발 시 오류를 미리 방지합니다.',
              },
              {
                icon: Rocket,
                title: '프로덕션 레디',
                description: '최고의 관행을 따르는 구조로 언제든 배포할 수 있습니다.',
              },
            ].map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title}>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="examples" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '30+', label: 'UI 컴포넌트' },
              { number: '100%', label: 'TypeScript' },
              { number: '무료', label: 'MIT 라이선스' },
              { number: '24/7', label: ' 커뮤니티 지원' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg opacity-90 mb-8">
            복잡한 설정 없이 프로덕션 레디한 프로젝트를 즉시 시작할 수 있습니다.
          </p>
          <Link href="/login">
            <Button size="lg" variant="secondary" className="gap-2">
              시작하기 <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
