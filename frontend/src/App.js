import Button from "react-bootstrap/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page1">Page1</Link>
            </li>
            <li>
              <Link to="/page2">Page2</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/page1">
            <div>
              <Button>Some button</Button>
            </div>
          </Route>
          <Route path="/page2">
            <div>
              someososmsosmos
            </div>
          </Route>
          <Route path="/">
            <div>
              contenttt
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
