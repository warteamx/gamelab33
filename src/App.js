import React  from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Labhub from './Pages/Labhub/Labhub';


function HomePage() {
  return <Home/>;
}

function LabhubPage() {
  return <Labhub/>

}

function App() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Home/>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/Labhub" component={LabhubPage}></Route>
      </div>
      </Router>
    );
  }

export default App;
