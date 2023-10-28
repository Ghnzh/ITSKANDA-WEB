'use client'

import { Navbar } from '@/components/navbar'
import { Poppins } from 'next/font/google'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './globals.css'
import Metadata from '@/components/seo/page';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap', adjustFontFallback: false
})

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (
    <html lang="en" className='scroll-smooth overflow-x-hidden lg:overflow-x-visible'>
      <Metadata />
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
