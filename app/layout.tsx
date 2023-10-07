import { Nunito } from "next/font/google";
import './globals.css'
import type { Metadata } from 'next'
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import ToastProvider from "./providers/ToastProvider";
import getCurrentUser from "./actions/getCurrentUser";

const font = Nunito({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: 'NK Grounds',
  description: 'A lovely home in the beautiful central coast in the town of Atascadero',
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  )
}
