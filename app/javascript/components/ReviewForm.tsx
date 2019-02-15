import React, { FormEvent, useState } from 'react'
import { Link, RouteComponentProps } from '@reach/router'
import styled from '../typed/styled-components'

import RatingField from '../components/RatingField'

import { IReview } from '../types'

type Props = RouteComponentProps & {
  onCreate: (review: IReview) => any
  recipeParam: string
}

export default function ReviewForm({ navigate, onCreate, recipeParam }: Props) {
  const [review, setReview] = useState<Partial<IReview>>({
    comment: '',
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const newReview = await postReview()
    onCreate(newReview)
    navigate && navigate(`../../`)
  }

  return (
    <Container>
      <Nav>
        <Link to="../../">Back to Recipe</Link>
      </Nav>
      <form onSubmit={handleSubmit}>
        <RatingField
          label="Taste"
          name="taste"
          value={review.taste}
          onChange={value => setReview({ ...review, taste: value })}
        />
        <RatingField
          label="Appearance"
          name="appearance"
          value={review.appearance}
          onChange={value => setReview({ ...review, appearance: value })}
        />
        <RatingField
          label="Ease"
          name="ease"
          value={review.ease}
          onChange={value => setReview({ ...review, ease: value })}
        />
        <RatingField
          label="Time to Prepare"
          name="time"
          value={review.time}
          onChange={value => setReview({ ...review, time: value })}
        />
        <RatingField
          label="Cost"
          name="cost"
          value={review.cost}
          onChange={value => setReview({ ...review, cost: value })}
        />
        <Comment>
          Comment:
          <Textarea
            value={review.comment}
            onChange={e => setReview({ ...review, comment: e.target.value })}
          />
        </Comment>
        <SubmitButton>
          <input type="submit" value="Submit" />
        </SubmitButton>
      </form>
    </Container>
  )

  async function postReview() {
    const response = await fetch(`/api/recipes/${recipeParam}/reviews.json`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify({ review }),
      headers: new Headers({
        'X-CSRF-Token': getMetaContent('csrf-token'),
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    })

    return response.json()
  }
}

function getMetaContent(key: string): string {
  const meta = document.querySelector(`meta[name="${key}"]`)
  const content = meta && meta.getAttribute('content')
  if (content) return content
  return ''
}

const Container = styled.div`
  margin: 2em 0;
`
const Nav = styled.nav`
  margin-bottom: 2em;
`

const SubmitButton = styled.div`
  display: flex;
  justify-content: flex-end;

  input {
    padding: 0.3em 0.6em;
    font-size: 1em;
    background-color: #fffffe;
    color: #555;
    border-radius: 0.3em;

    &:hover {
      background-color: #136d88;
      color: white;
      transition: all 0.1s;
    }
  }
`

const Comment = styled.label`
  font-size: 1.2em;
  line-height: 200%;
  margin-left: 0.8em;
`

const Textarea = styled.textarea`
  width: 100%;
  height: 10em;
  font-size: 1.2em;
  border-color: #ddd;
  border-radius: 3px;
`
