// src/app/admin/vendors/page.tsx
import React from 'react';
import AuthWrapper from '@/components/AuthWrapper';
import VendorApplication from '@/data/models/VendorApplication';
import VendorApplicationsList from '@/components/vendor-application/VendorApplicationsList';
import Link from 'next/link';

const VendorAdminPage: React.FC = async () => {
    const vendorForms = await VendorApplication.findAll();
  
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Vendor Applications</h1>
          <Link href="/api/admin/vendors/export" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Export to CSV
          </Link>
        </div>
        <VendorApplicationsList initialVendorApplications={vendorForms} />
      </div>
    );
  };
  
  export default AuthWrapper(VendorAdminPage);