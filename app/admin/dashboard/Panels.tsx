'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'
import {
  AI_AGENTS,
  AI_LOGS,
  ATTENDANCE,
  ATTRIBUTED_REVENUE,
  BUGS,
  CMS_PAGES,
  COMMISSION_RULES,
  DEALS,
  DEPARTMENTS,
  DEVELOPERS,
  DEV_PROJECTS,
  EMPLOYEES,
  FINANCE_INVOICES,
  JOURNAL,
  LEADS,
  LEAVES,
  MARKETING_CAMPAIGNS,
  MARKETING_SPEND,
  MEDIA,
  MONTHS,
  PARTNERS,
  PARTNER_SALES,
  SALES_PAYMENTS,
  USERS,
} from './modules'
import { Badge, BarChart, DataTable, Icon, Kpis, PRIORITY_TONE, PipelineBars, Tabs, inr, lakh } from './ui'

const STAGES = ['New', 'Contacted', 'Qualified', 'Negotiation', 'Won'] as const

export function SalesPanel() {
  const [tab, setTab] = useState<'Leads' | 'Deals' | 'Payments'>('Leads')
  const [leads, setLeads] = useState(LEADS)
  const [payments, setPayments] = useState(SALES_PAYMENTS)

  const advance = (name: string) => {
    setLeads((prev) =>
      prev.map((lead) => {
        if (lead.name !== name) return lead
        const index = STAGES.indexOf(lead.stage as (typeof STAGES)[number])
        return { ...lead, stage: STAGES[Math.min(index + 1, STAGES.length - 1)] }
      }),
    )
    toast.success(`${name} moved to the next stage`)
  }

  const decide = (reference: string, status: 'Verified' | 'Rejected') => {
    setPayments((prev) => prev.map((item) => (item.reference === reference ? { ...item, status } : item)))
    toast.success(`Payment ${reference} ${status.toLowerCase()}`)
  }

  const openValue = DEALS.filter((deal) => deal.status !== 'Won' && deal.status !== 'Lost').reduce(
    (sum, deal) => sum + deal.amount,
    0,
  )

  return (
    <>
      <Kpis
        items={[
          { value: leads.filter((lead) => lead.stage === 'Qualified').length, label: 'Qualified leads' },
          { value: lakh(openValue / 100000), label: 'Open deal value' },
          { value: DEALS.filter((deal) => deal.status === 'In Progress').length, label: 'Pending follow-ups' },
          { value: payments.filter((item) => item.status === 'Pending').length, label: 'Payments to review' },
        ]}
      />
      <Tabs tabs={['Leads', 'Deals', 'Payments']} active={tab} onChange={setTab} />
      <div className="dg-card">
        {tab === 'Leads' && (
          <DataTable
            head={['Lead', 'Source', 'Owner', 'Priority', 'Stage', '']}
            rows={leads.map((lead) => [
              <span key="lead">
                <b>{lead.name}</b>
                <div className="dg-row-sub">{lead.company}</div>
              </span>,
              lead.source,
              lead.owner,
              <Badge key="priority" status={lead.priority} tone={PRIORITY_TONE[lead.priority]} />,
              <Badge key="stage" status={lead.stage} />,
              lead.stage !== 'Won' ? (
                <button key="action" className="dg-bo dg-mini" onClick={() => advance(lead.name)}>
                  Advance →
                </button>
              ) : (
                <span key="action" className="dg-sub">
                  —
                </span>
              ),
            ])}
          />
        )}
        {tab === 'Deals' && (
          <DataTable
            head={['Deal', 'Customer', 'Value', 'Expected close', 'Next action', 'Status']}
            rows={DEALS.map((deal) => [
              <b key="deal">{deal.title}</b>,
              deal.customer,
              <b key="value">{inr(deal.amount)}</b>,
              deal.close,
              deal.next,
              <Badge key="status" status={deal.status} />,
            ])}
          />
        )}
        {tab === 'Payments' && (
          <DataTable
            head={['Reference', 'Customer', 'Amount', 'Mode', 'Status', '']}
            rows={payments.map((payment) => [
              payment.reference,
              payment.customer,
              <b key="amount">{inr(payment.amount)}</b>,
              payment.mode,
              <Badge key="status" status={payment.status} />,
              payment.status === 'Pending' ? (
                <div key="action" style={{ display: 'flex', gap: 6 }}>
                  <button className="dg-btn dg-mini" onClick={() => decide(payment.reference, 'Verified')}>
                    Verify
                  </button>
                  <button className="dg-bo dg-mini dg-danger" onClick={() => decide(payment.reference, 'Rejected')}>
                    Reject
                  </button>
                </div>
              ) : (
                <span key="action" className="dg-sub">
                  —
                </span>
              ),
            ])}
          />
        )}
      </div>
    </>
  )
}

export function FinancePanel() {
  const [tab, setTab] = useState<'Invoices' | 'Journal'>('Invoices')
  const [invoices, setInvoices] = useState(FINANCE_INVOICES)
  const [journal, setJournal] = useState(JOURNAL)

  const collect = (id: string) => {
    setInvoices((prev) => prev.map((item) => (item.id === id ? { ...item, outstanding: 0, status: 'Paid' } : item)))
    toast.success(`${id} marked as collected`)
  }

  const reverse = (id: string) => {
    setJournal((prev) => prev.map((item) => (item.id === id ? { ...item, reversed: true } : item)))
    toast.success(`${id} reversed`)
  }

  const outstanding = invoices.reduce((sum, item) => sum + item.outstanding, 0)
  const credits = journal.filter((item) => item.type === 'Credit' && !item.reversed).reduce((sum, item) => sum + item.amount, 0)
  const debits = journal.filter((item) => item.type === 'Debit' && !item.reversed).reduce((sum, item) => sum + item.amount, 0)

  return (
    <>
      <Kpis
        items={[
          { value: lakh(outstanding / 100000), label: 'Outstanding receivables' },
          { value: invoices.length, label: 'Invoices created' },
          { value: journal.length, label: 'Journal entries' },
          { value: lakh((credits - debits) / 100000), label: 'Net result' },
        ]}
      />
      <Tabs tabs={['Invoices', 'Journal']} active={tab} onChange={setTab} />
      <div className="dg-card">
        {tab === 'Invoices' && (
          <DataTable
            head={['Invoice', 'Customer', 'Amount', 'Outstanding', 'Due', 'Status', '']}
            rows={invoices.map((invoice) => [
              invoice.id,
              invoice.customer,
              <b key="amount">{inr(invoice.amount)}</b>,
              invoice.outstanding ? inr(invoice.outstanding) : '—',
              invoice.due,
              <Badge key="status" status={invoice.status} />,
              invoice.status !== 'Paid' ? (
                <button key="action" className="dg-btn dg-mini" onClick={() => collect(invoice.id)}>
                  Record collection
                </button>
              ) : (
                <button key="action" className="dg-bo dg-mini" onClick={() => toast.info('Receipt download started')}>
                  Receipt
                </button>
              ),
            ])}
          />
        )}
        {tab === 'Journal' && (
          <DataTable
            head={['Date / ID', 'Description', 'Reference', 'Amount', 'Type', 'Status', '']}
            rows={journal.map((entry) => [
              <span key="id">
                <b>{entry.id}</b>
                <div className="dg-row-sub">{entry.date}</div>
              </span>,
              entry.description,
              entry.reference,
              <b key="amount">{inr(entry.amount)}</b>,
              <Badge key="type" status={entry.type} />,
              <Badge key="status" status={entry.reversed ? 'Reversed' : 'Approved'} />,
              entry.reversed ? (
                <span key="action" className="dg-sub">
                  —
                </span>
              ) : (
                <button key="action" className="dg-bo dg-mini dg-danger" onClick={() => reverse(entry.id)}>
                  Reverse
                </button>
              ),
            ])}
          />
        )}
      </div>
    </>
  )
}

export function MarketingPanel() {
  const [tab, setTab] = useState<'Campaigns' | 'Spend'>('Campaigns')
  const [campaigns, setCampaigns] = useState(MARKETING_CAMPAIGNS)

  const toggle = (name: string) => {
    setCampaigns((prev) =>
      prev.map((item) => (item.name === name ? { ...item, status: item.status === 'Active' ? 'Paused' : 'Active' } : item)),
    )
  }

  const spend = campaigns.reduce((sum, item) => sum + item.spend, 0)
  const leads = campaigns.reduce((sum, item) => sum + item.leads, 0)

  return (
    <>
      <Kpis
        items={[
          { value: leads, label: 'Attributed leads' },
          { value: inr(Math.round(spend / Math.max(leads, 1))), label: 'Cost per lead' },
          { value: lakh(ATTRIBUTED_REVENUE / 100000), label: 'Attributed revenue' },
          { value: `${(ATTRIBUTED_REVENUE / Math.max(spend, 1)).toFixed(1)}×`, label: 'ROAS' },
        ]}
      />
      <Tabs tabs={['Campaigns', 'Spend']} active={tab} onChange={setTab} />
      <div className="dg-card">
        {tab === 'Campaigns' && (
          <DataTable
            head={['Campaign', 'Platform', 'Owner', 'Budget / spend', 'Leads', 'Status', '']}
            rows={campaigns.map((campaign) => [
              <b key="name">{campaign.name}</b>,
              campaign.platform,
              campaign.owner,
              <span key="budget">
                <span className="dg-sub">
                  {inr(campaign.spend)} of {inr(campaign.budget)}
                </span>
                <div className="dg-pr">
                  <i style={{ width: `${Math.min(100, (campaign.spend / campaign.budget) * 100)}%` }} />
                </div>
              </span>,
              campaign.leads,
              <Badge key="status" status={campaign.status} />,
              <button key="action" className="dg-bo dg-mini" onClick={() => toggle(campaign.name)}>
                {campaign.status === 'Active' ? 'Pause' : 'Activate'}
              </button>,
            ])}
          />
        )}
        {tab === 'Spend' && (
          <DataTable
            head={['Date', 'Description', 'Campaign', 'Amount']}
            rows={MARKETING_SPEND.map((item) => [
              item.date,
              item.description,
              item.campaign,
              <b key="amount">{inr(item.amount)}</b>,
            ])}
          />
        )}
      </div>
    </>
  )
}

export function PartnersPanel() {
  const [tab, setTab] = useState<'Partners' | 'Sales' | 'Rules'>('Partners')
  const [partners, setPartners] = useState(PARTNERS)
  const [sales, setSales] = useState(PARTNER_SALES)

  const archive = (name: string) => {
    setPartners((prev) =>
      prev.map((item) => (item.name === name ? { ...item, status: item.status === 'Archived' ? 'Active' : 'Archived' } : item)),
    )
  }

  const updateSale = (sale: string, status: string) => {
    setSales((prev) => prev.map((item) => (item.sale === sale ? { ...item, status } : item)))
    toast.success(`${sale} ${status.toLowerCase()}`)
  }

  const generated = sales.reduce((sum, item) => sum + item.commission, 0)
  const paid = sales.filter((item) => item.status === 'Paid').reduce((sum, item) => sum + item.commission, 0)
  const awaiting = generated - paid

  return (
    <>
      <Kpis
        items={[
          { value: partners.filter((item) => item.status === 'Active').length, label: 'Active partners' },
          { value: inr(generated), label: 'Commission generated' },
          { value: inr(paid), label: 'Commission paid' },
          { value: inr(awaiting), label: 'Awaiting payout' },
        ]}
      />
      <Tabs tabs={['Partners', 'Sales', 'Rules']} active={tab} onChange={setTab} />
      <div className="dg-card">
        {tab === 'Partners' && (
          <DataTable
            head={['Partner', 'Category', 'Manager', 'Status', 'Joined', '']}
            rows={partners.map((partner) => [
              <b key="name">{partner.name}</b>,
              partner.category,
              partner.manager,
              <Badge key="status" status={partner.status} />,
              partner.joined,
              <button key="action" className="dg-bo dg-mini" onClick={() => archive(partner.name)}>
                {partner.status === 'Archived' ? 'Restore' : 'Archive'}
              </button>,
            ])}
          />
        )}
        {tab === 'Sales' && (
          <DataTable
            head={['Sale', 'Partner', 'Sale value', 'Rule', 'Commission', 'Status', '']}
            rows={sales.map((sale) => [
              <b key="sale">{sale.sale}</b>,
              sale.partner,
              inr(sale.value),
              sale.rule,
              <b key="commission">{inr(sale.commission)}</b>,
              <Badge key="status" status={sale.status} />,
              sale.status === 'Pending' ? (
                <button key="action" className="dg-btn dg-mini" onClick={() => updateSale(sale.sale, 'Approved')}>
                  Verify
                </button>
              ) : sale.status === 'Approved' ? (
                <button key="action" className="dg-bo dg-mini" onClick={() => updateSale(sale.sale, 'Paid')}>
                  Record payout
                </button>
              ) : (
                <span key="action" className="dg-sub">
                  —
                </span>
              ),
            ])}
          />
        )}
        {tab === 'Rules' && (
          <DataTable
            head={['Rule', 'Type', 'Value', 'Status']}
            rows={COMMISSION_RULES.map((rule) => [
              <b key="name">{rule.name}</b>,
              rule.type,
              rule.value,
              <Badge key="status" status={rule.status} />,
            ])}
          />
        )}
      </div>
    </>
  )
}

export function DevelopersPanel() {
  const [tab, setTab] = useState<'Developers' | 'Projects' | 'Bugs'>('Developers')
  const [bugs, setBugs] = useState(BUGS)

  const resolve = (title: string) => {
    setBugs((prev) => prev.map((bug) => (bug.title === title ? { ...bug, status: 'Resolved' } : bug)))
    toast.success('Bug marked resolved')
  }

  return (
    <>
      <Kpis
        items={[
          { value: DEVELOPERS.length, label: 'Developers' },
          { value: DEVELOPERS.filter((item) => item.status === 'Available').length, label: 'Available now' },
          { value: bugs.filter((bug) => bug.status !== 'Resolved').length, label: 'Open bugs' },
          {
            value: bugs.filter((bug) => bug.priority === 'High' && bug.status !== 'Resolved').length,
            label: 'Critical bugs',
          },
        ]}
      />
      <Tabs tabs={['Developers', 'Projects', 'Bugs']} active={tab} onChange={setTab} />
      <div className="dg-card">
        {tab === 'Developers' && (
          <DataTable
            head={['Developer', 'Role', 'Skills', 'Status', 'Joined']}
            rows={DEVELOPERS.map((developer) => [
              <b key="name">{developer.name}</b>,
              developer.role,
              <span key="skills" className="dg-sub">
                {developer.skills}
              </span>,
              <Badge key="status" status={developer.status} />,
              developer.joined,
            ])}
          />
        )}
        {tab === 'Projects' && (
          <DataTable
            head={['Project', 'Manager', 'Deadline', 'Repository', 'Status']}
            rows={DEV_PROJECTS.map((project) => [
              <b key="name">{project.name}</b>,
              project.manager,
              project.deadline,
              <a
                key="repo"
                href={`https://${project.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent-2)', fontWeight: 600 }}
              >
                Open ↗
              </a>,
              <Badge key="status" status={project.status} />,
            ])}
          />
        )}
        {tab === 'Bugs' && (
          <DataTable
            head={['Bug', 'Project', 'Owner', 'Priority', 'Status', '']}
            rows={bugs.map((bug) => [
              <b key="title">{bug.title}</b>,
              bug.project,
              bug.owner,
              <Badge key="priority" status={bug.priority} tone={PRIORITY_TONE[bug.priority]} />,
              <Badge key="status" status={bug.status} />,
              bug.status !== 'Resolved' ? (
                <button key="action" className="dg-btn dg-mini" onClick={() => resolve(bug.title)}>
                  Resolve
                </button>
              ) : (
                <span key="action" className="dg-sub">
                  —
                </span>
              ),
            ])}
          />
        )}
      </div>
    </>
  )
}

export function EmployeesPanel() {
  const [tab, setTab] = useState<'Employees' | 'Attendance' | 'Leaves'>('Employees')
  const [employees, setEmployees] = useState(EMPLOYEES)
  const [leaves, setLeaves] = useState(LEAVES)

  const toggleEmployee = (name: string) => {
    setEmployees((prev) =>
      prev.map((item) => (item.name === name ? { ...item, status: item.status === 'Active' ? 'Inactive' : 'Active' } : item)),
    )
  }

  const decideLeave = (name: string, status: 'Approved' | 'Rejected') => {
    setLeaves((prev) => prev.map((item) => (item.name === name ? { ...item, status } : item)))
    toast.success(`${name}'s leave ${status.toLowerCase()}`)
  }

  return (
    <>
      <Kpis
        items={[
          { value: employees.filter((item) => item.status === 'Active').length, label: 'Active employees' },
          { value: leaves.filter((item) => item.status === 'Pending').length, label: 'Pending leave requests' },
          { value: ATTENDANCE.filter((item) => item.checkOut !== '—').length, label: 'Checked out today' },
          { value: employees.filter((item) => item.status === 'Inactive').length, label: 'Inactive employees' },
        ]}
      />
      <Tabs tabs={['Employees', 'Attendance', 'Leaves']} active={tab} onChange={setTab} />
      <div className="dg-card">
        {tab === 'Employees' && (
          <DataTable
            head={['Employee', 'Department', 'Designation', 'Joining date', 'Status', '']}
            rows={employees.map((employee) => [
              <b key="name">{employee.name}</b>,
              employee.department,
              employee.designation,
              employee.joining,
              <Badge key="status" status={employee.status} />,
              <button key="action" className="dg-bo dg-mini" onClick={() => toggleEmployee(employee.name)}>
                {employee.status === 'Active' ? 'Deactivate' : 'Activate'}
              </button>,
            ])}
          />
        )}
        {tab === 'Attendance' && (
          <DataTable
            head={['Date', 'Employee', 'Check in', 'Check out', 'Mode']}
            rows={ATTENDANCE.map((item) => [
              item.date,
              <b key="name">{item.name}</b>,
              item.checkIn,
              item.checkOut,
              <Badge key="mode" status={item.mode} />,
            ])}
          />
        )}
        {tab === 'Leaves' && (
          <DataTable
            head={['Employee', 'Type', 'Dates', 'Reason', 'Status', '']}
            rows={leaves.map((leave) => [
              <b key="name">{leave.name}</b>,
              leave.type,
              leave.dates,
              leave.reason,
              <Badge key="status" status={leave.status} />,
              leave.status === 'Pending' ? (
                <div key="action" style={{ display: 'flex', gap: 6 }}>
                  <button className="dg-btn dg-mini" onClick={() => decideLeave(leave.name, 'Approved')}>
                    Approve
                  </button>
                  <button className="dg-bo dg-mini dg-danger" onClick={() => decideLeave(leave.name, 'Rejected')}>
                    Reject
                  </button>
                </div>
              ) : (
                <span key="action" className="dg-sub">
                  —
                </span>
              ),
            ])}
          />
        )}
      </div>
    </>
  )
}

export function RevenueOverviewCard() {
  const revenue = MONTHS.reduce((sum, month) => sum + month.revenue, 0)
  const expense = MONTHS.reduce((sum, month) => sum + month.expense, 0)
  return (
    <div className="dg-card">
      <div className="dg-hd">
        <h3>Revenue overview</h3>
        <div className="dg-legend">
          <span>
            <i /> Revenue
          </span>
          <span>
            <i className="exp" /> Expenses
          </span>
        </div>
      </div>
      <div className="dg-mt" style={{ marginBottom: 6 }}>
        <b>{lakh(revenue)}</b>
        <span>Revenue · last 6 months</span>
      </div>
      <BarChart data={MONTHS} height={150} />
      <div className="dg-note">Net result {lakh(revenue - expense)} after {lakh(expense)} in expenses.</div>
    </div>
  )
}

export function LeadPipelineCard() {
  return (
    <div className="dg-card">
      <div className="dg-hd">
        <h3>Lead pipeline</h3>
        <Badge status={`${LEADS.length} leads`} tone="m" />
      </div>
      <PipelineBars items={STAGES.map((stage) => ({ label: stage, count: LEADS.filter((lead) => lead.stage === stage).length }))} />
      <div className="dg-note">Drag-free overview of where every lead currently sits.</div>
    </div>
  )
}

const PERIODS = ['Today', '7 days', '30 days', 'This month', 'This year'] as const

export function ReportsPanel() {
  const [period, setPeriod] = useState<(typeof PERIODS)[number]>('This year')
  const revenue = MONTHS.reduce((sum, month) => sum + month.revenue, 0)
  const expense = MONTHS.reduce((sum, month) => sum + month.expense, 0)
  const won = LEADS.filter((lead) => lead.stage === 'Won').length

  return (
    <>
      <div className="dg-hd">
        <span className="dg-sub">Reporting period · Asia/Kolkata</span>
        <Tabs tabs={PERIODS} active={period} onChange={setPeriod} />
      </div>
      <Kpis
        items={[
          { value: lakh(revenue), label: 'Revenue' },
          { value: lakh(expense), label: 'Expenses' },
          { value: lakh(revenue - expense), label: 'Net result' },
          { value: `${Math.round((won / LEADS.length) * 100)}%`, label: 'Lead conversion' },
        ]}
      />
      <div className="dg-g2">
        <RevenueOverviewCard />
        <div className="dg-card">
          <div className="dg-hd">
            <h3>Sales pipeline</h3>
            <Badge status={period} tone="m" />
          </div>
          <PipelineBars
            items={STAGES.map((stage) => ({ label: stage, count: LEADS.filter((lead) => lead.stage === stage).length }))}
          />
          <div className="dg-note">Current stages of leads in the selected period.</div>
        </div>
      </div>
      <div className="dg-card" style={{ marginTop: 14 }}>
        <div className="dg-hd">
          <h3>Department overview</h3>
          <button className="dg-bo dg-mini" onClick={() => toast.success('Report exported (UI only)')}>
            <Icon name="download" size={13} /> Export CSV
          </button>
        </div>
        <DataTable
          head={['Department', 'Headcount', 'Projects', 'Utilisation']}
          rows={DEPARTMENTS.map((row) => [
            <b key="department">{row.department}</b>,
            row.headcount,
            row.projects,
            <div key="util">
              <span className="dg-sub">{row.utilization}</span>
              <div className="dg-pr">
                <i style={{ width: row.utilization }} />
              </div>
            </div>,
          ])}
        />
      </div>
    </>
  )
}

type Message = { role: 'user' | 'bot'; text: string }

export function AIPanel() {
  const [agentName, setAgentName] = useState(AI_AGENTS[0].name)
  const [draft, setDraft] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: 'Hi Admin — this is a UI preview. Pick an agent and ask a question. Responses are placeholders until the AI provider is connected.',
    },
  ])

  const send = () => {
    const text = draft.trim()
    if (!text) return
    setMessages((prev) => [
      ...prev,
      { role: 'user', text },
      {
        role: 'bot',
        text: `${agentName} is not connected yet. Once the provider is wired in, the live answer will appear here.`,
      },
    ])
    setDraft('')
  }

  const inputTokens = AI_LOGS.reduce((sum, log) => sum + log.input, 0)
  const outputTokens = AI_LOGS.reduce((sum, log) => sum + log.output, 0)

  return (
    <>
      <Kpis
        items={[
          { value: AI_AGENTS.filter((agent) => agent.status === 'Active').length, label: 'Active agents' },
          { value: AI_LOGS.length, label: 'Provider executions' },
          { value: inputTokens + outputTokens, label: 'Tokens used' },
          { value: '1.8s', label: 'Avg. response time' },
        ]}
      />
      <div className="dg-g2">
        <div className="dg-card">
          <div className="dg-hd">
            <h3>Assistant playground</h3>
            <Badge status="UI preview" tone="m" />
          </div>
          <select className="dg-select" value={agentName} onChange={(e) => setAgentName(e.target.value)} aria-label="Select agent">
            {AI_AGENTS.map((agent) => (
              <option key={agent.name}>{agent.name}</option>
            ))}
          </select>
          <div className="dg-chat">
            {messages.map((message, index) => (
              <div key={index} className={`dg-msg ${message.role === 'user' ? 'me' : 'bot'}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="dg-inline">
            <input
              className="dg-input"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') send()
              }}
              placeholder="Ask for a draft or general guidance…"
              aria-label="Message the assistant"
            />
            <button className="dg-btn" onClick={send}>
              <Icon name="send" size={14} /> Send
            </button>
          </div>
        </div>
        <div className="dg-card">
          <div className="dg-hd">
            <h3>Agent configurations</h3>
          </div>
          <DataTable
            head={['Agent', 'Department', 'Status', 'Updated', '']}
            rows={AI_AGENTS.map((agent) => [
              <b key="name">{agent.name}</b>,
              agent.department,
              <Badge key="status" status={agent.status} />,
              agent.updated,
              <button key="action" className="dg-bo dg-mini" onClick={() => toast.info('Agent editor is UI only')}>
                Edit
              </button>,
            ])}
          />
        </div>
      </div>
      <div className="dg-card" style={{ marginTop: 14 }}>
        <div className="dg-hd">
          <h3>Execution logs</h3>
          <span className="dg-sub">No real provider calls yet</span>
        </div>
        <DataTable
          head={['Model', 'Input tokens', 'Output tokens', 'Time (IST)', 'Status']}
          rows={AI_LOGS.map((log) => [
            log.model,
            log.input,
            log.output,
            log.time,
            <Badge key="status" status={log.status} />,
          ])}
        />
      </div>
    </>
  )
}

export function SettingsPanel() {
  const [company, setCompany] = useState({
    name: 'DigitGenie',
    email: 'hello@digitgenie.in',
    phone: '+91 98765 43210',
    website: 'https://digitgenie.in',
    address: 'Pune, Maharashtra',
  })
  const [landing, setLanding] = useState('Overview')
  const [showActivity, setShowActivity] = useState(true)
  const [users, setUsers] = useState(USERS)
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'Admin' })

  const addUser = () => {
    if (!newUser.name.trim() || !newUser.email.trim()) {
      toast.error('Name and email are required')
      return
    }
    setUsers((prev) => [...prev, { ...newUser, name: newUser.name.trim(), email: newUser.email.trim(), status: 'Active' }])
    setNewUser({ name: '', email: '', role: 'Admin' })
    toast.success('User added (UI only)')
  }

  const toggleUser = (email: string) => {
    setUsers((prev) =>
      prev.map((user) => (user.email === email ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' } : user)),
    )
  }

  const save = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Settings saved (UI only)')
  }

  return (
    <form onSubmit={save}>
      <div className="dg-g2">
        <div className="dg-card">
          <div className="dg-hd">
            <h3>Company profile</h3>
          </div>
          <div className="dg-f">
            <label htmlFor="dg-company">Company name</label>
            <input id="dg-company" value={company.name} onChange={(e) => setCompany({ ...company, name: e.target.value })} />
            <label htmlFor="dg-email">Company email</label>
            <input id="dg-email" type="email" value={company.email} onChange={(e) => setCompany({ ...company, email: e.target.value })} />
            <label htmlFor="dg-phone">Phone</label>
            <input id="dg-phone" value={company.phone} onChange={(e) => setCompany({ ...company, phone: e.target.value })} />
            <label htmlFor="dg-site">Website URL</label>
            <input id="dg-site" type="url" value={company.website} onChange={(e) => setCompany({ ...company, website: e.target.value })} />
            <label htmlFor="dg-address">Address</label>
            <input id="dg-address" value={company.address} onChange={(e) => setCompany({ ...company, address: e.target.value })} />
          </div>
        </div>

        <div className="dg-card">
          <div className="dg-hd">
            <h3>Appearance</h3>
          </div>
          <div className="dg-pg" style={{ gridTemplateColumns: '1fr' }}>
            <div className="dg-pc on">
              <span className="dg-live">Active</span>
              <b>Coral</b>
              <span className="dg-pc-note">Warm stationery palette used across every admin panel.</span>
            </div>
          </div>
          <div className="dg-note">The admin dashboard is locked to the Coral theme so all modules stay consistent.</div>
          <h3 style={{ marginTop: 18 }}>Regional defaults</h3>
          <div className="dg-f">
            <label htmlFor="dg-tz">Timezone</label>
            <select id="dg-tz" defaultValue="Asia/Kolkata">
              <option>Asia/Kolkata</option>
              <option>Asia/Dubai</option>
              <option>UTC</option>
            </select>
            <label htmlFor="dg-currency">Currency</label>
            <select id="dg-currency" defaultValue="INR">
              <option>INR</option>
              <option>USD</option>
              <option>AED</option>
            </select>
            <label htmlFor="dg-landing">Default landing page</label>
            <select id="dg-landing" value={landing} onChange={(e) => setLanding(e.target.value)}>
              <option>Overview</option>
              <option>Sales</option>
              <option>Reports</option>
            </select>
          </div>
          <label className="dg-check">
            <input type="checkbox" checked={showActivity} onChange={(e) => setShowActivity(e.target.checked)} />
            Show recent activity on Overview
          </label>
        </div>
      </div>

      <div className="dg-card" style={{ marginTop: 14 }}>
        <div className="dg-hd">
          <h3>Workspace users</h3>
          <span className="dg-sub">{users.length} accounts</span>
        </div>
        <DataTable
          head={['Name', 'Email', 'Role', 'Status', '']}
          rows={users.map((user) => [
            <b key="name">{user.name}</b>,
            user.email,
            user.role,
            <Badge key="status" status={user.status} />,
            <button key="action" type="button" className="dg-bo dg-mini" onClick={() => toggleUser(user.email)}>
              {user.status === 'Active' ? 'Deactivate' : 'Activate'}
            </button>,
          ])}
        />
        <div className="dg-inline" style={{ marginTop: 14 }}>
          <input
            className="dg-input"
            placeholder="Full name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            aria-label="New user name"
          />
          <input
            className="dg-input"
            placeholder="Email address"
            type="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            aria-label="New user email"
          />
          <select
            className="dg-select"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            aria-label="New user role"
          >
            <option>Admin</option>
            <option>Super Admin</option>
          </select>
          <button type="button" className="dg-btn" onClick={addUser}>
            <Icon name="plus" size={14} /> Add user
          </button>
        </div>
      </div>

      <div className="dg-card" style={{ marginTop: 14 }}>
        <div className="dg-hd">
          <h3>Settings change history</h3>
        </div>
        <DataTable
          head={['Setting', 'Previous value', 'New value', 'Time (IST)']}
          rows={[
            ['Company name', 'Digit Genie', 'DigitGenie', '12 Nov 2026, 14:08'],
            ['Default landing page', 'Dashboard', 'Overview', '09 Nov 2026, 11:22'],
            ['Default theme', 'Light', 'Coral', '02 Nov 2026, 09:45'],
          ]}
        />
      </div>

      <div className="dg-form-actions" style={{ marginTop: 14 }}>
        <button type="submit" className="dg-btn">
          Save settings
        </button>
        <button type="button" className="dg-bo" onClick={() => toast.info('Nothing to reset — UI only')}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export function CmsPanel() {
  const [tab, setTab] = useState<'Pages' | 'Media'>('Pages')
  const [pages, setPages] = useState(CMS_PAGES)

  const togglePublish = (slug: string) => {
    setPages((prev) =>
      prev.map((page) => (page.slug === slug ? { ...page, status: page.status === 'Published' ? 'Draft' : 'Published' } : page)),
    )
  }

  const published = pages.filter((page) => page.status === 'Published').length

  return (
    <>
      <Kpis
        items={[
          { value: pages.length, label: 'Total pages' },
          { value: published, label: 'Published pages' },
          { value: pages.length - published, label: 'Draft pages' },
          { value: MEDIA.length, label: 'Media files' },
        ]}
      />
      <Tabs tabs={['Pages', 'Media']} active={tab} onChange={setTab} />
      <div className="dg-card">
        {tab === 'Pages' && (
          <DataTable
            head={['Page', 'Slug', 'Sections', 'Updated', 'Status', '']}
            rows={pages.map((page) => [
              <b key="title">{page.title}</b>,
              <code key="slug">{page.slug}</code>,
              page.sections,
              page.updated,
              <Badge key="status" status={page.status} />,
              <button key="action" className="dg-bo dg-mini" onClick={() => togglePublish(page.slug)}>
                {page.status === 'Published' ? 'Unpublish' : 'Publish'}
              </button>,
            ])}
          />
        )}
        {tab === 'Media' && (
          <DataTable
            head={['File', 'Type', 'Size', 'URL', '']}
            rows={MEDIA.map((item) => [
              <b key="name">{item.name}</b>,
              item.type,
              item.size,
              <span key="url" className="dg-sub">
                {item.url}
              </span>,
              <button key="action" className="dg-bo dg-mini" onClick={() => toast.info('Upload is UI only')}>
                Replace
              </button>,
            ])}
          />
        )}
      </div>
    </>
  )
}
