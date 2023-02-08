import React from 'react'

export default function Header({query, setQuery}) {

    const clearSearch = (e) => {
        e.preventDefault()
        setQuery('')
    }

    return (
        <nav>
          <input 
          onChange={e => setQuery(e.target.value)}
          value={query}/>
          <button onClick={clearSearch}>
            clear
          </button>
        </nav>
    )
}
