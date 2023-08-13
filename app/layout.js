import Nav from '@/components/Nav'
import gesricsFont from '@/helpers/loadFonts'
import './globals.css'

export const metadata = {
  title: 'Afro Apes | Funding Promising Forex Traders Worldwide',
  description: 'FundedNext offers up to $200,000 funds to financially empower global traders and help them earn full-time.',
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
