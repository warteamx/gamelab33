import React from 'react';
import CardResearch from '../Components/Card/CardResearch';
import Grid from "@bit/mui-org.material-ui.grid";
import TopMenu from "../Components/TopMenu/TopMenu";
import VideoBackground from '../Components/VideoBackground/VideoBackground';
import AddResearchCard from '../Components/AddResearchCard/AddResearchCard';

export default function Research1() {
    return(
        <>
        <VideoBackground/>
        <div className="content-video" > 
        <TopMenu/>
        <h1>Research ONE </h1>
  <p>Web Development </p>

        <Grid container spacing={8}>
        <Grid item xs={12} sm={4}>
        <CardResearch title="Computer Science" description="The OSSU curriculum is a complete education in computer science using online materials. " duration="2 years - 22h/week" type="course" tags="programming, math, theory, " author="Open Source " link="https://github.com/ossu/computer-science"/>
        </Grid>
        <Grid item xs={12} sm={4}>
        <CardResearch title="Let’s build a full stack MongoDB, React, Node and Express (MERN) app" description="We will build it from nothing. We will setup our own database, create the back end from the ground up and bootstrap our front end with the bare minimum." type="article" tags="javascrip, mongo, express" author="Medium" link="https://medium.com/javascript-in-plain-english/full-stack-mongodb-react-node-js-express-js-in-one-simple-app-6cc8ed6de274"/>
        </Grid>
        <Grid item xs={12} sm={4}>
        <CardResearch title="React - The Complete Guide (incl Hooks, React Router, Redux)" description="Dive in and learn React from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!" type="course" duration="39h" tags="React, Redux" author="Other" Link="https://www.udemy.com/react-the-complete-guide-incl-redux/"/>
        </Grid>
        <AddResearchCard/>
        </Grid>
        </div>
        </>
    )
}