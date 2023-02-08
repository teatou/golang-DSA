import React from 'react'
import Post from './Post'

export default function PostsList({posts}) {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center', marginTop: '100px'}}>
                Nothing was found
            </h1>
        )
    }

    return (
        <div className='container'>
            {posts.map(post =>
            <Post post={post} key={post.id}/>
            )}
        </div>
    )
}
