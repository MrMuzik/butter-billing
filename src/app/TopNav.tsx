"use client";
import { ArrowDownTrayIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import NavButton from "./NavButton";

export default function TopNav() {
  return (
    <nav className="bg-base-100 border-b border-base-300 sticky top-0 z-10">
      <div className="flex">
        <NavButton
          icon={<ArrowDownTrayIcon className="w-4 h-4 mr-2" />}
          href="/ar"
          title="AR - Receivable"
        />
        <NavButton
          icon={<ArrowUpTrayIcon className="w-4 h-4 mr-2" />}
          href="/ap"
          title="AP - Payable"
        />
      </div>
    </nav>
  );
} 