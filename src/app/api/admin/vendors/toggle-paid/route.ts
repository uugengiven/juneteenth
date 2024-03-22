// src/app/api/admin/vendors/toggle-paid/route.ts
import { NextResponse } from 'next/server';
import VendorApplication from '@/data/models/VendorApplication';

export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const formId = searchParams.get('formId');

  if (!formId) {
    return NextResponse.json({ error: 'Missing formId parameter' }, { status: 400 });
  }

  try {
    const form = await VendorApplication.findByPk(formId);
    if (!form) {
      return NextResponse.json({ error: 'Vendor application not found' }, { status: 404 });
    }

    await form.update({ paid: !form.paid });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error toggling paid field:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}