import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AtomSpinner from '@bit/bondz.react-epic-spinners.atom-spinner';
import './Home.scss';
import ScalingSquaresSpinner from '@bit/bondz.react-epic-spinners.scaling-squares-spinner';
import SemipolarSpinner from '@bit/bondz.react-epic-spinners.semipolar-spinner';
import BreedingRhombusSpinner from '@bit/bondz.react-epic-spinners.breeding-rhombus-spinner';
import VideoBackground from '../../Components/VideoBackground/VideoBackground';


function Home() {

    return (
        <>

<VideoBackground/>
            <div className="content-video">
                <h1>Game Lab 33</h1>
                <p>An space to Learn and Experiment </p>
                <AtomSpinner
                    color='#fffff'
                    size={100}
                    className='spiner'
                />

                {/* <button id="myBtn" onClick={handleClick()}>Pause</button> */}

            </div> 
            <div className="container-blocks">
                <Link to="/Labhub">
                    <div className="col">
                        <ScalingSquaresSpinner
                            color='#ffffff'
                            size={100}
                            className='spiner'
                        />
                        <p> Lab Hub </p>
                    </div>
                </Link>
                <Link to="/Research">
                    <div className="col">
                        <SemipolarSpinner
                            color='#ffffff'
                            size={100}
                            className='spiner'
                        />
                        <p>Research</p>
                    </div>
                </Link>
                <Link to="/Project33">
                    <div className="col">
                        <BreedingRhombusSpinner
                            color='#ffffff'
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

export default Home;