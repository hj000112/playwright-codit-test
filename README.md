# CODIT QA Automation

🚀 [CODIT](https://www.codit.co.kr/) 웹사이트의 주요 요소에 대한 자동 UI 테스트를 수행합니다.  
본 프로젝트는 Playwright 기반으로 개발되었으며, GitHub Actions를 통해 정기적인 테스트 자동화를 구현합니다.

---

## ⚙️ 기술 스택

- [Playwright](https://playwright.dev/)
- TypeScript
- GitHub Actions (정기적 테스트 자동화)

---

## 🛠️ 실행 방법 (로컬)

로컬에서 테스트를 실행하려면 아래 명령어를 사용하세요:

```bash
# 브라우저 설치 (최초 1회)
npx playwright install

# 일반 테스트 실행
npx test

# 디버깅 모드 실행 (테스트 과정을 눈으로 보며 단계별 확인 가능)
npx playwright test --debug

