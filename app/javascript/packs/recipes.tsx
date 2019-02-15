import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Router, Link, RouteComponentProps } from '@reach/router'
import styled, { ThemeProvider } from '../typed/styled-components'
import themes from '../styled/theme'
import GlobalStyle from '../styled/GlobalStyle'

import AllRecipes from '../components/AllRecipes'
import Recipe from '../components/Recipe'
import ErrorPage from '../components/ErrorPage'
import { IRecipe } from '../types'

declare global {
  interface Window {
    signedIn: boolean
  }
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
            <AllRecipes path="recipes" recipes={recipes} />
            <Recipe
              path="recipes/:param/*"
              recipes={recipes}
              onSubmitReview={fetchRecipes}
            />
            <ErrorPage default />
          </Router>
        )}
        <Footer>
          <p>
            <a
              href="https://github.com/pearlzhuzeng/the-rating-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code on GitHub
            </a>
          </p>
          <Signature>
            Driven by a curious mind.
            <br />
            <a
              href="https://pearlzhuzeng.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pearl Zhu Zeng
            </a>
          </Signature>
        </Footer>
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

const Footer = styled.footer`
  margin: 3em auto;
  display: flex;
  justify-content: space-between;
`

const Signature = styled.p`
  text-align: right;
`

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div'))
  )
})
