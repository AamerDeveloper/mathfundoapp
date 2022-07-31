import React,{ useState} from "react";
import { Grid, TextField,Card,CardContent } from "@mui/material";

export const Cubenum=()=>{
    const [Cube, setCube]=useState();
    return(
        <React.Fragment>
                    <Card>
                        <CardContent>
                <Grid container spacing={3}>

                    <Grid item xs={6}>
                        <TextField label="Enter Number" variant="outlined" onChange={e=>setCube(e.target.value)}/>
                    </Grid>

                    <Grid item xs={6}>
                        <h1>Cube : {Cube**3}</h1>
                    </Grid>

                </Grid>
                </CardContent>
                </Card>
        </React.Fragment>

    )
}