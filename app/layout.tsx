import './globals.css'
import { Inter } from 'next/font/google';
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lucas Gutierrez - Frontend Developer',
  description: `I'm an enthusiastic frontend developer with strong focus on UI and curious about everything else`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { NEXT_PUBLIC_GA_ID } = process.env;
  return (
    <html lang="en">
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_ID}`}
      />
      <Script
        id="gaTag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FBW7T614ZG', {
                page_path: window.location.pathname,
              });
            `,
        }}
      />
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}
