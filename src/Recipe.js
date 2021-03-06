import React from 'react'

function Recipe({title, calories, image, ingredients, ingredientlines}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{ingredientlines}</p>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>Calories: {calories}</p>
            <img src={image} alt="" />
        </div>
    )
}

export default Recipe
