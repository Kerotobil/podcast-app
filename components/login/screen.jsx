import { Logo } from '../Logo';
import { LoginForm } from './form';

export const LoginScreen = () => {
  return (
    <div className="w-full h-full">
      <div className="px-4">
        <Logo />
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
