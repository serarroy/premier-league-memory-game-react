import React, { useState } from 'react'
import Card from './Card'
import '../stylesheets/Cards.css'

function Cards( {points, setPoints} ) {
    const [items, setItems] = useState([
        {id: 1, img: '/img/bournemouth.png', stat: ''},
        {id: 1, img: '/img/bournemouth.png', stat: ''},
        {id: 2, img: '/img/chelsea.png', stat: ''},
        {id: 2, img: '/img/chelsea.png', stat: ''},
        {id: 3, img: '/img/brentford.png', stat: ''},
        {id: 3, img: '/img/brentford.png', stat: ''},
        {id: 4, img: '/img/fulham.png', stat: ''},
        {id: 4, img: '/img/fulham.png', stat: ''},
        {id: 5, img: '/img/leicester.png', stat: ''},
        {id: 5, img: '/img/leicester.png', stat: ''},
        {id: 6, img: '/img/liverpool.png', stat: ''},
        {id: 6, img: '/img/liverpool.png', stat: ''},
        {id: 7, img: '/img/manCity.png', stat: ''},
        {id: 7, img: '/img/manCity.png', stat: ''},
        {id: 8, img: '/img/manUtd.png', stat: ''},
        {id: 8, img: '/img/manUtd.png', stat: ''},
    ].sort(() => Math.random() - 0.5 ));

    const [prev, setPrev] = useState(-1)
    const [winner, setWinner] = useState(false);

    const check = (current) => {
        if(items[current].id === items[prev].id){
            items[current].stat = 'correct'
            items[prev].stat = 'correct'
            setPoints(prev => prev + 1);
            if(points >= 7) setWinner(true)
            setItems([...items])
            setPrev(-1)
        }
        else{
            items[current].stat = 'wrong'
            items[prev].stat = 'wrong'
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ''
                items[prev].stat = ''
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    const handleClick = (id) => {
        if(prev === -1){ // No se ha hecho click antes en ninguna casilla
            items[id].stat = 'active'
            setItems([...items])
            setPrev(id)
        }
        else{ // Previamente se ha hecho click en una casilla, comprobar los ids
            check(id)
        }
    }

    return (
        <div className='container'>
            {
                winner? <div className='won-message'><h1>YOU WON!!!</h1></div> : (
                items.map((item, id) => (
                    <Card key={id} item={item} id={id} handleClick={handleClick}/>
                )))
            }
        </div>
    )
}

export default Cards
