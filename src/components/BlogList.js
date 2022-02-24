import { Link } from "react-router-dom";

const BlogList = ({blog, title}) => {

  //It not a good idea to creat funtion delete inside blog list component becuase the state data is stored inside home.js
  //is what we are going to do is ==> go look inside home.js component

    // const blogs= props.blog;
    // const title= props.title
  return <div className='blog-List'>
      <h2>{title}</h2>
        {blog.map((blog) => (
        <div className='blog-previews'>
          <Link to= {`/Blogs/${blog.id}`} >
          <h1>{blog.title}</h1>
          <p>Written by : {blog.author}</p>
          </Link>
        </div>
      ))}
  </div>;
}

export default BlogList;
