"use client";
import { useSidebar } from "./SidebarContext";

interface SidebarContentProps {
  children: React.ReactNode;
}

export function SidebarContent({ children }: SidebarContentProps) {
  const { open } = useSidebar();

  return (
    <div 
      className="flex flex-col min-h-screen transition-all duration-300 ease-out"
      style={{ 
        marginLeft: open ? "16rem" : "5rem",
        willChange: "margin-left"
      }}
    >
      {children}
    </div>
  );
} 