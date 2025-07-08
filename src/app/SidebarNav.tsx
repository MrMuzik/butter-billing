"use client";
import React from "react";
import { 
  HomeIcon, 
  Squares2X2Icon, 
  Cog6ToothIcon, 
  UserCircleIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  FolderIcon,
  BanknotesIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline";
import SidebarNavLink from "./SidebarNavLink";

interface SidebarNavProps {
  open: boolean;
}

export const iconClass = "w-6 h-6 flex-shrink-0";

export default function SidebarNav({ open }: SidebarNavProps) {
  return (
    <nav className="flex flex-col gap-2">
      <SidebarNavLink
        href="/"
        title="Dashboard"
        icon={<Squares2X2Icon className={iconClass} />}
        open={open}
      />
      <SidebarNavLink
        href="/clients"
        title="Clients"
        icon={<UserGroupIcon className={iconClass} />}
        open={open}
      />
      <SidebarNavLink
        href="/contractors"
        title="Contractors"
        icon={<WrenchScrewdriverIcon className={iconClass} />}
        open={open}
      />
      <SidebarNavLink
        href="/invoices"
        title="Invoices"
        icon={<DocumentTextIcon className={iconClass} />}
        open={open}
      />
      <SidebarNavLink
        href="/projects"
        title="Projects"
        icon={<FolderIcon className={iconClass} />}
        open={open}
      />
      <SidebarNavLink
        href="/expenses"
        title="Expenses"
        icon={<BanknotesIcon className={iconClass} />}
        open={open}
      />
      <SidebarNavLink
        href="/reports"
        title="Reports"
        icon={<ChartBarIcon className={iconClass} />}
        open={open}
      />
      <SidebarNavLink
        href="#"
        title="Settings"
        icon={<Cog6ToothIcon className={iconClass} />}
        open={open}
      />
    </nav>
  );
}

export function SidebarProfileLink({ open, className = "" }: { open: boolean; className?: string }) {
  return (
    <SidebarNavLink
      href="#"
      title="Profile"
      icon={<UserCircleIcon className={iconClass} />}
      open={open}
      className={className}
    />
  );
} 