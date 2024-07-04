import styles from "./Main.module.css"
import CenterBlock from "@/components/CenterBlock/CenterBlock";
import Navigation from "@/components/Navigation/Navigation";
import Sidebar from "@/components/Sidebar/Sidebar";

const Main = () => {
    return ( <main className={styles.main}>
        <Navigation/>
        <CenterBlock/>
        <Sidebar/>
      </main> );
}
 
export default Main;