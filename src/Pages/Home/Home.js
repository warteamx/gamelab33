import React from 'react';
import { BrowserRouter as Link} from "react-router-dom";
import AtomSpinner from '@bit/bondz.react-epic-spinners.atom-spinner';
import './Home.scss';
import video from './../../img/Cieling_Flames_4K_Motion_Background_Loop (1).mp4';
import ScalingSquaresSpinner from '@bit/bondz.react-epic-spinners.scaling-squares-spinner';
import SemipolarSpinner from '@bit/bondz.react-epic-spinners.semipolar-spinner';
import BreedingRhombusSpinner from '@bit/bondz.react-epic-spinners.breeding-rhombus-spinner';


function Home() {

//    var video = document.getElementById("myVideo");

//     // Get the button
//     var btn = document.getElementById("myBtn");
    
//     // Pause and play the video, and change the button text
//     function handleClick() {
//       if (video.paused) {
//         video.play();
//         btn.innerHTML = "Pause";
//       } else {
//         video.pause();
//         btn.innerHTML = "Play";
//       }
//     }


    return (
        <>

<video autoPlay muted loop id="myVideo">
  <source src={video} type="video/mp4"/>
</video>

<div className="content">
  <h1>Game Lab 33</h1>
  <p>An space to Learn and Experiment </p>
  <AtomSpinner
	color='#fffff'
    size='200'
    className='spiner'
	/>

  {/* <button id="myBtn" onClick={handleClick()}>Pause</button> */}
</div>
<div className="container-blocks">
<Link to="/Labhub">
<div className="col">
<ScalingSquaresSpinner
	color='#ffffff'
    size='200'
    className='spiner'
	/>
    <p> Lab Hub </p>
</div>
</Link>
<div className="col">
<SemipolarSpinner
	color='#ffffff'
    size='200'
    className='spiner'
	/>
    <p>Resources</p>
</div>
<div className="col">
<BreedingRhombusSpinner
	color='#ffffff'
    size='200'
    className='spiner'
	/>
    <p>Project 33</p>
</div>

</div>
        </>
    )
}

export default Home;