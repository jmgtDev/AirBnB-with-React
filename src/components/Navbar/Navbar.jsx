import styles from "./Navbar.module.css"
import airbnbLogo from "../../../public/Images/airbnbLogo.png"

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <img className={styles.airbnbLogo} src={airbnbLogo}></img>
        </nav>
    )
}