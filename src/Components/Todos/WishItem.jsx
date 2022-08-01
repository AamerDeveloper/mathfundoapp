import { Card, CardContent, Button } from "@mui/material";
import React from "react";

export const WishItem = ({ item, handleDelete }) => {
  return (
    <React.Fragment>
      <Card sx={{ bgcolor: "aqua", }} className="App">
        <CardContent>
          <h3>{item}</h3>
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
