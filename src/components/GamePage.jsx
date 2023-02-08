import React, {useState} from 'react'
import Cards from './Cards'
import '../stylesheets/GamePage.css'


function GamePage() {
    const[points, setPoints] = useState(0);

    return (
        <div>
            <div className='title-container'>
                <h1>Premier League Memory Game</h1>
                <h1>CORRECT: {points}</h1>
            </div>
            <Cards points={points} setPoints={setPoints}/>
        </div>
    )
}

export default GamePage
