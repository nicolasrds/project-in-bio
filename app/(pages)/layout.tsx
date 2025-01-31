import type { Metadata } from "next";
import "./globals.css";
import { Red_Hat_Display } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const redHatDisplay = Red_Hat_Display({
    subsets: ["latin"],
    weight: ["400", "500", "700"]
})


export const metadata: Metadata = {
  verification: { google: "pPQ7VuuYDAjvRfqiFZeeU3jibGTtN1WQpsbGx79IoWA" },
  title: "Project in Bio",
  description: "Seus projetos e redes sociais em um único link",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${redHatDisplay.className} bg-background-primary text-content-body antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-TN8MC5E9KP" />
    </html>
  );
}
