import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Overview = ({ posts }) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const post = posts[+id - 1]

    if (post === undefined) return <button className="btn btn-ghost loading">loading</button>

    return (
        <div className='w-full '>
            <img className='object-cover w-full h-96' src="https://api.lorem.space/image/shoes?w=1000&h=1000" alt="" />
            <h1 className='px-10 my-10 text-9xl'>{post.title.toUpperCase()}</h1>
            <p className='px-10 text-4xl leading-relaxed'>{post.body}</p>
            <button onClick={() => navigate(-1)} className='link m-10 text-2xl'>Go Back</button>
        </div>
    )
}
