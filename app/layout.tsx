import { Nunito } from "next/font/google";
import './globals.css'
import type { Metadata } from 'next'
import Navbar from "./components/navbar/Navbar";

const font = Nunito({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: 'NK Grounds',
  description: 'A lovely home in the beautiful central coast in the town of Atascadero',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
