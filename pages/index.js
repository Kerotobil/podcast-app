import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/login');
  }, []);
  return (
    <div className="bg-pink-400">
      <Head>
        <title>Nox Podcast App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
