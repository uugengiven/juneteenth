// src/components/VendorApplicationsList.tsx
'use client';

import React, { useState } from 'react';

interface VendorApplication {
  id: number;
  name: string;
  companyName?: string;
  email: string;
  phoneNumber: string;
  boothSize: string;
  boothType: string;
  approved: boolean;
  paid: boolean;
}

interface VendorApplicationsListProps {
  initialVendorApplications: VendorApplication[];
}

const VendorApplicationsList: React.FC<VendorApplicationsListProps> = ({ initialVendorApplications }) => {
  const [vendorApplications, setVendorApplications] = useState<VendorApplication[]>(initialVendorApplications);

  const toggleApproved = async (formId: number) => {
    try {
        const response = await fetch(`/api/admin/vendors/toggle-approved?formId=${formId}`, {
          method: 'PUT',
        });
  
        if (response.ok) {
          setVendorApplications((prevApplications) =>
            prevApplications.map((form) =>
              form.id === formId ? { ...form, approved: !form.approved } : form
            )
          );
        } else {
          console.error('Error toggling approved field:', response.statusText);
        }
      } catch (error) {
        console.error('Error toggling approved field:', error);
      }
  };

  const togglePaid = async (formId: number) => {
    try {
        const response = await fetch(`/api/admin/vendors/toggle-paid?formId=${formId}`, {
          method: 'PUT',
        });
  
        if (response.ok) {
          setVendorApplications((prevApplications) =>
            prevApplications.map((form) =>
              form.id === formId ? { ...form, paid: !form.paid } : form
            )
          );
        } else {
          console.error('Error toggling paid field:', response.statusText);
        }
      } catch (error) {
        console.error('Error toggling paid field:', error);
      }
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booth Size</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booth Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approved</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paid</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {vendorApplications.map((form, index) => (
          <tr key={form.id} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
              <td className="px-6 py-4 whitespace-nowrap">{form.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{form.companyName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{form.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{form.phoneNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap">{form.boothSize}</td>
              <td className="px-6 py-4 whitespace-nowrap">{form.boothType}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button
                className={`px-2 py-1 rounded ${
                  form.approved ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
                } text-white`}
                onClick={() => toggleApproved(form.id)}
              >
                {form.approved ? 'Yes' : 'No'}
              </button>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button
                className={`px-2 py-1 rounded ${
                  form.paid ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
                } text-white`}
                onClick={() => togglePaid(form.id)}
              >
                {form.paid ? 'Yes' : 'No'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VendorApplicationsList;