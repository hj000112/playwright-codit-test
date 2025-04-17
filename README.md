# CODIT QA Automation

🚀 [CODIT](https://www.codit.co.kr/) 웹사이트의 주요 요소에 대한 자동 UI 테스트를 수행합니다.  
본 프로젝트는 Playwright 기반으로 개발되었으며, GitHub Actions를 통해 정기적인 테스트 자동화를 구현합니다.

---

## 🧪 주요 테스트 항목

- 주요 뉴스 영역이 정상적으로 노출되는지 확인
- 통합 관련 주요 뉴스 텍스트 존재 여부 확인
- 뉴스 이미지가 화면에 정상적으로 표시되는지 확인
- 디지털데일리 텍스트가 1개 이상 있는지 확인

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
npx playwright test


# 디버깅 모드 실행 (테스트 과정을 눈으로 보며 단계별 확인 가능)
npx playwright test --debug
