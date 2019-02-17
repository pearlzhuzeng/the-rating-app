import React from 'react'
import styled from '../typed/styled-components'

import { RatingValues } from './RatingField'

import { IReview } from '../types'

type Props = {
  review: IReview
}

export default function Review({ review }: Props) {
  return (
    <Container>
      <ReviewContainer>
        <RatingsContainer>
          <RatingLabel>Taste:</RatingLabel>
          <RatingValue>
            <VisuallyHidden>{RatingValues.get(review.taste)}</VisuallyHidden>
            <Stars n={review.taste} />
          </RatingValue>

          <RatingLabel>Appearance:</RatingLabel>
          <RatingValue>
            <VisuallyHidden>
              {RatingValues.get(review.appearance)}
            </VisuallyHidden>
            <Stars n={review.appearance} />
          </RatingValue>

          <RatingLabel>Ease:</RatingLabel>
          <RatingValue>
            <VisuallyHidden>{RatingValues.get(review.ease)}</VisuallyHidden>
            <Stars n={review.ease} />
          </RatingValue>

          <RatingLabel>Time:</RatingLabel>
          <RatingValue>
            <VisuallyHidden>{RatingValues.get(review.time)}</VisuallyHidden>
            <Stars n={review.time} />
          </RatingValue>

          <RatingLabel>Cost:</RatingLabel>
          <RatingValue>
            <VisuallyHidden>{RatingValues.get(review.cost)}</VisuallyHidden>
            <Stars n={review.cost} />
          </RatingValue>
        </RatingsContainer>
        <p>{review.comment} </p>
      </ReviewContainer>
      <Reviewer>By: {review.name}</Reviewer>
    </Container>
  )
}

function Stars({ n }: { n: number }) {
  return (
    <>
      {new Array(n).fill(<FilledStar>★</FilledStar>)}
      {new Array(5 - n).fill(<EmptyStar>★</EmptyStar>)}
    </>
  )
}

const Container = styled.div`
  backgroud-color: #f9f8f2;
  border-bottom: solid 1px #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1em;

  &:last-child {
    border-bottom: none;
  }

  @media only screen and (max-width: 768px) {
    display: block;
  }
`

const ReviewContainer = styled.div`
  flex: 2;
`

const Reviewer = styled.p`
  flex: 1;
`

const RatingsContainer = styled.dl`
  display: grid;
  grid-template-columns: min-content 1fr;
`

const RatingLabel = styled.dt`
  display: inline-block;
`

const RatingValue = styled.dd`
  display: inline-block;
`

const VisuallyHidden = styled.span`
  position: absolute;
  left: -999999px;
`

const FilledStar = styled.span`
  color: orange;
  padding-right: 0.2em;
`

const EmptyStar = styled.span`
  color: #ddd;
  padding-right: 0.2em;
`
