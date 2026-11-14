import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import WebsiteGrid from '@/components/WebsiteGrid'
import HomePrototype from '@/app/prototype/homepage/HomePrototype'
import PrototypeFonts from '@/app/prototype/homepage/PrototypeFonts'
import { THEMES } from '@/app/prototype/homepage/data'
import './prototype/homepage/themes.css'

// The live homepage is chosen in the admin panel, so read it per request.
export const dynamic = 'force-dynamic'

const DATABASE_URL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL

async function getHomepageVariant(): Promise<string> {
  if (!DATABASE_URL) return 'main'
  try {
    const base = DATABASE_URL.endsWith('/') ? DATABASE_URL : `${DATABASE_URL}/`
    const res = await fetch(new URL('settings/homepage.json', base), {
      cache: 'no-store',
      signal: AbortSignal.timeout(3000),
    })
    if (!res.ok) return 'main'
    const value = await res.json()
    return value === 'main' || THEMES.some((theme) => theme.key === value) ? value : 'main'
  } catch {
    return 'main'
  }
}

export default async function Home() {
  const variant = await getHomepageVariant()

  if (variant !== 'main') {
    return (
      <>
        <PrototypeFonts />
        <HomePrototype variant={variant} switcher={false} />
      </>
    )
  }

  return (
    <Layout>
      <Hero />
      <WebsiteGrid />
    </Layout>
  )
}
