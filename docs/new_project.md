# 새 프로젝트 시작 절차

모든 새 프로젝트는 `lecture1/_template_settings` 템플릿으로 시작한다.
템플릿에는 React, Vite, MUI, 테마(`theme.js`)가 미리 설정되어 있다.

## 1단계: 템플릿 복사
`lecture1/` 안에 새 폴더 이름으로 템플릿을 복사한다. `node_modules`는 복사하지 않아도 된다.

```powershell
Copy-Item -Recurse lecture1/_template_settings lecture1/my-app -Exclude node_modules
```

## 2단계: 프로젝트 이름 변경
`package.json`의 `name`을 새 프로젝트 이름으로 바꾼다. (현재 값: `my-react-app`)

## 3단계: 패키지 설치

```bash
cd lecture1/my-app
npm install
```

## 4단계: 개발 서버 실행

```bash
npm run dev
```

터미널에 표시된 주소(보통 `http://localhost:5173`)를 브라우저에서 연다.

## 5단계: 개발 시작
- 화면은 `src/App.jsx`에서 만든다.
- 색상과 폰트는 `src/theme.js`에서 바꾼다.
- 작성 규칙은 @docs/code-convention.md, 디자인 기준은 @docs/design-system.md를 따른다.

## 6단계: 점검과 백업
- 코드 점검: `npm run lint`
- 빌드 확인: `npm run build`
- GitHub 백업과 배포는 `gh_cli` 스킬을 따른다.

## 체크리스트
- [ ] 템플릿을 복사했다.
- [ ] `package.json`의 name을 바꿨다.
- [ ] `npm install`이 오류 없이 끝났다.
- [ ] `npm run dev`로 화면이 뜬다.
- [ ] `npm run lint`에 오류가 없다.
