# 🍍 Softeer Bootcamp 프로젝트 고도화

소프티어 부트캠프에서 진행한 프로젝트를 기반으로 기능을 고도화하고, 확장 가능하며 유지 보수가 쉬운 구조로 개선합니다.

---

## 📦 기술 스택 및 구조

- 🧶 **pnpm** 기반의 Monorepo 구성
- ✨ **TypeScript** 전면 도입
- 🚀 최적화
  - 코드 스플리팅
  - 모든 모달 창에 Funnel Pattern 적용
  - 성능 저하 방지 적용
- 📱 반응형 UI 구현
- 🔜 추후 **Next.js** 마이그레이션 예정

---

## 🧹 관련 프로젝트 (소프티어 부트캠프)

> 원본 레포: [Team8-PineApple-FE](https://github.com/softeerbootcamp4th/Team8-PineApple-FE)

### 📚 WIKI

- [모노레포 관련 기술 개념 정리](https://github.com/yoonc01/softeer-develop/wiki/%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC-%EA%B4%80%EB%A0%A8-%EA%B8%B0%EC%88%A0-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC)

- [모노레포와 pnpm 선택 배경](https://github.com/yoonc01/softeer-develop/wiki/%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC%EC%99%80-pnpm-%EC%84%A0%ED%83%9D-%EB%B0%B0%EA%B2%BD)

- [Tailwind CSS v4 스타일링 전략: config.js, @apply, 그리고 @theme](https://github.com/yoonc01/softeer-develop/wiki/Tailwind-CSS-v4-%EC%8A%A4%ED%83%80%EC%9D%BC%EB%A7%81-%EC%A0%84%EB%9E%B5:-config.js,-@apply,-%EA%B7%B8%EB%A6%AC%EA%B3%A0-@theme)

### 🔧 주요 PR

- [theme을 이용한 text 설정](https://github.com/yoonc01/softeer-develop/pull/11)

---

## 🛠️ 프로젝트 실행 방법 (Clone 후)

이 레포를 처음 클론한 후 실행하려면 아래 단계를 천천히 따르세요.

### 1. 레포 클론 및 디렉토리 이동

```bash
git clone https://github.com/yoonc01/softeer-develop.git
cd softeer-develop
```

### 2. pnpm 설치 (처음이라면 필수)

이 프로젝트는 [pnpm](https://pnpm.io/)을 사용합니다. 처음 사용하신다면 다음 명령어로 전역 설치해주세요.

```bash
npm install -g pnpm
```

> 또는 전역 설치가 어려운 환경에서는 아래처럼 `npx` 형식으로 실행할 수 있습니다.

```bash
npx pnpm install
npx pnpm dev
```

> 다른 환경에서 실행할 때 유용하지만, `npx pnpm`은 시작 속도가 느리고, 모노레포 개발 환경에서는 일반적으로 권장되지 않습니다.

### 3. 의존성 설치

```bash
pnpm install
```

### 4. 공통 패키지 빌드 (`@hyoyoon/ui`)

```bash
pnpm build:ui
```

### 5. 앱 실행 (예: `service` 앱)

```bash
pnpm dev:service
```

또는:

```bash
cd apps/service
pnpm dev
```

### 6. Storybook 실행

엘리먼트 컴포넌트 개발 및 문서화를 위해 Storybook을 사용합니다.

| 명령어                   | 설명                                                    |
| ------------------------ | ------------------------------------------------------- |
| `pnpm storybook:service` | `apps/service`의 Storybook 실행 (http://localhost:6006) |
| `pnpm storybook:admin`   | `apps/admin`의 Storybook 실행 (http://localhost:6007)   |

> 기본 포트는 6006이며, 여러 앱을 동시에 실행할 경우 포트를 다르게 설정해야 합니다.

---

### 7. 테스트 실행 (Jest)

각 앱은 `ts-jest`와 `@testing-library/react` 기반으로 유닛 테스트를 지원합니다.

| 명령어              | 설명                       |
| ------------------- | -------------------------- |
| `pnpm test`         | 모든 앱의 테스트 실행      |
| `pnpm test:service` | `apps/service` 테스트 실행 |
| `pnpm test:admin`   | `apps/admin` 테스트 실행   |

> 테스트는 `.test.ts` 또는 `.test.tsx` 파일에 작성되며, Jest는 `jsdom` 환경에서 실행됩니다.

---

## 📁 프로젝트 구조

```
softeer-develop/
├── apps/                 # 실제 서비스 애플리케이션
│   ├── service/          # 사용자 서비스
│   └── admin/            # 관리자 페이지
├── packages/
│   └── ui/               # 공통 UI 패키지 (@hyoyoon/ui)
├── pnpm-workspace.yaml   # pnpm 워크스페이스 설정
├── tsconfig.base.json    # 공통 TypeScript 설정
├── package.json          # 루트 설정
└── README.md
```

---

## 💡 기타 참고 사항

- VS Code에서 `.vscode/settings.json` 설정을 통해 ESLint & Prettier가 자동 적용됩니다.
- 공통 컨퍼\uub2dd(`@hyoyoon/ui`) 및 앱 모두 TailwindCSS 사용 중
- 추후 Next.js 기반 SSR 및 동적 라우틱 도입 예정
