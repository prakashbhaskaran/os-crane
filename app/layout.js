import localFont from "next/font/local";
import "./globals.css";
import MainLayout from "./layouts/MainLayout";
import NextTopLoader from "nextjs-toploader";
import MaterialThemeProvider from "@providers/MaterialThemeProvider";
import AuthSessionProvider from "@providers/AuthSessionProvider";
import { customPalette } from "@constants/style";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "OS CRANE PARTS",
    template: `OS CRANE PARTS | %s`,
  },
  description: "International and domestic crane parts suppliers",
  keywords: [
    "oscraneparts",
    "oscraneparts.com",
    "xcmg crane parts",
    "xcmg spare parts",
    "hydra crane spare parts",
    "forklift spare parts",
    "zoomlion crane spare parts",
    "sany crane spare parts",
  ],
  openGraph: {
    title: "OS CRANE PARTS",
    description: "International and domestic crane parts suppliers",
  },
  verification: {
    google: "BzDyuVqEpacXwEg3rm-qMvz7g6-zMr3kYj8KlN7nwpo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader
          color={customPalette.global.secondary}
          showSpinner={false}
        />
        <MaterialThemeProvider>
          <AuthSessionProvider>
            <MainLayout>{children}</MainLayout>
          </AuthSessionProvider>
        </MaterialThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-23Q6GWKMG2" />
    </html>
  );
}
