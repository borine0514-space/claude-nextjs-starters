---
description: src/components/ 에 React 함수형 컴포넌트 파일을 생성합니다
argument-hint: ComponentName (예: UserCard, SearchBar)
---

`$ARGUMENTS` 컴포넌트를 `src/components/$ARGUMENTS.tsx` 경로에 생성해주세요.

다음 템플릿을 사용하세요:

```tsx
import { cn } from '@/lib/utils'

interface $ARGUMENTSProps {
  className?: string
}

export function $ARGUMENTS({ className }: $ARGUMENTSProps) {
  return (
    <div className={cn('', className)}>
      $ARGUMENTS
    </div>
  )
}
```

규칙:
- PascalCase 컴포넌트명 사용
- props 인터페이스는 {컴포넌트명}Props 형식
- className prop은 cn() 으로 병합
- 'use client' 는 클라이언트 상태/이벤트 필요 시에만 추가
