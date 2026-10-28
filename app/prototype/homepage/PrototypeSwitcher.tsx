'use client'

import { useCallback, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { THEMES } from './data'

export default function PrototypeSwitcher({ current }: { current: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const index = Math.max(
    0,
    THEMES.findIndex((theme) => theme.key === current)
  )
  const theme = THEMES[index]

  const go = useCallback(
    (delta: number) => {
      const next = THEMES[(index + delta + THEMES.length) % THEMES.length]
      router.replace(`${pathname}?variant=${next.key}`, { scroll: false })
    },
    [index, pathname, router]
  )

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return
      }

      if (event.key === 'ArrowRight') go(1)
      if (event.key === 'ArrowLeft') go(-1)
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  if (process.env.NODE_ENV === 'production') return null

  return (
    <div className="proto-bar" role="group" aria-label="Prototype theme switcher">
      <button type="button" onClick={() => go(-1)} aria-label="Previous theme">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="proto-bar__label">
        <span className="proto-bar__key">
          {index + 1}/{THEMES.length}
        </span>
        <span className="proto-bar__name">{theme.name}</span>
        <span className="proto-bar__note">{theme.note}</span>
      </div>

      <button type="button" onClick={() => go(1)} aria-label="Next theme">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}
