import React, { useState, useEffect } from 'react'
import { Link, Router, RouteComponentProps, Redirect } from '@reach/router'
import styled from '../typed/styled-components'

import Reviews from './Reviews'
import ReviewForm from '../components/ReviewForm'

import { IRecipe, IReview } from '../types'

type Props = RouteComponentProps<{ param: string }> & {
  recipes: IRecipe[]
  onSubmitReview: () => any
}

export default function Recipe({ param, recipes, onSubmitReview }: Props) {
  const recipe = recipes.find(recipe => recipe.param === param)
  const [reviews, setReviews] = useState<IReview[]>([])

  useEffect(() => {
    fetchReviews()
  }, [])

  if (recipe == null) return <Redirect to="404" />

  return (
    <div>
      <BreadCrumbLink to="..">Back to All Recipes</BreadCrumbLink>
      <Title>{recipe.title}</Title>
      <p>{recipe.detail}</p>

      <Router>
        <ReviewForm
          path="reviews/new"
          onCreate={appendReview}
          recipeParam={recipe.param}
        />
        <Reviews path="/" reviews={reviews} />
      </Router>
    </div>
  )

  function appendReview(review: IReview) {
    setReviews([...reviews, review])
    onSubmitReview()
  }

  async function fetchReviews() {
    const response = await fetch(`/api/recipes/${param}/reviews.json`)
    const reviews = await response.json()
    setReviews(reviews as IReview[])
  }
}

const BreadCrumbLink = styled(Link)`
  font-size: 0.9em;
  padding-bottom: 1em;
`

const Title = styled.h1`
  font-family: 'Merriweather', serif;
`
