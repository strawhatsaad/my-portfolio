import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Muhammad Saad Anjum - Portfolio",
  description:
    "Muhammad Saad Anjum: Expert Full Stack Next.js Developer. Crafting high-performance web applications with Next.js, leveraging server-side rendering (SSR) and client-side interactivity. Skilled in building responsive, visually appealing frontends using Tailwind CSS. Explore my portfolio for examples of my work in Next.js, React, and modern web development technologies. Let's build your next innovative web solution.",
  applicationName: "Muhammad Saad Anjum - Portfolio",
  creator: "Muhammad Saad Anjum",
  keywords: [
    "Muhammad Saad Anjum",
    "Muhammad Saad",
    "Muhammad Saad Anjum Portfolio",
    "Muhammad Saad Anjum Portfolio Website",
    "Muhammad Saad Anjum Portfolio Website Next.js",
    "Muhammad Saad Anjum Portfolio Website Next.js Tailwind CSS",
    "Muhammad Saad Anjum Portfolio Website Next.js Tailwind CSS React",
    "Muhammad Saad Anjum Portfolio Website Next.js Tailwind CSS React NextAuth",
    "Muhammad Saad Anjum Portfolio Website Next.js Tailwind CSS React NextAuth Next.js API Routes",
    "Muhammad Saad Anjum Portfolio Website Next.js Tailwind CSS React NextAuth Next.js API Routes MongoDB",
    "Muhammad Saad Anjum Portfolio Website Next.js Tailwind CSS React NextAuth Next.js API Routes MongoDB",
    "Muhammad Saad Anjum Portfolio Website Next.js Tailwind CSS React NextAuth Next.js API Routes MongoDB Prisma",
    "Muhammad Saad Anjum Portfolio Website Next.js Tailwind CSS React NextAuth Next.js API Routes MongoDB Prisma",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
