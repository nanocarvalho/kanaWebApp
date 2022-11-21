const Card = ({kana, correct, options, handleScore}) => {

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
                <button value={options[0]} onClick={({target})=> handleButtons(target)}>{options[0]}</button>
                <button value={options[1]}  onClick={({target})=> handleButtons(target)}>{options[1]}</button>
                <button value={options[2]}  onClick={({target})=> handleButtons(target)}>{options[2]}</button>
            </div>
        </main>
    )
}

export default Card