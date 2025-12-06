import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/header";
import Script from "next/script";

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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NT055VBNQN"
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NT055VBNQN');
          `}
        </Script>
      </head>
      <body
        className={`antialiased dotted-background`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
