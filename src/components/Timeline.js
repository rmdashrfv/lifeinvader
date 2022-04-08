import { useEffect, useState } from 'react';

const Timeline = () => {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    (async () => {
      console.log('Rendering Timeline ...', new Date())
      let req = await fetch('https://raw.githubusercontent.com/rmdashrfv/lifeinvader/main/src/data/posts.json')
      let res = await req.json()
      setPosts(res)
    })()
  }, [])
  
  return (
    <div>
      <h2>Timeline</h2>
      {
        posts.map((element) => {
          return(
            <div key={element.id}>
              {element.id}
            </div>
          )
        })
      }
    </div>
  )
}

export default Timeline;