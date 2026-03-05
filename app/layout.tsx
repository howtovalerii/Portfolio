import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './global.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Valerii Hryhoriev — Strategic Product Designer',
  description: 'Strategic product designer focused on systems, structure, and clarity. Seeking full-time roles at US tech companies.',
  icons: {
    icon: '/avatar.jpg',
    apple: '/avatar.jpg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
