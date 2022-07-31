import React from "react";
import { Card,CardContent,Typography } from "@mui/material";
import { Squarenum } from "./Squarenum";
import { Cubenum } from "./Cubenum";
import { Pownum } from "./Pownum";

export const Squar=()=>{
    
    return(
        <Card sx={{bgcolor: "aqua"} } >
            <CardContent >
                <Typography variant="h4">Squar Number & Cubes</Typography>
                <Squarenum/>
                <Cubenum/>
                <Pownum/>

            </CardContent>
        </Card>
    )
}