import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { TechItem } from "./TechItem";

export const TechList = () => {
  const [newTech, setnewTech] = useState("");
  const [data, setdata] = useState([]);

    const handleAdd =() => {
        setdata([newTech,...data])
}
    
  return (
    <React.Fragment>
      <h2>Technologies List</h2>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            label="Add Technology"
            onChange={(e) => setnewTech(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" onClick={handleAdd} color="warning">
            Add
          </Button>
        </Grid>

        {data.map((item) => (
          <Grid item xs={3}>
            <TechItem item={item} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
