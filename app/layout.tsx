import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import TanstackProvider from "@/components/providers/TanstackProvider";
import ReduxProvider from "@/components/providers/ReduxProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import AuthProvider from "@/components/providers/AuthProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ReduxProvider>
            <TanstackProvider>
              <TooltipProvider>{children}</TooltipProvider>
            </TanstackProvider>
          </ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
