import React, { useState, useEffect } from 'react';
import { useStateValue } from '../../../State/State';
import CardResearch from '../../../Components/Card/CardResearch';
import Grid from "@bit/mui-org.material-ui.grid";
import TopMenu from "../../../Components/TopMenu/TopMenu";
import AddResearchCard from '../../../HOC/AddResearchCard/AddResearchCard';
import fire from '../../../fire';

export default function Research1() {
   

    const [dataCard, setDataCard] = useState([])

    useEffect(() => {

        fire.collection('card-research')
            .get()
            .then(function (querySnapshot) {
                let data = querySnapshot.docs.map(function (documentSnapshot) {
                    return documentSnapshot.data();
                });
                setDataCard(data);
            })
            .catch(err => console.log(err));

    }, []);

    const [{ theme }, dispatch] = useStateValue();
    
    return (
        <>
            <div className="content-video" style={ {color: theme.primary, background: theme.background } } >
                <TopMenu />
                <h1>Research ONE </h1>
                <p>Research Cards Number {dataCard.length}  </p>
                <AddResearchCard />
                <Grid container spacing={8}>
{dataCard.map((dataCard, index) => {
    return <CardResearch key={index} 
    title={dataCard.title} 
     description={dataCard.description}
     link={dataCard.link}
     style={ {color: theme.primary } }
     />
})}
                    

                   
                </Grid>

            </div>
        </>
    )
}