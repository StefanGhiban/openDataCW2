import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "../src/components/Navbar";
import HomePage from "../src/components/HomePage";
import ContactPage from "../src/components/ContactPage";
import AboutPage from "../src/components/AboutPage";
import UniPage from "../src/components/UniPage";
import CostPage from "../src/components/CostPage";
import AggregatedPage from "../src/components/AggregatedPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Unis">
            <UniPage />
          </Route>
          <Route path="/Costs">
            <CostPage />
          </Route>
          <Route path="/Aggregated">
            <AggregatedPage />
          </Route>
          <Route path="/About">
            <AboutPage />
          </Route>
          <Route path="/Contact">
            <ContactPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
