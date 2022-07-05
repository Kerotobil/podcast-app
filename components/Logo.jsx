import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="w-36 h-16 relative">
      <Image src={'/logo.png'} layout="fill" objectFit="contain" />
    </div>
  );
};
