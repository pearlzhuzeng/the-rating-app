import React from 'react'
import { Link, RouteComponentProps, Redirect } from '@reach/router'

export default function ErrorPage(_: RouteComponentProps) {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Check out the Home Page</Link>
    </div>
  )
}
