'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function SignupPage() {
  return (
    <Card>
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
            MS
          </div>
        </div>
        <CardTitle>회원가입</CardTitle>
        <CardDescription>새 계정을 만들어 시작하세요.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input id="password" type="password" placeholder="••••••" />
          </div>
          <Button type="submit" className="w-full">가입하기</Button>
        </div>
        <div className="mt-6 text-center text-sm">
          이미 계정이 있으신가요?{' '}
          <Link href="/login" className="text-primary hover:underline font-medium">
            로그인
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
