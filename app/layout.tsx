import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import LayoutWithAuth from './layout-with-auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EduFi - Your AI Mentor to Learn, Earn & Succeed',
  description: 'AI-powered educational mentor platform for students in India. Get personalized college recommendations, scholarships, internships, and connect with peers through EduSwipe.',
  keywords: 'education, AI mentor, college recommendations, scholarships, internships, student platform, India',
  authors: [{ name: 'EduFi Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'EduFi - Your AI Mentor to Learn, Earn & Succeed',
    description: 'AI-powered educational mentor platform for students in India',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EduFi - Your AI Mentor to Learn, Earn & Succeed',
    description: 'AI-powered educational mentor platform for students in India',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutWithAuth>
          {children}
        </LayoutWithAuth>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#22c55e',
                secondary: '#fff',
              },
            },
            error: {
              duration: 5000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
