import Layout from '@/components/Layout'

export const metadata = {
  title: 'Our Services | Digitgenie',
  description: 'Explore our comprehensive range of digital services designed to help your business thrive online. From website development to digital marketing and specialized e-commerce solutions.',
}

export default function ServicesPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 sm:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-black">Our Services</h1>
          <p className="mx-auto max-w-3xl text-xl text-body">
            At DigitGenie, we offer a comprehensive suite of digital services designed to elevate your online presence and drive business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-12 md:gap-16">
          {/* Website Design & Development */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black">Website Design & Development</h2>
              <p className="mx-auto max-w-2xl text-body">
                Our expert team creates stunning, high-performing websites tailored to your business needs.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black">Custom HTML, Tailwind, and Bootstrap Templates</h3>
                <p className="text-body">
                  Bespoke website templates built with modern technologies for optimal performance and responsive design.
                </p>
              </div>
              
              <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black">WordPress Website Development</h3>
                <p className="text-body">
                  Custom WordPress websites with tailored functionality and easy content management.
                </p>
              </div>
              
              <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black">Static Website Services</h3>
                <p className="text-body">
                  Fast, lightweight static websites perfect for businesses that need a strong online presence.
                </p>
              </div>
              
              <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black">E-commerce (Online Store) Website Design</h3>
                <p className="text-body">
                  Comprehensive online store solutions with secure payment integration and inventory management.
                </p>
              </div>
            </div>
          </div>
          
          {/* Digital Marketing & Branding */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black">Digital Marketing & Branding</h2>
              <p className="mx-auto max-w-2xl text-body">
                Boost your online visibility and brand recognition with our targeted marketing strategies.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black">SEO (Search Engine Optimization)</h3>
                <p className="text-body">
                  Improve your search engine rankings and drive organic traffic to your website.
                </p>
              </div>
              
              <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black">Social Media Marketing (SMM)</h3>
                <p className="text-body">
                  Engage your audience and build brand loyalty through strategic social media campaigns.
                </p>
              </div>
              
              <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black">PPC (Pay-Per-Click) Ads</h3>
                <p className="text-body">
                  Drive targeted traffic to your website with cost-effective pay-per-click advertising.
                </p>
              </div>
              
              <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black">Google Ads Management</h3>
                <p className="text-body">
                  Maximize your ROI with expertly managed Google Ads campaigns.
                </p>
              </div>
              
              <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black">Graphic Designing & Branding</h3>
                <p className="text-body">
                  Create a cohesive brand identity with professional graphic design services.
                </p>
              </div>
            </div>
          </div>
          
          {/* Specialized Online Services */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black">Specialized Online Services</h2>
              <p className="mx-auto max-w-2xl text-body">
                Industry-specific solutions tailored to meet the unique demands of online marketplaces and enterprise systems.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black">Marketplace Account Management</h3>
                <p className="text-body">
                  Comprehensive management of your Flipkart, Myntra, Amazon, Meesho, and Jiomart accounts.
                </p>
              </div>
              
              <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black">ERP / Online Software Solutions</h3>
                <p className="text-body">
                  Custom enterprise resource planning and business software solutions to streamline operations.
                </p>
              </div>
              
              <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black">Website Security & Optimization</h3>
                <p className="text-body">
                  Protect your website with advanced security measures and optimize for peak performance.
                </p>
              </div>
              
              <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black">Mobile-Friendly Design & Analytics Integration</h3>
                <p className="text-body">
                  Ensure your website works flawlessly on all devices and track performance with integrated analytics.
                </p>
              </div>
            </div>
          </div>
          
          {/* Extra Support */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black">Extra Support</h2>
              <p className="mx-auto max-w-2xl text-body">
                Ongoing support and maintenance to keep your digital assets performing at their best.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black">Technical Support & Maintenance</h3>
                <p className="text-body">
                  Reliable technical support and regular maintenance to keep your website running smoothly.
                </p>
              </div>
              
              <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black">Website Security & Regular Updates</h3>
                <p className="text-body">
                  Proactive security measures and regular updates to protect your website from threats.
                </p>
              </div>
              
              <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black">Customized Services as per Client Requirements</h3>
                <p className="text-body">
                  Tailored solutions designed specifically to meet your unique business needs and objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary to-[#8B8CF8] p-8 md:p-12 text-white text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Transform Your Digital Presence?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Let DigitGenie be your partner in digital success. Our team of experts is ready to help you achieve your business goals through innovative digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-medium text-primary hover:bg-gray-100 transition-colors"
            >
              Get Started Today
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
            <a 
              href="/about" 
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/20 transition-colors"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}