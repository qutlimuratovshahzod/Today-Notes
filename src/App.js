import { useEffect, useState} from 'react';
import { Layout } from './layout/Layout';
import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from './pages/Home'
import { Posts } from './pages/Posts'
import { Overview } from './pages/Overview'

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          setPosts(json)
        }, 1500)
      })
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home posts={posts} />} />
          <Route path='posts' element={<Posts posts={posts} />} />
          <Route path='overview/:id' element={<Overview posts={posts} />} />
        </Route>
        <Route path='*' element={<Navigate to="/"/>}/>
      </Routes>
    </div>
  );
}

export default App;
