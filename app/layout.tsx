import type { Metadata } from "next"
import { Poppins, Inter, Roboto } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "500",
})
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400"],
})
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "MENTALcare | Home",
  description: "MENTALcare Home Page",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
