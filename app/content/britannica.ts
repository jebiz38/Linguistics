/* BRITANNICA ENGLISH 사이트 카피·데이터 (한 곳에서 관리) */

export const BRAND = {
  name: "BRITANNICA ENGLISH",
  tagline: "영어 소그룹 수업",
  phone: "010-9804-9967",
  phoneHref: "tel:01098049967",
  location: "목동 이편한세상 아파트 단지 내",
} as const;

export const HERO = {
  headline: "언어학 기반, 소그룹 영어",
  subline:
    "패턴 암기가 아닌 읽기·사고·쓰기·토론이 이어지는 수업. 미국 언어학 학·석사가 설계한 커리큘럼으로 초등부터 입시까지.",
  note: "영어 유치원·대형 어학원 부적응 학생도 흥미를 느끼며 따라올 수 있도록 돕습니다.",
} as const;

export const ELEMENTARY = {
  title: "초등 영어",
  grades: "초1 ~ 초3",
  intro: "영어 4대 영역 집중 훈련 — Listening/Speaking, Reading, Writing, Grammar",
  areas: [
    {
      title: "Phonics & 발음",
      text: "파닉스 및 발음 교정 지도로 정확한 소리 습관을 만듭니다.",
    },
    {
      title: "Reading",
      text: "미국 교과서·원서 활용. 기능적 패턴 암기가 아닌, 리딩을 통한 어휘 확장과 표현력을 기릅니다.",
    },
    {
      title: "Writing",
      text: "브레인스토밍으로 사고력을 키우고, Essay 작성까지 단계적으로 연습합니다.",
    },
    {
      title: "Listening & Speaking",
      text: "자연스러운 음운론적 인식·발음·표현력 확장. 일상 표현에서 토론·발표 수업으로 확장합니다.",
    },
  ],
} as const;

export const TEACHER = {
  title: "선생님 프로필",
  subtitle: "미국 언어학 학·석사 · 동탄 15년+",
  credentials: [
    "University of Utah — 언어학 학사 (미국 유타주립대)",
    "University of Wisconsin–Milwaukee — 언어학 석사 (미국 위스콘신 주립대 밀워키)",
    "University of Utah TESOL 영어교육 자격증",
    "한양대학교 TESOL 영어교육 자격증",
    "대학원 석사 — Honor Society 장학생 · 미국 8년 이상 거주",
  ],
  highlights: [
    "동탄 초·중·고 영어 강의 경력 15년 이상",
    "5세 ~ 초등 5학년 — 효율적인 언어 습득 커리큘럼 · 입시 영어",
    "고등 내신·정시·심화반 — 수시·정시 서울권 대학 다수 합격",
    "외고·국제고·유학 — TOEFL 수업 가능",
  ],
} as const;

export const PROGRAMS = [
  {
    id: "reading-prep",
    title: "영어 리딩 프렙반",
    grades: "초4 ~ 초6",
    points: [
      "원서(문학·비문학)로 Science, Social Studies, History, Psychology, Astronomy, Geology 등 분야별 배경지식",
      "독해 유형별 문제 스킬 · 수능 독해·문해력 기르기",
      "기능적 패턴 학습이 아닌, 읽기 → 사고 → 쓰기 → 토론·발표로 이어지는 수업",
    ],
  },
  {
    id: "grammar-prep",
    title: "입시 영어 문법 프렙반",
    grades: "초5 ~ 초6",
    points: [
      "공식으로 접근하는 내신 문법을 쉽게 학습",
      "내신 문법 개념 → 실전 문제 풀이",
    ],
  },
  {
    id: "exam",
    title: "입시 영어",
    grades: "중1 ~ 고3",
    points: [
      "내신 시험 대비 · 문법 특강 · 수행평가 지도",
      "입시 영어 독해 — 유형별 Skill · 사고력·문해력·배경지식",
      "전국 연합 모의고사 기출 · EBS 수능 연계 · 정시 모의고사 대비",
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
