# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 명령어

```bash
npm run dev      # 개발 서버 시작 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 시작
npm run lint     # ESLint 실행
```

## 아키텍처

### 라우트 그룹 구조

App Router의 라우트 그룹을 사용해 레이아웃을 분리한다.

| 그룹 | URL 패턴 | 레이아웃 |
|------|---------|---------|
| `(landing)` | `/` | Header + Footer |
| `(auth)` | `/login`, `/signup`, `/forgot-password` | Header + 중앙 정렬 Card |
| `dashboard` | `/dashboard/*` | 고정 Sidebar + 스크롤 main |

> 라우트 그룹 이름(`(landing)`, `(auth)`)은 URL에 포함되지 않는다.
> 예: `(auth)/login/page.tsx` → `/login`

### 전역 레이아웃 (`src/app/layout.tsx`)

루트 레이아웃에서 `ThemeProvider`, `TooltipProvider`, `Toaster`를 전역으로 제공한다. 새 Provider를 추가할 때 이 파일을 수정한다.

### 상수 중앙화 (`src/lib/constants.ts`)

네비게이션 링크, 푸터 링크, 사이드바 메뉴를 모두 이 파일에서 관리한다.
- `NAV_LINKS` — Header 네비게이션
- `FOOTER_LINKS` — Footer 링크 그룹
- `SIDEBAR_MENU` — Dashboard 사이드바 메뉴 (아이콘 포함)

새 페이지를 추가할 때 `constants.ts`의 해당 배열도 함께 업데이트한다.

### 폼 패턴

`react-hook-form` + `zod`를 조합해서 사용한다. `formState`에서 로딩 상태는 `isSubmitting`을 사용한다(`isLoading` 없음).

```typescript
const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<T>({
  resolver: zodResolver(schema),
})
```

### UI 컴포넌트

`src/components/ui/`의 컴포넌트는 shadcn/ui 기반이다. 스타일 수정 시 해당 파일을 직접 편집한다.

### 테마

`globals.css`에서 oklch 색상 변수로 라이트/다크 테마를 정의한다. Tailwind CSS v4를 사용하며, `tailwind.config.js`가 없고 CSS 파일에서 직접 설정한다.

## 기술 스택

- **Next.js 16** — App Router, React Compiler 활성화 (`next.config.ts`)
- **React 19** — 최신 버전
- **TypeScript** — strict 모드
- **Tailwind CSS v4** — `@tailwindcss/postcss` 플러그인 방식
- **shadcn/ui** — `src/components/ui/`에 직접 복사된 컴포넌트
- **next-themes** — 다크모드 (`ThemeProvider`)
- **sonner** — 토스트 알림 (`toast.success()`, `toast.error()`)
- **lucide-react** — 아이콘
