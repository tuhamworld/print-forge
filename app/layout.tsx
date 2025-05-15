import type { Metadata } from "next";
import { Geist, Geist_Mono, Albert_Sans, Montserrat_Alternates } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat-alternates',
  display: 'swap'
})

const albertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albert-sans',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Print Forge",
  description: "A website for 3D Models",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserratAlternates.variable} ${albertSans.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
