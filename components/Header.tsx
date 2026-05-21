'use client'

import { useState, useEffect } from 'react'
import { platformLinks } from '@/lib/data'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#E5DED4] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-serif text-[15px] font-medium text-[#2D2A26] tracking-wide"
        >
          Wilson Portfolio
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] text-[#6B6560] hover:text-[#B85C38] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href={platformLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] border border-[#C9BFB1] text-[#4A4540] px-4 py-1.5 rounded-full hover:bg-[#B85C38] hover:text-white hover:border-[#B85C38] transition-all duration-200"
          >
            GitHub
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#4A4540] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-t border-[#E5DED4] px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] text-[#4A4540] hover:text-[#B85C38]"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
