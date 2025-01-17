import type { Metadata } from "next";
import Headers from "@/containers/pages/layouts/Headers";
import "./globals.css";
import Navbar from "@/containers/pages/layouts/Navbar";
import Aside from "@/containers/pages/layouts/Aside";

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
    <html lang="es">
      <body>
         {children}
        </body>
    </html>
  );
}
