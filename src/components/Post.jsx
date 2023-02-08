import React from 'react';
import {AiOutlineCopy} from 'react-icons/ai'

export default function Post(props) {
    const copy = (e) => {
        e.preventDefault()
        navigator.clipboard.writeText(props.post.code);
    }

    return (
    <div className='post-container'>
        <h1>{props.post.title}</h1>
        <div className='code-container'>
            <pre><code>
                {props.post.code}
            </code></pre>
            <button onClick={copy}><AiOutlineCopy size={24}/></button>
        </div>
    </div>
    )
}
