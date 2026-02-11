import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BuildFlow | Client-Architect Portal",
  description:
    "A lightweight workspace where clients and architects track project progress without scheduling calls.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
