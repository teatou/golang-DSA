import React from 'react';
import '../styles/Post.css'

const test =
`package main
        
func main() {
    fmt.Println("W")
}`

export default function Post(props) {
    return (
    <div className='post-container'>
        <h1>{props.post.title}</h1>
        <pre><code>
            {props.post.code}
        </code></pre>
    </div>
    )
}
