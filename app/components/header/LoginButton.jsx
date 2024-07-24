'use client';
import { useAuth } from '@/lib/contexts/AuthContext';
import Link from 'next/link';
import React from 'react';

export default function LoginButton() {
  const { user, isLoading, error, handleSignInWithGoogle, handleLogout } =
    useAuth();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (user) {
    return (
      <div className='flex items-center gap-1' >
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full"
          onClick={() => {
            handleLogout();
          }}
        >
          LogOut
        </button>
        <Link href='/admin'>
        <div className='flex gap-1  px-3 py-2'>
            <img className='object-cover h-10 w-10 rounded-full' src={user?.photoURL} alt="" />
          </div>
        </Link>
      </div>
    );
  }

  return (
    <section>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-full"
        onClick={() => {
          handleSignInWithGoogle();
        }}
      >
        Google-Login
      </button>
    </section>
  );
}
