import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import './navsmall.css';
import { NavProps } from './types';
import Link from 'next/link';

const NavSmall = ({ links }: NavProps) => {
  console.log(links);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="toggle mobile nav">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={10}>
          <DropdownMenu.Item asChild className="DropdownMenuItem">
            <Link href="" className="">
              Link Text
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item className="DropdownMenuItem">
            New Window
          </DropdownMenu.Item>

          <DropdownMenu.Item className="DropdownMenuItem">
            New Private Window
          </DropdownMenu.Item>
          <DropdownMenu.Label className="DropdownMenuItem">
            People
          </DropdownMenu.Label>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
              Maps fake
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
                  Save Page As
                </DropdownMenu.Item>
                <DropdownMenu.Item className="DropdownMenuItem">
                  Create Shortcut…
                </DropdownMenu.Item>
                <DropdownMenu.Item className="DropdownMenuItem">
                  Name Window…
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="DropdownMenu.Separator" />
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default NavSmall;
