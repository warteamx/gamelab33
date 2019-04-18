import React  from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../Pages/Home/Home';
import Labhub from '../Pages/Labhub/Labhub';
import Research from '../Pages/Research/Research';
import Project33 from '../Pages/Project33/Project33';
import Research1 from '../Pages/Research/Research1/Research1';
import SignedIn from '../Pages/SignedIn/SignedIn';
import MainPage from '../Pages/Research/MainPage/MainPage';

function MainPageApp() {
return <MainPage/>
}

function SignedInPage () {
  return  <SignedIn/>
}

function Research1Page () {
  return  <Research1/>
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

function RouterApp() {
    return (
      <Router>
      <div className="App">
{/* <VideoBackground/> */}
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/Labhub" component={LabhubPage}></Route>
        <Route path="/Research" component={ResearchPage}></Route>
        <Route path="/Project33" component={Project33Page}></Route>
        <Route path="/Research1" component={Research1Page}></Route>
        <Route path="/SignedIn" component={SignedInPage}></Route>
        <Route path="/MainPage" component={MainPageApp}></Route>
      </div>
      </Router>
    );
  }

export default RouterApp;
