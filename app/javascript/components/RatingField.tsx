import React, { useState } from 'react'
import styled from '../typed/styled-components'
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
    <Fieldset>
      <legend>{label}</legend>

      {Array.from(RatingValues.entries(), ([value, valueLabel]) => (
        <label>
          <input
            type="radio"
            name={name}
            value={value}
            checked={selectedValue === value}
            onChange={() => onChange(value)}
            required
          />
          <span>{valueLabel}</span>
        </label>
      ))}
    </Fieldset>
  )
}

const Fieldset = styled.fieldset`
  label span {
    position: absolute;
    left: -999999px;
  }

  // input[type='radio'] {
  //   -webkit-appearance: none;
  // }

  // input[type='radio']::after,
  // input[type='radio']:hover ~ input[type='radio']::after,
  // &:not(:hover) input[type='radio']:checked ~ input[type='radio']::after {
  //   content: '☆';
  //   color: black;
  // }

  // &:hover input[type='radio']::after,
  // fieldset.has-checked input[type='radio']::after {
  //   content: '★';
  //   color: gold;
  // }
`
