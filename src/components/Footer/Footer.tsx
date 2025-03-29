"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div>&copy; Magyar Wesnoth Közösség 2005-2021, 2024-2025</div>
        <div className={styles.supporters}>
          Támogatók:{" "}
          <Link href="https://react.dev" target="_blank">
            <Image
              src="logo-react.svg"
              width={18}
              height={18}
              alt="ReactJS Logo"
            />
          </Link>
          <Link href="https://nextjs.org" target="_blank">
            <Image src="logo-next.svg" width={18} height={18} alt="NextJS Logo" />
          </Link>
          <Link href="https://pictogrammers.com" target="_blank">
            <Image src="/picto.png" width={18} height={18} alt="PictoGrammers Icon" />
          </Link>
        </div>
        <div>
          <a
            href="https://www.freepik.com/free-vector/banner-ribbon-decoration-christmas-season_2920691.htm#fromView=search&page=1&position=14&uuid=5ed26483-71bc-4988-9845-6cf1e98fd517&new_detail=true"
            target="_blank"
          >
            Festive Decoration by rawpixel.com on Freepik
          </a>
        </div>
      </div>
    </>
  );
}
