<br/><br/>
![Image](https://github.com/user-attachments/assets/4bd4f282-7558-462b-8233-27e40215370f)
# Prography 10th 사전 과제 (React)
<hr/>

## 개발환경 
- React v19.0.0
- Context API
- React Router
- Styled-Components
- Typescript
- Vite


## 실행 방법
```
# 프로젝트 클론 후 패키지 설치
npm install

# development 실행 (port 5173)
npm run dev

# production 빌드 및 실행 (port 4173)
vite build
vite preview
```

## 폴더 구조
```
📦 prography-10th-frontend
├── public
│   └── assets       # 정적파일(이미지, 등)
└── src
    ├── components   # UI 컴포넌트(인풋, 버튼, 등)
    ├── context      # context
    ├── global       # 상수
    ├── hooks        # 커스텀 훅
    ├── pages        # 페이지 컴포넌트
    └── types        # 타입
```

## 구현 내용
### 💻 배포 페이지
https://prography-10th-assignment-jiwon.netlify.app/
### 📌 요구 사항
- 리쿠르팅 **진행단계**를 표시합니다.
- 제출하기 버튼을 누르기 전까지 리크루팅  **폼 데이터가 유지**되어야 합니다.
- 필수 입력 항목이 있으면, 필수 항목을 입력하기 전까지는 다음 단계로 넘어갈 수 없어야 합니다.
- 다음 단계로 넘어갈 경우, 필수 입력 항목이 누락되었을 때 **경고 표시 및 알림**이 제공되어야 합니다. 
- 특정항목에 대한 **예시 데이터**를 표시해야 합니다.

|                                                   메인화면                                                    |                                                  지원양식                                                   |                                                  안내모달                                                   |
|:---------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------:|
| <img src="https://github.com/user-attachments/assets/3aa49d9e-f95c-406b-8920-2ccf098c8d8e" width="240" /> | <img src="https://github.com/user-attachments/assets/1a0cbc9d-eaf8-45a3-b153-31e06cfd6a74" width="240"> | <img src="https://github.com/user-attachments/assets/53ab7ec6-ea67-4707-b4bb-7ad22130bde6" width="240"> |
|                                             **페이지 이동해도 내용유지**                                             |                                                **제출완료**                                                 |                                              **제출내용 다시보기**                                              |
|  <img src="https://github.com/user-attachments/assets/fe8b3448-2f9e-42a7-a81c-df2a78d4cac5" width="240">  | <img src="https://github.com/user-attachments/assets/4314f87e-efa8-4233-9c28-7f7b60317380" width="240"> | <img src="https://github.com/user-attachments/assets/b5ab40c9-1eb0-4673-9b46-11f042dec431" width="240"> |


- API통신을 위한 리쿠르팅 **폼 데이터** 구성해야 합니다.
```
// 코드 내 주석표시 & 폼 데이터 구성 내용 콘솔 로그 통해 확인가능
// 📌 지원양식 제출 (API 통신 위한 폼 데이터 구성) */
const submitForm = () => {
    console.log('제출 데이터 내용', data);
    
    const formData: FormData = new FormData;
    Object.entries(data as FormDataType).forEach(([key, value]) => {
        formData.append(key, value);
    });
}
```

## 구현 포인트
### 1. 상태 관리
- `context`를 사용해서 지원 양식 입력 내용, 진행률을 관리 합니다.
### 2. 컴포넌트 구조화
- 버튼, 인풋 등 기본적인 ui 요소
- 지원 단계별 내용 및 구성 역시 공통화하여 재사용, 유지보수가 용이하도록 하였습니다.
### 3. 유효성 검사
- 필수항목 입력여부 검사. 미입력 시 다음 페이지로 이동불가하고 경고모달이 활성화 됩니다.
- 입력내용 유효성 검사(전화번호, 이메일 서식). 서식 불일치 시 인풋 하단에 경고메세지가 활성화 됩니다.
### 4. 사용성
- 반응형 디자인 구현하였습니다.