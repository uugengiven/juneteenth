import { usePathname } from 'next/navigation';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import NextLink from 'next/link';
import React from 'react';
import { SignedIn, SignOutButton } from '@clerk/nextjs';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import './navlarge.css';
import { ListItemType, NavProps } from './types';

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

// NextLink with active path
const Link = ({ href, ...props }: {children: string, href: string}) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenu.Link asChild active={isActive}>
      <NextLink href={href} className="NavigationMenuLink" {...props} />
    </NavigationMenu.Link>
  );
};
 

const NavLarge = ({links}: NavProps) => {

  console.log(links);
  
  return (
    <div className='hidden md:flex'>
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
    </div>
  )
}

export default NavLarge;