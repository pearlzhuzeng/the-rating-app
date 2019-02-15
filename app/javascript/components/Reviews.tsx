import React from 'react'
import { Link, RouteComponentProps } from '@reach/router'
import styled from '../typed/styled-components'

import Review from '../components/Review'

import { IReview } from '../types'

type Props = RouteComponentProps & {
  reviews: IReview[]
}

export default function Reviews({ reviews }: Props) {
  return (
    <>
      {window.signedIn ? (
        <LinkContainer>
          <LinkButton to="reviews/new">Rate This Recipe</LinkButton>
        </LinkContainer>
      ) : (
        <>
          <DisabledLink>Rate This Recipe</DisabledLink>
          <SignInPrompt>
            You need to sign in first before you can provide a review.
          </SignInPrompt>
        </>
      )}
      <ReviewsContainer>
        <Heading id="reviews">Reviews</Heading>
        {reviews.length > 0 ? (
          reviews.map(review => <Review review={review} />)
        ) : (
          <p>
            There are no reviews for this recipe yet. Be the first one to leave
            a review!
          </p>
        )}
      </ReviewsContainer>
    </>
  )
}

const LinkContainer = styled.div`
  margin: 1.5em 0;
`

const LinkButton = styled(Link)`
  padding: 0.3em 0.6em;
  text-decoration: none;
  border-radius: 2px;
  background-color: white;

  &:hover {
    background-color: #136d88;
    color: white;
    transition: all 0.1s;
    border: none;
  }
`

const DisabledLink = styled.button`
  padding: 0.3em 0.6em;
  text-decoration: none;
  color: #ccc
  background-color: white;
  font-size: 1em;
  border-radius: 2px;

  &:hover {
    color: #ccc
    background-color: white;
  }
`

const SignInPrompt = styled.p`
  color: Crimson;
  margin-top: 0;
`

const ReviewsContainer = styled.div`
  background-color: #fffffe;
  padding: 10px 50px;
  border-radius: 5px;
`

const Heading = styled.h2`
  font-family: 'Merriweather', serif;
`
