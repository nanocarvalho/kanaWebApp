import { useEffect, useState } from 'react'
import { options }from '../data/options'
import styles from './Card.module.css'

const Card = ({kana, correct, handleScore, handleMessage}) => {
    const [btnOptions, setBtnOptions] = useState([])

    const handleButtons = e => {
        if(e.value === correct) {
            delay(500).then(() => {
                handleScore('correct')
                handleMessage("Correct", kana, correct)
            }
            )
        } else {
            delay(500).then(() => {
                handleScore('incorrect')
                handleMessage("incorrect", kana, correct)
            })
        }
    }    

    const delay = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    useEffect(()=>{
        let optionsSelected = []
        for(let i = 0; i < 2; i++) {
            optionsSelected.push(options[Math.ceil(Math.random() * options.length - 1)])
        }
        optionsSelected.push(correct)

        optionsSelected.sort(()=> 0.5 - Math.random())
        setBtnOptions([...optionsSelected])
    }, [kana])
  
    
    return (
        <main className={styles.card}>
            <h2>{kana}</h2>
            <div className={styles.btnContainer}>
                <button value={btnOptions[0]} onClick={({target})=> handleButtons(target)}>{btnOptions[0]}</button>
                <button value={btnOptions[1]}  onClick={({target})=> handleButtons(target)}>{btnOptions[1]}</button>
                <button value={btnOptions[2]}  onClick={({target})=> handleButtons(target)}>{btnOptions[2]}</button>
            </div>
        </main>
    )
}

export default Card