import { useState } from "react"

export default function Main(){

  const [ingredients,setIncredients]=useState([])

  const ingredientsList = ingredients.map((ingredient)=>(
    <li key={ingredient}>{ingredient}</li> 
  ))

  function handleSubmit(event){
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
    setIncredients(prevIngredients=>[...prevIngredients,newIngredient])
 
  }
  
  return(
    <main>
    <form onSubmit={handleSubmit} className="add-ingredient-form">
      <input
        type="text"
        placeholder="e.g onion"
        aria-label="Add ingredient"
        name="ingredient"
      />
      
      <button>Add ingredient</button>
    </form>
    <ul>
      {...ingredientsList}
    </ul>
    </main>
  )
}