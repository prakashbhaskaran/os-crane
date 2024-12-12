import localFont from "next/font/local";
import "./globals.css";
import MainLayout from "./layouts/MainLayout";
import NextTopLoader from "nextjs-toploader";
import MaterialThemeProvider from "@providers/MaterialThemeProvider";
import AuthSessionProvider from "@providers/AuthSessionProvider";
import { customPalette } from "@constants/style";

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
  title: "OS CRANE PARTS",
  description: "International and domestic crane parts suppliers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader
          color={customPalette.global.teritiary}
          showSpinner={false}
        />
        <MaterialThemeProvider>
          <AuthSessionProvider>
            <MainLayout>{children}</MainLayout>
          </AuthSessionProvider>
        </MaterialThemeProvider>
      </body>
    </html>
  );
}
