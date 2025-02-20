
import Sidebar from "@/components/Sidebar";
import "../globals.css";

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
        </div>
      </body>
    </html>
  );
}
