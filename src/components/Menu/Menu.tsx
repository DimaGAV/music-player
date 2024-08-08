"use client";
import Link from "next/link";
import styles from "./Menu.module.css";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { logout } from "@/store/features/userSlice";
import { setCurrentTrack } from "@/store/features/playlistSlice";

const Menu = () => {
  const tokens = useAppSelector((state) => state.user.tokens);

  const dispatch = useAppDispatch();
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(setCurrentTrack({ track: null, tracks: [] }));
  };

  return (
    <div className={styles.navMenu}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <Link className={styles.menuLink} href="/">
            Главное
          </Link>
        </li>
        {tokens ? (
          <li className={styles.menuItem}>
            <Link className={styles.menuLink} href="/tracks/favorite">
              Мой плейлист
            </Link>
          </li>
        ) : (
          ""
        )}
        {tokens ? (
          <li className={styles.menuItem}>
            <div className={styles.menuLink} onClick={() => handleLogout()}>
              Выйти
            </div>
          </li>
        ) : (
          <li className={styles.menuItem}>
            <Link className={styles.menuLink} href="/signin">
              Войти
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;
