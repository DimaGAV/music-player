"use client";
import styles from "./Burger.module.css";

interface BurgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}
const Burger = ({ toggleMenu }: BurgerProps) => {
  return (
    <div
      onClick={toggleMenu}
      className={styles.navBurger}
      data-testid="burger-button"
    >
      <span className={styles.burgerLine} />
      <span className={styles.burgerLine} />
      <span className={styles.burgerLine} />
    </div>
  );
};

export default Burger;
