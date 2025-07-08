import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import { SidebarProvider } from "./SidebarContext";
import { SidebarContent } from "./SidebarContent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Butter Billing",
  description: "A modern billing application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <Sidebar />
          <SidebarContent>
            <TopNav />
            <main className="p-6">
              {children}
            </main>
          </SidebarContent>
        </SidebarProvider>
      </body>
    </html>
  );
}
