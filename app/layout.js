import gesricsFont from '@/helpers/loadFonts'
import './globals.css'
import Nav from '@/components/Nav'

export const metadata = {
  title: 'Afro Apes',
  description: 'Funding Promising Forex Traders Worldwide',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${gesricsFont.variable} font-sans`}>
      <body>
        <main>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}
