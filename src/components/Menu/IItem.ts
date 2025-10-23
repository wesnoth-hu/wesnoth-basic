import IconProps from "@mdi/react";

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
  itemIcon?: React.FC<typeof IconProps>,
  itemText: string;
}