import styles from "./Card.module.css"
import redStar from "../../../public/Images/redStar.png"
import littleBall from "../../../public/Images/littleBall.png"

export default function Card({openSpots, cardImg, cardRating, cardNumOfReviews, cardCountry, cardTitle, cardPrice}){
    let cardTag
    if(openSpots === 0){
        cardTag = "SOLD OUT"
    } else if (openSpots > 0 && openSpots < 10){
        cardTag = "SPOTS: " + openSpots
    }
    



    return(
        <div className={styles.wholeCard}>
            {cardTag && <div className={styles.cardTag}>{cardTag}</div>}
            <img src={cardImg} className={styles.cardImg}></img>
            <div className={styles.cardInfo}>
                <img src={redStar} className={styles.star}></img>
                <span className={styles.rating}>{cardRating}</span>
                <span className={styles.numberOfReviews}>({cardNumOfReviews})</span>
                <img src={littleBall} className={styles.dot}></img>
                <span className={styles.country}>{cardCountry}</span>
            </div>
            <p className={styles.description}>{cardTitle}</p>
            <p className={styles.price}><strong>From ${cardPrice}</strong> / person</p>
        </div>
    )
}