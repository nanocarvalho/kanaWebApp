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

  const [message, setMessage] = useState('')
  const [showAlert, setshowAlert] = useState(false)
  const [alertColor, setAlertColor] = useState('')

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
      setAlertColor('Green')
    } else {
      let incorrect = score.incorrect + 1
      setScore({...score, incorrect: incorrect })
      setAlertColor('Red')
    }
    //Old version, more fixed
    //setActualItem(actualItem => actualItem + 1)
    //New version, random kana
    setActualItem(actualItem => Math.ceil(Math.random() * kanaDict.length))
  }

  const handleMessage = (status, kana, correct,)=> {
    if(status === 'Correct') {
      setMessage(`Correct ${kana} = ${correct}`)
    } else {
      setMessage(`incorrect ${kana} = ${correct}`)
    }
    setshowAlert(true)
    const toastTimer = setInterval(() => { setshowAlert(false); clearInterval(toastTimer)}, 1000)
  }

  useEffect(()=>{handleKanaDict(checkbox)},[checkbox])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Kana quiz</h1>
        <div className={styles.checkboxContainer}>
          <label htmlFor='hiragana'>Hiragana</label>
          <input checked={checkbox.hiragana} id='hiragana' type='checkbox' onChange={({target}) => handleCheckbox(target)}/>
          <label htmlFor='katakana'>Katakana</label>
          <input checked={checkbox.katakana} id='katakana' type='checkbox' onChange={({target}) => handleCheckbox(target)}/>
        </div>
      </header>
      <div className={showAlert ? styles.alertEnable : styles.alertDisable}>
        <div className={alertColor === "Green" ? styles.alertCorrect : styles.alertIncorrect}>{message}</div>
      </div>

      {
        item.length !== 0 ? item.map(item => (
          <Card 
            key={item.kana}
            kana={item.kana} 
            handleScore={handleScore} 
            correct={item.correct}
            handleMessage={handleMessage}
            />
        )) 
        : 
        <h2>Nenhum item restante</h2>
      }
      <footer className={styles.footer}>
        <p> Correct: {score.correct} / Incorrect: {score.incorrect}</p>
        <p>Made by <a href='https://github.com/nanocarvalho' target='_blank' rel='noopener'>Nano Carvalho</a></p>
      </footer>
    </div>
  )
}
