import React, {useEffect,useState} from 'react'


import Recipe from "./Recipe"
const App = () => {

  const APP_ID='6cb933af'
  const APP_KEY = 'c0a1f1dd15641837f890187a4f5a4aaa'

  const [recipes, setrecipes] =useState([])
  const [search,setSearch] = useState("")
  const [query, setQuery] = useState("Chicken")
  
  useEffect(()=>{
    getrecipes()
  },[query])

  const getrecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query} &app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setrecipes(data.hits)
   console.log(data.hits)
  }
  const updateSearch = e => setSearch(e.target.value)
  

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch("")
  }
  return (
    <div className = "App">
      <form className="form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value ={search} onChange={updateSearch}/>
        <button type= "submit" className="search-button" >Search</button>
      </form >
      {recipes.map(recipe => (
        <Recipe
        key ={recipe.recipe.label} 
        title= {recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        ingredientLines = {recipe.recipe.ingredientLines}
          />
      ))}
      
    </div>
  )
}


export default App