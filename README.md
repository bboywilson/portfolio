# Portfolio サイト

業務自動化・AI活用エンジニアのポートフォリオサイトです。

## 技術スタック

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Vercel** (デプロイ先)

## ローカル起動

```bash
# 1. 依存パッケージのインストール
npm install

# 2. 開発サーバー起動
npm run dev

# 3. ブラウザで確認
# http://localhost:3000 を開く
```

## ファイル構成

```
portfolio/
├── app/
│   ├── layout.tsx        # サイト全体のレイアウト・メタデータ
│   ├── page.tsx          # 1ページLPの組み立て
│   └── globals.css       # グローバルスタイル・フォント読み込み
├── components/
│   ├── Header.tsx        # ナビゲーションヘッダー
│   ├── Footer.tsx        # フッター
│   └── sections/
│       ├── Hero.tsx      # ヒーローセクション
│       ├── About.tsx     # 自己紹介
│       ├── Skills.tsx    # スキル一覧
│       ├── Projects.tsx  # プロジェクト実績
│       └── Contact.tsx   # お問い合わせ・外部リンク
└── lib/
    └── data.ts           # ★ コンテンツデータ（ここだけ編集すればOK）
```

## コンテンツの更新方法

**`lib/data.ts` を編集するだけでOKです。**

### プロジェクトを追加する

```ts
// lib/data.ts の projects 配列に追記
{
  id: 'new-project',
  emoji: '🎯',
  title: '新しいプロジェクト名',
  description: '発注者目線の説明文（技術スタックより何ができるかを優先）',
  detail: '案件の種別',
  tags: ['使用技術1', '使用技術2'],
  githubUrl: 'https://github.com/bboywilson/...',
  demoUrl: 'https://...',  // なければ省略可
  status: '実運用中',      // なければ省略可
}
```

### プラットフォームのURLを更新する

受注実績が出て各プラットフォームのプロフィールURLが確定したら：

```ts
// lib/data.ts の platformLinks を更新
export const platformLinks = {
  lancers: 'https://www.lancers.jp/profile/あなたのID',
  crowdworks: 'https://crowdworks.jp/public/employees/あなたのID',
  github: 'https://github.com/bboywilson',
}
```

## Vercel デプロイ手順

1. GitHubリポジトリにプッシュ
2. [vercel.com](https://vercel.com) にログイン
3. "New Project" → GitHubリポジトリを選択
4. そのまま "Deploy" をクリック（設定変更不要）
5. デプロイ完了後、表示されたURLを提案文に貼る

## TODO

- [ ] 屋号が決まったら `app/layout.tsx` の `title` と `Header.tsx` のロゴ文字を更新
- [ ] ランサーズ・クラウドワークスのプロフィールURLが確定したら `lib/data.ts` を更新
- [ ] 受注実績が出たら `lib/data.ts` の `projects` に追記
