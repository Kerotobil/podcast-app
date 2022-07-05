import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href={'/'}>
      <div className="w-36 h-16 relative cursor-pointer">
        <Image src={'/logo.png'} layout="fill" objectFit="contain" />
      </div>
    </Link>
  );
};
