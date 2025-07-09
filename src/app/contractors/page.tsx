"use client";

import React, { useState } from "react";

const stats = [
  { label: "Total Contractors", value: "150", sub: "Active and inactive" },
  { label: "Active Projects", value: "85", sub: "Ongoing collaborations" },
  { label: "Pending Payments", value: "$12,345", sub: "Due next 7 days" },
  { label: "Avg. Hourly Rate", value: "$78.50", sub: "Across all contractors" },
];

const contractors = [
  {
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Alice Johnson",
    email: "alice.j@example.com",
    role: "Frontend Developer",
    rate: "$75.00",
    preferredPayment: "Direct Deposit",
    paymentInfo: "Bank: Chase Bank\nAccount: ****1234",
    notes: "Excellent React skills, prefers remote work, available 20-30 hours/week",
    invoices: [
      { id: "INV-001", amount: "$1,500", status: "Paid", date: "2024-01-15" },
      { id: "INV-002", amount: "$2,250", status: "Pending", date: "2024-02-01" },
    ],
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bob Williams",
    email: "bob.w@example.com",
    role: "Content Writer",
    rate: "$50.00",
    preferredPayment: "PayPal",
    paymentInfo: "PayPal: bob.w@example.com",
    notes: "Specializes in tech content, fast turnaround, great communication",
    invoices: [
      { id: "INV-003", amount: "$800", status: "Paid", date: "2024-01-20" },
    ],
  },
  {
    avatar: "/avatar-default.png",
    name: "Charlie Davis",
    email: "charlie.d@example.com",
    role: "Mobile Developer",
    rate: "$100.00",
    preferredPayment: "Direct Deposit",
    paymentInfo: "Bank: Wells Fargo\nAccount: ****5678",
    notes: "iOS/Android expert, available for full-time projects",
    invoices: [
      { id: "INV-004", amount: "$3,200", status: "Paid", date: "2024-01-25" },
      { id: "INV-005", amount: "$4,000", status: "Pending", date: "2024-02-05" },
    ],
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Diana Garcia",
    email: "diana.g@example.com",
    role: "SEO Specialist",
    rate: "$60.00",
    preferredPayment: "Stripe",
    paymentInfo: "Stripe: diana.g@example.com",
    notes: "Technical SEO focus, great at link building and content optimization",
    invoices: [
      { id: "INV-006", amount: "$1,200", status: "Paid", date: "2024-01-30" },
    ],
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Ethan Miller",
    email: "ethan.m@example.com",
    role: "Marketing Strategist",
    rate: "$80.00",
    preferredPayment: "Direct Deposit",
    paymentInfo: "Bank: Bank of America\nAccount: ****9012",
    notes: "Digital marketing expert, data-driven approach",
    invoices: [
      { id: "INV-007", amount: "$2,400", status: "Paid", date: "2024-02-01" },
    ],
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Fiona White",
    email: "fiona.w@example.com",
    role: "UI/UX Designer",
    rate: "$90.00",
    preferredPayment: "PayPal",
    paymentInfo: "PayPal: fiona.w@example.com",
    notes: "Creative designer with strong user research skills",
    invoices: [
      { id: "INV-008", amount: "$2,700", status: "Paid", date: "2024-01-28" },
      { id: "INV-009", amount: "$1,800", status: "Pending", date: "2024-02-03" },
    ],
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "George Brown",
    email: "george.b@example.com",
    role: "Database Administrator",
    rate: "$70.00",
    preferredPayment: "Direct Deposit",
    paymentInfo: "Bank: Citibank\nAccount: ****3456",
    notes: "PostgreSQL and MongoDB expert, available for maintenance and optimization",
    invoices: [
      { id: "INV-010", amount: "$1,400", status: "Paid", date: "2024-01-22" },
    ],
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Hannah Green",
    email: "hannah.g@example.com",
    role: "Legal Consultant",
    rate: "$120.00",
    preferredPayment: "Wire Transfer",
    paymentInfo: "Bank: Morgan Stanley\nAccount: ****7890",
    notes: "Corporate law specialist, contract review and compliance",
    invoices: [
      { id: "INV-011", amount: "$3,600", status: "Paid", date: "2024-01-18" },
    ],
  },
  {
    avatar: "/avatar-default.png",
    name: "Ivan King",
    email: "ivan.k@example.com",
    role: "Financial Analyst",
    rate: "$95.00",
    preferredPayment: "Direct Deposit",
    paymentInfo: "Bank: Goldman Sachs\nAccount: ****2345",
    notes: "CFA certified, specializes in startup financial modeling",
    invoices: [
      { id: "INV-012", amount: "$2,850", status: "Paid", date: "2024-01-25" },
      { id: "INV-013", amount: "$1,900", status: "Pending", date: "2024-02-02" },
    ],
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Julia Lee",
    email: "julia.l@example.com",
    role: "Customer Support",
    rate: "$45.00",
    preferredPayment: "PayPal",
    paymentInfo: "PayPal: julia.l@example.com",
    notes: "Bilingual support (English/Spanish), excellent problem-solving skills",
    invoices: [
      { id: "INV-014", amount: "$900", status: "Paid", date: "2024-01-30" },
    ],
  },
];

type SortField = 'name' | 'rate';
type SortDirection = 'asc' | 'desc';

export default function Contractors() {
  const [expandedContractor, setExpandedContractor] = useState<string | null>(null);
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedContractors = [...contractors].sort((a, b) => {
    let aValue: string | number;
    let bValue: string | number;

    if (sortField === 'name') {
      aValue = a.name;
      bValue = b.name;
    } else {
      aValue = parseFloat(a.rate.replace('$', ''));
      bValue = parseFloat(b.rate.replace('$', ''));
    }

    if (sortDirection === 'asc') {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }
  });

  const toggleExpanded = (email: string) => {
    setExpandedContractor(expandedContractor === email ? null : email);
  };

  return (
    <div className="content-grid">
      <h1 className="full-width">Contractors</h1>
      {/* Reporting Modules */}
      <div className="breakout grid grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-base-100 rounded-xl shadow p-5 flex flex-col items-start">
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-base-content/70 font-medium">{stat.label}</div>
            <div className="text-xs text-base-content/50 mt-1">{stat.sub}</div>
          </div>
        ))}
      </div>
      {/* Contractor Directory */}
      <div className="breakout bg-base-100 rounded-xl shadow p-0 overflow-x-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-2 p-4 border-b border-base-200">
          <input type="text" placeholder="Search contractors..." className="input input-bordered w-full md:w-64" />
          <div className="flex gap-2">
            <button 
              onClick={() => handleSort('name')}
              className={`btn btn-sm ${sortField === 'name' ? 'btn-primary' : 'btn-outline'}`}
            >
              Name {sortField === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
            </button>
            <button 
              onClick={() => handleSort('rate')}
              className={`btn btn-sm ${sortField === 'rate' ? 'btn-primary' : 'btn-outline'}`}
            >
              Rate {sortField === 'rate' && (sortDirection === 'asc' ? '↑' : '↓')}
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Contractor</th>
                <th>Role</th>
                <th>Hourly Rate</th>
              </tr>
            </thead>
            <tbody>
              {sortedContractors.map((c) => (
                <React.Fragment key={c.email}>
                  <tr 
                    className="cursor-pointer hover:bg-base-200 transition-colors"
                    onClick={() => toggleExpanded(c.email)}
                  >
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="w-10 rounded-full">
                            <img src={c.avatar} alt={c.name} />
                          </div>
                        </div>
                        <div>
                          <div className="font-medium">{c.name}</div>
                          <div className="text-sm text-base-content/70">{c.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="font-medium">{c.role}</td>
                    <td className="font-mono">{c.rate}</td>
                  </tr>
                  {expandedContractor === c.email && (
                    <tr>
                      <td colSpan={3} className="p-0">
                        <div className="bg-base-200 p-6 border-t border-base-300">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3">Payment Information</h4>
                              <div className="space-y-2">
                                <div>
                                  <span className="text-sm text-base-content/70">Preferred Payment:</span>
                                  <div className="font-medium">{c.preferredPayment}</div>
                                </div>
                                <div>
                                  <span className="text-sm text-base-content/70">Payment Details:</span>
                                  <div className="font-mono text-sm bg-base-100 p-2 rounded">{c.paymentInfo}</div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3">Notes</h4>
                              <div className="bg-base-100 p-3 rounded text-sm">{c.notes}</div>
                            </div>
                            <div className="md:col-span-2">
                              <h4 className="font-semibold mb-3">Recent Invoices</h4>
                              <div className="overflow-x-auto">
                                <table className="table table-sm">
                                  <thead>
                                    <tr>
                                      <th>Invoice ID</th>
                                      <th>Amount</th>
                                      <th>Status</th>
                                      <th>Date</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {c.invoices.map((invoice) => (
                                      <tr key={invoice.id}>
                                        <td className="font-mono">{invoice.id}</td>
                                        <td className="font-mono">{invoice.amount}</td>
                                        <td>
                                          <span className={`badge badge-sm ${
                                            invoice.status === 'Paid' ? 'badge-success' : 'badge-warning'
                                          }`}>
                                            {invoice.status}
                                          </span>
                                        </td>
                                        <td>{invoice.date}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 