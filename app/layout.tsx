import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://newp-neon.vercel.app/"),
  title: { default: "Teen Vogue", template: `%s | Teen Vogue` },
  description: "Stay updated with the latest tech and global news.",
  openGraph: {
    url: "/",
    title: "Teen Vogue",
    description: "",
    images: ["/teen-logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teen Vogue",
    description: "",
    images: ["/teen-logo.svg"],
  },
  icons: {
    icon: "/teen-logo.svg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
         <Footer/>
      </body>
    </html>
  );
}
