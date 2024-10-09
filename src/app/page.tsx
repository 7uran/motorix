"use client"
import Loader from '@/components/Loader';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/wheels-and-tires');
  }, [router]);

  return <div className='flex items-center justify-center w-full h-full'><Loader /></div>;
}
