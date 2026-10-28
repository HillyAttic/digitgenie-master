'use client'

import { useState, useEffect } from 'react'
import { dbHelpers } from '@/lib/db-helpers'
import { toast } from 'react-toastify'

interface Website {
  id: string
  title: string
  description: string
  image_url: string
  preview_url: string
  created_at: string
  updated_at: string
}

export default function WebsiteGrid() {
  const [websites, setWebsites] = useState<Website[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadWebsites()
  }, [])

  const loadWebsites = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const { data, error } = await dbHelpers.select<Website>('websites')
      if (error) {
        console.error('Failed to load websites:', error.message)
        setError(`Failed to load websites: ${error.message}`)
        toast.error(`Failed to load websites: ${error.message}`)
      } else {
        setWebsites(data || [])
      }
    } catch (err) {
      console.error('Error loading websites:', err)
      setError('Error loading websites')
      toast.error('Error loading websites')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Websites</h2>
            <p className="text-lg text-gray-600">Discover amazing web templates and designs</p>
          </div>
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Websites</h2>
            <p className="text-lg text-gray-600">Discover amazing web templates and designs</p>
          </div>
          <div className="text-center py-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-medium text-red-800 mb-2">Error Loading Websites</h3>
              <p className="text-red-700 mb-4">{error}</p>
              <p className="text-red-600 text-sm">
                Please check your Firebase configuration and ensure you have created the websites collection.
              </p>
              <button
                onClick={loadWebsites}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (websites.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Websites</h2>
            <p className="text-lg text-gray-600">Discover amazing web templates and designs</p>
          </div>
          <div className="text-center py-8">
            <p className="text-gray-500">No websites available at the moment.</p>
            <p className="text-gray-400 text-sm mt-2">
              Please add some websites through the admin dashboard or check your Firebase configuration.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Websites</h2>
          <p className="text-lg text-gray-600">Discover amazing web templates and designs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websites.map((website) => (
            <div
              key={website.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={website.image_url}
                  alt={website.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = 'https://via.placeholder.com/400x200?text=Image+Not+Found'
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{website.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{website.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={website.preview_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    View Live Demo
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  {/* Date display removed as per user request */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}