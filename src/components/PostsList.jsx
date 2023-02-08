import React from 'react'
import Post from './Post'

export default function PostsList({posts}) {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Not found
            </h1>
        )
    }

    return (
        <div>
            {posts.map(post =>
            <Post post={post} key={post.id}/>
            )}
        </div>
    )
}
