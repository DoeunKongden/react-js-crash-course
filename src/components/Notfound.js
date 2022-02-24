import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
    <div>
        <h1>This page is not found...</h1>
        <Link to="/Home">Go back to home page</Link>
    </div>
  )
}


