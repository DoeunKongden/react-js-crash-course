import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {

  const title= 'Welcome To My Blog';  //example of usage of dynamic value and string
  const like = 50;    //note* = only work with string and value not object or boolean

  return (
    <div className="App">
      <NavBar />
      <div className='content'>
          <Home />
      </div>
    </div>
  );
}

export default App;
