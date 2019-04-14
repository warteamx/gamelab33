import React from 'react';
import { useStateValue } from '../../State/State';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SemipolarSpinner from '@bit/bondz.react-epic-spinners.semipolar-spinner';
import Grid from "@bit/mui-org.material-ui.grid";
import Card from '../../Components/Card/Card';
import research from '../../img/research.svg';
import TopMenu from '../../Components/TopMenu/TopMenu';



function Research() {
  const [{ theme }, dispatch] = useStateValue();
    return (
        <>
<div className="content-video" style={ {color: theme.primary, background: theme.background } }>
<TopMenu/>
  <h1>Research</h1>
  <p>Research and Development </p>
  <SemipolarSpinner
	color={theme.primary}
    size={100}
    className='spiner'
	/>

  {/* <button id="myBtn" onClick={handleClick()}>Pause</button> */}
</div>
<div className="container-blocks" style={ {color: theme.primary } }>
<Grid container spacing={24}>
<Grid item xs={4}>
<Link to="/research1" style={ {color: theme.primary } }>
<Card src={research} title="Web Development" text="Mongo, Express, React, Node"></Card>
</Link>
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