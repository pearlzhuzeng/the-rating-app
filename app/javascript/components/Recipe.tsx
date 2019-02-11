import React, { useState } from 'react'
import { Link, Router, RouteComponentProps, Redirect } from '@reach/router'

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

  if (recipe == null) return <Redirect to="404" />

  return (
    <div>
      <h1>{recipe.title}</h1>

      <h2>Reviews</h2>
      {reviews.map(review => (
        <Review review={review} />
      ))}

      <Router>
        <RecipeDetails path="/" />
        <ReviewForm path="reviews/new" onCreate={appendReview} />
      </Router>
    </div>
  )

  function appendReview(review: IReview) {
    setReviews([...reviews, review])
  }
}
