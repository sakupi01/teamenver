import './globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { Inter } from 'next/font/google'

import type { Metadata } from 'next'

// eslint-disable-next-line
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Teamenver',
  description: 'To boot up team productivity.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <UserProvider>
        <body className={`${inter.className} w-screen h-screen py-10 px-20`}>
          {children}
        </body>
      </UserProvider>
    </html>
  )
}
