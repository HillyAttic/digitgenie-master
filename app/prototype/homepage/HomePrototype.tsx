'use client'

import PrototypeSwitcher from './PrototypeSwitcher'
import MarketplaceHome from './MarketplaceHome'
import { THEMES, type ThemeKey } from './data'

export default function HomePrototype({
  variant,
  switcher = true,
}: {
  variant?: string
  switcher?: boolean
}) {
  const key = (THEMES.some((theme) => theme.key === variant) ? variant : 'cobalt') as ThemeKey

  return (
    <div data-theme={key} className="proto-root">
      <MarketplaceHome />
      {switcher && <PrototypeSwitcher current={key} />}
    </div>
  )
}
