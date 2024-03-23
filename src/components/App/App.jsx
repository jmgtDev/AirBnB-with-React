import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import Card from "../Card/Card"
import styles from "./App.module.css"
import cardsData from "../../dataBaseSimulator/dataBaseSimulator.jsx"


export default function App(){
    const cards = cardsData.map((card)=>{
        return ( 
            <Card
                key={card.cardId}
                cardImg={card.cardImg}
                cardRating={card.cardRating}
                cardNumOfReviews={card.cardNumOfReviews}
                cardCountry={card.cardCountry}
                cardTitle={card.cardTitle}
                cardPrice={card.cardPrice}
            />
        )
    })
    return(
        <div className={styles.app}>
            <Navbar/>
            <div className={styles.heroAndCards}>
                <Hero/>
                <div className={styles.cards}>
                    {cards}
                </div>
            </div>
        </div>
    )
}
