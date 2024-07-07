import Burger from "@/components/Burger/Burger";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import styles from "./Navigation.module.css"


const Navigation = () => {
    return ( <nav className={styles.mainNav}>
        <div className={styles.navLogo}>
          <Image
            className={styles.logoImage}
            src="/img/logo.png"
            alt="Logo"
            width={114}
            height={17}
          />
        </div>
        <Burger/>
        <Menu/>
      </nav> );
}
 
export default Navigation;