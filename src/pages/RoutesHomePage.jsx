import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function RoutesHomePage() {
  return (
    <div>
      <Link to="/routes/first" className='p-4 m-4 rounded-full bg-black text-white'>First</Link>
      <Link to="/routes/second" className='p-4 m-4 rounded-full bg-black text-white'>Second</Link>
      <Link to="/routes/third" className='p-4 m-4 rounded-full bg-black text-white'>Third</Link>
    </div>
  )
}