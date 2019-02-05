import React from 'react'
import styled from '../typed/styled-components'
import { RouteComponentProps, Redirect } from '@reach/router'
import { IRecipe } from '../types'

type Props = RouteComponentProps<{ param: string }> & {
  recipes: IRecipe[]
}

export default function Recipe({ param, recipes }: Props) {
  const recipe = recipes.find(recipe => recipe.param === param)

  if (recipe == null) return <Redirect to="404" />

  return (
    <div>
      <h1>{recipe.title}</h1>
    </div>
  )
}
