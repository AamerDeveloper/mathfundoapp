import { CardContent, Card, Typography } from "@mui/material";
import React from "react";
import { Table2 } from "./Table2";
import { Dynamictable } from "./Dynamictable";
import { StudentsCards } from "./Geo/StudentsCards";

export const Tables = () => {
  return (
    <Card sx={{ bgcolor: "coral" }}>
      <CardContent>
        <Typography variant="h4"> Tables</Typography>
        <StudentsCards />
        <br />
        <Dynamictable />
        {/* <Table2/> */}
      </CardContent>
    </Card>
  );
};
