"use client"

import './globals.css';
import { Inter } from 'next/font/google';
import store from '@/store';
import { Provider as StateProvider } from 'react-redux';
import AuthenticationProvider from '@/app/authentication/state';
import GeoLocationProvider from './state/geo-location';
import UIConfigurationProvider from './state';
import ApplicationShell from '@/components/ApplicationShell';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateProvider store={store}>
          <GeoLocationProvider>
            <AuthenticationProvider>
              <UIConfigurationProvider>
                <ApplicationShell>
                  {children}
                </ApplicationShell>
              </UIConfigurationProvider>
            </AuthenticationProvider>
          </GeoLocationProvider>
        </StateProvider>
      </body>
    </html>
  )
}
