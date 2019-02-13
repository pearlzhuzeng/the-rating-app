import React, { FormEvent, useState } from 'react'
import { Link, RouteComponentProps } from '@reach/router'
import RatingField from '../components/RatingField'
import { IReview } from '../types'

type Props = RouteComponentProps & {
  onCreate: (review: IReview) => any
}

export default function ReviewForm({ navigate, onCreate }: Props) {
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
    <>
      <nav>
        <Link to="../../">Back to Recipe</Link>
      </nav>
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
      method: 'POST',
      body: JSON.stringify({ review }),
      headers: new Headers({
        'X-CSRF-Token': getMetaContent('csrf-token'),
        'Content-Type': 'application/json',
      }),
    })

    const json = response.json()
    console.log(json)
    return json
  }
}

function getMetaContent(key: string): string {
  const meta = document.querySelector(`meta[name="${key}"]`)
  const content = meta && meta.getAttribute('content')
  if (content) return content
  return ''
}
