"use client";

import React, { useState, useEffect, useRef, type MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@mdi/react";
import {
  mdiMenu,
  mdiLinux,
  mdiFacebook,
} from "@mdi/js";
import { Item } from "./Item";

import styles from "@/styles/Menu.module.css";

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuToggle = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  // dropdown menu reference
  const dropdownRef950 = useRef<HTMLDivElement>(null);
  const dropdownRef650 = useRef<HTMLDivElement>(null);

  // state to store Menu icon Top and Left coordinates
  const [menuTopLeft, setMenuTopLeft] = useState<{
    screenY: number;
    screenX: number;
  }>({ screenY: 0, screenX: 0 });

  // state to define `window` object
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // useeffect to auto-close dropdown menu at specific width
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    if (typeof window !== "undefined" && windowWidth > 950) {
      setIsOpen(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  // useEffect to return Menu icon's coordinates for dropdown menu rendering
  useEffect(() => {
    // define menuIcon div element for 650 and 980 pixels
    const menuIcon950 = document.getElementById("menuRoot950");
    const menuIcon650 = document.getElementById("menuRoot650");

    // existence check
    if (!(menuIcon950 || menuIcon650)) {
      return;
    }

    // put dropdown menu to calculated coordinates between 650 and 980 pixels
    if (menuIcon950 instanceof HTMLDivElement) {
      const iconRect950 = menuIcon950.getBoundingClientRect();
      const iconLeft950 = iconRect950.left + window.scrollX + 215;
      const newTop950 = iconRect950.bottom + window.scrollY + 10;
      setMenuTopLeft({ screenY: newTop950, screenX: iconLeft950 });
    }

    // put dropdown menu to claculated coordinates for 650 and lower pixels
    if (menuIcon650 instanceof HTMLDivElement) {
      const iconRect650 = menuIcon650.getBoundingClientRect();
      const iconLeft650 = iconRect650.left + window.scrollX + 215;
      const newTop650 = iconRect650.bottom + window.scrollY + 10;
      setMenuTopLeft({ screenY: newTop650, screenX: iconLeft650 });
    }

    // move dropdown menu on resize between 650 and 980 pixels
    const handleResize950 = () => {
      if (menuIcon950 instanceof HTMLDivElement) {
        const iconRect = menuIcon950.getBoundingClientRect();
        const iconleft = iconRect.right - window.scrollX - 215;
        const newTop = iconRect.bottom + window.scrollY + 10;
        setMenuTopLeft({ screenY: newTop, screenX: iconleft });
      }
    };

    // move dropdown menu on resize between for 650 and lower pixels
    const handleResize650 = () => {
      if (menuIcon650 instanceof HTMLDivElement) {
        const iconRect = menuIcon650.getBoundingClientRect();
        const iconleft = iconRect.right - window.scrollX - 215;
        const newTop = iconRect.bottom + window.scrollY + 10;
        setMenuTopLeft({ screenY: newTop, screenX: iconleft });
      }
    };

    if (windowWidth >= 650) {
      handleResize950();
      window.addEventListener("resize", handleResize950);
    }

    if (windowWidth < 650) {
      handleResize650();
      window.addEventListener("resize", handleResize650);
    }

    return () => {
      window.removeEventListener("resize", handleResize950);
      window.removeEventListener("resize", handleResize650);
    };
  }, [windowWidth]);

  // auto-close dorpdown menu if clicks are outside of dropdown menu context
  const handleClickOutside = (event: Event) => {
    if (event instanceof MouseEvent && event.target instanceof HTMLDivElement) {
      if (
        (dropdownRef950.current &&
          !dropdownRef950.current.contains(event.target as Node)) ||
        (dropdownRef650 &&
          !dropdownRef650.current?.contains(event.target as Node))
      ) {
        setIsOpen(false);
      }
    }
  };

  // call auto-close function for dropdown menu with useEffect
  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className={styles.nav}>
        <Item
          style={{ navitem: styles.navitem, link: styles.link }}
          itemLink={{ href: "https://discord.gg/a9YHdtq", target: "_blank" }}
          itemImage={{ link: "/brand/discord-mark-black.svg", alt: "Discord Logo" }}
          itemText={"Discord"}
        />
        <Item
          style={{ navitem: styles.navitem, link: styles.link }}
          itemLink={{ href: "https://www.facebook.com/MagyarWesnothKozosseg", target: "_blank" }}
          itemIcon={{ path: mdiFacebook, size: 0.8, color: "#000000" }}
          itemText={"Facebook"}
        />
        <Item
          style={{ navitem: styles.navitem, link: styles.link }}
          itemLink={{ href: "https://store.steampowered.com/app/599390/Battle_for_Wesnoth/", target: "_blank" }}
          itemImage={{ link: "/brand/steam_logo.png", alt: "Steam Logo" }}
          itemText={"Steam"}
        />
        <Item
          style={{ navitem: styles.navitem, link: styles.link }}
          itemLink={{ href: "https://wesnoth.itch.io/battle-for-wesnoth", target: "_blank" }}
          itemImage={{ link: "/brand/itchio-textless-black.svg", alt: "Itch.io Logo" }}
          itemText={"Windows / macOS"}
        />
        <Item
          style={{ navitem: styles.navitem, link: styles.link }}
          itemLink={{ href: "https://flathub.org/apps/details/org.wesnoth.Wesnoth", target: "_blank" }}
          itemIcon={{ path: mdiLinux, size: 0.8, color: "#000000" }}
          itemText={"Linux"} />
      </div>

      <div className={styles.shrunk950}>
        <div className={styles.navitem}>
          <Link
            href="https://discord.gg/a9YHdtq"
            className={styles.link}
            onClick={() => {
              setIsOpen(false);
            }}
            target="_blank"
          >
            <Image src={"/brand/discord-mark-black.svg"} width={20} height={20} alt="Discord Logo" />{" "}
            Discord
          </Link>
        </div>
        <div className={styles.navitem}>
          <Link
            href="https://www.facebook.com/MagyarWesnothKozosseg"
            target="_blank"
            className={styles.link}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Icon path={mdiFacebook} size={0.8} color={"#000000"} /> Facebook
          </Link>
        </div>
        <div
          id="menuRoot950"
          className={styles.menu950}
          onClick={handleMenuToggle}
        >
          <Icon path={mdiMenu} size={0.8} /> Menü
        </div>
      </div>

      {windowWidth > 650 && windowWidth < 950 && isOpen && (
        <>
          <div
            style={{
              position: "absolute",
              top: `${menuTopLeft.screenY}px`,
              left: `${menuTopLeft.screenX}px`,
              zIndex: 1,
            }}
            ref={dropdownRef950}
          >
            <div className={styles.hamburgerMenu}>
              <div className={styles.navitem}>
                <Link
                  href="https://store.steampowered.com/app/599390/Battle_for_Wesnoth/"
                  target="_blank"
                  className={styles.link}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <Image src={"/brand/steam_logo.png"} width={20} height={20} alt="Steam Logo" />{" "}
                  Steam
                </Link>
              </div>
              <div className={styles.navitem}>
                <Link
                  href="https://wesnoth.itch.io/battle-for-wesnoth"
                  target="_blank"
                  className={styles.link}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <Image
                    src={"/brand/itchio-textless-black.svg"}
                    width={20}
                    height={20}
                    alt="Itch.io Logo"
                  />{" "}
                  <Icon
                    path={mdiMicrosoftWindows}
                    size={0.8}
                    color={"#000000"}
                  />{" "}
                  <Icon path={mdiApple} size={0.8} color={"#000000"} />
                </Link>
              </div>
              <div className={styles.navitem}>
                <Link
                  href="https://flathub.org/apps/details/org.wesnoth.Wesnoth"
                  target="_blank"
                  className={styles.link}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <Icon path={mdiLinux} size={0.8} color={"#000000"} /> Linux
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      <div className={styles.shrunk650}>
        <div className={styles.navitem}>
          <Link
            href="https://discord.gg/a9YHdtq"
            target="_blank"
            className={styles.link}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Image src={"/brand/discord-mark-black.svg"} width={20} height={20} alt="Discord Logo" />{" "}
            Discord
          </Link>
        </div>
        <div
          id="menuRoot650"
          className={styles.menu650}
          onClick={handleMenuToggle}
        >
          <Icon path={mdiMenu} size={0.8} /> Menü
        </div>
      </div>

      {windowWidth < 650 && isOpen && (
        <div
          style={{
            position: "absolute",
            top: `${menuTopLeft.screenY}px`,
            left: `${menuTopLeft.screenX}px`,
            zIndex: 1,
          }}
          ref={dropdownRef650}
        >
          <div className={styles.hamburgerMenu}>
            <div className={styles.navitem}>
              <Link
                href="https://www.facebook.com/MagyarWesnothKozosseg"
                target="_blank"
                className={styles.link}
              >
                <Icon path={mdiFacebook} size={0.8} color={"#000000"} />{" "}
                Facebook
              </Link>
            </div>
            <div className={styles.navitem}>
              <Link
                href="https://store.steampowered.com/app/599390/Battle_for_Wesnoth/"
                target="_blank"
                className={styles.link}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <Image src={"/brand/steam_logo.png"} width={20} height={20} alt="Steam Logo" />{" "}
                Steam
              </Link>
            </div>
            <div className={styles.navitem}>
              <Link
                href="https://wesnoth.itch.io/battle-for-wesnoth"
                target="_blank"
                className={styles.link}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <Image src={"/brand/itchio-textless-black.svg"} width={20} height={20} alt="Itch.io Logo" />{" "}
                <Icon path={mdiMicrosoftWindows} size={0.8} color={"#000000"} />{" "}
                <Icon path={mdiApple} size={0.8} color={"#000000"} />
              </Link>
            </div>
            <div className={styles.navitem}>
              <Link
                href="https://flathub.org/apps/details/org.wesnoth.Wesnoth"
                target="_blank"
                className={styles.link}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <Icon path={mdiLinux} size={0.8} color={"#000000"} /> Linux
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
