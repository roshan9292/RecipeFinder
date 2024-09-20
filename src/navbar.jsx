import React from "react"
import "./index.css"
export default function Navbar({findRecipe}){ 
  return(
    <div className="navbody">
     <div className="logo">
      <img src="./images/foodIcon.svg"/>
      <h2>Recipe Finder</h2>
     </div>
      <input type="text" className="input" onChange={findRecipe} placeholder="Search for recipe"></input>
    </div>
  )
}