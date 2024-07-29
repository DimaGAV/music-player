import Link from "next/link";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.navMenu}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <Link className={styles.menuLink} href="/">
            Главное
          </Link>
        </li>
        <li className={styles.menuItem}>
          <a className={styles.menuLink} href="#">
            Мой плейлист
          </a>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.menuLink} href="/singin">
            Войти
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
