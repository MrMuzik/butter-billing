"use client";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import SidebarNav, { SidebarProfileLink } from "./SidebarNav";
import { useSidebar } from "./SidebarContext";

export default function Sidebar() {
  const { open, setOpen } = useSidebar();

  return (
    <aside
      className={`bg-base-200 border-r border-base-300 p-4 transition-all duration-300 fixed left-0 top-0 bottom-0 z-20 flex flex-col
        ${open ? "w-64" : "w-20"}`}
    >
      <button
        className="btn btn-ghost btn-square mb-4 self-end"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
      >
        {open ? (
          <ChevronLeftIcon className="w-6 h-6" />
        ) : (
          <ChevronRightIcon className="w-6 h-6" />
        )}
      </button>
      <SidebarNav open={open} />
      <SidebarProfileLink open={open} className="mt-auto" />
    </aside>
  );
} 