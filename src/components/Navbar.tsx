'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import Hamburger from './icons/Hamburger';
import { SignedIn, UserButton, SignOutButton } from '@clerk/nextjs';
import classNames from 'classnames';
import { CaretDownIcon, HamburgerMenuIcon, DotFilledIcon, CheckIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import './styles.css';

// Define a type for navigation items
type NavItem = {
  name: string;
  path: string;
};

// Array of navigation items
const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About Juneteenth', path: '/#history' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'Vendor Signup', path: '/vendor-application' },
  //  { name: 'Purchase Tickets', path: '/tickets' },
  { name: 'Sponsors', path: '/sponsors' },
];

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


const NavDropdownMenu = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState('pedro');

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="NavigationMenuLink" aria-label="view maps">
          Maps
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item className="DropdownMenuItem">
            New Tab <div className="RightSlot">⌘+T</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            New Window <div className="RightSlot">⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem" disabled>
            New Private Window <div className="RightSlot">⇧+⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
              More Tools
              <div className="RightSlot">
                <ChevronRightIcon />
              </div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                className="DropdownMenuSubContent"
                sideOffset={2}
                alignOffset={-5}
              >
                <DropdownMenu.Item className="DropdownMenuItem">
                  Save Page As… <div className="RightSlot">⌘+S</div>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="DropdownMenuItem">Create Shortcut…</DropdownMenu.Item>
                <DropdownMenu.Item className="DropdownMenuItem">Name Window…</DropdownMenu.Item>
                <DropdownMenu.Separator className="DropdownMenu.Separator" />
                <DropdownMenu.Item className="DropdownMenuItem">Developer Tools</DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.CheckboxItem
            className="DropdownMenuCheckboxItem"
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Bookmarks <div className="RightSlot">⌘+B</div>
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            className="DropdownMenuCheckboxItem"
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Full URLs
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.Label className="DropdownMenuLabel">People</DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenu.RadioItem className="DropdownMenuRadioItem" value="pedro">
              <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Pedro Duarte
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem className="DropdownMenuRadioItem" value="colm">
              <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Colm Tuite
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

const Navbar = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">

      {navItems.map((item) => (
        <NavigationMenu.Item key={item.name}>
          <NavigationMenu.Link
            className="NavigationMenuLink"
            href={item.path}
          >
            {item.name}
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      ))}

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
          <NavDropdownMenu />
        </NavigationMenu.Item>

         
        <SignedIn>
          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="NavigationMenuLink"
              >
              <SignOutButton />
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </SignedIn>

        {/* Delete if not being used */}
        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

        {/* Delete if not being used */}
      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};



export default Navbar;
