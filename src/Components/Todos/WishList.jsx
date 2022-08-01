import { Grid, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { WishItem } from "./WishItem";

export const WishList = () => {
  const [data, setdata] = useState([]);
  const [txt, settxt] = useState("");
  const [filt, setfilt] = useState([]);

  const handleAdd = () => {
    setfilt([txt, ...data]);
    setdata([txt, ...data]);
  };

  const handleDelete = (Wish) => {
    const filtered = data.filter((item) => item !== Wish);
    setfilt(filtered);
    setdata(filtered);
  };

  return (
    <React.Fragment>
      <h3>Wished List</h3>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            label="Enter Wish"
            onChange={(e) => settxt(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" onClick={handleAdd}>
            Add Wish
          </Button>
        </Grid>
        {filt.map((item) => (
          <Grid item xs={3}>
            <WishItem item={item} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
