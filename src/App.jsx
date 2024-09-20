
import React from 'react'
import Nav from "./navbar"
import Recipe from "./recipe"
import "./index.css"
import { apiId,apiKey } from './keys'
function App() {
  const[timeOutId,setTimeOutId]=React.useState()
  const [foodData,setFoodData]=React.useState([]);

  const fetchRecipe=(searchString)=>{
    fetch(`https://api.edamam.com/search?q=${searchString}&app_id=${apiId}&app_key=${apiKey}`)
    .then(res=>res.json())
    .then(data=>setFoodData(data.hits))
  }

  function findRecipe(event){ 
    clearTimeout(timeOutId)
    const timeOut=setTimeout(()=>fetchRecipe(event.target.value),500)
    setTimeOutId(timeOut)
  }
  return (
    <div className='hero'>
    <Nav findRecipe={findRecipe}/>
    <div className='recipeContainer'>
      {foodData.length>0 && foodData.map((recipeObject)=>
      <Recipe recipeObj={recipeObject.recipe}/>
      )
      }
    </div> 
    </div>
  )
}

export default App
