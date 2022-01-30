import React, {useEffect, useState} from 'react';
import BlogList from './BlogList';


function Home() {

  const [blog, setBlog ] = useState(null)  //just empty this state because we not gonna use that locally anymore //gonna start fetching data from the json server we just created
                                            //set it to null 

  const handleDelete = (id) => {   //We created the function of handleDelete here and pass that funtion as a prop to the bloglist component
                                  // and since we are inside of home.js we can use setBlog to change our state data
    const newBlogs = blog.filter(blog => blog.id !== id)
    setBlog(newBlogs);
  }

  //below we are gonna use the useEffect hooks to fetch the data from the json server with the end point that we got which is shown on our terminal
  useEffect(() => {
    fetch('http://localhost:8000/blog').then(res => {
      return res.json()
    }).then((Data)=>{
        setBlog(Data);
    })
  });

  return <div className='Home'>
        {blog && <BlogList blog={blog} title="All Blog" HandleDelete={handleDelete} />}
      {blog && <BlogList blog={blog.filter((blog) => blog.author ==='Doeun Kongden')} title="Doeun Kongden's Blogs" HandleDelete={handleDelete} /> }
      
  </div>;
}

export default Home;