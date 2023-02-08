import './styles/App.css'
import Header from './components/Header'
import { useMemo, useState } from 'react'
import PostsList from './components/PostsList'
import { bubbleSort, quickSort, selectionSort, insertionSort, binarySearch, binaryTree } from './Items'

function App() {
  const [posts, _] = useState(
    [
      {id: 1, title: 'Bubble sort', code:bubbleSort},
      {id: 2, title: 'Quick sort', code:quickSort},
      {id: 3, title: 'Selection sort', code:selectionSort},
      {id: 4, title: 'Incertion sort', code:insertionSort},
      {id: 5, title: 'Binary search', code:binarySearch},
      {id: 6, title: 'Binary tree', code:binaryTree},
    ]
  )

  const [searchQuery, setSearchQuery] = useState('')

  const foundPosts = useMemo(() => {
    return posts.filter(post =>post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, posts])

  return (
    <div className="App">
      <Header query={searchQuery} setQuery={setSearchQuery}/>
      <PostsList posts={foundPosts}/>
    </div>
  )
}

export default App
