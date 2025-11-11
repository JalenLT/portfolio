import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/header";


export const metadata = {
  metadataBase: new URL("https://stefanseunarine.dev"),
  title: {
    default: "Stefan Seunarine | Full-Stack Developer",
    template: "",
  },
  description: "Portfolio of Stefan Seunarine | Full-Stack Developer from Trinidad & Tobago",
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
