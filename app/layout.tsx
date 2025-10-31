
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JARM TechSight",
  description: "Products, playbooks, and analytics that turn operations data into reliable action.",
  openGraph: { title: "JARM TechSight", description: "Products, playbooks, and analytics that turn operations data into reliable action.", images: [{ url: "/og.png", width: 1200, height: 630 }] }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
