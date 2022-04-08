const Post = ({post}) => {
  return(
    <div>
      <img src={post.image} height="250" width="250" />
      <p>Post by {post.username}</p>
      <p>{post.content}</p>
    </div>
  )
}

export default Post;