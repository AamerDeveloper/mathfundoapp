import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { Dishitem } from "./DishItem";

export const DishList = () => {
  const [data, setdata] = useState([]);
  const [text, settext] = useState("");
  const [filt, setfilt] = useState([]);

  const handleAdd = () => {
    setfilt([text, ...data]);
    setdata([text, ...data]);
    settext("");
  };

  const handleSearch = (e) => {
    const filtered = data.filter((item) =>
      item.toUpperCase().includes(e.target.value.toUpperCase())
    );
    setfilt(filtered);
    console.log(filtered);
  };

  const handleDelete = (dish) => {
    // console.log(dish);
    const filtered = data.filter((item) => item !== dish);
    setfilt(filtered);
    setdata(filtered);
  };

  return (
    <React.Fragment>
      <h3> My Dishes List</h3>

      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TextField
            value={text}
            label="Dish Name"
            onChange={(e) => settext(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            disabled={text.length < 3}
            onClick={handleAdd}
            fullWidth
          >
            Add
          </Button>
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Search..."
            onChange={handleSearch}
            variant="outlined"
            fullWidth
          />
        </Grid>

        {filt.map((item) => (
          <Grid item xs={2}>
            <Dishitem item={item} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
