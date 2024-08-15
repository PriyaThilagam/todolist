import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
        <ul>
        <Link to='/completed'><li>Completed tasks</li></Link>
        <Link to='/pending'><li>Pending tasks</li></Link>
        <Link to='/createtodo'><li>Create a Task</li></Link>
        </ul>
 
    </nav>
  )
}

export default Navbar