'use client';

import { Inter } from 'next/font/google'
import { useEffect } from 'react';
 import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('https://www.instagram.com/geekpartystore');
 }, []);
 return <p></p>;
}
