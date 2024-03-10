'use server'

export interface VendorApplicationFormData {
  name: string
  email: string
  companyName?: string
  phoneNumber: string
  boothSize: string
  boothType: string
}

export async function submitVendorApplicationForm(formData: VendorApplicationFormData) {
  // TODO: save data to Prisma from this serverside component
  console.log(formData);

  return { message: 'Form submitted successfully', formData };
}