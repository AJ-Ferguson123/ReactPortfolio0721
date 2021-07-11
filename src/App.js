// import './App.css';
import React from 'react'
import NavMenu from './components/NavMenu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
        
          <Route path="/projects">
            <Projects />
          </Route>
        
          <Route path="contact">
            <Contact />
          </Route>
        
          <Route path="/">
            <Home />
          </Route>
        </Switch>     
      </Router>      
    </div>
  );
}

export default App;
