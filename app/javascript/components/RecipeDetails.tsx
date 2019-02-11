import React from 'react'
import { Link, RouteComponentProps, Redirect } from '@reach/router'
import styled from '../typed/styled-components'

export default function(_: RouteComponentProps) {
  return <LinkButton to="reviews/new">Rate This Recipe</LinkButton>
}

const LinkButton = styled(Link)`
  border: solid 1px;
  padding: 0.2em 0.3em;
  text-decoration: none;
`
