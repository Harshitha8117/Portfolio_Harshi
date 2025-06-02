'use client';

import './global.css';
import Navbar from '../components/Navbar';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
          <Navbar />
          {children}
      </body>
    </html>
  );
}
