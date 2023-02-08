import './styles/App.css'
import Header from './components/Header'
import { useMemo, useState } from 'react'
import PostsList from './components/PostsList'

function App() {
  const [posts, _] = useState(
    [
      {id: 1, title: 'Example', code:`print(1)\nprint(2)`},
      {id: 2, title: 'Example', code:`print(1)\nprint(2)`},
      {id: 3, title: 'Example', code:`print(1)\nprint(2)`},
    ]
  )

  const [searchQuery, setSearchQuery] = useState('')

  const foundPosts = useMemo(() => {
    return posts.filter(post =>post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, posts])

  return (
    <div className="App">
      <main>
        <Header query={searchQuery} setQuery={setSearchQuery}/>
        <PostsList posts={foundPosts}/>
      </main>
    </div>
  )
}

export default App
