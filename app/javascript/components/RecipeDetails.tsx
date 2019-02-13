import React from 'react'
import { Link, RouteComponentProps, Redirect } from '@reach/router'
import styled from '../typed/styled-components'

export default function(_: RouteComponentProps) {
  return window.signedIn ? (
    <LinkButton to="reviews/new">Rate This Recipe</LinkButton>
  ) : (
    <>
      <DisabledLink>Rate This Recipe</DisabledLink>
      <p>You need to sign in first before you can provide a review.</p>
    </>
  )
}

const LinkButton = styled(Link)`
  border: solid 1px;
  padding: 0.2em 0.3em;
  text-decoration: none;
`
const DisabledLink = styled.button`
  border: solid 1px;
  padding: 0.2em 0.3em;
  text-decoration: none;
`
