import { Card, CardContent, Grid } from "@mui/material";
import { data } from "../../Services/StuData";
import React, { useState } from "react";
import { StudentItem } from "./StudentItem";

export const StudentsCards = () => {
  const [filt, setfilt] = useState(data);
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        {filt.map((item) => (
          <Grid item xs={3} className="img">
            <StudentItem item={item} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
