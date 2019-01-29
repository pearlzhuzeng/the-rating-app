import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { Recipe } from '../types'

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    fetchRecipes()
  }, [])

  return (
    <main>
      <h1>Recipes</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.param}>{recipe.title}</li>
        ))}
      </ul>
    </main>
  )

  async function fetchRecipes() {
    const response = await fetch('/recipes.json')
    const recipes = await response.json()
    setRecipes(recipes as Recipe[])
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div'))
  )
})
