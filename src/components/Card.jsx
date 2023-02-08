import React from 'react'
import '../stylesheets/Card.css'

function Card( {item, id, handleClick} ) {

    const itemClass = item.stat ? " active " + item.stat : ""

    return (
        <div className={"card " + itemClass} onClick={() => handleClick(id)}>{/*style={{backgroundColor:item}}*/}
            <img src={item.img} alt='' />
        </div>
    )
}

export default Card
