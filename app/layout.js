'use client'

import { Navbar } from '@/components/navbar'
import './globals.css'
import { Poppins } from 'next/font/google'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap', adjustFontFallback: false
})

export const metadata = {
  title: 'ITSKANDA',
  description: 'SKANDA TI WEBSITE',
  // link = '/favicon.ico' />,
}

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (
    <html lang="en" className='scroll-smooth overflow-x-hidden'>
      {/* <link rel="icon" href="../favicon.ico" /> */}
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
