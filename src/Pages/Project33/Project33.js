import React from 'react';
import './Project33.scss';
import video from './../../img/Cieling_Flames_4K_Motion_Background_Loop (1).mp4';
import BreedingRhombusSpinner from '@bit/bondz.react-epic-spinners.breeding-rhombus-spinner';
import Grid from "@bit/mui-org.material-ui.grid";
import Card from '../../Components/Card/Card';
import padlock from '../../img/padlock.svg';
import TopMenu from '../../Components/TopMenu/TopMenu';


 

function Project33() {

    return (
        <>

<video autoPlay muted loop id="myVideo">
  <source src={video} type="video/mp4"/>
</video>

<div className="content">
<TopMenu/>
  <h1>Project33</h1>
  <p> WIP </p>
  <BreedingRhombusSpinner
                            color='#ffffff'
                            size={200}
                            className='spiner'
                        />

  {/* <button id="myBtn" onClick={handleClick()}>Pause</button> */}
</div>
<div className="container-blocks">
<Grid container spacing={24}>
<Grid item xs={4}>

</Grid>
<Grid item xs={4}>
<Card src={padlock} title="Project 33" text="Restringed Area"></Card>
</Grid>
<Grid item xs={4}>

</Grid>
</Grid>

</div>
        </>
    )
}

export default Project33;