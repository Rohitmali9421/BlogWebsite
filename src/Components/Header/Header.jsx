import React from 'react'
import {Container ,LogoutBtn} from "../index"
import { Link, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
   
    const authstatus = useSelector((state) => state.auth.status)
    const navigate=useNavigate()
    const navitem =[
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
    <header className='py-3 shodow bg-gray-500'>
        <Container>
            <nav className='flex'>
                <div className='mr-4 '>
                    <Link to="/">
                        RSM
                    </Link>
                </div>
                <ul className='flex ml-auto'>
                    { navitem.map((item)=>(item.active?(
                        <li key ={item.name}>
                            <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={()=>{navigate(item.slug)}}>
                                {item.name}
                            </button>
                        </li>
                    ):null)
                    )}
                    {authstatus &&(
                     <li> <LogoutBtn/></li>   
                    )}

                </ul>
            </nav>
        </Container>

    </header>
  )
}

export default Header
