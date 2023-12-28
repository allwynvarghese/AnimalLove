import './app.css';
import { useState } from "react";
import AnimalShow from "./AnimalShow";

const animalList = ()=>{
    const animals = ['cow', 'cat', 'dog', 'gator', 'bird','horse'];
    return animals[Math.floor(Math.random() * animals.length)];
}

function App(){

    //set State
    const [animal, setAnimal] = useState([]);

    //onClick event handler or callback function
    const handleClick = () =>{
        setAnimal([...animal, animalList()])
    }

    //rendered animals
    const renderedAnimals = animal.map((animal, index)=>{
        return <AnimalShow type={animal} key={index}/>
    })

    return(
        <div className='app'>
            <button onClick={handleClick}>Create Animal</button>
            <div className='animal-list'>{renderedAnimals}</div>
        </div>
    )
}

export default App;