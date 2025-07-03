"use client";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import SidebarNav, { SidebarProfileLink } from "./SidebarNav";

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);

  return (
    <aside
      className={`bg-base-200 border-r border-base-300 p-4 transition-all duration-300 h-full flex flex-col gap-4 breakout
        ${open ? "w-64" : "w-20"}`}
      style={{ minHeight: "100vh" }}
    >
      <button
        className="btn btn-ghost btn-square mb-4 self-end"
        onClick={() => setOpen((o) => !o)}
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