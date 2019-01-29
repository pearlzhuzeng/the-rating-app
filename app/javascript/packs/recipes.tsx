import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled, { ThemeProvider } from '../typed/styled-components'
import themes from '../styled/theme'
import GlobalStyle from '../styled/GlobalStyle'
import { Recipe } from '../types'

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    fetchRecipes()
  }, [])

  return (
    <ThemeProvider theme={themes.default}>
      <>
        <GlobalStyle />
        <Box>
          <h1>Recipes</h1>
          <ul>
            {recipes.map(recipe => (
              <li key={recipe.param}>{recipe.title}</li>
            ))}
          </ul>
        </Box>
      </>
    </ThemeProvider>
  )

  async function fetchRecipes() {
    const response = await fetch('/recipes.json')
    const recipes = await response.json()
    setRecipes(recipes as Recipe[])
  }
}

const Box = styled.main`
  background-color: ${p => p.theme.primaryColor};
`

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div'))
  )
})
