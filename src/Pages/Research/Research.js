import React from 'react';
import './Research.scss';
import video from './../../img/Cieling_Flames_4K_Motion_Background_Loop (1).mp4';
import SemipolarSpinner from '@bit/bondz.react-epic-spinners.semipolar-spinner';
import Grid from "@bit/mui-org.material-ui.grid";
import Card from '../../Components/Card/Card';
import research from '../../img/research.svg';
import TopMenu from '../../Components/TopMenu/TopMenu';


 

function Research() {

    return (
        <>

<video autoPlay muted loop id="myVideo">
  <source src={video} type="video/mp4"/>
</video>

<div className="content">
<TopMenu/>
  <h1>Research</h1>
  <p>Research and Development </p>
  <SemipolarSpinner
	color='#ffffff'
    size={100}
    className='spiner'
	/>

  {/* <button id="myBtn" onClick={handleClick()}>Pause</button> */}
</div>
<div className="container-blocks">
<Grid container spacing={24}>
<Grid item xs={4}>
<a href="/research1">
<Card src={research} title="Web Development" text="Mongo, Express, React, Node"></Card>
</a>
</Grid>
<Grid item xs={4}>
<Card src={research} title="DevOps" text="Blocked"></Card>
</Grid>
<Grid item xs={4}>
<Card src={research} title="Game Design" text="Blocked"></Card>
</Grid>
</Grid>

</div>
        </>
    )
}

export default Research;