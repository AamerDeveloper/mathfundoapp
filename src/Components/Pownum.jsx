import { Card, CardContent, Grid,TextField } from "@mui/material";
import React,{ useState} from "react";

export const Pownum=()=>{
    const [ pow,setpow]=useState();
    const [ num,setnum]=useState();
    return(
        <React.Fragment>
            <Card>
                <CardContent>

            <Grid container spacing={3}>

                    <Grid item xs={4}>
                            <TextField label="Enter Number" variant="outlined" onChange={e=> setnum(e.target.value)} />
                    </Grid>

                    <Grid item xs={4}>
                            <TextField label="Enter Power" variant="outlined" onChange={e=> setpow(e.target.value)}/> 
                    </Grid>

                    <Grid item xs={4}>
                            <h1>{num} to the power {pow}  is {num**pow}</h1>
                    </Grid>

            </Grid>
            </CardContent>
            </Card>
        </React.Fragment>
    )
}