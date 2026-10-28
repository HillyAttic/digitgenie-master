'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { dbHelpers } from '@/lib/db-helpers'
import { useAuth } from '@/hooks/useAuth'
import { toast } from 'react-toastify'
import { Website } from '@/lib/types'

export default function AdminDashboard() {
  const [websites, setWebsites] = useState<Website[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingWebsite, setEditingWebsite] = useState<Website | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: '',
    preview_url: ''
  })
  const router = useRouter()
  const { user, loading: authLoading } = useAuth()

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/admin/login')
    }
  }, [user, authLoading, router])

  // Load websites on component mount
  useEffect(() => {
    if (user) {
      loadWebsites()
    }
  }, [user])

  const loadWebsites = async () => {
    try {
      console.log('Loading websites...');
      const { data, error } = await dbHelpers.select<Website>('websites')
      console.log('Websites data received:', data);
      console.log('Websites error:', error);
      
      if (error) {
        toast.error('Failed to load websites: ' + error.message)
      } else {
        setWebsites(data || [])
      }
    } catch (error) {
      console.error('Error loading websites:', error);
      toast.error('Error loading websites')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log('Form submission started');
    console.log('Form data:', formData);
    
    // Log each field to check if they have values
    console.log('Title:', formData.title);
    console.log('Description:', formData.description);
    console.log('Image URL:', formData.image_url);
    console.log('Preview URL:', formData.preview_url);
    
    if (!formData.title || !formData.description || !formData.image_url || !formData.preview_url) {
      console.log('Validation failed - missing fields');
      toast.error('Please fill in all fields')
      return
    }
    
    console.log('Form validation passed');

    try {
      if (editingWebsite) {
        // Update existing website
        console.log('Updating website with ID:', editingWebsite.id);
        const { data, error } = await dbHelpers.update('websites', editingWebsite.id, {
          ...formData
        })
        
        if (error) {
          console.error('Failed to update website:', error);
          toast.error('Failed to update website: ' + error.message)
        } else {
          console.log('Website updated successfully with data:', data);
          toast.success('Website updated successfully!')
          loadWebsites()
          resetForm()
        }
      } else {
        // Create new website
        console.log('Creating new website with data:', formData);
        const { data, error } = await dbHelpers.insert('websites', {
          ...formData
        })
        
        // Log the raw response
        console.log('Raw insert response:', { data, error });
        
        if (error) {
          console.error('Failed to create website:', error);
          toast.error('Failed to create website: ' + (error.message || 'Unknown error'))
        } else {
          console.log('Website created successfully with data:', data);
          toast.success('Website created successfully!')
          loadWebsites()
          resetForm()
        }
      }
    } catch (error) {
      console.error('Error saving website:', error);
      toast.error('Error saving website: ' + (error as Error).message)
    }
  }

  const handleEdit = (website: Website) => {
    setEditingWebsite(website)
    setFormData({
      title: website.title,
      description: website.description,
      image_url: website.image_url,
      preview_url: website.preview_url
    })
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this website?')) {
      return
    }

    try {
      const { error } = await dbHelpers.delete('websites', id)
      if (error) {
        toast.error('Failed to delete website: ' + error.message)
      } else {
        toast.success('Website deleted successfully!')
        loadWebsites()
      }
    } catch (error) {
      toast.error('Error deleting website')
    }
  }

  const resetForm = () => {
    setFormData({ title: '', description: '', image_url: '', preview_url: '' })
    setEditingWebsite(null)
    setShowForm(false)
  }

  const handleSignOut = async () => {
    try {
      // Sign out logic would go here
      router.push('/admin/login')
    } catch (error) {
      console.error('Error signing out:', error)
      toast.error('Error signing out')
    }
  }

  // Show loading state while checking auth
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  // If not authenticated, don't render the dashboard
  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Welcome, {user.email}
              </div>
              <button
                onClick={handleSignOut}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Add New Website Button */}
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Website Management</h2>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Add New Website
            </button>
          </div>

          {/* Form Modal */}
          {showForm && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
              <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {editingWebsite ? 'Edit Website' : 'Add New Website'}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Image URL</label>
                    <input
                      type="url"
                      value={formData.image_url}
                      onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Preview URL</label>
                    <input
                      type="url"
                      value={formData.preview_url}
                      onChange={(e) => setFormData({ ...formData, preview_url: e.target.value })}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="flex gap-2 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      {editingWebsite ? 'Update' : 'Create'}
                    </button>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="flex-1 bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Websites List */}
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {websites.length === 0 ? (
                  <li className="px-6 py-4 text-center text-gray-500">
                    No websites found. Add your first website!
                  </li>
                ) : (
                  websites.map((website) => (
                    <li key={website.id} className="px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <img
                            src={website.image_url}
                            alt={website.title}
                            className="h-16 w-16 object-cover rounded-lg"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = 'https://via.placeholder.com/64x64?text=No+Image'
                            }}
                          />
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">{website.title}</h3>
                            <p className="text-sm text-gray-500">{website.description}</p>
                            <a
                              href={website.preview_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 text-sm"
                            >
                              View Preview →
                            </a>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEdit(website)}
                            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(website.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}