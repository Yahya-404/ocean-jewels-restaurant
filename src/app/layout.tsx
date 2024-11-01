import type { Metadata } from "next";
import { ContextProvider } from "@/context/ContextProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ocean Jewels",
  description: "E-commerce Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
