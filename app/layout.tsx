import { Nunito } from "next/font/google";
import './globals.css'
import type { Metadata } from 'next'
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToastProvider from "./providers/ToastProvider";

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
        <ClientOnly>
          <ToastProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
