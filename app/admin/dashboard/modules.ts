// UI-only mock data for the admin modules that are not wired to Firestore yet.

export type Lead = { name: string; company: string; source: string; owner: string; priority: string; stage: string }
export type Deal = { title: string; customer: string; amount: number; close: string; next: string; status: string }
export type SalesPayment = { reference: string; customer: string; amount: number; mode: string; status: string }

export const LEADS: Lead[] = [
  { name: 'Rahul Sharma', company: 'Sharma Finserv', source: 'Referral', owner: 'Amit Rao', priority: 'High', stage: 'Qualified' },
  { name: 'Anil Mehta', company: 'Mehta Finance', source: 'Website', owner: 'Neha Verma', priority: 'Medium', stage: 'Contacted' },
  { name: 'Pooja Jain', company: 'Jain Clinics', source: 'LinkedIn', owner: 'Priya Nair', priority: 'High', stage: 'New' },
  { name: 'Kiran Patel', company: 'Patel Logistics', source: 'Google Ads', owner: 'Amit Rao', priority: 'Low', stage: 'Negotiation' },
  { name: 'Sunita Rao', company: 'Rao Travels', source: 'Referral', owner: 'Neha Verma', priority: 'Medium', stage: 'Won' },
]

export const DEALS: Deal[] = [
  { title: 'Loan CRM Enterprise', customer: 'Sharma Finserv', amount: 249998, close: '20 Dec 2026', next: 'Product demo', status: 'In Progress' },
  { title: 'Travel Booking Engine', customer: 'Rao Travels', amount: 119999, close: '28 Nov 2026', next: 'Contract review', status: 'Won' },
  { title: 'Clinic Queue Manager', customer: 'Jain Clinics', amount: 24999, close: '18 Jan 2027', next: 'Send proposal', status: 'Pending' },
  { title: 'Fleet ERP', customer: 'Patel Logistics', amount: 189000, close: '05 Feb 2027', next: 'Pricing call', status: 'In Progress' },
]

export const SALES_PAYMENTS: SalesPayment[] = [
  { reference: 'PAY-2081', customer: 'Rao Travels', amount: 59999, mode: 'UPI', status: 'Pending' },
  { reference: 'PAY-2079', customer: 'Sharma Finserv', amount: 74999, mode: 'NEFT', status: 'Pending' },
  { reference: 'PAY-2074', customer: 'VS Retail', amount: 9999, mode: 'UPI', status: 'Verified' },
]

export type FinanceInvoice = { id: string; customer: string; amount: number; outstanding: number; due: string; status: string }
export type JournalEntry = { id: string; date: string; description: string; reference: string; amount: number; type: string; reversed: boolean }

export const FINANCE_INVOICES: FinanceInvoice[] = [
  { id: 'INV-3011', customer: 'Sharma Finserv', amount: 74999, outstanding: 74999, due: '05 Dec 2026', status: 'Pending' },
  { id: 'INV-3012', customer: 'Sharma Finserv', amount: 49999, outstanding: 49999, due: '28 Dec 2026', status: 'Pending' },
  { id: 'INV-2995', customer: 'Rao Travels', amount: 59999, outstanding: 59999, due: '15 Nov 2026', status: 'Overdue' },
  { id: 'INV-2988', customer: 'Sharma Finserv', amount: 74999, outstanding: 0, due: '02 Oct 2026', status: 'Paid' },
]

export const JOURNAL: JournalEntry[] = [
  { id: 'JE-4021', date: '12 Nov 2026', description: 'Advance — Loan CRM Enterprise', reference: 'INV-2988', amount: 74999, type: 'Credit', reversed: false },
  { id: 'JE-4020', date: '10 Nov 2026', description: 'Cloud hosting — November', reference: 'BILL-118', amount: 8400, type: 'Debit', reversed: false },
  { id: 'JE-4018', date: '05 Nov 2026', description: 'Developer payout — WD-74', reference: 'WD-74', amount: 45000, type: 'Debit', reversed: false },
  { id: 'JE-4015', date: '02 Nov 2026', description: 'Travel engine milestone 1', reference: 'INV-2995', amount: 59999, type: 'Credit', reversed: false },
]

export const MONTHS = [
  { label: 'Jun', revenue: 8.2, expense: 4.1 },
  { label: 'Jul', revenue: 10.6, expense: 5.2 },
  { label: 'Aug', revenue: 9.4, expense: 4.8 },
  { label: 'Sep', revenue: 13.1, expense: 6.3 },
  { label: 'Oct', revenue: 11.8, expense: 5.7 },
  { label: 'Nov', revenue: 15.2, expense: 6.9 },
]

export type Campaign = { name: string; platform: string; owner: string; budget: number; spend: number; leads: number; status: string }
export type CampaignSpend = { date: string; description: string; campaign: string; amount: number }

export const MARKETING_CAMPAIGNS: Campaign[] = [
  { name: 'Search — CRM India', platform: 'Google', owner: 'Amit Rao', budget: 60000, spend: 41200, leads: 38, status: 'Active' },
  { name: 'Retargeting — Founders', platform: 'Meta', owner: 'Priya Nair', budget: 35000, spend: 28900, leads: 21, status: 'Active' },
  { name: 'Launch — Travel ERP', platform: 'LinkedIn', owner: 'Neha Verma', budget: 50000, spend: 50000, leads: 12, status: 'Paused' },
  { name: 'Referral boost', platform: 'Email', owner: 'Amit Rao', budget: 15000, spend: 6400, leads: 9, status: 'Active' },
]

export const MARKETING_SPEND: CampaignSpend[] = [
  { date: '14 Nov 2026', description: 'Search ads — week 2', campaign: 'Search — CRM India', amount: 12400 },
  { date: '12 Nov 2026', description: 'Creative refresh', campaign: 'Retargeting — Founders', amount: 8900 },
  { date: '09 Nov 2026', description: 'Sponsored InMail', campaign: 'Launch — Travel ERP', amount: 15000 },
  { date: '07 Nov 2026', description: 'Newsletter feature', campaign: 'Referral boost', amount: 2400 },
]

export const ATTRIBUTED_REVENUE = 1840000

export type Partner = { name: string; category: string; manager: string; status: string; joined: string }
export type PartnerSale = { sale: string; partner: string; value: number; rule: string; commission: number; status: string }
export type CommissionRule = { name: string; type: string; value: string; status: string }

export const PARTNERS: Partner[] = [
  { name: 'Sharma Finserv', category: 'Reseller', manager: 'Neha Verma', status: 'Active', joined: '14 Jan 2026' },
  { name: 'Mehta Finance', category: 'Referral', manager: 'Amit Rao', status: 'Active', joined: '02 Mar 2026' },
  { name: 'Rao Travels', category: 'Technology', manager: 'Priya Nair', status: 'Review', joined: '21 Jun 2026' },
  { name: 'VS Retail', category: 'Reseller', manager: 'Amit Rao', status: 'Archived', joined: '10 Sep 2025' },
]

export const PARTNER_SALES: PartnerSale[] = [
  { sale: 'Loan CRM Enterprise', partner: 'Sharma Finserv', value: 249998, rule: '12% reseller', commission: 29999, status: 'Approved' },
  { sale: 'Travel Booking Engine', partner: 'Rao Travels', value: 119999, rule: '8% referral', commission: 9599, status: 'Pending' },
  { sale: 'Admin Dashboard', partner: 'VS Retail', value: 9999, rule: '10% referral', commission: 999, status: 'Paid' },
]

export const COMMISSION_RULES: CommissionRule[] = [
  { name: 'Reseller standard', type: 'Percentage', value: '12%', status: 'Approved' },
  { name: 'Referral standard', type: 'Percentage', value: '8%', status: 'Approved' },
  { name: 'Enterprise fixed bonus', type: 'Fixed', value: '₹15,000', status: 'Approved' },
  { name: 'Launch partner', type: 'Percentage', value: '15%', status: 'Review' },
]

export type Developer = { name: string; role: string; skills: string; status: string; joined: string }
export type DevProject = { name: string; manager: string; deadline: string; repo: string; status: string }
export type Bug = { title: string; project: string; owner: string; priority: string; status: string }

export const DEVELOPERS: Developer[] = [
  { name: 'Amit Rao', role: 'Full-stack', skills: 'React, Node.js, Firebase', status: 'Busy', joined: '12 Mar 2024' },
  { name: 'Priya Nair', role: 'Frontend', skills: 'React, TypeScript, CSS', status: 'Available', joined: '08 Jul 2024' },
  { name: 'Neha Verma', role: 'Project Manager', skills: 'Delivery, QA, CRM', status: 'Busy', joined: '19 Jan 2025' },
  { name: 'Rohit Das', role: 'Backend', skills: 'Python, PostgreSQL, APIs', status: 'Available', joined: '03 Apr 2025' },
]

export const DEV_PROJECTS: DevProject[] = [
  { name: 'Loan CRM Enterprise', manager: 'Neha Verma', deadline: '20 Dec 2026', repo: 'github.com/digitgenie/loan-crm', status: 'In Progress' },
  { name: 'Travel Booking Engine', manager: 'Neha Verma', deadline: '28 Nov 2026', repo: 'github.com/digitgenie/travel', status: 'In Progress' },
  { name: 'Admin Dashboard', manager: 'Amit Rao', deadline: '12 Sep 2026', repo: 'github.com/digitgenie/admin', status: 'Completed' },
  { name: 'Hospital ERP', manager: 'Priya Nair', deadline: '18 Jan 2027', repo: 'github.com/digitgenie/hospital', status: 'Pending' },
]

export const BUGS: Bug[] = [
  { title: 'Invoice totals off by ₹1 on GST edge case', project: 'Loan CRM Enterprise', owner: 'Amit Rao', priority: 'High', status: 'Open' },
  { title: 'Mobile nav overlaps footer', project: 'Admin Dashboard', owner: 'Priya Nair', priority: 'Medium', status: 'In Progress' },
  { title: 'Date picker resets on back navigation', project: 'Travel Booking Engine', owner: 'Amit Rao', priority: 'Low', status: 'Open' },
  { title: 'CSV export missing UTF-8 BOM', project: 'Loan CRM Enterprise', owner: 'Rohit Das', priority: 'Medium', status: 'Resolved' },
]

export type Employee = { name: string; department: string; designation: string; joining: string; status: string }
export type Attendance = { date: string; name: string; checkIn: string; checkOut: string; mode: string }
export type Leave = { name: string; type: string; dates: string; reason: string; status: string }

export const EMPLOYEES: Employee[] = [
  { name: 'Amit Rao', department: 'Engineering', designation: 'Senior Developer', joining: '12 Mar 2024', status: 'Active' },
  { name: 'Priya Nair', department: 'Design', designation: 'Frontend Developer', joining: '08 Jul 2024', status: 'Active' },
  { name: 'Neha Verma', department: 'Delivery', designation: 'Project Manager', joining: '19 Jan 2025', status: 'Active' },
  { name: 'Rohit Das', department: 'Engineering', designation: 'Backend Developer', joining: '03 Apr 2025', status: 'Active' },
  { name: 'Kavya Iyer', department: 'Sales', designation: 'Account Executive', joining: '22 Aug 2025', status: 'Inactive' },
]

export const ATTENDANCE: Attendance[] = [
  { date: '15 Nov 2026', name: 'Amit Rao', checkIn: '09:12', checkOut: '18:40', mode: 'Office' },
  { date: '15 Nov 2026', name: 'Priya Nair', checkIn: '09:35', checkOut: '18:05', mode: 'Remote' },
  { date: '15 Nov 2026', name: 'Neha Verma', checkIn: '09:02', checkOut: '19:10', mode: 'Office' },
  { date: '15 Nov 2026', name: 'Rohit Das', checkIn: '10:04', checkOut: '—', mode: 'Remote' },
]

export const LEAVES: Leave[] = [
  { name: 'Priya Nair', type: 'Sick leave', dates: '18–19 Nov 2026', reason: 'Fever', status: 'Pending' },
  { name: 'Rohit Das', type: 'Casual leave', dates: '24 Nov 2026', reason: 'Family function', status: 'Pending' },
  { name: 'Amit Rao', type: 'Earned leave', dates: '02–04 Oct 2026', reason: 'Travel', status: 'Approved' },
]

export const DEPARTMENTS = [
  { department: 'Engineering', headcount: 8, projects: 4, utilization: '82%' },
  { department: 'Design', headcount: 3, projects: 3, utilization: '76%' },
  { department: 'Delivery', headcount: 4, projects: 5, utilization: '88%' },
  { department: 'Sales', headcount: 5, projects: 2, utilization: '64%' },
]

export type Agent = { name: string; department: string; status: string; updated: string }
export type AgentLog = { model: string; input: number; output: number; time: string; status: string }

export const AI_AGENTS: Agent[] = [
  { name: 'Sales assistant', department: 'Sales', status: 'Active', updated: '12 Nov 2026' },
  { name: 'Support triage', department: 'Support', status: 'Active', updated: '09 Nov 2026' },
  { name: 'Finance summariser', department: 'Finance', status: 'Draft', updated: '02 Nov 2026' },
]

export const AI_LOGS: AgentLog[] = [
  { model: 'claude-sonnet-5-5', input: 1840, output: 620, time: '15 Nov, 10:42 IST', status: 'Completed' },
  { model: 'claude-sonnet-5-5', input: 920, output: 310, time: '15 Nov, 09:18 IST', status: 'Completed' },
  { model: 'claude-haiku-5-5', input: 2210, output: 540, time: '14 Nov, 17:05 IST', status: 'Completed' },
  { model: 'claude-haiku-5-5', input: 640, output: 0, time: '14 Nov, 15:33 IST', status: 'Rejected' },
]

export type CmsPage = { title: string; slug: string; sections: number; updated: string; status: string }
export type MediaItem = { name: string; type: string; size: string; url: string }

export const CMS_PAGES: CmsPage[] = [
  { title: 'Home', slug: '/', sections: 8, updated: '12 Nov 2026', status: 'Published' },
  { title: 'About', slug: '/about', sections: 5, updated: '04 Nov 2026', status: 'Published' },
  { title: 'Services', slug: '/services', sections: 6, updated: '13 Nov 2026', status: 'Draft' },
  { title: 'Partner programme', slug: '/partners', sections: 4, updated: '28 Oct 2026', status: 'Draft' },
]

export const MEDIA: MediaItem[] = [
  { name: 'hero-dashboard.jpg', type: 'JPEG', size: '284 KB', url: '/media/hero-dashboard.jpg' },
  { name: 'logo-mark.svg', type: 'SVG', size: '12 KB', url: '/media/logo-mark.svg' },
  { name: 'case-study-travel.webp', type: 'WebP', size: '196 KB', url: '/media/case-study-travel.webp' },
]

export type WorkspaceUser = { name: string; email: string; role: string; status: string }

export const USERS: WorkspaceUser[] = [
  { name: 'Local Admin', email: 'admin@digitgenie.in', role: 'Super Admin', status: 'Active' },
  { name: 'Neha Verma', email: 'neha@digitgenie.in', role: 'Admin', status: 'Active' },
  { name: 'Amit Rao', email: 'amit@digitgenie.in', role: 'Admin', status: 'Inactive' },
]
