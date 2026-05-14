import { skills } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: '#F1E8D9' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-3">SKILLS</p>
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-[#2D2A26]">できること</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-white rounded-2xl p-6 border border-[#E5DED4] hover:shadow-md transition-shadow duration-200 group"
            >
              <div className="text-3xl mb-4">{skill.icon}</div>
              <h3 className="font-medium text-[16px] text-[#2D2A26] mb-3 group-hover:text-[#B85C38] transition-colors duration-200">
                {skill.title}
              </h3>
              <ul className="space-y-1.5">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[12px] text-[#6B6560]">
                    <span className="w-1 h-1 rounded-full bg-[#B85C38] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Feature strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '⚡', label: '3〜5倍速納品', sub: 'Claude Code活用' },
            { icon: '📝', label: 'マニュアル付き', sub: '必ず添付' },
            { icon: '💬', label: 'こまめな報告', sub: '進捗を逐次共有' },
            { icon: '✅', label: '正直な対応', sub: 'できないことは明示' },
          ].map((feat) => (
            <div
              key={feat.label}
              className="bg-white/70 rounded-xl px-4 py-3 border border-[#E5DED4] text-center"
            >
              <div className="text-xl mb-1">{feat.icon}</div>
              <div className="text-[12px] font-medium text-[#2D2A26]">{feat.label}</div>
              <div className="text-[10px] text-[#6B6560] mt-0.5">{feat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
