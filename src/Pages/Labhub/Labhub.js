import React from 'react';
import { useStateValue } from '../../State/State';
import ScalingSquaresSpinner from '@bit/bondz.react-epic-spinners.scaling-squares-spinner';
import Grid from "@bit/mui-org.material-ui.grid";
import Card from '../../Components/Card/Card';
import microscope from '../../img/microscope.svg';
import TopMenu from '../../Components/TopMenu/TopMenu';


function Labhub() {
  const [{ theme }, dispatch] = useStateValue();


  return (
    <>
      <div className="content-video" style={ {color: theme.primary, background: theme.background} }>
        <TopMenu />
        <h1>Lab Hub</h1>
        <p>Research and Development </p>
        <ScalingSquaresSpinner
          color={theme.primary}
          size={100}
          className='spiner'
        />

        {/* <button id="myBtn" onClick={handleClick()}>Pause</button> */}
      </div>
      <div className="container-blocks" style={ {color: theme.primary} }>
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <a href="http://lab-1-phaser.s3-website.eu-west-3.amazonaws.com/" target="_blank" rel="noopener noreferrer"
            style={ {color: theme.primary } } >
              <Card src={microscope} title="Lab 1" text="Game Lab"  >
              </Card>
            </a>
          </Grid>
          <Grid item xs={4}>
            <Card src={microscope} title="Lab 2" text="Blocked" ></Card>
          </Grid>
          <Grid item xs={4}>
            <Card src={microscope} title="Lab 3" text="Blocked" ></Card>
          </Grid>
        </Grid>

      </div>
    </>
  )
}

export default Labhub;