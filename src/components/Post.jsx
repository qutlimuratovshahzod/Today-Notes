import React from 'react'
import { Link } from 'react-router-dom'

export const Post = ({post}) => {
  return (
    <div className='card w-96 bg-base-200 shadow-lg'>
        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{post.title.substring(0, 15).toUpperCase()}</h2>
    <p>{post.body.substring(0, 30)}</p>
    <div className="card-actions justify-end">
      <Link to={`/overview/${post.id}`}  className="btn btn-primary">Buy Now</Link>
    </div>
  </div>
    </div>
    
  )
}
