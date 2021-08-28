import { VFC } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export const Header: VFC = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.anchor}>Index</a>
      </Link>
      <Link href="/about">
        <a className={styles.anchor}>About</a>
      </Link>
    </header>
  );
};
