import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Router, Link, RouteComponentProps } from '@reach/router'
import styled, { ThemeProvider } from '../typed/styled-components'
import themes from '../styled/theme'
import GlobalStyle from '../styled/GlobalStyle'

import AllRecipes from '../components/AllRecipes'
import Recipe from '../components/Recipe'
import { IRecipe } from '../types'

function NotFound(_: RouteComponentProps) {
  return <h1>404 Not Found</h1>
}

function App() {
  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRecipes()
  }, [])

  return (
    <ThemeProvider theme={themes.default}>
      <>
        <GlobalStyle />

        {!loading && (
          <Router>
            <AllRecipes path="/" recipes={recipes} />
            <Recipe path="recipes/:param" recipes={recipes} />
            <NotFound path="*" />
          </Router>
        )}
      </>
    </ThemeProvider>
  )

  async function fetchRecipes() {
    const response = await fetch('/api/recipes.json')
    const recipes = await response.json()
    setRecipes(recipes as IRecipe[])
    setLoading(false)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div'))
  )
})
