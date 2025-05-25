'use client';

import { SignedIn, UserButton } from '@clerk/nextjs';
import { NavItem } from './types';
import NavLarge from './NavLarge';
import NavSmall from './NavSmall';

// Array of navigation items
const navItems: Array<NavItem> = [
  { name: 'Home', path: '/' },
  { name: 'About Juneteenth', path: '/#history' },
  { name: 'Schedule', path: '/schedule' },
  // Keep Maps near the middle due to a known bug in Radix with the dropdown
  {
    name: 'Maps',
    subItems: [
      { title: 'Juneteenth', href: 'downloads/festival_map_2025.jpg' },
      { title: 'Parade', href: 'downloads/parade_map_2025.jpg' },
    ],
  },
  { name: 'Vendor Signup', path: '/vendor-application' },
  //  { name: 'Purchase Tickets', path: '/tickets' },
  { name: 'Sponsors', path: '/sponsors' },
];

const Navbar = () => {
  return (
    <header className="bg-red-700 py-1">
      <nav className="md:hidden flex w-full justify-between p-1">
        <NavSmall links={navItems} />
        <div className="self-center">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
      <NavLarge links={navItems} />
    </header>
  );
};

export default Navbar;
