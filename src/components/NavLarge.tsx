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
  ({ className, title, ...props }: ListItemType) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames('ListItemLink', className)}
          rel="noopener noreferrer"
          target="_blank"
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

  return (
    <div className='hidden md:flex'>
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List className="NavigationMenuList">

          {links.map((item) => {
            return (
              <NavigationMenu.Item key={item.name}>
                {item.path && <Link href={item.path}>{item.name}</Link>}
                {item.subItems && 
                  <>
                  <NavigationMenu.Trigger className="NavigationMenuTrigger">
                    {item.name} <CaretDownIcon className="CaretDown" aria-hidden />
                  </NavigationMenu.Trigger>
                   <NavigationMenu.Content className="NavigationMenuContent">
                    <ul className="List">
                      {item.subItems.map((item) => 
                      <ListItem title={item.title} href={item.href}/>
                      )}
                    </ul>
                  </NavigationMenu.Content>
                  </>
                }
              </NavigationMenu.Item>
            )
          })}

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