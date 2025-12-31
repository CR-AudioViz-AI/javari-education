import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Javari Education | Learn New Skills & Get Certified',
  description: 'Online courses, certifications, and training programs. Learn at your own pace from industry experts.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
