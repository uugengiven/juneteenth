import type { NextPage } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VendorApplicationForm from '@/components/vendor-application/VendorApplicationForm';

const VendorApplicationPage: NextPage = () => {
    return (
      <>
        <Navbar />
        <VendorApplicationForm />
        <Footer />
      </>
    );
  };
  
  export default VendorApplicationPage;