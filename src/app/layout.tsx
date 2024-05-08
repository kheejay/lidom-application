import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "lidom",
  description: "",
};

import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/src/components/footer/Footer";
import Navbar from "@/src/components/navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className={inter.className}>
        <ThemeProvider>
          <main className="container">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
