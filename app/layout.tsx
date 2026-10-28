import type { Metadata } from 'next'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export const metadata: Metadata = {
  title: 'Free HTML Landing Page Templates and UI Kits | DigitGenie',
  description: 'Free HTML Landing Page Templates, Bootstrap Themes, React Templates, HTML Templates, Tailwind Templates, and UI Kits.',
  keywords: 'HTML templates, landing pages, UI kits, Bootstrap themes, React templates, Tailwind templates',
  authors: [{ name: 'DigitGenie' }],
  openGraph: {
    title: 'Free HTML Landing Page Templates and UI Kits | DigitGenie',
    description: 'Free HTML Landing Page Templates, Bootstrap Themes, React Templates, HTML Templates, Tailwind Templates, and UI Kits.',
    url: 'https://digitgenie.com',
    siteName: 'DigitGenie',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://digitgenie.com/images/digitgenie-home.jpg',
        width: 1200,
        height: 630,
        alt: 'DigitGenie - Free Templates and UI Kits',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free HTML Landing Page Templates and UI Kits | DigitGenie',
    description: 'Free HTML Landing Page Templates, Bootstrap Themes, React Templates, HTML Templates, Tailwind Templates, and UI Kits.',
    images: ['https://digitgenie.com/images/digitgenie-home.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://digitgenie.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="ASvcJTLhFMnVz_KrOdNr0FAwRsTYRRSepTUDHRC0szU" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PRNBW5ZM');`
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="font-satoshi">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PRNBW5ZM"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </body>
    </html>
  )
}