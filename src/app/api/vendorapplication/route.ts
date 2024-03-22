import { NextRequest, NextResponse } from 'next/server';
import VendorApplication, { VendorApplicationAttributes } from '@/data/models/VendorApplication';

export async function POST(request: NextRequest) {
  try {
    const formData: VendorApplicationAttributes = await request.json();
    const vendorApplication = await VendorApplication.create(formData);
    console.log('Vendor application saved successfully:', vendorApplication);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Error saving vendor application:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}