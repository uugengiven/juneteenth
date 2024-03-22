// pages/unauthorized.tsx
import Link from 'next/link';

const UnauthorizedPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-800 mb-4">403</h1>
        <h2 className="text-3xl font-semibold text-slate-700 mb-4">
          Access Denied
        </h2>
        <p className="text-xl text-slate-600 mb-8">
          You do not have permission to access this page.
        </p>
        <Link href="/" className="px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default UnauthorizedPage;