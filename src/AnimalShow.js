import './animalShow.css';
import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

function AnimalShow({type}){

    const animalTypes = {
        bird,
        cat,
        cow,
        dog,
        gator,
        horse
    }

    //state system
    let [count, setCount] = useState(0);

    //event handler
    const handleClick = ()=>{
        setCount(count ++);
    }

    return(
        <div className='animal-show' onClick={handleClick}>
            <img className='animal' src={animalTypes[type]} alt='animal'></img>
            <img className='heart' src={heart} alt='heart' style={{width:10 + 10*count + 'px'}}></img>
        </div>
    )
}

export default AnimalShow;