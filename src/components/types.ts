import { ReactNode } from 'react';

// ListItems in Nav Dropdown
export type ListItemType = {
  children?: ReactNode;
  className?: string;
  href: string;
  title?: string;
};

// Define a type for navigation items
export type NavItem = {
  name: string;
  path?: string;
  subItems?: Array<ListItemType>;
};

// Nav props type for receiving links data
export type NavProps = {
  links: NavItem[];
};
