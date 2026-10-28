# DigitGenie

A modern Next.js application showcasing free HTML templates, UI kits, and components for web developers.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with modern UI components
- **SEO Optimized**: Built-in SEO optimization with proper meta tags
- **Fast Performance**: Webpack for reliable development
- **Component-Based**: Modular, reusable React components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Admin Dashboard**: Simple admin area for content management
- **Database Integration**: Firebase Firestore for data storage

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd digitgenie
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Firebase is already configured in the project. No additional environment variables needed.

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔐 Admin Dashboard Access

The application includes an admin dashboard for managing website content:

- **Admin Dashboard**: [http://localhost:3000/admin/dashboard](http://localhost:3000/admin/dashboard)

Note: Authentication has been removed. The admin dashboard is now open access.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🏗️ Project Structure

```
digitgenie/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin dashboard
│   │   └── dashboard/     # Admin dashboard page
│   ├── blog/              # Blog page
│   ├── support/           # Support page
│   ├── templates/         # Templates page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx          # Hero section
│   ├── Layout.tsx        # Page layout wrapper
│   └── TemplateShowcase.tsx # Template grid
├── lib/                   # Utility functions and helpers
│   ├── firebase.ts        # Firebase client
│   └── firebase-helpers.ts # Firebase helper functions
├── public/               # Static assets
│   ├── fonts/           # Custom fonts
│   └── images/          # Images and icons
└── ...config files
```

## 🎨 Customization

### Tailwind Configuration

The project uses custom Tailwind configuration with:
- Custom colors (primary: #625DF5)
- Satoshi font family
- Extended screens for responsive design

### Components

All components are built with TypeScript and follow modern React patterns:
- Functional components with hooks
- Proper TypeScript interfaces
- Responsive design principles

## 🔧 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Firebase** - Backend-as-a-Service with Firestore database
- **React Toastify** - Toast notifications
- **Custom Fonts** - Satoshi font family

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1600px+ (3xl)

## 🚀 Deployment

The application can be deployed to any platform that supports Next.js:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- Netlify
- Railway
- Digital Ocean App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support and questions:
- Email: support@digitgenie.com
- Documentation: [docs.digitgenie.com](https://docs.digitgenie.com)

---

Built with ❤️ using Next.js and Tailwind CSS