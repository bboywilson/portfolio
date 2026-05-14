import { platformLinks } from '@/lib/data'

const contactItems = [
  {
    label: 'ランサーズ',
    sub: 'Lancers',
    emoji: '💼',
    href: platformLinks.lancers,
  },
  {
    label: 'クラウドワークス',
    sub: 'CrowdWorks',
    emoji: '🔧',
    href: platformLinks.crowdworks,
  },
  {
    label: 'GitHub',
    sub: 'bboywilson',
    emoji: '🐙',
    href: platformLinks.github,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: '#F1E8D9' }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="section-label mb-3">CONTACT</p>
        <h2 className="font-serif text-2xl md:text-3xl font-medium text-[#2D2A26] mb-4">
          お仕事のご相談
        </h2>
        <p className="text-[13px] text-[#6B6560] mb-10 leading-relaxed">
          各プラットフォームからご連絡ください。
          <br />
          できること・できないことを最初に明示し、誠実に対応します。
        </p>

        {/* Platform links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-xl px-6 py-4 border border-[#E5DED4] hover:border-[#B85C38] hover:shadow-md transition-all duration-200 group text-left"
            >
              <span className="text-2xl">{item.emoji}</span>
              <div>
                <div className="text-[13px] font-medium text-[#2D2A26] group-hover:text-[#B85C38] transition-colors">
                  {item.label}
                </div>
                <div className="text-[10px] text-[#6B6560]">{item.sub}</div>
              </div>
              <span className="ml-auto text-[#B85C38] text-[12px] opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
            </a>
          ))}
        </div>

        {/* Note */}
        <div className="bg-white rounded-xl p-5 border border-[#E5DED4] text-left text-[12px] text-[#6B6560] leading-relaxed space-y-1.5">
          <p>✅ 仕様が明確な案件（テキストで要件が書いてある）</p>
          <p>✅ 単発・納品のみ（長期保守なし）</p>
          <p>✅ VBA・GAS・API連携・AI系のご依頼</p>
          <p className="text-[11px] text-[#9B9590] pt-1">
            ※ データ入力・コピペ系・スクレイピング系はお受けしていません
          </p>
        </div>
      </div>
    </section>
  )
}
