import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Height } from "@mui/icons-material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Assai - RH Online",
  description: "Assai Atacadista",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
