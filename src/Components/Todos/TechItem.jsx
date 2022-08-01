import { Card, CardContent } from "@mui/material";
import React from "react";

export const TechItem = ({ item }) => {
  return (
    <React.Fragment>
      <Card sx={{ bgcolor: "#FF33A2", color: "#ffffff" }}>
        <CardContent>{item}</CardContent>
      </Card>
    </React.Fragment>
  );
};
