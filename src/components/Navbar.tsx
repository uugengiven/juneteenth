'use client';

import Hamburger from './icons/Hamburger';
import { SignedIn, UserButton, SignOutButton } from '@clerk/nextjs';
import NavLarge from './NavLarge';



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
    <header className='bg-white py-1'>
      <div className='md:hidden flex'>
        <h3>small nav here</h3>
      </div>
     <NavLarge/>
    </header>
  );
};



export default Navbar;
