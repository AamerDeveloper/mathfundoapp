import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { Rectfence } from "./Geo/Rectfence";
import { Student } from "./Geo/Student";
import { StudentOptm } from "./Geo/StudentOptm";
import { StudentsCards } from "./Geo/StudentsCards";

export const Geo = () => {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <h2> GEOMETRY</h2>
          <Student />
          <Rectfence />
          <StudentOptm />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
