import type { Metadata } from 'next'
import { Roboto  } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SV Pizza',
  description: 'Choose your ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-orange-100/20 `} >
      
        <main className='max-w-5xl mx-auto  p-4 overflow-x-clip '>
        <Header />
        {children}
        <Footer />
        </main>
      </body>
    </html>
  )
}
