export type Project = {
  id: string
  emoji: string
  title: string
  description: string
  detail: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
  status?: string
}

export type Skill = {
  icon: string
  title: string
  items: string[]
}

export type Credential = {
  label: string
}

export const projects: Project[] = [
  {
    id: 'campaign-manager',
    emoji: '🔐',
    title: 'campaign-manager',
    description: 'Firebase認証とセキュリティルール設計を実践するために構築したキャンペーン管理ツール。ロールベースアクセス制御を実装。',
    detail: 'Firebase認証・セキュリティ設計',
    tags: ['Firebase Auth', 'Firestore', 'Security Rules', 'Next.js'],
    githubUrl: 'https://github.com/bboywilson',
  },
  {
    id: 'dance-schedule',
    emoji: '📅',
    title: 'dance-schedule',
    description: 'LINEグループの日程調整を自動化。参加者がLINEで回答すると自動で集計・通知される、実運用中のPWAアプリ。',
    detail: '個人開発・実運用中',
    tags: ['Node.js', 'Firebase', 'LINE Messaging API', 'GitHub Actions', 'PWA'],
    githubUrl: 'https://github.com/bboywilson',
    status: '実運用中',
  },
  {
    id: 'python-schedule',
    emoji: '📊',
    title: '資格学習通知Bot',
    description: '資格学習のスケジュールを管理し、毎朝6時に学習範囲と試験日カウントダウンをLINEに自動通知。日曜には進捗率もレポート。書籍ベースで学習計画を自動生成する実運用中のシステム。',
    detail: 'GAS × LINE API・実運用中',
    tags: ['GAS', 'LINE API', 'スプレッドシート', 'Python', '自動化'],
    githubUrl: 'https://github.com/bboywilson',
    status: '実運用中',
  },
]

export const skills: Skill[] = [
  {
    icon: '🌐',
    title: 'Web開発',
    items: ['Next.js / React', 'Firebase', 'LINE Messaging API', 'Vercel デプロイ'],
  },
  {
    icon: '📋',
    title: '業務自動化',
    items: ['Excel VBA', 'Google Apps Script', 'CSV処理・集計', 'グラフ自動生成'],
  },
  {
    icon: '🤖',
    title: 'AI活用',
    items: ['ChatGPT API', 'Claude API', 'チャットボット開発', 'AI業務効率化'],
  },
]

export const credentials: Credential[] = [
  { label: '統計検定2級' },
  { label: '基本情報技術者' },
  { label: 'Java Bronze' },
  { label: 'AWS CLF' },
]

export const platformLinks = {
  lancers: 'https://www.lancers.jp/profile/wilson_lc',
  crowdworks: 'https://crowdworks.jp/public/employees/5913149',
  github: 'https://github.com/bboywilson',
}
