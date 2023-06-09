import './globals.css'
import { Inter } from 'next/font/google';
import {ApplicationProvider} from "@/app/ApplicationContext";

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
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ApplicationProvider>
          {children}
        </ApplicationProvider>
      </body>
    </html>
  )
}
