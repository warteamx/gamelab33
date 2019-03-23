import React from 'react';
import './TopMenu.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function TopMenu() {
    return (
<>

<nav className="topnav" id="myTopnav">
<Link to="/" className="topmenu-link">Home</Link>
<Link to="/Labhub" className="topmenu-link">Labhub</Link>
<Link to="/Research" className="topmenu-link">Research</Link>
<Link to="/Project33" className="topmenu-link">Project33</Link>
</nav>
<div className="clear"></div>
</>
    )

}

export default TopMenu;
