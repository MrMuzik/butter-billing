import React from "react";

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
    status: "Active",
    statusColor: "success",
    project: "Website Redesign",
    rate: "$75.00",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bob Williams",
    email: "bob.w@example.com",
    status: "On Hold",
    statusColor: "warning",
    project: "Blog Creation",
    rate: "$50.00",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Charlie Davis",
    email: "charlie.d@example.com",
    status: "Active",
    statusColor: "success",
    project: "Mobile App Dev",
    rate: "$100.00",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Diana Garcia",
    email: "diana.g@example.com",
    status: "Trial",
    statusColor: "info",
    project: "SEO Optimization",
    rate: "$60.00",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Ethan Miller",
    email: "ethan.m@example.com",
    status: "Inactive",
    statusColor: "error",
    project: "Marketing Strategy",
    rate: "$80.00",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Fiona White",
    email: "fiona.w@example.com",
    status: "Active",
    statusColor: "success",
    project: "UI/UX Design",
    rate: "$90.00",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "George Brown",
    email: "george.b@example.com",
    status: "Active",
    statusColor: "success",
    project: "Database Management",
    rate: "$70.00",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Hannah Green",
    email: "hannah.g@example.com",
    status: "On Hold",
    statusColor: "warning",
    project: "Legal Consulting",
    rate: "$120.00",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Ivan King",
    email: "ivan.k@example.com",
    status: "Active",
    statusColor: "success",
    project: "Financial Analysis",
    rate: "$95.00",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Julia Lee",
    email: "julia.l@example.com",
    status: "Trial",
    statusColor: "info",
    project: "Customer Support",
    rate: "$45.00",
  },
];

export default function Contractors() {
  return (
    <div className="content-grid">
      <h1 className="full-width">Contractors</h1>
      {/* Reporting Modules */}
      <div className="full-width">
        <div className="grid grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-base-100 rounded-xl shadow p-5 flex flex-col items-start">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-base-content/70 font-medium">{stat.label}</div>
              <div className="text-xs text-base-content/50 mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Contractor Directory */}
      <div className="full-width bg-base-100 rounded-xl shadow p-0 overflow-x-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-2 p-4 border-b border-base-200">
          <input type="text" placeholder="Search contractors..." className="input input-bordered w-full md:w-64" />
          <select className="select select-bordered w-full md:w-40">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>On Hold</option>
            <option>Trial</option>
          </select>
          <select className="select select-bordered w-full md:w-40">
            <option>All Projects</option>
            <option>Website Redesign</option>
            <option>Blog Creation</option>
            <option>Mobile App Dev</option>
            <option>SEO Optimization</option>
            <option>Marketing Strategy</option>
            <option>UI/UX Design</option>
            <option>Database Management</option>
            <option>Legal Consulting</option>
            <option>Financial Analysis</option>
            <option>Customer Support</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Contractor Name</th>
                <th>Contact</th>
                <th>Status</th>
                <th>Assigned Project</th>
                <th>Hourly Rate</th>
              </tr>
            </thead>
            <tbody>
              {contractors.map((c) => (
                <tr key={c.email}>
                  <td>
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        <img src={c.avatar} alt={c.name} />
                      </div>
                    </div>
                  </td>
                  <td className="font-medium">{c.name}</td>
                  <td className="text-sm text-base-content/70">{c.email}</td>
                  <td>
                    <span className={`badge badge-${c.statusColor} badge-outline`}>{c.status}</span>
                  </td>
                  <td>{c.project}</td>
                  <td className="font-mono">{c.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 