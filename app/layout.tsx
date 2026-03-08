import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PeekProof - Catch Phone Snoopers',
  description: 'Know when someone tries to unlock your phone. Capture photos of snoopers automatically with face recognition.',
  openGraph: {
    title: 'PeekProof - Catch Phone Snoopers',
    description: 'Know when someone tries to unlock your phone. Capture photos of snoopers automatically.',
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
