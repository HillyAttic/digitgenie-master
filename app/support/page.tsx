import Layout from '@/components/Layout'

export const metadata = {
  title: 'Support | UIdeck',
  description: 'Get help with our templates, report issues, or contact our support team.',
}

export default function SupportPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 sm:px-8">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-black">Support</h1>
          <p className="mx-auto max-w-2xl text-lg text-body">
            Need help with our templates? We&apos;re here to assist you with any questions or issues.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-black">Documentation</h2>
              <p className="mb-6 text-body">
                Find detailed guides, installation instructions, and customization tips.
              </p>
              <a
                href="/docs"
                className="inline-flex items-center text-primary hover:underline"
              >
                View Documentation
                <svg
                  className="ml-1 h-4 w-4"
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
              </a>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-black">Contact Us</h2>
              <p className="mb-6 text-body">
                Have a specific question? Reach out to our support team.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center text-primary hover:underline"
              >
                Visit Contact Page
                <svg
                  className="ml-1 h-4 w-4"
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}