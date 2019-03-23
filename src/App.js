import React  from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Labhub from './Pages/Labhub/Labhub';
import Research from './Pages/Research/Research';
import Project33 from './Pages/Project33/Project33';

function Project33Page() {
  return <Project33/>
}


function ResearchPage() {
  return  <Research/>;
}

function HomePage() {
  return <Home/>;
}

function LabhubPage() {
  return <Labhub/>;

}

function App() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          This page does not exist
        </header>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/Labhub" component={LabhubPage}></Route>
        <Route path="/Research" component={ResearchPage}></Route>
        <Route path="/Project33" component={Project33Page}></Route>
      </div>
      </Router>
    );
  }

export default App;
