import '@/styles/reset.css';
import '@/styles/globals.css';
import { GeistSans } from 'geist/font/sans';
import { Inter } from 'next/font/google';
import 'react-tooltip/dist/react-tooltip.css';
import 'server-only';
import { AppProviders } from './AppProviders';




const inter = Inter({
  display: 'swap',
  subsets: ['cyrillic', 'cyrillic-ext', 'latin-ext', 'latin', 'vietnamese'],
  variable: '--font-inter',
});

export const metadata = {
  icons: {
    icon: '/images/logo-black-main.ico',
  },
  title: 'Backdoor ',
  description: 'Backdoor',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head></head>
      <body className="bg-background">
        <AppProviders>{children}</AppProviders>
        
      </body>
    </html>
  );
}
