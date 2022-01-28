const BlogList = ({blog, title}) => {

    // const blogs= props.blog;
    // const title= props.title
    
  return <div className='blog-List'>
      <h2>{title}</h2>
        {blog.map((blogs) => (
        <div className='blog-previews'>
          <h1>{blogs.title}</h1>
          <p>Written by : {blogs.author}</p>
        </div>
      ))}
  </div>;
}

export default BlogList;
