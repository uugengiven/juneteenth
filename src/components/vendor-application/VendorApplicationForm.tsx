"use client"

import { useState } from 'react';
import * as Label from '@radix-ui/react-label';
import * as RadioGroup from '@radix-ui/react-radio-group';

const VendorApplicationPage = () => {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [boothSize, setBoothSize] = useState('10x10');
  const [boothType, setBoothType] = useState('Non-Profit');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit the form data to your Prisma database
    console.log({
      name,
      companyName,
      phoneNumber,
      email,
      boothSize,
      boothType,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Vendor Application</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label.Root className="block text-lg font-medium text-gray-700" htmlFor="name">
              Name
            </Label.Root>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border-b border-gray-300 focus:border-green-700 focus:outline-none"
              required
              placeholder='First and Last Name'
            />
          </div>
          <div>
            <Label.Root className="block text-lg font-medium text-gray-700" htmlFor="companyName">
              Company Name
            </Label.Root>
            <input
              id="companyName"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="mt-1 block w-full border-b border-gray-300 focus:border-green-700 focus:outline-none"
              required
              placeholder='If applicable'
            />
          </div>
          <div>
            <Label.Root className="block text-lg font-medium text-gray-700" htmlFor="phoneNumber">
              Phone Number
            </Label.Root>
            <input
              id="phoneNumber"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 block w-full border-b border-gray-300 focus:border-green-700 focus:outline-none"
              required
              placeholder='412-555-1212'
            />
          </div>
          <div>
            <Label.Root className="block text-lg font-medium text-gray-700" htmlFor="email">
              Email Address
            </Label.Root>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border-b border-gray-300 focus:border-green-700 focus:outline-none"
              required
              placeholder='vending@yourdomain.com'
            />
          </div>
          <div>
            <Label.Root className="block text-lg font-medium text-gray-700">Booth Size</Label.Root>
            <RadioGroup.Root
                className="mt-2 space-y-2"
                value={boothSize}
                onValueChange={setBoothSize}
            >
                <div className="flex items-center">
                <RadioGroup.Item
                    className="mr-2 w-4 h-4 rounded-full border border-gray-300 flex-shrink-0 shadow-md"
                    value="10x10"
                    id="boothSize10x10"
                >
                    <RadioGroup.Indicator className="w-full h-full border-2 border-white shadow-md bg-green-700 rounded-full flex justify-center align-center" />
                </RadioGroup.Item>
                <label htmlFor="boothSize10x10">10x10</label>
                </div>
                <div className="flex items-center">
                <RadioGroup.Item
                    className="mr-2 w-4 h-4 rounded-full border border-gray-300 flex-shrink-0"
                    value="10x20"
                    id="boothSize10x20"
                >
                    <RadioGroup.Indicator className="w-full h-full border-2 border-white shadow-md bg-green-700 rounded-full flex justify-center align-center" />
                </RadioGroup.Item>
                <label htmlFor="boothSize10x20" className="text-lg text-gray-700 mr-3">10x20</label>
                </div>
                <div className="flex items-center">
                <RadioGroup.Item
                    className="mr-2 w-4 h-4 rounded-full border border-gray-300 flex-shrink-0"
                    value="Food Truck"
                    id="boothSizeFoodTruck"
                >
                    <RadioGroup.Indicator className="w-full h-full border-2 border-white shadow-md bg-green-700 rounded-full flex justify-center align-center" />
                </RadioGroup.Item>
                <label htmlFor="boothSizeFoodTruck">Food Truck</label>
                </div>
            </RadioGroup.Root>
            </div>
            <div>
                <Label.Root className="block text-lg font-medium text-gray-700">Booth Type</Label.Root>
                <RadioGroup.Root
                    className="mt-2 space-y-2"
                    value={boothType}
                    onValueChange={setBoothType}
                >
                    <div className="flex items-center">
                    <RadioGroup.Item
                        className="mr-2 w-4 h-4 rounded-full border border-gray-300 flex-shrink-0"
                        value="Non-Profit"
                        id="boothTypeNonProfit"
                    >
                        <RadioGroup.Indicator className="w-full h-full border-2 border-white shadow-md bg-green-700 rounded-full flex justify-center align-center" />
                    </RadioGroup.Item>
                    <label htmlFor="boothTypeNonProfit" className="text-lg text-gray-700 mr-3">Non-Profit</label>
                    </div>
                    <div className="flex items-center">
                    <RadioGroup.Item
                        className="mr-2 w-4 h-4 rounded-full border border-gray-300 flex-shrink-0"
                        value="Vendor"
                        id="boothTypeVendor"
                    >
                        <RadioGroup.Indicator className="w-full h-full border-2 border-white shadow-md bg-green-700 rounded-full flex justify-center align-center" />
                    </RadioGroup.Item>
                    <label htmlFor="boothTypeVendor" className="text-lg text-gray-700 mr-3">Vendor</label>
                    </div>
                    <div className="flex items-center">
                    <RadioGroup.Item
                        className="mr-2 w-4 h-4 rounded-full border border-gray-300 flex-shrink-0"
                        value="Food"
                        id="boothTypeFood"
                    >
                        <RadioGroup.Indicator className="w-full h-full border-2 border-white shadow-md bg-green-700 rounded-full flex justify-center align-center" />
                    </RadioGroup.Item>
                    <label htmlFor="boothTypeFood" className="text-lg text-gray-700 mr-3">Food</label>
                    </div>
                </RadioGroup.Root>
                </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 shadow-md text-lg font-medium rounded-md text-white bg-gradient-to-r from-red-700 to-yellow-500 hover:from-red-800 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorApplicationPage;