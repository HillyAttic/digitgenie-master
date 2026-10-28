import Link from 'next/link'
import { firebaseDb } from '@/lib/firebase-helpers'
import { Website } from '@/lib/types'
import TemplateImage from './TemplateImage'

export default async function TemplateShowcase() {
  let templates: Website[] = []
  try {
    const { data, error } = await firebaseDb.select<Website>('websites')
    if (!error && data) {
      templates = data
    }
  } catch (error) {
    console.error('Error loading templates:', error)
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl">
            Featured Templates
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-body">
            Discover our collection of premium-quality, free HTML templates and UI kits. 
            Each template is carefully crafted and ready to use.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <div
              key={template.id}
              className="group rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              {/* Template Image */}
              <div className="mb-4 overflow-hidden rounded-lg">
                <TemplateImage
                  src={template.image_url || '/images/placeholder.jpg'}
                  alt={template.title}
                  width={400}
                  height={240}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Template Info */}
              <h3 className="mb-2 text-xl font-bold text-black group-hover:text-primary transition-colors">
                {template.title}
              </h3>
              <p className="mb-4 text-body">{template.description}</p>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Link
                  href={template.preview_url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-primary/90"
                >
                  View Details
                </Link>
                <Link
                  href={template.preview_url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-gray-3 px-4 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-gray-1"
                >
                  Preview
                </Link>
              </div>
            </div>
          ))}
        </div>

        {templates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-body">No templates available yet.</p>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/templates"
            className="inline-flex items-center justify-center rounded-lg bg-white border border-gray-3 px-8 py-4 text-base font-medium text-black transition-all duration-300 hover:bg-gray-1 hover:shadow-lg"
          >
            View All Templates
            <svg
              className="ml-2 h-4 w-4"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}