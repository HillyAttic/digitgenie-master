import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute bottom-0 left-0 translate-x-[-50%] translate-y-[50%]"
          width="481"
          height="481"
          viewBox="0 0 481 481"
          fill="none"
        >
          <circle cx="240.5" cy="240.5" r="240.5" fill="#625DF5" fillOpacity="0.03" />
        </svg>
      </div>

      {/* Floating Decorative Icons */}
      <div className="absolute inset-0 z-0">
        {/* HTML5 Icon - Top Left */}
        <div className="absolute top-20 left-20 animate-bounce hidden sm:block" style={{animationDelay: '0s', animationDuration: '3s'}}>
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#E34F26">
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.413l.213 2.622h12.303l-.21 2.302H8.312l.212 2.302h7.498l-.35 3.9-3.671 1.024v.025h-.037l-3.671-1.049-.234-2.621H6.037l.457 5.172 6.751 1.875 6.755-1.875 1.091-12.25z"/>
            </svg>
          </div>
        </div>

        {/* Bootstrap Icon - Top Right */}
        <div className="absolute top-32 right-20 animate-bounce hidden sm:block" style={{animationDelay: '1s', animationDuration: '3s'}}>
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#7952B3">
              <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 0v24H0V0h24zM7.17 6.18v11.64h5.043c2.696 0 4.263-1.434 4.263-3.662 0-1.69-1.014-2.831-2.566-3.13v-.077c1.434-.298 2.22-1.203 2.22-2.434 0-2.054-1.553-2.337-3.957-2.337H7.17z"/>
            </svg>
          </div>
        </div>

        {/* Tailwind CSS Icon - Bottom Left */}
        <div className="absolute bottom-32 left-32 animate-bounce hidden sm:block" style={{animationDelay: '2s', animationDuration: '3s'}}>
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#06B6D4">
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
            </svg>
          </div>
        </div>

        {/* React Icon - Bottom Right */}
        <div className="absolute bottom-20 right-32 animate-bounce hidden sm:block" style={{animationDelay: '0.5s', animationDuration: '3s'}}>
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#61DAFB">
              <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.03.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.015-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-728.063.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.788-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.4-.465-.788-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005 1.63-2.639 2.122-3.93 2.319-.24.037-.48.055-.725.058-.87-1.353-1.932-2.653-3.168-3.75 1.237-1.09 2.3-2.388 3.168-3.75.245-.005.49-.023.73-.058zm-13.51.058c.2.02.42.037.64.058 1.367 1.365 2.428 2.665 3.165 3.75-1.235 1.09-2.3 2.388-3.168 3.75-.245.005-.49.023-.73.058-1.732-.74-2.852-1.706-2.852-2.474 0-.768 1.12-1.734 2.852-2.476.43-.18.89-.347 1.375-.498z"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-gray-3 bg-white px-4 py-2 text-sm font-medium text-body shadow-sm">
            ✨ Free Templates & UI Kits for Developers
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
            Handcrafted HTML, Tailwind and Bootstrap Templates and UI Kits
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg text-body sm:text-xl">
            High-quality landing page and website templates, handcrafted with Tailwind CSS, Bootstrap, and HTML, allow you to create and launch beautifully designed websites without coding from scratch.
          </p>

          {/* CTA Button */}
          <div className="mb-12 flex justify-center">
            <a
              href="/templates"
              className="inline-flex items-center justify-center rounded-lg bg-black px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg"
            >
              Explore All Templates
            </a>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Image
                  src="/images/hero-icon-01.svg"
                  alt="Modern Design"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="mb-2 font-medium text-black">Modern Design</h3>
              <p className="text-sm text-body">Clean & professional designs</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FB6B6A]/10">
                <Image
                  src="/images/hero-icon-02.svg"
                  alt="Responsive"
                  width={32}
                  height={32}
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
              <h3 className="mb-2 font-medium text-black">Responsive</h3>
              <p className="text-sm text-body">Mobile-first approach</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EC9041]/10">
                <Image
                  src="/images/hero-icon-03.svg"
                  alt="Easy to Use"
                  width={32}
                  height={32}
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
              <h3 className="mb-2 font-medium text-black">Easy to Use</h3>
              <p className="text-sm text-body">Ready-to-use templates</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B378C8]/10">
                <Image
                  src="/images/hero-icon-04.svg"
                  alt="Free Download"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="mb-2 font-medium text-black">Free Demo</h3>
              <p className="text-sm text-body">100% free for commercial use</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}