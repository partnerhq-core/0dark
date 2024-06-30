import { Inter, Inter_Tight, Style_Script } from 'next/font/google'
import { Toaster } from 'sonner'

import GoogleAnalytics from '@/components/google-analytics'
import { siteConfig } from '@/config/site'

import './css/style.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const inter_tight = Inter_Tight({
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
})

const style_script = Style_Script({
  subsets: ['latin'],
  variable: '--font-style-script',
  display: 'swap',
  weight: '400',
})

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Consultancy', '', ''],
  authors: [
    {
      name: 'Anon',
      url: 'https://.com',
    },
  ],
  creator: 'skl3',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    // images: [`${siteConfig.url}/og.jpg`],
    creator: '@heystanliu',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <GoogleAnalytics tagId="G-W060GCC8BP" />
      <body
        className={`${inter.variable} ${inter_tight.variable} ${style_script.variable} dark font-inter bg-neutral-900 text-neutral-500 antialiased`}
      >
        <div
          className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:text-clip"
          style={{ scrollBehavior: 'smooth' }}
        >
          <Toaster position="top-center" richColors />
          {children}
        </div>
      </body>
    </html>
  )
}
