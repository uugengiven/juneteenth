// components/AuthWrapper.tsx
import { auth, currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const allowedEmails = ['lange.john.m@gmail.com'];

const AuthWrapper = <P extends {}>(Component: React.ComponentType<P>) => {
  const WrappedComponent = async (props: P) => {
    const {userId } = auth();

    if (!userId) {
        return null;
    }

    if (!userId) {
        redirect('/sign-in?redirectTo=/admin');
        return null;
    }

    const user = await currentUser();
    const emailAddress = user?.emailAddresses[0]?.emailAddress;

    if (!emailAddress || !allowedEmails.includes(emailAddress)) {
        redirect('/unauthorized');
    }

    return <Component {...props} />;
  };

  return WrappedComponent;
};

export default AuthWrapper;