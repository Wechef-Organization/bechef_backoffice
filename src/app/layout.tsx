"use client"

import GlobalProvider from "@/context/GlobalContext";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased `}
      >
        <GlobalProvider>

          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
