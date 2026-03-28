'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

const loginSchema = z.object({
  email: z.string().email('유효한 이메일을 입력하세요.'),
  password: z.string().min(6, '비밀번호는 최소 6자입니다.'),
})

type LoginForm = z.infer<typeof loginSchema>

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginForm) => {
    try {
      // 실제로는 API 호출을 하겠지만, 여기서는 토스트만 표시합니다
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success(`환영합니다, ${data.email}!`)
    } catch {
      toast.error('로그인에 실패했습니다.')
    }
  }

  return (
    <Card>
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
            MS
          </div>
        </div>
        <CardTitle>로그인</CardTitle>
        <CardDescription>계정에 로그인하여 시작하세요.</CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              {...register('email')}
              id="email"
              type="email"
              placeholder="you@example.com"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">비밀번호</Label>
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                잊으셨나요?
              </Link>
            </div>
            <Input
              {...register('password')}
              id="password"
              type="password"
              placeholder="••••••"
              disabled={isSubmitting}
            />
            {errors.password && (
              <p className="text-sm text-destructive">{errors.password.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? '로그인 중...' : '로그인'}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          계정이 없으신가요?{' '}
          <Link href="/signup" className="text-primary hover:underline font-medium">
            가입하기
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
