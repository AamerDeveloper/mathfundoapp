import React, { useState } from "react";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";

export const Rectfence = () => {
  const [len, setlen] = useState(0);
  const [b, setB] = useState(0);
  const [cal, setcal] = useState(0);
  const [layer, setlayer] = useState(1);
  const [pfc, setpfc] = useState(1);

  const handleClear = () => {
    setlen(0);
    setB(0);
    setlayer(1);
    setpfc(1);
    setcal(0);
  };

  const handleCalculate = () => {
    const par = Number(len) + Number(b) + Number(len) + Number(b);
    const totalwire = par * layer;
    const totalCost = totalwire * pfc;
    setcal(totalCost);
  };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <h1>L</h1>
        </Grid>
        <Grid item xs={3}>
          <h1>B</h1>
        </Grid>
        <Grid item xs={3}>
          <h1>Layers</h1>
        </Grid>
        <Grid item xs={3}>
          <h1>Per Foot Cost</h1>
        </Grid>

        <Grid item xs={3}>
          <TextField
            value={len}
            onFocus={() => setlen("")}
            onChange={(e) => setlen(e.target.value)}
            label="Enter Length"
            variant="outlined"
            type="number"
          />
        </Grid>

        <Grid item xs={3}>
          <TextField
            type="number"
            value={b}
            onFocus={() => setB("")}
            onChange={(e) => setB(e.target.value)}
            label="Enter Width"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            value={layer}
            onFocus={() => setlayer("")}
            onChange={(e) => setlayer(e.target.value)}
            label="Number of Layer"
            variant="outlined"
            type="number"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            type="number"
            value={pfc}
            onFocus={() => setpfc("")}
            onChange={(e) => setpfc(e.target.value)}
            label="per Foot Cost"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={3}>
         
              <Button
                variant="contained"
                disabled={
                  len < 5 ||
                  b < 5 ||
                //   len * b > 100 ||
                  layer < 1 ||
                  layer > 12 ||
                  pfc < 1
                }
                onClick={handleCalculate}
              >
                Calculate
              </Button>
            
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleClear}>
            Clear
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <h1> Calculate: Rs.{cal}/-</h1>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
