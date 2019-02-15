import React from 'react'
import styled, { css } from '../typed/styled-components'
import { Rating } from '../types'

type Props = {
  label: string
  name: string
  value: Rating | void
  onChange: (value: Rating) => any
}

export const RatingValues: Map<Rating, string> = new Map([
  [Rating.One, 'One Star'],
  [Rating.Two, 'Two Stars'],
  [Rating.Three, 'Three Stars'],
  [Rating.Four, 'Four Stars'],
  [Rating.Five, 'Five Stars'],
])

export default function RatingField({
  label,
  name,
  value: selectedValue,
  onChange,
}: Props) {
  return (
    <Fieldset hasSelection={selectedValue != null}>
      <legend>{label}</legend>

      {Array.from(RatingValues.entries(), ([value, valueLabel]) => {
        const id = `${name}-${value}`
        return (
          <>
            <VisuallyHidden htmlFor={id}>{valueLabel}</VisuallyHidden>
            <input
              id={id}
              type="radio"
              name={name}
              value={value}
              checked={selectedValue === value}
              onChange={() => onChange(value)}
              required
            />
          </>
        )
      })}
    </Fieldset>
  )
}

const goldStar = css`
  content: '★';
  color: orange;
  font-size: 2em;
`

const greyStar = css`
  content: '★';
  color: #928b81;
  font-size: 2em;
`

const VisuallyHidden = styled.label`
  position: absolute;
  left: -999999px;
`

const Fieldset = styled.fieldset<{ hasSelection: boolean }>`
  border-color: #ddd;
  margin: 1.1em auto;
  border-radius: 3px;

  legend {
    font-size: 1.2em;
  }

  input[type='radio'] {
    -webkit-appearance: none;
  }

  /* Stars default to gold */
  input::after {
    ${goldStar}
  }

  /* Or grey if none are checked */
  ${p =>
    !p.hasSelection &&
    css`
      input::after {
        ${greyStar}
      }
    `}

  /* But always default to gold if the fieldset is hovered */
  &:hover input::after {
    ${goldStar}
  }

  /* And turn grey if it's after the hovered or checked star */
  input:hover ~ input::after,
  input:checked ~ input::after {
    ${greyStar}
  }
`
