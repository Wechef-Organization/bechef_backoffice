
import Sidebar from "@/components/Sidebar";
import "../globals.css";
import { Toaster } from "sonner";

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
        <Sidebar />
        <div className="pl-64">
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
