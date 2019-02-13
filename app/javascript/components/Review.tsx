import React from 'react'

import { RatingValues } from './RatingField'

import { IReview } from '../types'

type Props = {
  review: IReview
}

export default function Review({ review }: Props) {
  debugger
  return (
    <div>
      <p>Name: {review.name} </p>
      <p>Taste: {RatingValues.get(review.taste)} </p>
      <p>Appearance: {RatingValues.get(review.appearance)} </p>
      <p>Ease: {RatingValues.get(review.ease)} </p>
      <p>Time: {RatingValues.get(review.time)} </p>
      <p>Cost: {RatingValues.get(review.cost)} </p>
      <p>Comment: {review.comment} </p>
    </div>
  )
}
