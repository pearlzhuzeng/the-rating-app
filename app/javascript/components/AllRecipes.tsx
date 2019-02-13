import React from 'react'
import styled from '../typed/styled-components'
import { Link, RouteComponentProps } from '@reach/router'
import { IRecipe } from '../types'

type Props = RouteComponentProps & {
  recipes: IRecipe[]
}

export default function AllRecipes({ recipes }: Props) {
  return (
    <Box>
      <h1>Recipes</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.param}>
            <Link to={`/recipes/${recipe.param}`}>{recipe.title}</Link>
            <p>{recipe.detail}</p>
          </li>
        ))}
      </ul>
    </Box>
  )
}

const Box = styled.main`
  background-color: ${p => p.theme.primaryColor};
`
