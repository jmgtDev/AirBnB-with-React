import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import Card from "../Card/Card"
import styles from "./App.module.css"
import dados from "../../dataBaseSimulator/dataBaseSimulator.jsx"


export default function App(){
    const datas = dados.map((dado)=>{
        return ( 
            <Card
                img={dado.img}
                rating={dado.rating}
                numberOfReviews={dado.numberOfReviews}
                country={dado.country}
                description={dado.description}
                price={dado.price}
            />
        )
    })
    return(
        <div className={styles.app}>
            <Navbar/>
            <div className={styles.heroAndCards}>
                <Hero/>
                <div className={styles.cards}>
                    {datas}
                </div>
            </div>
        </div>
    )
}
