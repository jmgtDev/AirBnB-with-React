import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import Card from "../Card/Card"
import styles from "./App.module.css"
import swimmer from "../../Images/swimmer.png"
import bride from "../../Images/bride.png"
import bike from "../../Images/bike.png"
import music from "../../Images/music.png"
import cooking from "../../Images/cooking.png"
import yoga from "../../Images/yoga.png"


export default function App(){
    return(
        <div className={styles.app}>
            <Navbar/>
            <div className={styles.heroAndCards}>
                <Hero/>
                <div className={styles.cards}>
                    <Card
                        img={swimmer}
                        rating={4.5}
                        numberOfReviews={8}
                        country="Brazil"
                        description="Life lessons with Katie Zaferes"
                        price={136}
                    />
                    <Card
                        img={bride}
                        rating="3.0"
                        numberOfReviews={5}
                        country="México"
                        description="Learn wedding photography"
                        price={125}
                    />
                    <Card
                        img={bike}
                        rating="5.0"
                        numberOfReviews={3}
                        country="France"
                        description="Group Mountain Biking"
                        price={50}                   
                    />
                    <Card
                        img={yoga}
                        rating="1.0"
                        numberOfReviews={4}
                        country="China"
                        description="Yoga lessons with Isadora Biden"
                        price={136}
                    />
                    <Card
                        img={music}
                        rating="5.0"
                        numberOfReviews={8}
                        country="Canada"
                        description="Learn to play guittar with John Doe"
                        price={45}                    
                    />
                    <Card
                        img={cooking}
                        rating="0.0"
                        numberOfReviews={0}
                        country="Argentina"
                        description="Cooking various meals with Matt Damon"
                        price={200}
                    />
                </div>
            </div>
        </div>
    )
}
