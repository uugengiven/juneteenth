import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import './navsmall.css';
import { NavProps } from './types';
import Link from 'next/link';

const NavSmall = ({ links }: NavProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="toggle mobile nav">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="DropdownMenuContent"
          align="start"
          sideOffset={10}
        >
          {links.map(item => {
            return (
              <div key={item.name}>
                {item.path ? (
                  <DropdownMenu.Item asChild className="DropdownMenuItem">
                    <Link href={item.path}>{item.name}</Link>
                  </DropdownMenu.Item>
                ) : (
                  <DropdownMenu.Sub>
                    <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
                      {item.name}
                      <div className="RightSlot">
                        <ChevronRightIcon />
                      </div>
                    </DropdownMenu.SubTrigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.SubContent
                        className="DropdownMenuSubContent"
                        sideOffset={6}
                        alignOffset={-2}
                      >
                        {item.subItems?.map(subItem => {
                          return (
                            <DropdownMenu.Item
                              className="DropdownMenuItem"
                              key={subItem.title}
                            >
                              <Link
                                href={subItem.href}
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                {subItem.title}
                              </Link>
                            </DropdownMenu.Item>
                          );
                        })}
                      </DropdownMenu.SubContent>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Sub>
                )}
              </div>
            );
          })}

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default NavSmall;
