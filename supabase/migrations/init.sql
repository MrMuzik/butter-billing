-- CLIENTS
create table clients (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text,
  contact_info jsonb,
  created_at timestamp with time zone default now()
);

-- CONTRACTORS
create table contractors (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text,
  payment_details jsonb,
  created_at timestamp with time zone default now()
);

-- CLIENT INVOICES
create table client_invoices (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references clients(id) on delete cascade,
  invoice_number text,
  status text default 'draft', -- draft, sent, paid, overdue
  due_date date,
  total numeric,
  butter_spread numeric default 0,
  created_at timestamp with time zone default now()
);

-- CONTRACTOR LINE ITEMS (source for cost-plus)
create table contractor_line_items (
  id uuid primary key default uuid_generate_v4(),
  contractor_id uuid references contractors(id) on delete cascade,
  client_invoice_id uuid references client_invoices(id) on delete set null,
  description text,
  hours numeric,
  rate numeric,
  cost numeric, -- derived: hours * rate
  created_at timestamp with time zone default now()
);

-- CONTRACTOR INVOICES (for payout tracking)
create table contractor_invoices (
  id uuid primary key default uuid_generate_v4(),
  contractor_id uuid references contractors(id) on delete cascade,
  status text default 'pending', -- pending, paid
  total numeric,
  created_at timestamp with time zone default now()
);

-- DIGMO / INTERNAL TIME LOGS
create table internal_time_logs (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references clients(id) on delete cascade,
  description text,
  hours numeric,
  billable boolean default true,
  created_at timestamp with time zone default now()
);

-- ADMIN TIME LOGS (for butter spread / ops allocation)
create table admin_time_logs (
  id uuid primary key default uuid_generate_v4(),
  description text,
  hours numeric,
  date date,
  created_at timestamp with time zone default now()
);

-- EXPENSES
create table expenses (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references clients(id) on delete cascade,
  description text,
  vendor text,
  amount numeric,
  markup numeric default 0,
  passthrough boolean default true,
  created_at timestamp with time zone default now()
);
