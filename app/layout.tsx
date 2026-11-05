import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Have You Eaten",
  description: "Campus food ordering for Nigerian universities.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
