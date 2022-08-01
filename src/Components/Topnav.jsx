import React from "react";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Topnav = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={2} className="img">
          <img
            src="https://pickupbiz.com/static/media/pickupbizzlogo.fbf33cad.jpg"
            width={130}
            alt="pickupbiz"
          />
        </Grid>

        <Grid item xs={1}>
          <Link to="/Numbers" className="tabnav">
            <Button variant="contained" color="success" className="bttn">
              Number
            </Button>
          </Link>
        </Grid>

        <Grid item xs={1}>
          <Link to="/Table" className="tabnav">
            <Button variant="contained" color="success">
              Table
            </Button>
          </Link>
        </Grid>

        <Grid item xs={1}>
          <Link to="/Squar" className="tabnav">
            <Button color="success" variant="contained">
              Squar
            </Button>
          </Link>
        </Grid>

        <Grid item xs={1}>
          <Link to="/Geo" className="tabnav">
            <Button color="success" variant="contained">
              GEOMETRy
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/Todos" className="tabnav">
            <Button color="success" variant="contained">
              Todos
            </Button>
          </Link>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
