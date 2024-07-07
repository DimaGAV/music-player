import styles from "./Burger.module.css"

const Burger = () => {
    return ( <div className={styles.navBurger}>
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </div> );
}
 
export default Burger;