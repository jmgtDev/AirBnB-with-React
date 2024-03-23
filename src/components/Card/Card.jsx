import styles from "./Card.module.css"
import redStar from "../../../public/Images/redStar.png"
import littleBall from "../../../public/Images/littleBall.png"

export default function Card(props){
    let cardTag
    if(props.openSpots === 0){
        cardTag = "SOLD OUT"
    } else if (props.openSpots > 0 && props.openSpots < 10){
        cardTag = "SPOTS: " + props.openSpots
    }
    



    return(
        <div className={styles.wholeCard}>
            {cardTag && <div className={styles.cardTag}>{cardTag}</div>}
            <img src={props.cardImg} className={styles.cardImg}></img>
            <div className={styles.cardInfo}>
                <img src={redStar} className={styles.star}></img>
                <span className={styles.rating}>{props.cardRating}</span>
                <span className={styles.numberOfReviews}>({props.cardNumOfReviews})</span>
                <img src={littleBall} className={styles.dot}></img>
                <span className={styles.country}>{props.cardCountry}</span>
            </div>
            <p className={styles.description}>{props.cardTitle}</p>
            <p className={styles.price}><strong>From ${props.cardPrice}</strong> / person</p>
        </div>
    )
}