'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const forgotPasswordSchema = z.object({
  email: z.string().email('유효한 이메일을 입력하세요.'),
})

type ForgotPasswordForm = z.infer<typeof forgotPasswordSchema>

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  const onSubmit = async (data: ForgotPasswordForm) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success(`${data.email}으로 재설정 링크를 보냈습니다.`)
    } catch {
      toast.error('이메일 전송에 실패했습니다.')
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
        <CardTitle>비밀번호 찾기</CardTitle>
        <CardDescription>가입한 이메일로 재설정 링크를 보내드립니다.</CardDescription>
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
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? '전송 중...' : '재설정 링크 보내기'}
          </Button>
        </form>
        <div className="mt-6 text-center text-sm">
          <Link href="/login" className="text-primary hover:underline font-medium">
            로그인으로 돌아가기
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
