// src/app/admin/vendors/export/page.tsx
import { NextResponse } from 'next/server';
import VendorApplication from '@/data/models/VendorApplication';

export async function GET() {
  const vendorForms = await VendorApplication.findAll();

  const csvData = vendorForms.map((form) => [
    form.name,
    form.companyName,
    form.email,
    form.phoneNumber,
    form.boothSize,
    form.boothType,
    form.approved,
    form.paid,
  ]);

  const csvHeaders = [
    'Name',
    'Company',
    'Email',
    'Phone',
    'Booth Size',
    'Booth Type',
    'Approved',
    'Paid',
  ];

  const csvContent = [csvHeaders, ...csvData]
    .map((row) => row.join(','))
    .join('\n');

  const response = new NextResponse(csvContent);
  response.headers.set('Content-Type', 'text/csv');
  response.headers.set('Content-Disposition', 'attachment; filename="vendor-applications.csv"');
  return response;
}