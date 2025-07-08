"use client";
import { useSidebar } from "./SidebarContext";

interface SidebarContentProps {
  children: React.ReactNode;
}

export function SidebarContent({ children }: SidebarContentProps) {
  const { open } = useSidebar();

  return (
    <div 
      className="flex flex-col min-h-screen transition-all duration-300"
      style={{ marginLeft: open ? "16rem" : "5rem" }} // 16rem = 256px (w-64), 5rem = 80px (w-20)
    >
      {children}
    </div>
  );
} 