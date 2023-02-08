import React from 'react';
import {RxCross1} from 'react-icons/rx';

export default function Header({query, setQuery}) {

    const clearSearch = (e) => {
        e.preventDefault()
        setQuery('')
    }

    return (
        <header>
          <nav>
            <div className='search'>
              <input 
                onChange={e => setQuery(e.target.value)}
                value={query}
                placeholder='Search...'/>
              <button onClick={clearSearch}>
                <RxCross1/>
              </button>
            </div>
            <div className='links'>
              <span>Algorithms</span>
              <span>|</span>
              <span>Data Structures</span>
            </div>
          </nav>
        </header>
    )
}
