export interface ItemProps {
  style: {
    navitem: string;
    link: string;
  };
  itemLink: {
    href: string;
    target?: string;
    onClick?: () => void;
  };
  itemImage?: {
    link: string;
    alt: string;
  },
  itemIcon?: { path: string; size: number; color: string; };
  itemText: string;
}