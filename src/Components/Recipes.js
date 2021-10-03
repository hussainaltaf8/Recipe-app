import React from 'react'
import style from './recipe.module.css'

const Recipes=(props)=> {
    

    
    return (
        <div className={style.recipes}>
            <h1>{props.title}</h1>
            <ol>
                {props.ingredients.map(index=>(
                    <li>{index.text}</li>
                ))}
            </ol>
            <h3>Calories={props.calories}</h3>
            <img src={props.image} alt="Recipe" />
        </div>
    )
}

export default Recipes
