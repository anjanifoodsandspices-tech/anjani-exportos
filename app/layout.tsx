import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anjani ExportOS',
  description: 'Export CRM Platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
