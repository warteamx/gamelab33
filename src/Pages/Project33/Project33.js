import React from 'react';
import { useStateValue } from '../../State/State';
import BreedingRhombusSpinner from '@bit/bondz.react-epic-spinners.breeding-rhombus-spinner';
import Grid from "@bit/mui-org.material-ui.grid";
import Card from '../../Components/Card/Card';
import padlock from '../../img/padlock.svg';
import TopMenu from '../../Components/TopMenu/TopMenu';


 

function Project33() {
    const [{ theme }, dispatch] = useStateValue();
    return (
        <>

<div className="content-video" style={ {color: theme.primary, background: theme.background } }>
<TopMenu/>
  <h1>Project33</h1>
  <p> WIP </p>
  <BreedingRhombusSpinner
                            color={theme.primary}
                            size={200}
                            className='spiner'
                        />

  {/* <button id="myBtn" onClick={handleClick()}>Pause</button> */}
</div>
<div className="container-blocks" style={ {color: theme.primary} }>
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