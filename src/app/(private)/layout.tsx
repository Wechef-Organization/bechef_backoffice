import "../globals.css";
import 'primereact/resources/primereact.min.css';
import "primereact/resources/themes/fluent-light/theme.css"

import Sidebar from "@/components/Sidebar";
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
