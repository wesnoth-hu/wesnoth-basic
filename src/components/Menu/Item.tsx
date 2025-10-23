"use client";

import React, { FC } from "react";
import Link from "next/link";
import Icon from "@mdi/react";
import { ItemProps } from "./IItem";

export const Item: React.FC<ItemProps> = ({
    style,
    itemLink,
    itemImage,
    itemIcon,
    itemText,
}) => {
  const { paths, sizes, colors } = itemIcon || {};
  return (
    <div className={style.navitem}>
      <Link
        href={itemLink}
        target="_blank"
        className={style.link}
      >
        {itemImage && <img src={itemImage?.link} width={20} height={20} alt={itemImage?.alt} />}{" "}
        {itemIcon && (
          <>
            {Array.isArray(paths) && Array.isArray(sizes) && Array.isArray(colors) && paths.length > 0 && sizes.length > 0 && colors.length > 0 && (
              <Icon path={paths[0]} size={sizes[0]} color={colors[0]} />
            )}
          </>
        )}{" "}
        {itemText}
      </Link>
    </div>
  )
}