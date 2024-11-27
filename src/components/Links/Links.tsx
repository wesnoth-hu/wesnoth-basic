"use client";

import React from "react";
import styles from "@/styles/Links.module.css";

export default function Links() {
  return (
    <>
      <section>
        <div className={styles.nav}>
          <div className={styles.navitem}>discord</div>
          <div className={styles.navitem}>facebook</div>
          <div className={styles.navitem}>windows download</div>
          <div className={styles.navitem}>linux download</div>
          <div className={styles.navitem}>mac download</div>
          <div className={styles.navitem}>itchio download</div>
          <div className={styles.navitem}>steam download</div>
        </div>
      </section>
    </>
  );
}
