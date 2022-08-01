import { Card, CardContent } from "@mui/material";
import React from "react";

export const TaskItem = ({ item }) => {
  return (
    <React.Fragment>
      <Card sx={{ bgcolor: "coral", color: "#ffffff" }}>
        <CardContent>{item}</CardContent>
      </Card>
    </React.Fragment>
  );
};
