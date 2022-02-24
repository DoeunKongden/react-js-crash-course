import BlogList from './BlogList';
import useFetch from './useFetch';



function Home() {

  const {data, isPending, error} = useFetch('http://localhost:4400/blog');
  //below we are gonna use the useEffect hooks to fetch the data from the json server with the end point that we got which is shown on our terminal

  return <div className='Home'>
        {error && <div>{error}</div>}
        {isPending && <div>Loading.....</div>}
        {data && <BlogList blog={data} title="All Blog"/>}
  </div>
  
}

export default Home;