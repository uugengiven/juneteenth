"use client"

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import React from 'react';
import Hamburger from './icons/Hamburger';
import { SignedIn, UserButton, SignOutButton } from '@clerk/nextjs'

// Define a type for navigation items
type NavItem = {
  name: string;
  path: string;
};

// Array of navigation items
const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About Juneteenth', path: '/about' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'Vendor Signup', path: '/vendor-application' },
  { name: 'Purchase Tickets', path: '/tickets' },
  { name: 'Sponsors', path: '/sponsors' },
];

const Navbar = () => {
  return (
    <header className="bg-red-700 text-white">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="md:hidden flex w-full justify-between">
          <NavigationMenu.Root>
            <NavigationMenu.List>
              <NavigationMenu.Item className="relative z-50">
                <NavigationMenu.Trigger>
                  <Hamburger className="w-6 h-6 fill-slate-200" />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute">
                  <NavigationMenu.Sub>
                    <NavigationMenu.List className="flex flex-col space-y-4 bg-red-700 p-4">
                      {navItems.map((item) => (
                        <NavigationMenu.Item key={item.name}>
                          <Link href={item.path} className="hover:font-bold">
                            {item.name}
                          </Link>
                        </NavigationMenu.Item>
                      ))}
                    </NavigationMenu.List>
                  </NavigationMenu.Sub>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
        <div className="self-end">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        </div>
        <NavigationMenu.Root>
          <NavigationMenu.List className="hidden md:flex space-x-4 justify-center">
            {navItems.map((item) => (
              <NavigationMenu.Item key={item.name}>
                <Link href={item.path} className="hover:font-bold">
                  {item.name}
                </Link>
              </NavigationMenu.Item>
            ))}
            <SignedIn>
              <NavigationMenu.Item>
                <SignOutButton />
              </NavigationMenu.Item>
            </SignedIn>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </nav>
    </header>
  );
};

export default Navbar;
