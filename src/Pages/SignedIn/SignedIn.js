import React from 'react';
import { useStateValue } from '../../State/State';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AtomSpinner from '@bit/bondz.react-epic-spinners.atom-spinner';
import ScalingSquaresSpinner from '@bit/bondz.react-epic-spinners.scaling-squares-spinner';
import SemipolarSpinner from '@bit/bondz.react-epic-spinners.semipolar-spinner';
import BreedingRhombusSpinner from '@bit/bondz.react-epic-spinners.breeding-rhombus-spinner';
import TopMenu from '../../Components/TopMenu/TopMenu';



function SignedIn() {
    const [{ user, theme }, dispatch] = useStateValue();


    return (
        <>


            <div className="content-video" style={ {color: theme.primary, background: theme.background } }>
            <TopMenu/>
            <br></br>   
                <h1>Game Lab 33 - Signed In </h1>
                <p>Welcome! You are now signed-in! {user.displayName} </p>
                <p>An space to Learn and Experiment </p>
                <AtomSpinner
                    color={theme.primary}
                    size={100}
                    className='spiner'
                />

                {/* <button id="myBtn" onClick={handleClick()}>Pause</button> */}

            </div> 
            <div className="container-blocks">
                <Link to="/Labhub" style={ {color: theme.primary } }>
                    <div className="col">
                        <ScalingSquaresSpinner
                            color={theme.primary}
                            size={100}
                            className='spiner'
                        />
                        <p> Lab Hub </p>
                    </div>
                </Link>
                <Link to="/Research" style={ {color: theme.primary } }>
                    <div className="col">
                        <SemipolarSpinner
                            color={theme.primary}
                            size={100}
                            className='spiner'
                        />
                        <p>Research</p>
                    </div>
                </Link>
                <Link to="/Project33" style={ {color: theme.primary } }>
                    <div className="col">
                        <BreedingRhombusSpinner
                            color={theme.primary}
                            size={100}
                            className='spiner'
                        />
                        <p>Project 33</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default SignedIn;