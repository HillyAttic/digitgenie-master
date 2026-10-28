import './themes.css'
import HomePrototype from './HomePrototype'

export default async function PrototypeHomePage({
  searchParams,
}: {
  searchParams: Promise<{ variant?: string }>
}) {
  const params = await searchParams
  return <HomePrototype variant={params.variant} />
}
