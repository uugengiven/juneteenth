import { NextRequest, NextResponse } from 'next/server';
import VendorApplication, { VendorApplicationAttributes } from '@/data/models/VendorApplication';
import { Resend } from 'resend';
import EmailTemplate from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  let status = "Saving";
  try {
    const formData: VendorApplicationAttributes = await request.json();
    const vendorApplication = await VendorApplication.create(formData);
    console.log('Vendor application saved successfully:', vendorApplication);

    status = "Sending";
    const {data, error} = await resend.emails.send({
      from: 'Admin <admin@wpajuneteenth.com>',
      to: ['lange.john.m@gmail.com', 'Stvfestivalvendor@gmail.com'],
      subject: 'New Vendor Application Received',
      text: 'A vendor has signed up. Please review their application at https://www.wpajuneteenth.com/admin/vendors',
      react: EmailTemplate({
        name: vendorApplication.name,
        companyName: vendorApplication.companyName,
        phoneNumber: vendorApplication.phoneNumber,
        email: vendorApplication.email,
        boothSize: vendorApplication.boothSize,
        boothType: vendorApplication.boothType,
      })
    })

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error(`Error ${status} vendor application:`, error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}