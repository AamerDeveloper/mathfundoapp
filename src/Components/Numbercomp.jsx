import React from "react";
import { Card, CardContent, Typography,  } from "@mui/material";
import { Nextnum } from "./Nextnum";
import { Previousnum } from "./Previousnum";
import { Counter } from "./Counter";


export  const Numbercomp=()=>{
    return(
            <Card sx={{bgcolor: "success.main"} }>
                <CardContent>
                    <Typography variant="h4" >Numbers</Typography>
                    <Counter/>
                    <Nextnum/>
                    <Previousnum/>
                </CardContent>
            </Card>
    )
}