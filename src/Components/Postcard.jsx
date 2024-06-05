import React from 'react'
import service from '../Appwrite/config'
import {Link} from "react-router-dom"
function Postcard($id ,title,featuredImage) {
  return (
    <div>
      <Link to={`/post/${$id}`}>
        <div className='w-full rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
               <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
      </Link>
    </div>
  )
}

export default Postcard
