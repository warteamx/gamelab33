import React from 'react';
import CardResearch from '../Components/Card/CardResearch';
import Grid from "@bit/mui-org.material-ui.grid";
import TopMenu from "../Components/TopMenu/TopMenu";
import VideoBackground from '../Components/VideoBackground/VideoBackground';


export default function Research1() {
    return(
        <>
        <VideoBackground/>
        <div className="content-video" > 
        <TopMenu/>
        <Grid container spacing={8}>
        <Grid item xs={12} sm={4}>
        <CardResearch title="Card1" description="Description 1" type="type1" tags="tag1 tag2" author="Martin"/>
        </Grid>
        <Grid item xs={12} sm={4}>
        <CardResearch title="Card2" description="Description 2" type="type2" tags="tag1 tag2" author="Anonimo"/>
        </Grid>
        <Grid item xs={12} sm={4}>
        <CardResearch title="Card3" description="Description 3" type="type3" tags="tag1 tag2" author="Other"/>
        </Grid>
        
        </Grid>
        <p>It is working</p>
        </div>
        </>
    )
}