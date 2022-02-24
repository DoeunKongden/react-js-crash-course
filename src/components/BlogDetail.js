import React from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from './useFetch';

function BlogDetail() {

    const { id } = useParams();
    const {data: blog, error, ispending} = useFetch('http://localhost:4400/blog/'+ id);
    const history = useHistory();
    

    const handleClickDelte= () =>{
       fetch('http://localhost:4400/blog/' + blog.id, {
         method: 'DELETE'
       }).then(() => {
          history.push('/Home');
       })
    }

  return <div>
      <div className='Blog-detail'>
        {ispending && <div>Loading....</div>}
        {error && <div>{error}</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by : {blog.author}</p>
                <br />
                <div>{blog.body}</div>
                
                <button onClick={handleClickDelte}>Delete</button>
            </article>
        )}
      </div>
  </div>;
}

export default BlogDetail;
