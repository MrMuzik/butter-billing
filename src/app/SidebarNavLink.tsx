"use client";
import React from "react";
import Link from "next/link";

interface SidebarNavLinkProps {
  href: string;
  title: string;
  icon: React.ReactNode;
  open: boolean;
  className?: string;
}

export default function SidebarNavLink({ 
  href, 
  title, 
  icon, 
  open, 
  className = "" 
}: SidebarNavLinkProps) {
  const [fullyClosed, setFullyClosed] = React.useState(!open);

  React.useEffect(() => {
    if (open) {
      setFullyClosed(false);
    } else {
      const timer = setTimeout(() => setFullyClosed(true), 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <Link
      href={href}
      className={`btn btn-ghost justify-start w-full ${className}`}
      prefetch={true}
    >
      {icon}
      <span
        className={`transition-all duration-300 ${
          open
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-2 absolute left-12"
        } ${fullyClosed ? "justify-center" : "justify-start"}`}
      >
        {title}
      </span>
    </Link>
  );
} 