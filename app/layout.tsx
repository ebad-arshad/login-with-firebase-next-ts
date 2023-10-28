
import { ReduxProvider } from '@/redux/provider'
import type { Metadata } from 'next'
import './globals.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import { getServerSession } from 'next-auth'
import SessionProvider from '@/components/SessionProvider'

export const metadata: Metadata = {
  title: 'Auth App',
  description: 'Login Signup as you wish',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession();

  return (
    <html lang="en">
      <body className='bg-[#8E8FFA]'>
        <SessionProvider session={session}>
          <ReduxProvider>
            <MantineProvider>
              {children}
            </MantineProvider>
          </ReduxProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
