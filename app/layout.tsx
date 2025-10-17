import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/header";


export const metadata: Metadata = {
  title: "Portfolio | Stefan Seunarine",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased dotted-background`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
