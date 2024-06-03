import React from 'react'
import {Container ,LogoutBtn} from "../index"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Header() {
    const authstatus=useSelector((state)=>{
        state.auth.status
    })
    const navigate=useNavigate()
    const naitem =[
        {
            name: 'Home',
            slug: "/",
            active: true
          }, 
          {
            name: "Login",
            slug: "/login",
            active: !authstatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authstatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authstatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authstatus,
        },
    ]
  return (
    <div>
      
    </div>
  )
}

export default Header
