import React from "react";
import NavBar from "./components/Navbar.js";
import Education from "./pages/Education.js";
import Footer from "./pages/Footer.js";
import Home from "./pages/Home.js";
import Resume from "./pages/Resume.js";
import Projects from "./pages/Projects.js";
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

