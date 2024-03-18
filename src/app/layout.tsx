import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NavigationBar } from '@/components/navigation/NavigationBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Media Tracking App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
    <body className={`${inter.className}`}>
    <header className='max-w-6xl px-4 mx-auto'>
      <NavigationBar/>
    </header>
    <main className='max-w-6xl px-4 mb-8 mx-auto'>
      <h1 className='text-6xl mt-8 mb-6 font-extrabold'>Track</h1>
      {children}
    </main>
    </body>
    </html>
  );
}
