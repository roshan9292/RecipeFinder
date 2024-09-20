import React from "react"
import"./index.css"
export default function Recipe(props){
  const {recipeObj}=props
  return(
    <div className="recipe">
     <img src={recipeObj.image}/>
     <h3>{recipeObj.label}</h3>
     <button className="ingredients">Ingredients</button>
     <button className="details" onClick={()=>window.open(recipeObj.url)}>Complete Recipie</button>
    </div>
  )

}