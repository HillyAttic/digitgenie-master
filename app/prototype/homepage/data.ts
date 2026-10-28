export type ThemeKey =
  | 'cobalt'
  | 'coral'
  | 'blueprint'
  | 'console'
  | 'terrazzo'
  | 'editorial'
  | 'ink'
  | 'riso'
  | 'terminal'
  | 'arcade'

export const THEMES: { key: ThemeKey; name: string; note: string }[] = [
  { key: 'cobalt', name: 'Cobalt', note: 'technical, one cobalt signal' },
  { key: 'coral', name: 'Coral', note: 'warm stationery, coral stamp' },
  { key: 'blueprint', name: 'Blueprint', note: 'prussian sheet, white line' },
  { key: 'console', name: 'Console', note: 'graphite instrument panel' },
  { key: 'terrazzo', name: 'Terrazzo', note: 'wide Syne, hard offset' },
  { key: 'editorial', name: 'Editorial', note: 'front page, green ink' },
  { key: 'ink', name: 'Ink', note: 'monochrome, teal pill' },
  { key: 'riso', name: 'Riso', note: 'blue and pink overprint' },
  { key: 'terminal', name: 'Terminal', note: 'phosphor mono' },
  { key: 'arcade', name: 'Arcade', note: 'CRT, ember and acid' },
]

const photo = (id: string, width = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=70`

export const CATEGORY_NAV = [
  'All',
  'AI tools',
  'FinTech CRM',
  'E-commerce',
  'Quick commerce',
  'Healthcare',
  'EdTech',
  'Real estate',
  'Restaurant',
  'HR and payroll',
  'Source code',
  'Flutter apps',
  'SaaS tools',
  'Logistics',
  "Today's deals",
  'Sell your app',
]

export const DEPARTMENTS = [
  { label: 'All products', count: '200+' },
  { label: 'AI and automation', count: '85' },
  { label: 'FinTech', count: '62' },
  { label: 'E-commerce', count: '48' },
  { label: 'Quick commerce', count: '31' },
  { label: 'Healthcare', count: '40' },
  { label: 'EdTech', count: '35' },
  { label: 'Real estate', count: '28' },
  { label: 'Restaurant', count: '33' },
  { label: 'HR and payroll', count: '22' },
  { label: 'Source code', count: '120' },
  { label: 'Flutter apps', count: '55' },
]

export const PRICE_RANGES = [
  'Under ₹25,000',
  '₹25,000 to ₹75,000',
  '₹75,000 to ₹1,50,000',
  'Above ₹1,50,000',
]

export const REVIEW_FILTERS = [
  { label: '5 stars and up', count: '184' },
  { label: '4 stars and up', count: '256' },
  { label: '3 stars and up', count: '312' },
]

export const PRODUCT_FEATURES = [
  { label: 'White-label ready', checked: true },
  { label: 'Source code included', checked: true },
  { label: 'Mobile app (Flutter)', checked: false },
  { label: 'AI / GPT powered', checked: false },
  { label: 'WhatsApp integrated', checked: false },
  { label: 'Multi-tenant SaaS', checked: false },
  { label: 'Payment gateway', checked: false },
]

export const TECH_STACK = [
  'React + Node.js',
  'Flutter (mobile)',
  'Laravel + Vue',
  'Python / FastAPI',
  'Next.js',
  'Android / iOS native',
]

export const HERO = {
  badge: 'Best seller, 47 sales this month',
  title: 'AI Voice Calling Agent Pro',
  desc: 'Automated outbound and inbound calling with natural language AI. Hindi, English and Hinglish support.',
  price: '₹74,999',
  original: '₹1,24,999',
  off: '-40%',
  cta: 'Add to cart',
  demo: 'View demo',
  reviews: 47,
  meta: ['Source code included', 'White-label ready', 'Free deployment support'],
  image: photo('1560264280-88b68371db39', 1200),
}

export const DEALS = [
  {
    name: 'AI WhatsApp Chatbot SaaS',
    code: 'WA',
    price: '₹29,999',
    original: '₹49,999',
    off: '-40%',
    claimed: 73,
    image: photo('1512941937669-90a1b58e7e9c'),
  },
  {
    name: 'React Admin Dashboard Kit',
    code: 'UI',
    price: '₹9,999',
    original: '₹19,999',
    off: '-50%',
    claimed: 88,
    image: photo('1551288049-bebda4e38f71'),
  },
  {
    name: 'Restaurant POS + QR Menu',
    code: 'RS',
    price: '₹44,999',
    original: '₹64,999',
    off: '-30%',
    claimed: 55,
    image: photo('1414235077428-338989a2e8c0'),
  },
  {
    name: 'Complete LMS Platform',
    code: 'ED',
    price: '₹49,999',
    original: '₹76,999',
    off: '-35%',
    claimed: 62,
    image: photo('1501504905252-473c47e087f8'),
  },
  {
    name: 'Salon Booking App + CRM',
    code: 'SL',
    price: '₹19,999',
    original: '₹36,999',
    off: '-45%',
    claimed: 40,
    image: photo('1560066984-138dadb4c035'),
  },
  {
    name: 'Grocery Delivery App',
    code: 'GR',
    price: '₹54,999',
    original: '₹72,999',
    off: '-25%',
    claimed: 81,
    image: photo('1542838132-92c53300491e'),
  },
]

export const CATEGORY_TILES = [
  { label: 'All products', code: 'ALL' },
  { label: 'AI tools', code: 'AI' },
  { label: 'FinTech', code: 'FT' },
  { label: 'E-commerce', code: 'EC' },
  { label: 'Quick commerce', code: 'QC' },
  { label: 'Healthcare', code: 'HC' },
  { label: 'EdTech', code: 'ED' },
  { label: 'Real estate', code: 'RE' },
  { label: 'Restaurant', code: 'RS' },
  { label: 'HR and payroll', code: 'HR' },
  { label: 'Source code', code: 'SC' },
  { label: 'Flutter apps', code: 'FL' },
  { label: 'SaaS tools', code: 'SA' },
  { label: 'Logistics', code: 'LG' },
  { label: 'Manufacturing', code: 'MF' },
  { label: 'Automobile', code: 'AT' },
]

export const BANNERS = [
  {
    title: 'New seller offer',
    text: 'Upload your first app free. Get featured on the homepage for 30 days and free WhatsApp promotion.',
    cta: 'Start selling',
  },
  {
    title: 'Bundle deals',
    text: 'Buy any 3 products and get 25% off. Mix and match AI tools, CRM and e-commerce platforms.',
    cta: 'Explore bundles',
  },
]

export type Product = {
  name: string
  seller: string
  code: string
  price: string
  original: string
  off: string
  stars: number
  reviews: number
  tags: string[]
  prime: string
  image: string
  badge?: string
  secondaryBadge?: string
  sponsored?: boolean
}

export const PRODUCTS: Product[] = [
  {
    name: 'AI Voice Calling Agent Pro — Hindi, English and Hinglish support',
    seller: 'RahulDev Studios',
    code: 'AI',
    price: '₹74,999',
    original: '₹1,24,999',
    off: '-40%',
    stars: 5,
    reviews: 47,
    tags: ['GPT-4 powered', 'Source code', 'API access', 'White-label'],
    prime: 'Free deployment support included',
    image: photo('1531746790731-6c087fecd65a'),
    badge: 'Best seller',
    secondaryBadge: 'White-label',
    sponsored: true,
  },
  {
    name: 'Complete Loan CRM Enterprise v4 — NBFC, DSA and MFI ready',
    seller: 'FinSoft Solutions',
    code: 'CRM',
    price: '₹1,49,999',
    original: '₹2,49,999',
    off: '-40%',
    stars: 5,
    reviews: 31,
    tags: ['NBFC ready', 'Flutter app', 'GST invoice', '40+ modules'],
    prime: 'Source code and 6-month support',
    image: photo('1554224155-6726b3ff858f'),
    badge: 'Top rated',
    secondaryBadge: 'White-label',
  },
  {
    name: 'D2C multi-vendor e-commerce platform with WhatsApp commerce',
    seller: 'WebMagic Labs',
    code: 'EC',
    price: '₹59,999',
    original: '₹89,999',
    off: '-33%',
    stars: 4,
    reviews: 58,
    tags: ['React', 'Mobile app', 'Payment gateway'],
    prime: 'Razorpay and UPI pre-integrated',
    image: photo('1441986300917-64674bd600d8'),
    badge: 'New launch',
  },
  {
    name: 'AI WhatsApp Chatbot SaaS platform — multi-client ready',
    seller: 'BotFactory India',
    code: 'WA',
    price: '₹29,999',
    original: '₹49,999',
    off: '-40%',
    stars: 5,
    reviews: 83,
    tags: ['GPT-4', 'WhatsApp API', 'CRM sync'],
    prime: 'Free WhatsApp API setup included',
    image: photo('1512941937669-90a1b58e7e9c'),
    badge: 'Hot',
    secondaryBadge: 'SaaS ready',
    sponsored: true,
  },
  {
    name: '10-minute delivery platform — quick commerce clone',
    seller: 'SpeedTech India',
    code: 'QC',
    price: '₹89,999',
    original: '₹1,39,999',
    off: '-36%',
    stars: 5,
    reviews: 22,
    tags: ['Flutter app', 'Live tracking', 'Dark store'],
    prime: 'Rider app and admin panel included',
    image: photo('1601598851547-4302969d0614'),
    badge: 'Trending',
  },
  {
    name: 'Hospital management ERP — OPD, IPD, pharmacy, lab and telemedicine',
    seller: 'MediSoft Pro',
    code: 'HC',
    price: '₹1,99,999',
    original: '₹3,49,999',
    off: '-43%',
    stars: 5,
    reviews: 18,
    tags: ['NABH compliant', 'Telemedicine', 'Lab LIMS'],
    prime: 'Free on-site demo available',
    image: photo('1576091160399-112ba8d25d1d'),
    badge: '#1 in healthcare',
  },
  {
    name: 'Complete LMS platform — live classes, quiz, certificates and mobile app',
    seller: 'EduTech Hub',
    code: 'ED',
    price: '₹49,999',
    original: '₹76,999',
    off: '-35%',
    stars: 4,
    reviews: 39,
    tags: ['Live classes', 'Mobile app', 'Zoom integration'],
    prime: '100+ course templates included',
    image: photo('1501504905252-473c47e087f8'),
    badge: 'Limited offer',
  },
  {
    name: 'Builder ERP and property CRM — broker portal and customer app',
    seller: 'PropTech India',
    code: 'RE',
    price: '₹1,24,999',
    original: '₹1,99,999',
    off: '-37%',
    stars: 5,
    reviews: 27,
    tags: ['CRM', 'Customer app', 'Payment tracking'],
    prime: 'Broker and agent panel included',
    image: photo('1560518883-ce09059eeffa'),
    badge: 'New',
    secondaryBadge: 'White-label',
  },
  {
    name: 'Restaurant POS, QR menu, food delivery app and cloud kitchen ERP',
    seller: 'FoodTech Studio',
    code: 'RS',
    price: '₹44,999',
    original: '₹69,999',
    off: '-36%',
    stars: 5,
    reviews: 64,
    tags: ['QR menu', 'Delivery app', 'Inventory'],
    prime: 'Swiggy and Zomato integration ready',
    image: photo('1414235077428-338989a2e8c0'),
    badge: 'Hot',
  },
  {
    name: 'Complete HRMS — payroll, attendance, leave, appraisal and employee app',
    seller: 'HRMaster Labs',
    code: 'HR',
    price: '₹69,999',
    original: '₹1,09,999',
    off: '-36%',
    stars: 4,
    reviews: 35,
    tags: ['Payroll', 'Biometric sync', 'ESI / PF'],
    prime: 'ESI and PF auto-calculation included',
    image: photo('1521737711867-e3b97375f902'),
    badge: 'Updated',
  },
  {
    name: 'Premium React admin dashboard — dark theme, RBAC, charts and auth',
    seller: 'CodeKraft India',
    code: 'SC',
    price: '₹9,999',
    original: '₹19,999',
    off: '-50%',
    stars: 5,
    reviews: 124,
    tags: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    prime: 'Lifetime updates included',
    image: photo('1555066931-4365d14bab8c'),
    badge: '#1 source code',
    sponsored: true,
  },
  {
    name: 'AI content generator SaaS — blog, social media, ads and SEO in Hindi and English',
    seller: 'AIForge Labs',
    code: 'AI',
    price: '₹24,999',
    original: '₹49,999',
    off: '-50%',
    stars: 5,
    reviews: 91,
    tags: ['GPT-4 + Claude', 'Multi-language', 'SaaS'],
    prime: '1,000+ AI templates included',
    image: photo('1551288049-bebda4e38f71'),
    badge: '50% off today',
  },
]

export const FBT = {
  items: [
    { name: 'AI Calling Agent', code: 'AI', image: photo('1531746790731-6c087fecd65a') },
    { name: 'WhatsApp Chatbot', code: 'WA', image: photo('1512941937669-90a1b58e7e9c') },
    { name: 'CRM Dashboard', code: 'CRM', image: photo('1554224155-6726b3ff858f') },
  ],
  total: '₹1,14,997',
  save: 'Save ₹25,000 (18%)',
}

export const RECENTLY_VIEWED = [
  {
    name: 'AI Calling Agent Pro',
    code: 'AI',
    price: '₹74,999',
    image: photo('1531746790731-6c087fecd65a'),
  },
  {
    name: 'Loan CRM v4',
    code: 'CRM',
    price: '₹1,49,999',
    image: photo('1554224155-6726b3ff858f'),
  },
  {
    name: 'Admin Dashboard Kit',
    code: 'SC',
    price: '₹9,999',
    image: photo('1555066931-4365d14bab8c'),
  },
  {
    name: 'WhatsApp Chatbot',
    code: 'WA',
    price: '₹29,999',
    image: photo('1512941937669-90a1b58e7e9c'),
  },
]

export const FOOTER_COLUMNS = [
  {
    title: 'Marketplace',
    links: ['All products', 'AI tools', 'FinTech', 'E-commerce', 'Source code', 'Flutter apps'],
  },
  {
    title: 'Sell',
    links: ['Sell your app', 'Seller portal', 'Pricing', 'Commission', 'Seller support'],
  },
  {
    title: 'Support',
    links: ['Help centre', 'Contact us', 'WhatsApp support', 'Returns and orders', 'Deployment support'],
  },
  {
    title: 'Company',
    links: ['About DigitGenie', 'Blog', 'Careers', 'Contact'],
  },
  {
    title: 'Contact',
    links: ['admin@digitgenie.in', '+91 89566 25396', 'Noida, Uttar Pradesh', 'India'],
  },
]
