import { useEffect, useState } from 'react';
import Post from './Post';
import CreatePostModal from './CreatePostModal'

const Timeline = () => {
  const [posts, setPosts] = useState([])
  const [newPostModalVisible, setNewPostModalVisible] = useState(false)

  useEffect(() => {
    // IIFE: immediately invoked function expression
    (async () => {
      let req = await fetch('https://raw.githubusercontent.com/rmdashrfv/lifeinvader/main/src/data/posts.json')
      let res = await req.json()
      setPosts(res)
    })()
  }, [])
  
  return (
    <div>
      <h2>Timeline</h2>
      <button onClick={() => { setNewPostModalVisible(!newPostModalVisible) }}>+ New Post</button>
      <CreatePostModal newPostModalVisible={newPostModalVisible} />
      {
        posts.map((post) => {
          return(
            <Post key={post.id} post={post} />
          )
        })
      }
    </div>
  )
}

export default Timeline;