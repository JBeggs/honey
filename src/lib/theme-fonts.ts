import { Cormorant_Garamond, Inter, Nunito, Playfair_Display } from 'next/font/google'
import type { Theme } from '@/contexts/theme-config'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito', display: 'swap' })

export function themeFontClasses(theme: Theme): { htmlVariables: string; bodyClassName: string } {
  switch (theme) {
    case 'premium-natural':
      return { htmlVariables: `${cormorant.variable} ${inter.variable}`, bodyClassName: inter.className }
    case 'bee-edu':
      return { htmlVariables: nunito.variable, bodyClassName: nunito.className }
    case 'farm-to-jar':
    default:
      return { htmlVariables: `${inter.variable} ${playfair.variable}`, bodyClassName: inter.className }
  }
}
