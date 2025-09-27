export default function Main(){

  const ingredients=["Chicken","Oregeno","Tomatoes"]

  const ingredientsList = ingredients.map((ingredient)=>(
    <li key={ingredient}>{ingredient}</li> 
  ))

  function handleSubmit(event){
    event.preventDefault()
    console.log("Form Submitted!...")
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
    ingredients.push(newIngredient)
    console.log(ingredients)
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