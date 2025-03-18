import { SignIn } from '@clerk/nextjs';

const Page = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold text-black dark:text-white mb-5">Demo Credentials</h1>
        <h2 className="text-lg font-base text-black dark:text-white mb-5">
          Username - Priceop4090@gmail.com{' '}
        </h2>
        <h2 className="text-lg font-base text-black dark:text-white mb-5">
          Password - Prince4090@
        </h2>
        <SignIn />
      </div>
    </>
  );
};

export default Page;
