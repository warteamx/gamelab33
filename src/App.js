import React  from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Labhub from './Pages/Labhub/Labhub';
import Research from './Pages/Research/Research';
import Project33 from './Pages/Project33/Project33';
import Lab1 from './Lab/Lab1/Lab1';
import Research1 from './Pages/Research/Research1/Research1';
import VideoBackground from './Components/VideoBackground/VideoBackground';
import Research2 from './Pages/Research/Research1/Research2';

function Research2Page() {
  return <Research2 />
}


function Research1Page () {
  return  <Research1/>
}

function Lab1Page() {
  return <Lab1/>
}

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
{/* <VideoBackground/> */}
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/Labhub" component={LabhubPage}></Route>
        <Route path="/Research" component={ResearchPage}></Route>
        <Route path="/Project33" component={Project33Page}></Route>
        <Route path="/Lab1" component={Lab1Page}></Route>
        <Route path="/Research1" component={Research1Page}></Route>
        <Route path="/Research2" component={Research2Page}></Route>
      </div>
      </Router>
    );
  }

export default App;
