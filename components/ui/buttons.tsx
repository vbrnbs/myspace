'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './button';

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === 'loading') {
    return <>...</>;
  }

  if (status === 'authenticated') {
    return (
        <div className='flex gap-4'>
      <Link href={`/dashboard`}>
        <Image
          src={session.user?.image ?? '/mememan.webp'}
          className='rounded-full border-2 border-black'
          width={40}
          height={40}
          alt="Your Name"
        />
      </Link>
      <SignOutButton />
      </div>
    );
  }

  return <Button onClick={() => signIn()}>Sign in</Button>;
}

export function SignOutButton() {
  return <Button onClick={() => signOut()}>Sign out</Button>;
}