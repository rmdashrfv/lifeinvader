import { useEffect, useState } from 'react';

const Timeline = () => {
  const [posts, setPosts] = useState([])
  
  useEffect(async () => {
    console.log('Rendering Timeline ...')
    let req = await fetch('https://raw.githubusercontent.com/rmdashrfv/lifeinvader/main/src/data/posts.json')
    let res = await req.json()
    setPosts(res)
  }, [])
  
  return (
    <div>
      <h2>Timeline</h2>
    </div>
  )
}

export default Timeline;