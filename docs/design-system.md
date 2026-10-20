# 디자인 시스템

MUI(Material UI)와 `src/theme.js`를 기준으로 UI를 만든다.
색상과 폰트는 컴포넌트에 직접 쓰지 않고 테마에서 가져온다.

## 색상
| 구분 | 값 | 사용처 |
|------|-----|--------|
| primary | `#1976d2` | 주요 버튼, 링크, 강조 |
| secondary | `#dc004e` | 보조 강조, 삭제/경고성 액션 |

- 컴포넌트에서는 `color="primary"` 또는 `sx={{ color: 'primary.main' }}`처럼 테마 값을 사용한다.
- `#1976d2` 같은 색상 코드를 컴포넌트에 직접 쓰지 않는다.

## 타이포그래피
- 폰트: Roboto (`@fontsource/roboto`), 없으면 Helvetica, Arial 순서
- h1: `2.125rem`, 굵기 500
- 글자 모양은 `<Typography variant="h1">`처럼 variant로 지정한다.

## 간격
- 기본 단위는 8px (`spacing: 8`)
- `sx={{ p: 2 }}`는 16px, `sx={{ mt: 3 }}`은 24px이다.
- 간격은 항상 8의 배수로 쓴다.

## 컴포넌트 사용 기준
- 버튼: `Button` (`variant="contained"`는 주요 동작, `outlined`는 보조 동작)
- 레이아웃: `Container`, `Box`, `Stack`, `Grid`
- 아이콘: `@mui/icons-material`
- 전역 초기화는 `CssBaseline`이 담당한다. 따로 reset CSS를 만들지 않는다.

## 테마 수정 방법
색상이나 폰트를 바꿀 때는 `src/theme.js`만 수정한다.
테마를 바꾸면 모든 화면에 한 번에 반영된다.
