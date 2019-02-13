import React, { useState, useEffect } from 'react'
import { Link, Router, RouteComponentProps, Redirect } from '@reach/router'
import styled from '../typed/styled-components'

import RecipeDetails from '../components/RecipeDetails'
import ReviewForm from '../components/ReviewForm'
import Review from '../components/Review'

import { IRecipe, IReview } from '../types'

type Props = RouteComponentProps<{ param: string }> & {
  recipes: IRecipe[]
}

export default function Recipe({ param, recipes }: Props) {
  const recipe = recipes.find(recipe => recipe.param === param)
  const [reviews, setReviews] = useState<IReview[]>([])

  useEffect(() => {
    fetchReviews()
  }, [])

  if (recipe == null) return <Redirect to="404" />

  return (
    <div>
      <BreadCrumbLink to="..">Back to All Recipes</BreadCrumbLink>
      <h1>{recipe.title}</h1>
      <p>{recipe.detail}</p>

      <h2>Reviews</h2>
      {reviews.map(review => (
        <Review review={review} />
      ))}

      <Router>
        <RecipeDetails path="/" />
        <ReviewForm
          path="reviews/new"
          onCreate={appendReview}
          recipeParam={recipe.param}
        />
      </Router>
    </div>
  )

  function appendReview(review: IReview) {
    setReviews([...reviews, review])
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
