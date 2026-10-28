import Layout from '@/components/Layout'

export const metadata = {
  title: 'About Us | Digitgenie',
  description: 'Learn about Digitgenie, a professional website development company dedicated to helping businesses grow through innovative digital solutions.',
}

export default function AboutPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 sm:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-black">About Digitgenie</h1>
          <p className="mx-auto max-w-3xl text-xl text-body">
            We are a team of passionate web developers and designers committed to transforming businesses through innovative digital solutions.
          </p>
        </div>

        {/* Intro Section */}
        <div className="mb-20">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-black">Our Expertise</h2>
              <p className="mb-4 text-body">
                At Digitgenie, we specialize in creating stunning, high-performing websites that drive business growth. 
                With years of experience in the industry, our team combines technical expertise with creative design 
                to deliver digital solutions that exceed expectations.
              </p>
              <p className="mb-4 text-body">
                We believe in a customer-first approach, ensuring that every project we undertake is tailored to 
                meet the unique needs of each client. Our professionalism and attention to detail have made us 
                a trusted partner for businesses across various industries.
              </p>
              <p className="text-body">
                From concept to launch, we work closely with our clients to ensure their vision becomes a reality, 
                resulting in digital experiences that engage users and deliver measurable results.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-primary to-[#8B8CF8] p-8 text-white">
              <h3 className="mb-4 text-2xl font-bold">Why Choose Digitgenie?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="mr-3 mt-1 h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Expert team with diverse technical skills</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-3 mt-1 h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Customized solutions for every business</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-3 mt-1 h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Focus on user experience and performance</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-3 mt-1 h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Ongoing support and maintenance</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-3 mt-1 h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Competitive pricing without compromising quality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black">Our Mission</h3>
              <p className="text-body">
                Our mission is to empower businesses of all sizes with cutting-edge digital solutions that drive growth and success. 
                We are committed to helping our clients navigate the digital landscape by providing innovative, scalable, and 
                user-friendly websites that meet their unique business objectives.
              </p>
              <p className="mt-4 text-body">
                We believe technology should be accessible to everyone, and we strive to bridge the gap between complex 
                technical solutions and business needs through our expert services.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black">Our Vision</h3>
              <p className="text-body">
                Our vision is to become a global leader in web development innovation, recognized for our creativity, 
                technical excellence, and commitment to empowering businesses worldwide with modern digital solutions.
              </p>
              <p className="mt-4 text-body">
                We aim to continuously push the boundaries of what's possible in web development, staying ahead of 
                industry trends to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20 rounded-2xl bg-gray-50 p-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-black">Our Achievements</h2>
            <p className="mx-auto max-w-2xl text-body">
              Over the years, we've helped numerous businesses transform their digital presence and achieve their goals.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-3xl font-bold">200+</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-black">Websites Built</h3>
              <p className="text-body">Successfully delivered projects across various industries</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-3xl font-bold">150+</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-black">Happy Clients</h3>
              <p className="text-body">Satisfied businesses that continue to work with us</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-3xl font-bold">8+</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-black">Years Experience</h3>
              <p className="text-body">Of proven expertise in web development</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-3xl font-bold">12</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-black">Industries Served</h3>
              <p className="text-body">From e-commerce to healthcare and everything in between</p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-black">Our Services</h2>
            <p className="mx-auto max-w-2xl text-body">
              We specialize in creating tailored web solutions for various business types, ensuring quality, scalability, and exceptional user experiences.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black">E-commerce Websites</h3>
              <p className="mb-4 text-body">
                We build powerful, scalable e-commerce platforms that drive sales and provide seamless shopping experiences.
              </p>
              <ul className="space-y-2 text-body">
                <li className="flex items-start">
                  <svg className="mr-2 mt-1 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Custom product catalogs</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-1 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Secure payment integration</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-1 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Inventory management systems</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-1 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Mobile-responsive designs</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path>
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black">Restaurant Websites</h3>
              <p className="mb-4 text-body">
                We create beautiful, functional websites for restaurants that showcase menus, enable online reservations, and drive customer engagement.
              </p>
              <ul className="space-y-2 text-body">
                <li className="flex items-start">
                  <svg className="mr-2 mt-1 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Online menu display</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-1 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Online reservation systems</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-1 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Customer loyalty programs</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-1 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Integrated social media</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black">Business Websites</h3>
              <p className="mb-4 text-body">
                We develop professional websites for businesses of all sizes that effectively communicate brand value and drive conversions.
              </p>
              <ul className="space-y-2 text-body">
                <li className="flex items-start">
                  <svg className="mr-2 mt-1 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Corporate branding websites</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-1 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Portfolio and showcase sites</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-1 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Lead generation platforms</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-1 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Content management systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Closing Section */}
        <div className="rounded-2xl bg-gradient-to-r from-primary to-[#8B8CF8] p-8 md:p-12 text-white text-center">
          <h2 className="mb-6 text-3xl font-bold">Let's Build Your Digital Success Together</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Partner with Digitgenie to transform your digital presence and achieve your business objectives. 
            Our team is ready to bring your vision to life with innovative solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-medium text-primary hover:bg-gray-100 transition-colors"
            >
              Get in Touch
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
            <a 
              href="/templates" 
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/20 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}