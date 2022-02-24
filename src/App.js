import Home from './components/Home';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './components/Create';
import BlogDetail from './components/BlogDetail';
import Notfound from './components/Notfound';

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className='content'>
            <Switch>
              <Route exact path="/Home">
                 <Home />
              </Route>

              <Route exact path="/Create">
                <Create />
              </Route>

              <Route exact path="/Blogs/:id">
                <BlogDetail />
              </Route>

              <Route path="*">
                <Notfound />
              </Route>

            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
