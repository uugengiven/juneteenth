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
  // Keep Maps near the middle due to a known bug in Radix
  {
    name: 'Maps',
    subItems: [
      { title: 'Juneteenth', href: 'downloads/juneteenth-map.pdf' },
      { title: 'Youthfest', href: 'downloads/youth-fest-map.pdf' },
    ],
  },
  { name: 'Vendor Signup', path: '/vendor-application' },
  //  { name: 'Purchase Tickets', path: '/tickets' },
  { name: 'Sponsors', path: '/sponsors' },
];

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
    <header className="bg-white py-1">
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
