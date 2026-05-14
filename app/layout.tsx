import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio | 業務自動化・AI活用エンジニア',
  description: 'Excel VBA・Google Apps Script・AI連携で、繰り返しの作業を自動化します。元高校数学教員のエンジニアです。',
  openGraph: {
    title: 'Portfolio | 業務自動化・AI活用エンジニア',
    description: 'Excel VBA・GAS・AI連携で業務を自動化。操作マニュアル付きで納品します。',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
