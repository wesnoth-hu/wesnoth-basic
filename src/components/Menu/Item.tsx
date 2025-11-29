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
            <Icon path={itemIcon.path as string} size={itemIcon.size as number} color={itemIcon.color as string} />
          </>
        )}{" "}
        {itemText}
      </Link>
    </div>
  )
}