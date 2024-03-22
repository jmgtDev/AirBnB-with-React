import styles from "./Hero.module.css"
import mixedImgs from "../../Images/mixedImgs.png"

export default function Hero(){
    return(
        <div className={styles.hero}>
            <img className={styles.mixedImgs} src={mixedImgs}></img>
            <p className={styles.title}>Online Experiences</p>
            <p className={styles.text}>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}