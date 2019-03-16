import React from 'react';
import AtomSpinner from '@bit/bondz.react-epic-spinners.atom-spinner';
import './Labhub.scss';
import video from './../../img/Cieling_Flames_4K_Motion_Background_Loop (1).mp4';
import ScalingSquaresSpinner from '@bit/bondz.react-epic-spinners.scaling-squares-spinner';
import SemipolarSpinner from '@bit/bondz.react-epic-spinners.semipolar-spinner';
import BreedingRhombusSpinner from '@bit/bondz.react-epic-spinners.breeding-rhombus-spinner';


function Labhub() {

    return (
        <>

<video autoPlay muted loop id="myVideo">
  <source src={video} type="video/mp4"/>
</video>

<div className="content">
  <h1>Lab Hub</h1>
  <p>Research and Development </p>
  <ScalingSquaresSpinner
	color='#ffffff'
    size='200'
    className='spiner'
	/>

  {/* <button id="myBtn" onClick={handleClick()}>Pause</button> */}
</div>
<div className="container-blocks">
<div className="col">
    <p> Lab 1 </p>
</div>
<div className="col">

    <p>Blocked</p>
</div>
<div className="col">

    <p>Blocked</p>
</div>

</div>
        </>
    )
}

export default Labhub;