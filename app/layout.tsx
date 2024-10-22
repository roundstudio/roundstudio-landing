import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "روند استدیو",
  description: "رَند استودیو تیمی متخصص در توسعه وب است که خدمات طراحی وبسایت، سئو، ایجاد فروشگاه‌های آنلاین، خدمات طراحی گرافیکی و داده‌کاوی را ارائه می‌دهد. با ما به دنیای دیجیتال قدم بگذارید و کسب‌وکار خود را متحول کنید.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
