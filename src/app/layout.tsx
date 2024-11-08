import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-inter',
})

export const metadata: Metadata = {
   title: {
      template: '%s - LeadGenAI',
      default: 'LeadGenAI - Empower Your Business with AI-Powered Lead Generation.',
   },
   description:
      'Unlock targeted leads with the power of AI. LeadGenAI provides predictive insights and automation to help you find and engage the right prospects at the right time, optimizing your outreach and conversion strategy with data-driven precision.',
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
         <body>{children}</body>
      </html>
   )
}
