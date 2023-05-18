import './globals.scss';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const Layout = {
  title: 'Dealintent Assignment',
  description: 'Generated by create next app',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
