import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/wheels-and-tires');
  return null; 
}
