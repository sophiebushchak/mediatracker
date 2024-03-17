import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
    <main className='max-w-6xl px-4 mx-auto'>
      <h1 className='text-6xl mt-8 mb-4 font-extrabold'>Track</h1>
      {children}
    </main>
    </body>
    </html>
  );
}
