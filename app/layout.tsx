import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ArnoldSplit - The Arnold Split Workout App',
  description: 'Train like Arnold with the ultimate chest & back workout tracker. Progressive overload tracking, rest timers, and workout history built for serious lifters.',
  openGraph: {
    title: 'ArnoldSplit - The Arnold Split Workout App',
    description: 'Train like Arnold with the ultimate chest & back workout tracker. Progressive overload made simple.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
