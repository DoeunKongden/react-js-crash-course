const BlogList = ({blog, title, HandleDelete}) => {

  //It not a good idea to creat funtion delete inside blog list component becuase the state data is stored inside home.js
  //is what we are going to do is ==> go look inside home.js component

    // const blogs= props.blog;
    // const title= props.title
  return <div className='blog-List'>
      <h2>{title}</h2>
        {blog.map((blogs) => (
        <div className='blog-previews'>
          <h1>{blogs.title}</h1>
          <p>Written by : {blogs.author}</p>

          <button onClick={() => HandleDelete(blogs.id)}>Delete Blog</button>
        </div>
      ))}
  </div>;
}

export default BlogList;
