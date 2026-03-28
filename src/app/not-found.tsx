import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
        <h2 className="text-2xl font-semibold mb-2">페이지를 찾을 수 없습니다</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          요청하신 페이지가 존재하지 않습니다. 다른 페이지로 이동하시겠어요?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button>홈으로 돌아가기</Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline">대시보드로 이동</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
