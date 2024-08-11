"use client";
import Image from "next/image";
import styles from "./Sidebar.module.css";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { logout } from "@/store/features/userSlice";
import {
  clearLikedTracks,
  setCurrentTrack,
} from "@/store/features/playlistSlice";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(setCurrentTrack({ track: null, tracks: [] }));
    dispatch(clearLikedTracks());
  };

  return (
    <>
      <div className={styles.mainSidebar}>
        <div className={styles.sidebarPersonal}>
          <p className={styles.sidebarPersonalName}>
            {user?.username || "Пользователь"}
          </p>
          <div onClick={() => handleLogout()} className={styles.sidebarIcon}>
            <svg>
              <use xlinkHref="img/icon/sprite.svg#logout" />
            </svg>
          </div>
        </div>
        <div className={styles.sidebarBlock}>
          <div className={styles.sidebarList}>
            <div className={styles.sidebarItem}>
              <a className={styles.sidebarLink} href="#">
                <Image
                  priority={true}
                  alt="day's playlist"
                  src="/img/playlist01.png"
                  width={250}
                  height={150}
                />
              </a>
            </div>
            <div className={styles.sidebarItem}>
              <a className={styles.sidebarLink} href="#">
                <Image
                  priority={true}
                  alt="day's playlist"
                  src="/img/playlist02.png"
                  width={250}
                  height={150}
                />
              </a>
            </div>
            <div className={styles.sidebarItem}>
              <a className={styles.sidebarLink} href="#">
                <Image
                  priority={true}
                  alt="day's playlist"
                  src="/img/playlist03.png"
                  width={250}
                  height={150}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
