"use client";
import React from "react";
import { HomeIcon, Squares2X2Icon, Cog6ToothIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

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
      <nav className="flex flex-col gap-2">
        <a className={`btn btn-ghost relative px-2.5 justify-start`} href="/">
          <HomeIcon className="w-6 h-6 flex-shrink-0" />
          <span
            className={`transition-all duration-300 left-[3.25rem] absolute
              ${open ? " opacity-100" : " opacity-0 w-0 pointer-events-none"}`}
          >
            Home
          </span>
        </a>
        <a className={`btn btn-ghost relative px-2.5 justify-start`} href="#">
          <Squares2X2Icon className="w-6 h-6 flex-shrink-0" />
          <span
            className={`transition-all duration-300 left-[3.25rem] absolute
              ${open ? " opacity-100" : " opacity-0 w-0 pointer-events-none"}`}
          >
            Dashboard
          </span>
        </a>
        <a className={`btn btn-ghost relative px-2.5 justify-start`} href="#">
          <Cog6ToothIcon className="w-6 h-6 flex-shrink-0" />
          <span
            className={`transition-all duration-300 left-[3.25rem] absolute
              ${open ? " opacity-100" : " opacity-0 w-0 pointer-events-none"}`}
          >
            Settings
          </span>
        </a>
      </nav>
    </aside>
  );
} 