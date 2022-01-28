import React, {useState} from 'react';
import BlogList from './BlogList';


function Home() {

  const [blogs, setBlogs ] = useState([
    {title: 'My first Blog webpage', body:'something somethign something something ....', author:'Doeun Kongden', id:1},
    {title: 'Mcdonale Suck', body:'Macdonald franchise suck ass ....', author:'Frizzbie', id:2},
    {title: 'New NTF project', body:'New NFT project called HYped beast look promising ....', author:'Mr. Beast', id:3},
    {title: 'Bit coin market crashed', body:'Bitcoin market crash due to Russia planning on invaing ukrain....', author:'Putin', id:4},
  ])

  return <div className='Home'>
      <BlogList blog={blogs} title="All Blog" />
  </div>;
}

export default Home;