import React from "react";
import NavBar from "./components/Navbar";
import Education from "./pages/Education";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

export default function App() {
  return (
    <Router>
    <NavBar/>

        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/education" exact>
            <Education></Education>
          </Route>
          <Route path="/resume" exact>
            <Resume></Resume>
          </Route>
          <Route path="/projects" exact>
            <Projects></Projects>
          </Route>

        </Switch>
        <Footer></Footer>
    </Router>
  );
}
if (module.hot) {
  module.hot.accept();
}

