import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/routes.css"

export default function RoutesHomePage() {
  return (
    <div>
      <Link to="/routes/first" className='route-button'>First</Link>
      <Link to="/routes/second" className='route-button'>Second</Link>
      <Link to="/routes/third" className='route-button'>Third</Link>
    </div>
  )
}