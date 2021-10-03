import React,{useEffect, useState} from 'react'
import Recipe from './Components/Recipes'
import Css from './App.css'


const App = () => {

  const [recipes,setRecipes] = useState([]);
  const [item, setItem] = useState("");
  const [query,setQuery]= useState("chicken");

  const App_id = "d5a3939a";
  const App_key = "00daa90af70987080d9e50de80b0e9f7";

  
  useEffect(()=>{
    getRecipes();
  },[query]);

  const handleChange=(e)=>{
setItem(e.target.value);
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    setQuery(item);
setItem("");
      };

  const getRecipes = async()=>{
const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}`);
const data=await response.json();
setRecipes(data.hits);


  }

  return (
    <div className="main_div">
      <form onSubmit={handleSubmit}>
      <div className="search">
        <input type="text" 
        placeholder="Enter items for recipe"
          value={item}
          onChange={handleChange}
        />
        <button
        >

        Search</button>

        </div>
      </form>
<div className="recipes">
      {recipes.map((index)=>(
        <Recipe 
        key={index.recipe.calories} 
        title={index.recipe.label} 
          calories={index.recipe.calories} 
          image= {index.recipe.image} 
          ingredients={index.recipe.ingredients}
        />
      ))
      }
</div>
    </div>
  )
}

export default App
