import type { Metadata } from "next";
import { Comforter } from "next/font/google";
import "./globals.css";

import { AntdRegistry } from '@ant-design/nextjs-registry';

const comforter = Comforter({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={comforter.className}
      >
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
