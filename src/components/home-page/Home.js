// imports of the style sheet and the card compponent
import Card from '../card/Card'
import styles from './styles.module.css'

// home page component, contains all the "project" cards
export default function HomePage({cards = Array}) {

    return(
        <>
        <div className={styles.continer}>
            {/* map method to make all the cards*/}
            {cards.map((val,index)=>{
                return (<Card key={index} x={val.x} y={val.y} headLine={val.headline} id={val.id}></Card>)
            })}

        </div>
        </>
    )
}