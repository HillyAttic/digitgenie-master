'use client'

import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { get, ref, set } from 'firebase/database'
import { dbHelpers } from '@/lib/db-helpers'
import { db } from '@/lib/firebase'
import { useAuth } from '@/hooks/useAuth'
import { THEMES } from '@/app/prototype/homepage/data'
import { Website } from '@/lib/types'

const CORAL_FONTS =
  'https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap'

const ICONS = {
  overview: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  customers: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  projects: (
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </>
  ),
  orders: (
    <>
      <path d="M16.5 9.4 7.55 4.24" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.29 7 12 12l8.71-5" />
      <path d="M12 22V12" />
    </>
  ),
  invoices: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </>
  ),
  payouts: (
    <>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </>
  ),
  homepage: (
    <>
      <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
      <path d="M9 21v-8h6v8" />
    </>
  ),
  websites: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
    </>
  ),
  products: (
    <>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </>
  ),
  tickets: (
    <>
      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Z" />
      <path d="M21 11h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-5Z" />
      <path d="M3 11a9 9 0 0 1 18 0" />
      <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
    </>
  ),
  notifications: (
    <>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </>
  ),
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  paperclip: (
    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
  ),
  card: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </>
  ),
  receipt: (
    <>
      <path d="M5 3v18l2-1 2 1 2-1 2 1 2-1 2 1V3l-2 1-2-1-2 1-2-1-2 1z" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </>
  ),
  userPlus: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8v6M22 11h-6" />
    </>
  ),
  chat: (
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  ),
  plane: (
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  ),
  pulse: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
} satisfies Record<string, ReactNode>

type IconName = keyof typeof ICONS

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {ICONS[name]}
    </svg>
  )
}

type NavItem = { id: string; icon: IconName; label: string }

const NAV: { group: string; items: NavItem[] }[] = [
  {
    group: 'Workspace',
    items: [
      { id: 'ov', icon: 'overview', label: 'Overview' },
      { id: 'cu', icon: 'customers', label: 'Customers' },
      { id: 'pj', icon: 'projects', label: 'Projects' },
    ],
  },
  {
    group: 'Commerce',
    items: [
      { id: 'od', icon: 'orders', label: 'Orders' },
      { id: 'iv', icon: 'invoices', label: 'Invoices' },
      { id: 'po', icon: 'payouts', label: 'Payouts' },
    ],
  },
  {
    group: 'Content',
    items: [
      { id: 'hp', icon: 'homepage', label: 'Homepage' },
      { id: 'wb', icon: 'websites', label: 'Websites' },
      { id: 'pd', icon: 'products', label: 'Products' },
    ],
  },
  {
    group: 'Support',
    items: [
      { id: 'tk', icon: 'tickets', label: 'Tickets' },
      { id: 'nt', icon: 'notifications', label: 'Notifications' },
    ],
  },
]

const TITLES: Record<string, string> = {
  ov: 'Overview',
  cu: 'Customers',
  pj: 'Projects',
  od: 'Orders',
  iv: 'Invoices & Payments',
  po: 'Payouts',
  wb: 'Websites',
  pd: 'Products',
  hp: 'Homepage',
  tk: 'Support Tickets',
  nt: 'Notifications',
}

const HOMEPAGE_OPTIONS = [
  { key: 'main', name: 'Main site', note: 'Current DigitGenie homepage' },
  ...THEMES.map((theme) => ({ key: theme.key as string, name: theme.name, note: theme.note })),
]

const CUSTOMERS = [
  { name: 'Rahul Sharma', company: 'Sharma Finserv Pvt Ltd', email: 'rahul@company.in', projects: 2, spend: '₹2,49,998', status: 'Active' },
  { name: 'Anil Mehta', company: 'Mehta Finance', email: 'anil@mehtafinance.in', projects: 1, spend: '₹1,49,999', status: 'Active' },
  { name: 'Sunita Rao', company: 'Rao Travels', email: 'sunita@raotravels.in', projects: 1, spend: '₹1,19,999', status: 'Active' },
  { name: 'Vikram Singh', company: 'VS Retail', email: 'vikram@vsretail.in', projects: 1, spend: '₹59,999', status: 'Active' },
  { name: 'Pooja Jain', company: 'Jain Clinics', email: 'pooja@jainclinics.in', projects: 0, spend: '—', status: 'Prospect' },
  { name: 'Kiran Patel', company: 'Patel Logistics', email: 'kiran@patellogistics.in', projects: 1, spend: '₹1,49,999', status: 'Churned' },
]

const PROJECTS: {
  name: string
  icon: IconName
  customer: string
  pm: string
  progress: number
  status: string
  due: string
}[] = [
  { name: 'Loan CRM Enterprise', icon: 'card', customer: 'Sharma Finserv', pm: 'Neha Verma', progress: 68, status: 'In Progress', due: '20 Dec 2026' },
  { name: 'WhatsApp AI Chatbot', icon: 'chat', customer: 'Sharma Finserv', pm: 'Amit Rao', progress: 35, status: 'In Progress', due: '05 Dec 2026' },
  { name: 'Travel Booking Engine', icon: 'plane', customer: 'Rao Travels', pm: 'Neha Verma', progress: 82, status: 'In Progress', due: '28 Nov 2026' },
  { name: 'Hospital ERP', icon: 'pulse', customer: 'Jain Clinics', pm: 'Priya Nair', progress: 15, status: 'In Progress', due: '18 Jan 2027' },
  { name: 'Admin Dashboard', icon: 'overview', customer: 'VS Retail', pm: 'Amit Rao', progress: 100, status: 'Completed', due: '12 Sep 2026' },
]

const ORDERS = [
  { id: '#DG-1042', customer: 'Rahul Sharma', project: 'Loan CRM Enterprise', pkg: 'Business', amount: '₹1,49,999', status: 'In Progress', delivery: '20 Dec 2026' },
  { id: '#DG-1051', customer: 'Rahul Sharma', project: 'WhatsApp AI Chatbot', pkg: 'Starter', amount: '₹29,999', status: 'In Progress', delivery: '05 Dec 2026' },
  { id: '#DG-1060', customer: 'Sunita Rao', project: 'Travel Booking Engine', pkg: 'Custom', amount: '₹1,19,999', status: 'Pending', delivery: '28 Nov 2026' },
  { id: '#DG-1033', customer: 'Vikram Singh', project: 'Admin Dashboard', pkg: 'Starter', amount: '₹9,999', status: 'Completed', delivery: '12 Sep 2026' },
  { id: '#DG-1066', customer: 'Pooja Jain', project: 'Hospital ERP', pkg: '—', amount: '₹1,99,999', status: 'Draft', delivery: '—' },
]

const INITIAL_INVOICES = [
  { id: 'INV-3011', customer: 'Rahul Sharma', project: 'Loan CRM · Milestone 2', amount: '₹74,999', due: '05 Nov 2026', status: 'Pending' },
  { id: 'INV-3012', customer: 'Rahul Sharma', project: 'Chatbot · Final', amount: '₹49,999', due: '28 Nov 2026', status: 'Pending' },
  { id: 'INV-2988', customer: 'Rahul Sharma', project: 'Loan CRM · Advance', amount: '₹74,999', due: '02 Sep 2026', status: 'Paid' },
  { id: 'INV-2995', customer: 'Sunita Rao', project: 'Travel · Milestone 1', amount: '₹59,999', due: '15 Oct 2026', status: 'Overdue' },
  { id: 'INV-2950', customer: 'Vikram Singh', project: 'Admin Dashboard', amount: '₹9,999', due: '10 Aug 2026', status: 'Paid' },
]

const INITIAL_TICKETS = [
  { id: 'TK-204', subject: 'Revision on dashboard filters', customer: 'Rahul Sharma', priority: 'High', status: 'In Progress' },
  { id: 'TK-198', subject: 'GST invoice correction', customer: 'Sunita Rao', priority: 'Medium', status: 'Open' },
  { id: 'TK-191', subject: 'Demo environment access', customer: 'Anil Mehta', priority: 'Low', status: 'Resolved' },
  { id: 'TK-187', subject: 'Mobile nav overlapping footer', customer: 'Pooja Jain', priority: 'High', status: 'Open' },
]

const INITIAL_PRODUCTS = [
  { id: 'PR-101', name: 'Sales CRM Lite', seller: 'Amit Rao', category: 'CRM & ERP', price: '₹34,999', status: 'Approved' },
  { id: 'PR-102', name: 'Salon Booking App', seller: 'Priya Nair', category: 'Mobile Apps', price: '₹19,999', status: 'Under Review' },
  { id: 'PR-103', name: 'EMI Calculator Kit', seller: 'Amit Rao', category: 'FinTech', price: '₹7,999', status: 'Under Review' },
  { id: 'PR-104', name: 'Clinic Queue Manager', seller: 'Priya Nair', category: 'Healthcare', price: '₹24,999', status: 'Rejected' },
]

const INITIAL_PAYOUTS = [
  { id: 'WD-77', name: 'Amit Rao', role: 'Developer', amount: '₹32,000', date: '14 Nov 2026', status: 'Pending' },
  { id: 'WD-76', name: 'Priya Nair', role: 'Developer', amount: '₹18,500', date: '12 Nov 2026', status: 'Pending' },
  { id: 'WD-74', name: 'Neha Verma', role: 'Project Manager', amount: '₹45,000', date: '28 Oct 2026', status: 'Paid' },
]

const INITIAL_NOTIFICATIONS: { icon: IconName; text: string; time: string; unread: boolean }[] = [
  { icon: 'check', text: 'Milestone “UI/UX design” approved by Sharma Finserv', time: '2h ago', unread: true },
  { icon: 'paperclip', text: 'New deliverable uploaded: Core modules v1', time: 'Yesterday', unread: true },
  { icon: 'card', text: 'Invoice INV-3011 is due in 7 days', time: '2 days ago', unread: true },
  { icon: 'receipt', text: 'Payout WD-74 processed', time: '3 days ago', unread: false },
  { icon: 'userPlus', text: 'New partner application from Mehta Finance', time: '4 days ago', unread: false },
]

const TONE: Record<string, string> = {
  Active: 'g',
  Paid: 'g',
  Completed: 'g',
  Resolved: 'g',
  Approved: 'g',
  Converted: 'g',
  'In Progress': 'b',
  'Under Review': 'b',
  'In Review': 'b',
  Pending: 'y',
  Open: 'y',
  Draft: 'm',
  Prospect: 'y',
  Rejected: 'r',
  Churned: 'r',
  Overdue: 'r',
  Cancelled: 'r',
}

const PRIORITY_TONE: Record<string, string> = { High: 'r', Medium: 'y', Low: 'm' }

function Badge({ status, tone }: { status: string; tone?: string }) {
  return <span className={`dg-bd dg-b-${tone || TONE[status] || 'm'}`}>{status}</span>
}

export default function AdminDashboard() {
  const router = useRouter()
  const { user, loading: authLoading, signOut } = useAuth()

  const [active, setActive] = useState('ov')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [websites, setWebsites] = useState<Website[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingWebsite, setEditingWebsite] = useState<Website | null>(null)
  const [formData, setFormData] = useState({ title: '', description: '', image_url: '', preview_url: '' })

  const [invoices, setInvoices] = useState(INITIAL_INVOICES)
  const [tickets, setTickets] = useState(INITIAL_TICKETS)
  const [products, setProducts] = useState(INITIAL_PRODUCTS)
  const [payouts, setPayouts] = useState(INITIAL_PAYOUTS)
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS)

  const [homepage, setHomepage] = useState('main')
  const [liveHomepage, setLiveHomepage] = useState('main')
  const [homeLoading, setHomeLoading] = useState(true)
  const [savingHome, setSavingHome] = useState(false)

  const loadWebsites = useCallback(async () => {
    setLoading(true)
    try {
      const { data, error } = await dbHelpers.select<Website>('websites')
      if (error) {
        toast.error('Failed to load websites: ' + error.message)
      } else {
        setWebsites(data || [])
      }
    } catch {
      toast.error('Error loading websites')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!authLoading && !user) router.push('/admin/login')
  }, [user, authLoading, router])

  const loadHomepage = useCallback(async () => {
    try {
      const snapshot = await get(ref(db, 'settings/homepage'))
      const value = snapshot.val()
      if (typeof value === 'string' && HOMEPAGE_OPTIONS.some((option) => option.key === value)) {
        setHomepage(value)
        setLiveHomepage(value)
      }
    } catch {
      // Keep the default 'main' selection.
    } finally {
      setHomeLoading(false)
    }
  }, [])

  useEffect(() => {
    if (user) loadWebsites()
  }, [user, loadWebsites])

  useEffect(() => {
    if (user) loadHomepage()
  }, [user, loadHomepage])

  const openSection = (id: string) => {
    setActive(id)
    setSidebarOpen(false)
    scrollTo(0, 0)
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      router.push('/admin/login')
    } catch {
      toast.error('Error signing out')
    }
  }

  const resetForm = () => {
    setFormData({ title: '', description: '', image_url: '', preview_url: '' })
    setEditingWebsite(null)
    setShowForm(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const payload = {
      title: formData.title.trim(),
      description: formData.description.trim(),
      image_url: formData.image_url.trim(),
      preview_url: formData.preview_url.trim(),
    }
    if (!payload.title || !payload.description || !payload.image_url || !payload.preview_url) {
      toast.error('Please fill in all fields')
      return
    }

    try {
      if (editingWebsite) {
        const { error } = await dbHelpers.update('websites', editingWebsite.id, payload)
        if (error) {
          toast.error('Failed to update website: ' + error.message)
          return
        }
        toast.success('Website updated')
      } else {
        const { error } = await dbHelpers.insert('websites', payload)
        if (error) {
          toast.error('Failed to create website: ' + (error.message || 'Unknown error'))
          return
        }
        toast.success('Website created')
      }
      resetForm()
      loadWebsites()
    } catch (error) {
      toast.error('Error saving website: ' + (error as Error).message)
    }
  }

  const handleEdit = (website: Website) => {
    setEditingWebsite(website)
    setFormData({
      title: website.title,
      description: website.description,
      image_url: website.image_url,
      preview_url: website.preview_url,
    })
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this website? This cannot be undone.')) return
    const { error } = await dbHelpers.delete('websites', id)
    if (error) {
      toast.error('Failed to delete website: ' + error.message)
    } else {
      toast.success('Website deleted')
      loadWebsites()
    }
  }

  const publishHomepage = async () => {
    setSavingHome(true)
    try {
      await set(ref(db, 'settings/homepage'), homepage)
      setLiveHomepage(homepage)
      toast.success('Homepage published')
    } catch {
      toast.error('Failed to publish homepage')
    } finally {
      setSavingHome(false)
    }
  }

  const markPaid = (id: string) => {
    setInvoices((prev) => prev.map((inv) => (inv.id === id ? { ...inv, status: 'Paid' } : inv)))
    toast.success(`${id} marked as paid`)
  }

  const resolveTicket = (id: string) => {
    setTickets((prev) => prev.map((t) => (t.id === id ? { ...t, status: 'Resolved' } : t)))
    toast.success(`${id} resolved`)
  }

  const decideProduct = (id: string, status: 'Approved' | 'Rejected') => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, status } : p)))
    toast.success(`Product ${status.toLowerCase()}`)
  }

  const approvePayout = (id: string) => {
    setPayouts((prev) => prev.map((p) => (p.id === id ? { ...p, status: 'Approved' } : p)))
    toast.success(`${id} approved`)
  }

  const unread = notifications.filter((n) => n.unread).length

  const counts: Record<string, number> = {
    tk: tickets.filter((t) => t.status !== 'Resolved').length,
    pd: products.filter((p) => p.status === 'Under Review').length,
    nt: unread,
  }

  if (authLoading) {
    return (
      <div className="dg">
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="stylesheet" href={CORAL_FONTS} />
        <div className="dg-load">
          <div className="dg-spin" />
        </div>
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="dg">
      <link rel="preconnect" href="https://api.fontshare.com" />
      <link rel="stylesheet" href={CORAL_FONTS} />
      <style jsx global>{`
        .dg {
          --bg: oklch(94.3% 0.008 64);
          --s1: oklch(98.8% 0.0045 80);
          --s2: oklch(98.8% 0.0045 80);
          --tx: oklch(21% 0.012 38);
          --mu: oklch(47% 0.013 45);
          --bd: oklch(87% 0.009 55);
          --bd2: oklch(81% 0.011 55 / 0.45);
          --accent: oklch(74% 0.125 30);
          --accent-2: oklch(54% 0.165 29);
          --cotton: oklch(98.8% 0.0045 80);
          --ok: oklch(54% 0.165 29);
          --wa: oklch(55% 0.12 75);
          --er: oklch(50% 0.17 25);
          --gr: var(--accent-2);
          --grt: var(--accent-2);
          min-height: 100vh;
          background: var(--bg);
          color: var(--tx);
          font-family: 'General Sans', ui-sans-serif, system-ui, sans-serif;
          font-size: 14px;
          letter-spacing: -0.01em;
        }
        .dg *,
        .dg *::before,
        .dg *::after {
          box-sizing: border-box;
        }
        .dg-app {
          display: grid;
          grid-template-columns: 236px 1fr;
          min-height: 100vh;
        }
        .dg-sb {
          background: var(--s1);
          border-right: 1px solid var(--bd);
          padding: 18px 12px;
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .dg-logo {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 0 6px 16px;
          border-bottom: 1px solid var(--bd);
        }
        .dg-mark {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--accent-2);
          color: var(--cotton);
          font: 700 12px 'General Sans', ui-sans-serif, system-ui, sans-serif;
          display: grid;
          place-items: center;
          flex: none;
        }
        .dg-logo b {
          font: 700 17px 'General Sans', ui-sans-serif, system-ui, sans-serif;
          letter-spacing: -0.03em;
        }
        .dg-logo em {
          font-style: normal;
          background: var(--grt);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .dg-tag {
          margin-left: auto;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent-2);
          background: color-mix(in oklch, var(--accent) 20%, transparent);
          border: 1px solid color-mix(in oklch, var(--accent) 38%, transparent);
          padding: 2px 6px;
          border-radius: 99px;
        }
        .dg-grp {
          margin-bottom: 12px;
        }
        .dg-gl {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: oklch(62% 0.012 45);
          padding: 0 10px;
          margin-bottom: 5px;
        }
        .dg-nv {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 9px 11px;
          border-radius: 9px;
          color: var(--mu);
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          margin-bottom: 2px;
          border: 0;
          background: none;
          width: 100%;
          text-align: left;
          font-family: inherit;
        }
        .dg-nv:hover {
          background: oklch(94.5% 0.007 55);
          color: var(--tx);
        }
        .dg-nv.on {
          background: color-mix(in oklch, var(--accent) 18%, transparent);
          color: var(--accent-2);
          box-shadow: inset 2px 0 var(--accent-2);
        }
        .dg-nv i {
          font-style: normal;
          width: 18px;
          display: grid;
          place-items: center;
          flex: none;
        }
        .dg-nv s {
          margin-left: auto;
          text-decoration: none;
          background: color-mix(in oklch, var(--accent) 22%, transparent);
          color: var(--accent-2);
          font-size: 10px;
          font-weight: 800;
          border-radius: 9px;
          padding: 1px 6px;
          min-width: 18px;
          text-align: center;
        }
        .dg-sb-foot {
          margin-top: auto;
          border-top: 1px solid var(--bd);
          padding-top: 12px;
        }
        .dg-sb-foot .dg-bo {
          width: 100%;
        }
        .dg-main {
          padding: 20px 24px;
          min-width: 0;
        }
        .dg-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .dg-top-l {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .dg-top h1 {
          font: 600 24px 'General Sans', ui-sans-serif, system-ui, sans-serif;
          letter-spacing: -0.03em;
          margin: 0;
          line-height: 1.2;
        }
        .dg-sub {
          color: var(--mu);
          font-size: 12px;
          margin-top: 2px;
        }
        .dg-top-r {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .dg-av {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--accent-2);
          color: var(--cotton);
          font: 700 12px 'General Sans', ui-sans-serif, system-ui, sans-serif;
          display: grid;
          place-items: center;
        }
        .dg-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--accent-2);
          color: var(--cotton);
          border: 1px solid var(--accent-2);
          border-radius: 999px;
          padding: 9px 16px;
          font: 600 12px 'General Sans', ui-sans-serif, system-ui, sans-serif;
          cursor: pointer;
          box-shadow: 0 2px 0 color-mix(in oklch, var(--accent-2) 65%, black);
          transition: 0.2s;
        }
        .dg-btn:hover {
          background: oklch(49% 0.16 29);
          border-color: oklch(49% 0.16 29);
          box-shadow: 0 3px 0 color-mix(in oklch, var(--accent-2) 65%, black);
        }
        .dg-btn:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }
        .dg-bo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: transparent;
          color: var(--tx);
          border: 1px solid var(--bd);
          border-radius: 999px;
          padding: 8px 13px;
          font: 500 12px 'General Sans', ui-sans-serif, system-ui, sans-serif;
          cursor: pointer;
          transition: 0.2s;
        }
        .dg-bo:hover {
          border-color: var(--accent-2);
          color: var(--accent-2);
        }
        .dg-bo.dg-danger:hover {
          border-color: var(--er);
          color: var(--er);
        }
        .dg-mini {
          padding: 5px 10px;
          font-size: 11px;
          border-radius: 7px;
        }
        .dg-g4 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 12px;
          margin-bottom: 18px;
        }
        .dg-g2 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 14px;
        }
        .dg-card {
          background: var(--s2);
          border: 1px solid var(--bd);
          border-radius: 10px;
          padding: 16px;
          box-shadow: 0 1px 0 var(--bd2);
          min-width: 0;
        }
        .dg-card h3 {
          font: 600 14px 'General Sans', ui-sans-serif, system-ui, sans-serif;
          letter-spacing: -0.02em;
          margin: 0 0 12px;
        }
        .dg-hd {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        .dg-hd h3 {
          margin: 0;
        }
        .dg-mt b {
          display: block;
          font: 600 26px 'General Sans', ui-sans-serif, system-ui, sans-serif;
          letter-spacing: -0.03em;
          color: var(--accent-2);
          line-height: 1.1;
        }
        .dg-mt span {
          font-size: 11px;
          color: var(--mu);
        }
        .dg-bd {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 99px;
          border: 1px solid;
          white-space: nowrap;
        }
        .dg-b-g {
          color: oklch(45% 0.1 150);
          border-color: oklch(45% 0.1 150 / 0.35);
          background: oklch(45% 0.1 150 / 0.07);
        }
        .dg-b-y {
          color: var(--wa);
          border-color: oklch(55% 0.12 75 / 0.4);
          background: oklch(55% 0.12 75 / 0.07);
        }
        .dg-b-r {
          color: var(--er);
          border-color: oklch(50% 0.17 25 / 0.4);
          background: oklch(50% 0.17 25 / 0.07);
        }
        .dg-b-b {
          color: oklch(47% 0.09 250);
          border-color: oklch(47% 0.09 250 / 0.38);
          background: oklch(47% 0.09 250 / 0.07);
        }
        .dg-b-m {
          color: var(--mu);
          border-color: var(--bd);
          background: oklch(47% 0.013 45 / 0.05);
        }
        .dg-tw {
          overflow-x: auto;
        }
        .dg-tw table {
          width: 100%;
          border-collapse: collapse;
          font-size: 12px;
        }
        .dg-tw th {
          text-align: left;
          color: var(--mu);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 9px 10px;
          border-bottom: 1px solid var(--bd);
          white-space: nowrap;
        }
        .dg-tw td {
          padding: 11px 10px;
          border-bottom: 1px solid var(--bd2);
          vertical-align: middle;
        }
        .dg-tw tr:last-child td {
          border-bottom: 0;
        }
        .dg-row-sub {
          font-size: 11px;
          color: var(--mu);
          margin-top: 1px;
        }
        .dg-pr {
          height: 6px;
          background: oklch(91.5% 0.009 55);
          border-radius: 9px;
          overflow: hidden;
          margin: 7px 0;
        }
        .dg-pr i {
          display: block;
          height: 100%;
          background: var(--accent-2);
          border-radius: 9px;
          transition: width 0.5s;
        }
        .dg-ls {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }
        .dg-it {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          padding: 10px;
          border: 1px solid var(--bd);
          border-radius: 10px;
          font-size: 12px;
        }
        .dg-it .dg-grow {
          flex: 1;
          min-width: 0;
        }
        .dg-ico {
          display: grid;
          place-items: center;
          color: var(--accent-2);
          flex: none;
          margin-top: 1px;
        }
        .dg-it b {
          font-weight: 700;
        }
        .dg-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-2);
          margin-top: 6px;
          flex: none;
        }
        .dg-dot.mut {
          background: oklch(81% 0.011 55);
        }
        .dg-kv {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 4px 12px;
          font-size: 11px;
          color: var(--mu);
          margin-top: 10px;
        }
        .dg-kv b {
          color: var(--tx);
          font-weight: 600;
          text-align: right;
        }
        .dg-f label {
          font-size: 10px;
          font-weight: 700;
          color: var(--mu);
          display: block;
          margin-bottom: 4px;
          letter-spacing: 0.4px;
        }
        .dg-f input,
        .dg-f select,
        .dg-f textarea {
          width: 100%;
          background: oklch(97% 0.006 55);
          border: 1px solid var(--bd);
          border-radius: 8px;
          padding: 9px 11px;
          color: var(--tx);
          font: 13px 'General Sans', ui-sans-serif, system-ui, sans-serif;
          outline: 0;
          margin-bottom: 10px;
          transition: border-color 0.2s, background 0.2s;
        }
        .dg-f input:focus,
        .dg-f select:focus,
        .dg-f textarea:focus {
          border-color: var(--accent-2);
          background: var(--cotton);
        }
        .dg-form-actions {
          display: flex;
          gap: 8px;
          margin-top: 4px;
        }
        .dg-modal {
          position: fixed;
          inset: 0;
          background: oklch(21% 0.012 38 / 0.42);
          display: grid;
          place-items: center;
          padding: 18px;
          z-index: 60;
        }
        .dg-dialog {
          background: var(--cotton);
          border: 1px solid var(--bd);
          border-radius: 12px;
          padding: 20px;
          width: 100%;
          max-width: 460px;
          max-height: 90vh;
          overflow: auto;
          box-shadow: 0 24px 60px oklch(21% 0.012 38 / 0.22);
        }
        .dg-dialog h3 {
          font: 600 16px 'General Sans', ui-sans-serif, system-ui, sans-serif;
          letter-spacing: -0.02em;
          margin: 0 0 14px;
        }
        .dg-load {
          min-height: 100vh;
          display: grid;
          place-items: center;
        }
        .dg-spin {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 3px solid oklch(74% 0.125 30 / 0.25);
          border-top-color: var(--accent-2);
          animation: dgspin 0.8s linear infinite;
        }
        @keyframes dgspin {
          to {
            transform: rotate(360deg);
          }
        }
        .dg-empty {
          text-align: center;
          color: var(--mu);
          font-size: 12px;
          padding: 26px 10px;
        }
        .dg-thumb {
          width: 56px;
          height: 40px;
          object-fit: cover;
          border-radius: 8px;
          border: 1px solid var(--bd);
          background: oklch(94.5% 0.007 55);
          flex: none;
        }
        .dg-cell {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }
        .dg-pick-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 14px;
        }
        .dg-pg {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 12px;
        }
        .dg-pc {
          position: relative;
          display: block;
          background: oklch(97% 0.006 55);
          border: 1px solid var(--bd);
          border-radius: 10px;
          padding: 14px;
          cursor: pointer;
          transition: 0.2s;
        }
        .dg-pc:hover {
          border-color: var(--accent);
        }
        .dg-pc.on {
          border-color: var(--accent-2);
          background: color-mix(in oklch, var(--accent) 10%, var(--cotton));
          box-shadow: 0 0 0 2px color-mix(in oklch, var(--accent) 25%, transparent);
        }
        .dg-pc:focus-within {
          border-color: var(--accent-2);
          box-shadow: 0 0 0 2px color-mix(in oklch, var(--accent) 35%, transparent);
        }
        .dg-pc input {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }
        .dg-pc b {
          display: block;
          font: 600 13px 'General Sans', ui-sans-serif, system-ui, sans-serif;
          margin-bottom: 3px;
          padding-right: 42px;
        }
        .dg-pc-note {
          display: block;
          font-size: 11px;
          color: var(--mu);
          line-height: 1.4;
        }
        .dg-live {
          position: absolute;
          top: 11px;
          right: 11px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--accent-2);
          background: color-mix(in oklch, var(--accent) 22%, transparent);
          border: 1px solid color-mix(in oklch, var(--accent) 40%, transparent);
          padding: 1px 6px;
          border-radius: 99px;
        }
        .dg-mb {
          display: none;
        }
        .dg-scrim {
          display: none;
        }
        @media (max-width: 900px) {
          .dg-app {
            grid-template-columns: 1fr;
          }
          .dg-sb {
            position: fixed;
            left: -260px;
            top: 0;
            width: 236px;
            z-index: 50;
            transition: left 0.3s;
            box-shadow: 0 0 0 1px var(--bd);
          }
          .dg-sb.on {
            left: 0;
          }
          .dg-scrim {
            display: block;
            position: fixed;
            inset: 0;
            background: oklch(21% 0.012 38 / 0.35);
            z-index: 40;
          }
          .dg-mb {
            display: inline-block;
          }
          .dg-main {
            padding: 14px;
          }
        }
      `}</style>

      <div className="dg-app">
        <aside className={`dg-sb ${sidebarOpen ? 'on' : ''}`}>
          <div className="dg-logo">
            <span className="dg-mark">DG</span>
            <b>
              Digit<em>Genie</em>
            </b>
            <span className="dg-tag">Admin</span>
          </div>

          <nav>
            {NAV.map((group) => (
              <div className="dg-grp" key={group.group}>
                <div className="dg-gl">{group.group}</div>
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    className={`dg-nv ${active === item.id ? 'on' : ''}`}
                    onClick={() => openSection(item.id)}
                  >
                    <i>
                      <Icon name={item.icon} size={17} />
                    </i>
                    {item.label}
                    {counts[item.id] > 0 && <s>{counts[item.id]}</s>}
                  </button>
                ))}
              </div>
            ))}
          </nav>

          <div className="dg-sb-foot">
            <button className="dg-bo" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        </aside>

        {sidebarOpen && <div className="dg-scrim" onClick={() => setSidebarOpen(false)} />}

        <main className="dg-main">
          <header className="dg-top">
            <div className="dg-top-l">
              <button className="dg-bo dg-mb" onClick={() => setSidebarOpen(true)} aria-label="Open navigation">
                <Icon name="menu" size={18} />
              </button>
              <div>
                <h1>{TITLES[active]}</h1>
                <div className="dg-sub">DigitGenie Admin Console</div>
              </div>
            </div>
            <div className="dg-top-r">
              {active === 'wb' && (
                <button className="dg-btn" onClick={() => setShowForm(true)}>
                  + Add Website
                </button>
              )}
              <button className="dg-bo" onClick={() => openSection('nt')} aria-label="Notifications">
                <Icon name="notifications" size={16} />
                {unread > 0 ? unread : ''}
              </button>
              <div className="dg-av">AD</div>
            </div>
          </header>

          {active === 'ov' && (
            <>
              <div className="dg-g4">
                <div className="dg-card dg-mt">
                  <b>{PROJECTS.filter((p) => p.status === 'In Progress').length}</b>
                  <span>Active projects</span>
                </div>
                <div className="dg-card dg-mt">
                  <b>{CUSTOMERS.length}</b>
                  <span>Customers</span>
                </div>
                <div className="dg-card dg-mt">
                  <b>₹18.4L</b>
                  <span>Revenue this year</span>
                </div>
                <div className="dg-card dg-mt">
                  <b>{products.filter((p) => p.status === 'Under Review').length}</b>
                  <span>Pending approvals</span>
                </div>
                <div className="dg-card dg-mt">
                  <b>{tickets.filter((t) => t.status !== 'Resolved').length}</b>
                  <span>Open tickets</span>
                </div>
                <div className="dg-card dg-mt">
                  <b>{websites.length}</b>
                  <span>Live websites</span>
                </div>
              </div>

              <div className="dg-g2">
                <div className="dg-card">
                  <div className="dg-hd">
                    <h3>Active Projects</h3>
                    <button className="dg-bo dg-mini" onClick={() => openSection('pj')}>
                      View all
                    </button>
                  </div>
                  <div className="dg-ls">
                    {PROJECTS.filter((p) => p.status === 'In Progress').map((p) => (
                      <div key={p.name}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, fontSize: 12 }}>
                          <b style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                            <Icon name={p.icon} size={14} />
                            {p.name}
                          </b>
                          <span className="dg-sub">{p.progress}%</span>
                        </div>
                        <div className="dg-pr">
                          <i style={{ width: `${p.progress}%` }} />
                        </div>
                        <div className="dg-sub">
                          {p.customer} · PM {p.pm}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="dg-card">
                  <div className="dg-hd">
                    <h3>Pending Approvals</h3>
                    <Badge status={`${products.filter((p) => p.status === 'Under Review').length} waiting`} tone="y" />
                  </div>
                  <div className="dg-ls">
                    {products.filter((p) => p.status === 'Under Review').length === 0 && (
                      <div className="dg-empty">Nothing to review</div>
                    )}
                    {products
                      .filter((p) => p.status === 'Under Review')
                      .map((p) => (
                        <div className="dg-it" key={p.id}>
                          <div className="dg-grow">
                            <b>{p.name}</b>
                            <div className="dg-sub">
                              {p.seller} · {p.category} · {p.price}
                            </div>
                          </div>
                          <div style={{ display: 'flex', gap: 6 }}>
                            <button className="dg-btn dg-mini" onClick={() => decideProduct(p.id, 'Approved')}>
                              Approve
                            </button>
                            <button className="dg-bo dg-mini dg-danger" onClick={() => decideProduct(p.id, 'Rejected')}>
                              Reject
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="dg-card">
                  <div className="dg-hd">
                    <h3>Recent Activity</h3>
                    <button className="dg-bo dg-mini" onClick={() => openSection('nt')}>
                      All
                    </button>
                  </div>
                  <div className="dg-ls">
                    {notifications.slice(0, 4).map((n) => (
                      <div className="dg-it" key={n.text}>
                        <span className="dg-ico">
                          <Icon name={n.icon} size={16} />
                        </span>
                        <div className="dg-grow">
                          {n.text}
                          <div className="dg-sub">{n.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {active === 'cu' && (
            <div className="dg-card dg-tw">
              <div className="dg-hd">
                <h3>Customers</h3>
                <span className="dg-sub">{CUSTOMERS.length} accounts</span>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Company</th>
                    <th>Email</th>
                    <th>Projects</th>
                    <th>Lifetime spend</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {CUSTOMERS.map((c) => (
                    <tr key={c.email}>
                      <td>
                        <b>{c.name}</b>
                      </td>
                      <td>{c.company}</td>
                      <td className="dg-sub">{c.email}</td>
                      <td>{c.projects}</td>
                      <td>
                        <b>{c.spend}</b>
                      </td>
                      <td>
                        <Badge status={c.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {active === 'pj' && (
            <div className="dg-g2">
              {PROJECTS.map((p) => (
                <div className="dg-card" key={p.name}>
                  <div className="dg-hd">
                    <h3 style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                      <Icon name={p.icon} size={15} />
                      {p.name}
                    </h3>
                    <Badge status={p.status} />
                  </div>
                  <div className="dg-pr">
                    <i style={{ width: `${p.progress}%` }} />
                  </div>
                  <div className="dg-sub">
                    {p.progress}% complete · PM {p.pm}
                  </div>
                  <div className="dg-kv">
                    <span>Customer</span>
                    <b>{p.customer}</b>
                    <span>Due</span>
                    <b>{p.due}</b>
                  </div>
                </div>
              ))}
            </div>
          )}

          {active === 'od' && (
            <div className="dg-card dg-tw">
              <div className="dg-hd">
                <h3>Orders</h3>
                <span className="dg-sub">{ORDERS.length} orders</span>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Customer</th>
                    <th>Project</th>
                    <th>Package</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Delivery</th>
                  </tr>
                </thead>
                <tbody>
                  {ORDERS.map((o) => (
                    <tr key={o.id}>
                      <td>{o.id}</td>
                      <td>{o.customer}</td>
                      <td>
                        <b>{o.project}</b>
                      </td>
                      <td>{o.pkg}</td>
                      <td>
                        <b>{o.amount}</b>
                      </td>
                      <td>
                        <Badge status={o.status} />
                      </td>
                      <td>{o.delivery}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {active === 'iv' && (
            <div className="dg-card dg-tw">
              <div className="dg-hd">
                <h3>Invoices &amp; Payments</h3>
                <span className="dg-sub">
                  {invoices.filter((i) => i.status !== 'Paid').length} outstanding
                </span>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Invoice</th>
                    <th>Customer</th>
                    <th>Project</th>
                    <th>Amount</th>
                    <th>Due</th>
                    <th>Status</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((inv) => (
                    <tr key={inv.id}>
                      <td>{inv.id}</td>
                      <td>{inv.customer}</td>
                      <td>{inv.project}</td>
                      <td>
                        <b>{inv.amount}</b>
                      </td>
                      <td>{inv.due}</td>
                      <td>
                        <Badge status={inv.status} />
                      </td>
                      <td>
                        {inv.status === 'Paid' ? (
                          <button className="dg-bo dg-mini" onClick={() => toast.info('Receipt download started')}>
                            Receipt
                          </button>
                        ) : (
                          <div style={{ display: 'flex', gap: 6 }}>
                            <button className="dg-btn dg-mini" onClick={() => markPaid(inv.id)}>
                              Mark paid
                            </button>
                            <button className="dg-bo dg-mini" onClick={() => toast.info(`Reminder sent for ${inv.id}`)}>
                              Remind
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {active === 'po' && (
            <>
              <div className="dg-g4">
                <div className="dg-card dg-mt">
                  <b>{payouts.filter((p) => p.status === 'Pending').length}</b>
                  <span>Awaiting approval</span>
                </div>
                <div className="dg-card dg-mt">
                  <b>₹50,500</b>
                  <span>Pending payout value</span>
                </div>
                <div className="dg-card dg-mt">
                  <b>₹4.2L</b>
                  <span>Paid lifetime</span>
                </div>
              </div>
              <div className="dg-card dg-tw">
                <div className="dg-hd">
                  <h3>Payout Requests</h3>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Ref</th>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Amount</th>
                      <th>Requested</th>
                      <th>Status</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {payouts.map((p) => (
                      <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>
                          <b>{p.name}</b>
                        </td>
                        <td>{p.role}</td>
                        <td>
                          <b>{p.amount}</b>
                        </td>
                        <td>{p.date}</td>
                        <td>
                          <Badge status={p.status} />
                        </td>
                        <td>
                          {p.status === 'Pending' ? (
                            <button className="dg-btn dg-mini" onClick={() => approvePayout(p.id)}>
                              Approve
                            </button>
                          ) : (
                            <span className="dg-sub">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {active === 'hp' && (
            <div className="dg-card">
              <div className="dg-pick-head">
                <div>
                  <h3 style={{ margin: 0 }}>Live homepage</h3>
                  <div className="dg-sub">Choose what visitors see at digitgenie.com</div>
                </div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <a className="dg-bo dg-mini" href="/" target="_blank" rel="noopener noreferrer">
                    View live
                  </a>
                  <button
                    className="dg-btn"
                    onClick={publishHomepage}
                    disabled={homeLoading || savingHome || homepage === liveHomepage}
                  >
                    {savingHome ? 'Publishing…' : 'Publish'}
                  </button>
                </div>
              </div>
              {homeLoading ? (
                <div className="dg-empty">
                  <div className="dg-spin" style={{ margin: '0 auto' }} />
                </div>
              ) : (
                <div className="dg-pg">
                  {HOMEPAGE_OPTIONS.map((option) => (
                    <label key={option.key} className={`dg-pc ${homepage === option.key ? 'on' : ''}`}>
                      <input
                        type="radio"
                        name="homepage"
                        value={option.key}
                        checked={homepage === option.key}
                        onChange={() => setHomepage(option.key)}
                      />
                      {liveHomepage === option.key && <span className="dg-live">Live</span>}
                      <b>{option.name}</b>
                      <span className="dg-pc-note">{option.note}</span>
                    </label>
                  ))}
                </div>
              )}
              <div className="dg-sub" style={{ marginTop: 14 }}>
                Theme previews: <code>/prototype/homepage?variant=&lt;theme&gt;</code>. Publishing takes effect on the
                next page load.
              </div>
            </div>
          )}

          {active === 'wb' && (
            <div className="dg-card dg-tw">
              <div className="dg-hd">
                <h3>Managed Websites</h3>
                <span className="dg-sub">
                  {loading ? 'Loading…' : `${websites.length} live`}
                </span>
              </div>
              {loading ? (
                <div className="dg-empty">
                  <div className="dg-spin" style={{ margin: '0 auto' }} />
                </div>
              ) : websites.length === 0 ? (
                <div className="dg-empty">
                  No websites yet.{' '}
                  <button className="dg-btn dg-mini" onClick={() => setShowForm(true)}>
                    Add your first
                  </button>
                </div>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Website</th>
                      <th>Preview</th>
                      <th>Added</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {websites.map((w) => (
                      <tr key={w.id}>
                        <td>
                          <div className="dg-cell">
                            <img
                              src={w.image_url}
                              alt={w.title}
                              className="dg-thumb"
                              onError={(e) => {
                                e.currentTarget.src = 'https://via.placeholder.com/64x40?text=No+Image'
                              }}
                            />
                            <div style={{ minWidth: 0 }}>
                              <b>{w.title}</b>
                              <div className="dg-row-sub">{w.description}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a
                            href={w.preview_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--ok)', fontWeight: 600 }}
                          >
                            Open →
                          </a>
                        </td>
                        <td className="dg-sub">
                          {w.created_at ? new Date(w.created_at).toLocaleDateString('en-IN') : '—'}
                        </td>
                        <td>
                          <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
                            <button className="dg-bo dg-mini" onClick={() => handleEdit(w)}>
                              Edit
                            </button>
                            <button className="dg-bo dg-mini dg-danger" onClick={() => handleDelete(w.id)}>
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {active === 'pd' && (
            <div className="dg-card dg-tw">
              <div className="dg-hd">
                <h3>Products</h3>
                <span className="dg-sub">
                  {products.filter((p) => p.status === 'Under Review').length} awaiting review
                </span>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Seller</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.id}>
                      <td>
                        <b>{p.name}</b>
                      </td>
                      <td>{p.seller}</td>
                      <td>{p.category}</td>
                      <td>{p.price}</td>
                      <td>
                        <Badge status={p.status} />
                      </td>
                      <td>
                        {p.status === 'Under Review' ? (
                          <div style={{ display: 'flex', gap: 6 }}>
                            <button className="dg-btn dg-mini" onClick={() => decideProduct(p.id, 'Approved')}>
                              Approve
                            </button>
                            <button className="dg-bo dg-mini dg-danger" onClick={() => decideProduct(p.id, 'Rejected')}>
                              Reject
                            </button>
                          </div>
                        ) : (
                          <span className="dg-sub">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {active === 'tk' && (
            <div className="dg-card dg-tw">
              <div className="dg-hd">
                <h3>Support Tickets</h3>
                <span className="dg-sub">{tickets.filter((t) => t.status !== 'Resolved').length} open</span>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Subject</th>
                    <th>Customer</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((t) => (
                    <tr key={t.id}>
                      <td>{t.id}</td>
                      <td>
                        <b>{t.subject}</b>
                      </td>
                      <td>{t.customer}</td>
                      <td>
                        <Badge status={t.priority} tone={PRIORITY_TONE[t.priority]} />
                      </td>
                      <td>
                        <Badge status={t.status} />
                      </td>
                      <td>
                        {t.status !== 'Resolved' ? (
                          <button className="dg-btn dg-mini" onClick={() => resolveTicket(t.id)}>
                            Resolve
                          </button>
                        ) : (
                          <span className="dg-sub">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {active === 'nt' && (
            <div className="dg-card">
              <div className="dg-hd">
                <h3>Notifications</h3>
                <button
                  className="dg-bo dg-mini"
                  disabled={unread === 0}
                  onClick={() => {
                    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })))
                    toast.success('All notifications marked read')
                  }}
                >
                  Mark all read
                </button>
              </div>
              <div className="dg-ls">
                {notifications.map((n) => (
                  <div className="dg-it" key={n.text}>
                    <span className="dg-ico">
                      <Icon name={n.icon} size={16} />
                    </span>
                    <div className="dg-grow">
                      {n.text}
                      <div className="dg-sub">{n.time}</div>
                    </div>
                    <span className={`dg-dot ${n.unread ? '' : 'mut'}`} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {showForm && (
        <div className="dg-modal" onClick={resetForm}>
          <div className="dg-dialog" onClick={(e) => e.stopPropagation()}>
            <h3>{editingWebsite ? 'Edit website' : 'Add website'}</h3>
            <form className="dg-f" onSubmit={handleSubmit}>
              <label htmlFor="dg-title">Title</label>
              <input
                id="dg-title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. SaaS landing page"
                required
              />
              <label htmlFor="dg-desc">Description</label>
              <textarea
                id="dg-desc"
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Short summary"
                required
              />
              <label htmlFor="dg-img">Image URL</label>
              <input
                id="dg-img"
                type="url"
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                placeholder="https://…"
                required
              />
              <label htmlFor="dg-prev">Preview URL</label>
              <input
                id="dg-prev"
                type="url"
                value={formData.preview_url}
                onChange={(e) => setFormData({ ...formData, preview_url: e.target.value })}
                placeholder="https://…"
                required
              />
              <div className="dg-form-actions">
                <button type="submit" className="dg-btn">
                  {editingWebsite ? 'Save changes' : 'Create website'}
                </button>
                <button type="button" className="dg-bo" onClick={resetForm}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
