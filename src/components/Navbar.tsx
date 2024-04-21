'use client';

import { usePathname } from 'next/navigation';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import NextLink from 'next/link';
import React, { ReactNode } from 'react';
import Hamburger from './icons/Hamburger';
import { SignedIn, UserButton, SignOutButton } from '@clerk/nextjs';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import './navlarge.css';

const Link = ({ href, ...props }: {children: string, href: string}) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenu.Link asChild active={isActive}>
      <NextLink href={href} className="NavigationMenuLink" {...props} />
    </NavigationMenu.Link>
  );
};
 

// ListItems in Nav Dropdown
type ListItemType = { 
  children?: ReactNode;
  className?: string; 
  href?: string; 
  rel?: string; 
  target?: string; 
  title?: string; 
}

const ListItem = 
  ({ className, rel, target, title, ...props }: ListItemType) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames('ListItemLink', className)}
          rel={rel}
          target={target}
          {...props}
        >
          <div className="ListItemHeading">{title}</div>
        </a>
      </NavigationMenu.Link>
    </li>
);

// const Navbar = () => {
//   return (
//     <header className="bg-red-700 text-white">
//       <nav className="max-w-6xl mx-auto px-4 py-4">
//         <div className="md:hidden flex w-full justify-between">
//           <NavigationMenu.Root>
//             <NavigationMenu.List>
//               <NavigationMenu.Item className="relative z-50">
//                 <NavigationMenu.Trigger>
//                   <Hamburger className="w-6 h-6 fill-slate-200" />
//                 </NavigationMenu.Trigger>
//                 <NavigationMenu.Content className="absolute">
//                   <NavigationMenu.Sub>
//                     <NavigationMenu.List className="flex flex-col space-y-4 bg-red-700 p-4">
//                       {navItems.map(item => (
//                         <NavigationMenu.Item key={item.name}>
//                           <Link
//                             href={item.path}
//                             className="transition ease-in-out delay-50 hover:opacity-80"
//                           >
//                             {item.name}
//                           </Link>
//                         </NavigationMenu.Item>
//                       ))}
//                       <NavigationMenu.Item>
//                         <NavigationMenu.Trigger className="transition ease-in-out delay-50 hover:opacity-80">
//                           Maps
//                         </NavigationMenu.Trigger>
//                         <NavigationMenu.Content>
//                           <NavigationMenu.Sub>
//                             <NavigationMenu.List className="flex flex-col space-y-2 bg-red-700 p-4">
//                               <NavigationMenu.Item>
//                                 <a
//                                   href="/downloads/juneteenth-map.pdf"
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                   className="transition ease-in-out delay-50 hover:opacity-80"
//                                 >
//                                   Juneteenth
//                                 </a>
//                               </NavigationMenu.Item>
//                               <NavigationMenu.Item>
//                                 <a
//                                   href="/downloads/youth-fest-map.pdf"
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                   className="transition ease-in-out delay-50 hover:opacity-80"
//                                 >
//                                   Youth Fest
//                                 </a>
//                               </NavigationMenu.Item>
//                             </NavigationMenu.List>
//                           </NavigationMenu.Sub>
//                         </NavigationMenu.Content>
//                       </NavigationMenu.Item>
//                     </NavigationMenu.List>
//                   </NavigationMenu.Sub>
//                 </NavigationMenu.Content>
//               </NavigationMenu.Item>
//             </NavigationMenu.List>
//           </NavigationMenu.Root>
//           <div className="self-end">
//             <SignedIn>
//               <UserButton />
//             </SignedIn>
//           </div>
//         </div>
//         <NavigationMenu.Root>
//           <NavigationMenu.List className="hidden md:flex space-x-4 justify-center">
//             {navItems.map(item => (
//               <NavigationMenu.Item key={item.name}>
//                 <Link
//                   href={item.path}
//                   className="transition ease-in-out delay-50 hover:opacity-80"
//                 >
//                   {item.name}
//                 </Link>
//               </NavigationMenu.Item>
//             ))}
//             <NavigationMenu.Item>
//               <NavigationMenu.Trigger className="transition ease-in-out delay-50 hover:opacity-80">
//                 Maps
//               </NavigationMenu.Trigger>
//               <NavigationMenu.Content>
//                 <NavigationMenu.Sub>
//                   <NavigationMenu.List className="flex flex-col space-y-2 bg-red-700 p-4">
//                     <NavigationMenu.Item>
//                       <a
//                         href="/downloads/juneteenth-map.pdf"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="transition ease-in-out delay-50 hover:opacity-80"
//                       >
//                         Juneteenth
//                       </a>
//                     </NavigationMenu.Item>
//                     <NavigationMenu.Item>
//                       <a
//                         href="/downloads/youth-fest-map.pdf"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="transition ease-in-out delay-50 hover:opacity-80"
//                       >
//                         Youth Fest
//                       </a>
//                     </NavigationMenu.Item>
//                   </NavigationMenu.List>
//                 </NavigationMenu.Sub>
//               </NavigationMenu.Content>
//             </NavigationMenu.Item>

//             <SignedIn>
//               <NavigationMenu.Item>
//                 <SignOutButton />
//               </NavigationMenu.Item>
//             </SignedIn>
//           </NavigationMenu.List>
//         </NavigationMenu.Root>
//       </nav>
//     </header>
//   );
// };


const Navbar = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">

        <NavigationMenu.Item>
          <Link href="/">Home</Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Link href="/#history">About Juneteenth</Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Link href="/schedule">Schedule</Link>
        </NavigationMenu.Item>
      
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Maps <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List">
              <ListItem
                title="Juneteenth"
                href="downloads/juneteenth-map.pdf"
                target="_blank"
                rel="noopener noreferrer"
              />
              <ListItem
                title="Youthfest"
                href="/downloads/youth-fest-map.pdf"
                target="_blank"
                rel="noopener noreferrer"
              />
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Link href="/vendor-application">Vendor Signup</Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Link href="/sponsors">Sponsors</Link>
        </NavigationMenu.Item>
     
        <SignedIn>
          <NavigationMenu.Item>
            <NavigationMenu.Link>
              <SignOutButton />
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </SignedIn>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};



export default Navbar;
