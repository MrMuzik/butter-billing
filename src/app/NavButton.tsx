"use client";
import { ReactNode } from "react";

interface NavButtonProps {
  icon: ReactNode;
  href: string;
  title: string;
}

export default function NavButton({ icon, href, title }: NavButtonProps) {
  return (
    <a 
      href={href} 
      className="btn btn-ghost btn-sm rounded-none border-b-2 border-transparent hover:border-primary px-4 py-1"
    >
      {icon}
      {title}
    </a>
  );
} 