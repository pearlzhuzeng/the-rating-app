import React, { FormEvent, useState } from 'react'
import { Link, RouteComponentProps } from '@reach/router'
import RatingField from '../components/RatingField'
import { IReview } from '../types'

type Props = RouteComponentProps & {
  onCreate: (review: IReview) => any
  recipeParam: string
}

export default function ReviewForm({ navigate, onCreate, recipeParam }: Props) {
  const [review, setReview] = useState<Partial<IReview>>({
    name: '',
    comment: '',
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const newReview = await postReview()
    onCreate(newReview)
    navigate && navigate(`../../`)
  }

  return (
    <>
      <nav>
        <Link to="../../">Back to Recipe</Link>
      </nav>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name:
          <textarea
            value={review.name}
            onChange={e => setReview({ ...review, name: e.target.value })}
          />
        </label>
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
        <label>
          Comment:
          <textarea
            value={review.comment}
            onChange={e => setReview({ ...review, comment: e.target.value })}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
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
