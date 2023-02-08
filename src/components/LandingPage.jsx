import React from 'react'
import '../stylesheets/LandingPage.css'

function LandingPage( {setStart} ) {
    return (
        <div className='landing'>
            <h1>Premier League Memory Game</h1>
            <button onClick={() => setStart(true)}>Start</button>
        </div>
    )
}

export default LandingPage
