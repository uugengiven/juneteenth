import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 font-light">
      <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-between items-top">
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} B Marshall Company. All rights reserved.</p>
          <p>Email: <a href="mailto:StopTheViolencePgh@yahoo.com" className="underline">StopTheViolencePgh@yahoo.com</a></p>
          <p>Phone: <a href="tel:7242059376" className="underline">724-205-9376</a></p>
        </div>
        <div className="flex flex-wrap flex-col mb-4 md:mb-0">
          <Link href="/#history">
            <span className="mr-4 hover:underline cursor-pointer">About</span>
          </Link>
          <Link href="/vendor-application">
            <span className="mr-4 hover:underline cursor-pointer">Vendor Signup</span>
          </Link>
          <Link href="/sponsors">
            <span className="mr-4 hover:underline cursor-pointer">Sponsorship</span>
          </Link>
        </div>
        <div className="flex flex-col">
          {/* Example social media links */}
          <a href="https://facebook.com/wpajuneteenth" className="mr-4 hover:underline">Facebook</a>
          <a href="https://twitter.com/bmarhsallprdtns" className="mr-4 hover:underline">Twitter</a>
          <a href="https://instagram.com/bmprdtns" className="hover:underline">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
