/* BRITANNICA ENGLISH 사이트 카피·데이터 (한 곳에서 관리) */

export const BRAND = {
  name: "BRITANNICA ENGLISH",
  tagline: "영어 소그룹 수업",
  phone: "010-9469-9807",
  phoneHref: "tel:01094699807",
  location: "이편한세상동탄 아파트 단지 내 수업",
} as const;

export const HERO = {
  headline: "언어학 기반, 소그룹 영어",
  subline:
    "기능적인 패턴별 학습이 아닌, 리딩을 통해 사고하고 쓰고 토론·발표가 이어지는 수업. 미국 언어학 학·석사가 설계한 커리큘럼으로 초등부터 입시까지.",
  note: "영어 유치원 + 대형 어학원 부적응자도 영어에 흥미를 느낄 수 있도록 도와줍니다.",
} as const;

export const PROGRAMS_INTRO =
  "기능적인 패턴별 학습이 아닌, 리딩을 통해 사고하고 쓰고 토론·발표 수업이 이어지는 수업에 참여할 수 있습니다.";

export const ELEMENTARY = {
  title: "초등 영어",
  grades: "초1 ~ 초6",
  youtubeUrl:
    "https://www.youtube.com/watch?v=0XyLnHa0gFM&list=PLx_kgXuOGG800oJ6XWbJDUYST1nuS53JE",
  intro:
    "영어 4대 영역 집중 지도 — Listening, Speaking, Reading, Writing + Grammar",
  areas: [
    {
      title: "Phonics",
      text: "음운론적 인식 및 발음 교정 → 읽기 독립 훈련",
    },
    {
      title: "Listening & Speaking",
      text: "일상 표현력 습득 → 토론 및 발표 수업 확장",
    },
    {
      title: "Writing + Grammar",
      text: "브레인 스토밍 기반 사고력 훈련 및 표현력 향상 → 효과적인 Essay 써보기",
    },
    {
      title: "Reading (원서 활용)",
      text: "문학·비문학 지문으로 다양한 분야별 어휘 및 배경지식 쌓기",
    },
  ],
} as const;

export const TEACHER = {
  title: "선생님 프로필 (여)",
  subtitle: "미국 언어학 학·석사 · 동탄 15년+",
  credentials: [
    "University of Utah — 언어학 학사 (미국 유타주립대)",
    "University of Wisconsin–Milwaukee — 언어학 석사 (미국 위스콘신 주립대 밀워키)",
    "University of Utah TESOL 영어교육 자격증",
    "한양대학교 TESOL 영어교육 자격증",
    "UWM Honor Society Member 장학생 · 미국 8년 이상 거주",
  ],
  highlights: [
    "동탄 초·중·고 영어 강의 경력 15년 이상",
    "5세 ~ 초등 5학년 — 효율적인 언어 습득 과정 커리큘럼 · 입시 영어",
    "고등 내신관리반, 정시반, 심화반 — 수시·정시 서울권 대학 다수 합격",
    "외고, 국제고, 유학 — TOEFL 수업 가능",
  ],
} as const;

export const PROGRAMS = [
  {
    id: "reading-prep",
    title: "영어 리딩 프렙반",
    grades: "초4 ~ 초6",
    points: [
      "다양한 분야(Science, History, Social Studies, Geology 등) 원서 읽기를 통한 어휘력 확장 및 배경지식 쌓기",
      "문학·비문학 지문 원서 읽기를 통한 영어 문해력 기르기",
      "수능 독해의 기초 역량 형성",
    ],
  },
  {
    id: "grammar-prep",
    title: "입시 영어 – 문법 프렙반",
    grades: "초5 ~ 초6",
    points: [
      "내신 문법 개념 완성 → 개념을 공식으로 옮기는 쉽게 배우는 문법 익히기",
      "공식 적용 및 실전 문제풀이 · 응용 심화 단계로 확장",
      "문법을 통한 영어 문장 구조 이해 → 라이팅과 리딩에 도움이 되는 문법 구조 익히기",
    ],
  },
  {
    id: "exam",
    title: "입시 영어",
    grades: "중1 ~ 고3",
    points: [
      "학교 내신 시험 대비 및 수행평가 준비",
      "중1 ~ 중3 — 내신 문법 개념, 실전 문제 풀이, 심화 단계 (문법 → 서술형 영작 표현 확장)",
      "전국 연합 모의고사 및 EBS 수능 연계교재 독해 특강 → 문제 유형별 전략 학습",
      "고1 ~ 고3 (3·6·9·11월 모의고사 줌·온라인 수업 가능) → 모의고사 변형 문제 수업으로 철저한 내신 대비",
    ],
  },
] as const;

export const SCHEDULE = {
  title: "수업 스케줄",
  weekdayNote: "월·수 또는 화·목",
  rows: [
    { time: "14:00", label: "Phonics lesson (파닉스 수업)" },
    {
      time: "15:00 – 17:30",
      label: "초등영어 / 리딩 프렙반 / 문법 프렙반",
    },
    { time: "17:00 – 18:30", label: "입시영어반 (중1 ~ 고2)" },
    { time: "18:30 – 20:00", label: "입시영어반 (중1 ~ 고2)" },
  ],
  weekendNote: "금·토 — 고등 입시반 (고1 ~ 고3)",
} as const;
