import Layout from '@/components/Layout'

export const metadata = {
  title: 'Blog | UIdeck',
  description: 'Read our latest articles about web development, design trends, and template tutorials.',
}

export default function BlogPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 sm:px-8">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-black">Blog</h1>
          <p className="mx-auto max-w-2xl text-lg text-body">
            Stay updated with the latest web development trends, design tips, and template tutorials.
          </p>
        </div>

        <div className="mt-16">
          <div className="rounded-2xl bg-white p-8 shadow-sm text-center">
            <h2 className="mb-4 text-2xl font-bold">Coming Soon</h2>
            <p className="text-body">
              We&apos;re working on bringing you amazing content about web development and design.
              Check back soon for our latest articles!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}