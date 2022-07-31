import React,{ useState} from "react";
import { Grid, TextField,Card,CardContent } from "@mui/material";


export const Squarenum=()=>{
    const [square, setsquare]=useState();
    return(
        <React.Fragment>
                    <Card>
                        <CardContent>
                <Grid container spacing={3}>

                    <Grid item xs={6}>
                        <TextField label="Enter Number" variant="outlined" onChange={e=>setsquare(e.target.value)}/>
                    </Grid>

                    <Grid item xs={6}>
                        <h2> Square : {square**2}</h2>
                    </Grid>

                </Grid>
                </CardContent>
                </Card>
        </React.Fragment>

    )
}