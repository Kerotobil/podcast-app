import Image from 'next/image';
import { LoginForm } from './form';

export const LoginScreen = () => {
  return (
    <div className="w-full h-full">
      <div className="">
        <div className="ml-10 w-36 h-16 relative">
          <Image src={'/logo.png'} layout="fill" objectFit="contain" />
        </div>
        <div className="w-48 ml-10 mt-14 font-sans text-xl text-white">
          <p>Episodic series of digital audio</p>
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
