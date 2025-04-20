import { Navigation } from '@/components/navigation'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Bibhas Sharma</title>
        <meta name="description" content="My blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </head>
      <body className="bg-background">
        <Navigation />
        <main className="px-2 md:px-8 max-w-[1440px] mx-auto">{children}</main>
      </body>
    </html>
  )
}
