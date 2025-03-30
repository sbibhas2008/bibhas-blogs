import { Navigation } from '@/components/navigation'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background">
        <Navigation />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  )
}
