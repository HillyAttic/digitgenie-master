import Layout from '@/components/Layout'

export const metadata = {
  title: 'Contact Us | UIdeck',
  description: 'Get in touch with us for support, feedback, or business inquiries.',
}

export default function ContactPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 sm:px-8">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-black">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-lg text-body">
            Have questions or feedback? Reach out to us using the form below or contact us directly at{' '}
            <a href="mailto:admin@digitgenie.in" className="text-primary hover:underline">
              admin@digitgenie.in
            </a>
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-black">Get in Touch</h2>
                <p className="mb-6 text-body">
                  We'd love to hear from you! Fill out the form and our team will get back to you as soon as possible.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-black">Email</h3>
                    <a href="mailto:admin@digitgenie.in" className="text-primary hover:underline">
                      admin@digitgenie.in
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-black">Office Address</h3>
                    <p className="text-body">
                      M S Complex, Second Floor, Sector-53<br />
                      In Front of Manas Hospital, GB Nagar<br />
                      Noida, Uttar Pradesh, India - 201301
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-black">Business Hours</h3>
                    <p className="text-body">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="mb-4 text-2xl font-bold text-black">Send us a Message</h2>
                <form action="https://formsubmit.co/admin@digitgenie.in" method="POST">
                  <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block font-medium text-black">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block font-medium text-black">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="mb-2 block font-medium text-black">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-[#524DE5] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}