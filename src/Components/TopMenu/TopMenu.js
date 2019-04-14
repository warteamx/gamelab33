import React from 'react';
import { useStateValue } from '../../State/State';
import './TopMenu.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function TopMenu() {

    const [{ theme }, dispatch] = useStateValue();
    return (
        <>

            <nav className="topnav" id="myTopnav"  >
                <Link to="/" className="topmenu-link" style={ {color: theme.primary}}>Home</Link>
                <Link to="/Labhub" className="topmenu-link" style={ {color: theme.primary} }>Labhub</Link>
                <Link to="/Research" className="topmenu-link" style={ {color: theme.primary}}>Research</Link>
                <Link to="/Project33" className="topmenu-link" style={ {color: theme.primary} }>Project33</Link>
            </nav>
            <div className="clear"></div>
        </>
    )

}

export default TopMenu;
