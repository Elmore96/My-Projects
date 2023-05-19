import styles from './styles.module.css'
import {useState} from 'react';

export default function Card({headLine, id}){
    const [isActive, setIsActive] = useState(false);  
 
    return(
        <>
        <div className={styles.continer}>
            <div id={id} className={`${isActive ? styles.active : styles.card}`}
            onClick={() => setIsActive(!isActive)}>
                <label className={styles.headline}>{headLine}</label>
            </div>
        </div>
        </>
    )
}