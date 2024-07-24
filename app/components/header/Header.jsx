import { Contact, HomeIcon, List } from 'lucide-react';
import React from 'react';
import LoginButton from './LoginButton';
import AuthContextProvider from '@/lib/contexts/AuthContext';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="flex justify-between items-center px-7 py-3 border-b">
      <Link href='/home'>
        <img className="h-10" src="/nameimage.jpg" alt="image" />
      </Link>
      <ul className="flex items-center gap-3">
        <li className="flex items-center gap-2">
          <HomeIcon />
          Home
        </li>
        <li className="flex items-center gap-2">
          <List />
          blogs
        </li>
        <li className="flex items-center gap-2">
          <Contact />
          Contact Us
        </li>
      </ul>
      <AuthContextProvider>
        <LoginButton />
      </AuthContextProvider>
    </nav>
  );
}
