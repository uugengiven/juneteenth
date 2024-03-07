import type { Metadata } from "next";
import { lato } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "WPA Juneteenth",
  description: "Created by Academy Pittsburgh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
