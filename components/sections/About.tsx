import { credentials } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Avatar / illustration */}
        <div className="flex justify-center md:justify-end order-first md:order-last">
          <div className="relative">
            <div
              className="w-56 h-56 rounded-2xl flex items-center justify-center text-7xl"
              style={{ background: '#F1E8D9' }}
            >
              👨‍💻
            </div>
            {/* Decorative border offset */}
            <div
              className="absolute -bottom-3 -right-3 w-56 h-56 rounded-2xl -z-10"
              style={{ border: '2px solid #E8DDD0' }}
            />
          </div>
        </div>

        {/* Text content */}
        <div>
          <p className="section-label mb-3">ABOUT</p>
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-[#2D2A26] leading-relaxed mb-6">
            複雑な業務を、シンプルに整理する。
          </h2>

          <div className="space-y-4 text-[14px] leading-relaxed text-[#4A4540]">
            <p>
              「誰にでもわかりやすく伝える」を大切にしており、納品物には必ず操作マニュアルを添付します。Claude Code を活用した高速開発で、通常の3〜5倍速での納品が可能です。AI・最新技術への積極的なキャッチアップを続けながら、お客様の業務改善に取り組んでいます。
            </p>
          </div>

          {/* Credentials */}
          <div className="mt-6">
            <p className="text-[11px] text-[#6B6560] mb-3">取得資格・認定</p>
            <div className="flex flex-wrap gap-2">
              {credentials.map((c) => (
                <span
                  key={c.label}
                  className="text-[11px] text-[#4A4540] bg-white border border-[#E5DED4] px-3 py-1 rounded-full"
                >
                  {c.label}
                </span>
              ))}
            </div>
          </div>

          {/* Timeline highlight */}
          <div className="mt-8 border-l-2 border-[#E8DDD0] pl-4 space-y-3">
            {[
              { year: '2023', text: '基本情報技術者・Java Bronze・AWS CLF取得' },
              { year: '2024〜', text: 'Claude Code活用・副業エンジニアとして活動中' },
            ].map((item) => (
              <div key={item.year} className="flex gap-3">
                <span className="text-[11px] text-[#B85C38] font-medium w-12 shrink-0 pt-0.5">{item.year}</span>
                <span className="text-[12px] text-[#6B6560]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
