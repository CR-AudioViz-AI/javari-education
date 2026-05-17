// app/layout.tsx — Javari Education
import type { Metadata } from 'next'
import './globals.css'
export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  title: 'Javari Education | Javari by CR AudioViz AI',
  description: 'AI learning tools',
}
import AppShell from '@/components/AppShell'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body style={{ margin: 0, padding: 0 }}><AppShell appName="Javari Education" appColor="#6366f1" appEmoji="🎓" appDesc="AI learning tools">{children}</AppShell></body></html>)
}
