import { Card, CardContent, Button } from "@mui/material";
import React from "react";

export const Dishitem = ({ item, handleDelete }) => {
  return (
    <React.Fragment>
      <Card sx={{ bgcolor: "red", color: "white" }} className="App">
        <CardContent>
          <p>{item}</p>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDelete(item)}
          >
            Delete
          </Button>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
