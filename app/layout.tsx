import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ban-Tech | Biniyam Gebreslassie",
  description:
    "Designing, Building, and Teaching the Future of Technology. Premium digital solutions by Biniyam Gebreslassie.",
  keywords: [
    "Ban-Tech",
    "Biniyam Gebreslassie",
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Web Development",
    "Ethiopia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body className="bg-bg-light dark:bg-bg-dark text-on-surface dark:text-surface-bright min-h-screen flex flex-col antialiased selection:bg-primary-fixed selection:text-on-primary dark:selection:bg-primary-container dark:selection:text-on-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Navbar />
          <main className="flex-1 pt-[80px]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
