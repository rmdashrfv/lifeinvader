import { useEffect, useState } from 'react';
import Post from './Post';

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
      <div className={newPostModalVisible ? "create-post-modal" : "create-post-modal-hidden"}>
        <h3>Create Post</h3>
        <textarea rows="5" cols="30"/>
        <button type="submit">Create Post</button>
      </div>
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