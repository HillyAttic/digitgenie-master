import Layout from '@/components/Layout'
import { firebaseDb } from '@/lib/firebase-helpers'
import { Website } from '@/lib/types'
import Link from 'next/link'
import TemplateImage from '@/components/TemplateImage'

export const metadata = {
  title: 'Free HTML Templates | DigitGenie',
  description: 'Browse our collection of free HTML templates, landing pages, and UI kits for your next project.',
}

export default async function TemplatesPage() {
  let websites: Website[] = []
  try {
    const { data, error } = await firebaseDb.select<Website>('websites')
    if (!error && data) {
      websites = data
    }
  } catch (error) {
    console.error('Error loading websites:', error)
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 sm:px-8">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-black">Browse All Templates</h1>
          <p className="mx-auto max-w-2xl text-lg text-body">
            Discover our complete collection of free HTML templates, React components, and UI kits.
            Perfect for startups, businesses, and personal projects.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {websites.length > 0 ? (
            websites.map((website) => (
              <div key={website.id} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <TemplateImage
                    src={website.image_url || 'https://via.placeholder.com/400x240?text=No+Image'}
                    alt={website.title}
                    width={400}
                    height={240}
                    className="h-48 w-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold">{website.title}</h3>
                <p className="text-body mb-4">{website.description}</p>
                <div className="flex gap-2">
                  <Link 
                    href={website.preview_url || '#'} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-primary/90"
                  >
                    Preview
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-body">No templates available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}