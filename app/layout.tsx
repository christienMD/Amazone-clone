import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./auth/Provider";
import ContextProvider from "./ContextProvider";
import Header from "@/app/components/Head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amazone-clone by md christien",
  description:
    "Explore a seamless online shopping experience with Amazone-clone by md christien. Discover a wide range of products and enjoy secure authentication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ContextProvider>
            <Header />
            {children}
          </ContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
