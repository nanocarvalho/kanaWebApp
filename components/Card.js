import { options }from '../data/options'

const Card = ({kana, correct, handleScore}) => {
    let btnOptions = []

    const shuffleOptions = () => {
        for(let i = 0; i < 2; i++) {
            btnOptions.push(options[Math.ceil(Math.random() * options.length)])
        }
        btnOptions.push(correct)

    }

    shuffleOptions()

    const handleButtons = e => {
        if(e.value === correct) {
            handleScore('correct')
        } else {
            handleScore('incorrect')
        }
    }

    return (
        <main>
            <h2>{kana}</h2>
            <div>
                <button value={btnOptions[0]} onClick={({target})=> handleButtons(target)}>{btnOptions[0]}</button>
                <button value={btnOptions[1]}  onClick={({target})=> handleButtons(target)}>{btnOptions[1]}</button>
                <button value={btnOptions[2]}  onClick={({target})=> handleButtons(target)}>{btnOptions[2]}</button>
            </div>
        </main>
    )
}

export default Card