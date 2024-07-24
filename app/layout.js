import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/header/Header';
import AuthContextProvider from '@/lib/contexts/AuthContext';
import LoginButton from './components/header/LoginButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'KidoBlock',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </AuthContextProvider>
    </html>
  );
}
