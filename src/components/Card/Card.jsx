import styles from "./Card.module.css"
import redStar from "../../Images/redStar.png"
import littleBall from "../../Images/littleBall.png"

export default function Card({img, rating, numberOfReviews, country, description, price}){
    return(
        <div className={styles.wholeCard}>
            <img src={img} className={styles.cardImg}></img>
            <div className={styles.cardInfo}>
                <img src={redStar} className={styles.star}></img>
                <span className={styles.rating}>{rating}</span>
                <span className={styles.numberOfReviews}>({numberOfReviews})</span>
                <img src={littleBall} className={styles.dot}></img>
                <span className={styles.country}>{country}</span>
            </div>
            <p className={styles.description}>{description}</p>
            <p className={styles.price}><strong>{price}</strong> / person</p>
        </div>
    )
}