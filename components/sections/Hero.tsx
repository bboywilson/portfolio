export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background texture */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, #F5EFE6 0%, #FAF7F2 70%)',
        }}
      />
      {/* Decorative circle */}
      <div
        className="absolute top-24 right-12 w-64 h-64 rounded-full opacity-20 -z-10"
        style={{ background: 'radial-gradient(circle, #B85C38 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-20 left-8 w-40 h-40 rounded-full opacity-10 -z-10"
        style={{ background: 'radial-gradient(circle, #B85C38 0%, transparent 70%)' }}
      />

      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FBEAE2] text-[#B85C38] text-[11px] font-medium px-4 py-1.5 rounded-full mb-8 tracking-widest">
          業務自動化・AI活用エンジニア
        </div>

        {/* Main headline */}
        <h1 className="font-serif text-4xl md:text-5xl font-medium leading-relaxed text-[#2D2A26] mb-6">
          「面倒な作業」を、
          <br />
          自動化に変える。
        </h1>

        {/* Sub copy */}
        <p className="text-[14px] md:text-[15px] leading-relaxed text-[#6B6560] mb-10 max-w-xl mx-auto">
          Excel VBA・Google Apps Script・AI連携で、繰り返しの作業を自動化します。
          <br className="hidden md:block" />
          操作マニュアル付きで納品するので、エンジニアでなくても安心して使えます。
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 bg-[#B85C38] text-white text-[13px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#A04E2F] transition-colors duration-200"
          >
            プロジェクトを見る
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-[#2D2A26] text-[13px] font-medium px-7 py-3.5 rounded-lg border border-[#C9BFB1] hover:bg-[#E8DDD0] transition-colors duration-200"
          >
            お問い合わせ
          </a>
        </div>

        {/* Quick stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-sm mx-auto">
          {[
            { value: '15年', label: '教員経験' },
            { value: '3〜5×', label: '納品スピード' },
            { value: '100%', label: 'マニュアル付' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-xl font-medium text-[#B85C38]">{stat.value}</div>
              <div className="text-[11px] text-[#6B6560] mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
