import Image from 'next/image';
import { LoginScreen } from '../components/login/screen';
export default function Login() {
  return (
    <div className="mx-auto max-w-sm h-screen relative">
      <div className="absolute top-0 px-1 w-11/12 h-4/5 pr-4 pb-24 pt-12 bg-black rounded-br-2xl z-10">
        <LoginScreen />
      </div>
      <div>
        <div className="fixed top-0 w-96 h-full z-0">
          <Image src={'/Bg.png'} layout="responsive" height={16} width={9} />
        </div>
      </div>
    </div>
  );
}
