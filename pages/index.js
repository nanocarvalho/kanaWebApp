import styles from '../styles/Home.module.css'
import { hiragana, katakana} from  '../data/data'
import { useEffect, useState } from 'react'
import Card from '../components/Card'

export default function Home() {
  //console.log(hiragana)
  const [checkbox, setCheckbox] = useState({
    hiragana: true,
    katakana: true
  })

  const [score, setScore] = useState({
    correct: 0,
    incorrect: 0
  })

  const [kanaDict, setKanaDict] = useState([...hiragana, ...katakana])

  const [actualItem, setActualItem] = useState(0)

  const item = kanaDict.filter(item => item === kanaDict[actualItem])

  const handleCheckbox = e => {
    setCheckbox({
      ...checkbox,
      [e.id]: e.checked
    })
  }

  const handleKanaDict = options => {
    
    if(options.hiragana && options.katakana) {
      setKanaDict([...hiragana, ...katakana])
      return
    }
    
    if(options.hiragana){
      setKanaDict(hiragana)
    } else {
      setKanaDict(katakana)
    }
  }

  const handleScore = value => {
    if(value === 'correct') {
      let correct = score.correct + 1
      setScore({...score, correct: correct })
    } else {
      let incorrect = score.incorrect + 1
      setScore({...score, incorrect: incorrect })
    }
    setActualItem(actualItem => actualItem + 1)
  }

  useEffect(()=>{handleKanaDict(checkbox)},[checkbox])

  return (
    <div className={styles.container}>
      <header>
        <h1>Kana quiz</h1>
        <div>
          <label htmlFor='hiragana'>Hiragana</label>
          <input checked={checkbox.hiragana} id='hiragana' type='checkbox' onChange={({target}) => handleCheckbox(target)}/>
          <label htmlFor='katakana'>Katakana</label>
          <input checked={checkbox.katakana} id='katakana' type='checkbox' onChange={({target}) => handleCheckbox(target)}/>
        </div>
      </header>

      {
        item.length !== 0 ? item.map(item => (
          <Card 
            key={item.kana}
            kana={item.kana} 
            options={item.options} 
            handleScore={handleScore} 
            correct={item.correct}
            />
        )) 
        : 
        <h2>Nenhum item restante</h2>
      }
      
    </div>
  )
}
