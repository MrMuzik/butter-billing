"use client";
import React from "react";

interface SidebarNavLinkProps {
  href: string;
  title: string;
  icon: React.ReactNode;
  open: boolean;
  className?: string;
}

export default function SidebarNavLink({ href, title, icon, open, className = "" }: SidebarNavLinkProps) {
  return (
    <a className={`btn btn-ghost relative px-2.5 justify-start ${className}`} href={href}>
      {icon}
      <span
        className={`transition-all duration-300 left-[3.25rem] absolute
          ${open ? " opacity-100" : " opacity-0 w-0 pointer-events-none"}`}
      >
        {title}
      </span>
    </a>
  );
} 