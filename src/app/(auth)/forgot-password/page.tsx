'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ForgotPasswordPage() {
  return (
    <Card>
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
            MS
          </div>
        </div>
        <CardTitle>비밀번호 찾기</CardTitle>
        <CardDescription>가입한 이메일로 재설정 링크를 보내드립니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <Button type="submit" className="w-full">재설정 링크 보내기</Button>
        </div>
        <div className="mt-6 text-center text-sm">
          <Link href="/login" className="text-primary hover:underline font-medium">
            로그인으로 돌아가기
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
