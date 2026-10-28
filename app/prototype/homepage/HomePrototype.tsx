'use client'

import PrototypeSwitcher from './PrototypeSwitcher'
import MarketplaceHome from './MarketplaceHome'
import { THEMES, type ThemeKey } from './data'

export default function HomePrototype({ variant }: { variant?: string }) {
  const key = (THEMES.some((theme) => theme.key === variant) ? variant : 'cobalt') as ThemeKey

  return (
    <div data-theme={key} className="proto-root">
      <MarketplaceHome />
      <PrototypeSwitcher current={key} />
    </div>
  )
}
