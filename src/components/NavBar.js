import React from 'react';
import {Link} from 'react-router-dom';

//The {{}} the outer curly bracket is to tell javascript we are using dynamic value
//The {{} the inner one is to tell javascript it gonna be a object value}
function NavBar() {
  return <div>
      <div className='navbar'>
            <Link id="landing" to="LandingPage">Kongden's Blog</Link>

            <div className='links'>
                <Link to="/Home"> Home </Link>
                <Link to="/Create" style={{
                  color: "white",
                  backgroundColor: '#f1356d',
                  borderRadius: '8px',
                }} >Add Blogs</Link>  
            </div>
      </div>

  </div>;
}

export default NavBar;

