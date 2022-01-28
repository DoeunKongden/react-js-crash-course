import React from 'react';

//The {{}} the outer curly bracket is to tell javascript we are using dynamic value
//The {{} the inner one is to tell javascript it gonna be a object value}
function NavBar() {
  return <div>
      <div className='navbar'>
            <h1>Kongden's Blog</h1>

            <div className='links'>
                <a href='/'>Home</a>
                <a href='/create' style={{
                  color: "white",
                  backgroundColor: '#f1356d',
                  borderRadius: '8px',
                }}>Add New Blog</a>  
            </div>
      </div>

  </div>;
}

export default NavBar;

