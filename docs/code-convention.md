# 코드 컨벤션

## 기술 스택
- React 19, Vite, MUI 9, react-router-dom 7
- 린트: oxlint (`npm run lint`)

## 파일과 폴더
| 대상 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 파일 | PascalCase.jsx | `UserCard.jsx` |
| 일반 JS 파일 | camelCase.js | `formatDate.js` |
| 폴더 | 소문자 | `components`, `pages` |

권장 구조는 아래와 같다.

```
src/
├── components/   재사용 컴포넌트
├── pages/        라우트 단위 화면
├── theme.js      MUI 테마
├── App.jsx
└── main.jsx
```

## 네이밍
- 컴포넌트: PascalCase (`LoginForm`)
- 변수와 함수: camelCase (`userName`, `handleClick`)
- 이벤트 핸들러: `handle` + 동작 (`handleSubmit`)
- boolean 변수: `is`, `has`로 시작 (`isLoading`)
- 상수: UPPER_SNAKE_CASE (`MAX_COUNT`)

## 컴포넌트 작성
- 함수형 컴포넌트와 Hooks만 사용한다.
- 파일 하나에 컴포넌트 하나를 둔다.
- `export default`로 내보낸다.
- 컴포넌트가 100줄을 넘으면 나눈다.

```jsx
import { Button } from '@mui/material';

function SaveButton({ onSave }) {
  return (
    <Button variant="contained" onClick={onSave}>
      저장
    </Button>
  );
}

export default SaveButton;
```

## 스타일
- MUI의 `sx` prop을 우선 사용한다.
- 색상과 폰트는 테마 값을 쓴다. (@docs/design-system.md 참고)
- 별도 CSS 파일은 꼭 필요할 때만 만든다.

## 일반 규칙
- 들여쓰기는 공백 2칸
- 문자열은 작은따옴표 `'`
- 문장 끝에 세미콜론을 붙인다.
- 사용하지 않는 import와 변수는 지운다.
- 주석은 "왜 그렇게 했는지"가 필요한 곳에만 한국어로 적는다.
- 커밋 메시지는 한국어로 짧게 쓴다. 예: `로그인 화면 추가`
