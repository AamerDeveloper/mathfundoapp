import React from "react";
import { Card, CardContent } from "@mui/material";
import GirlIcon from "@mui/icons-material/Girl";
import ManIcon from "@mui/icons-material/Man";

export const StudentItem = ({ item }) => {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          {item.gender === "male" ? (
            <ManIcon sx={{ fontSize: 100, color: "blue" }} />
          ) : (
            <GirlIcon sx={{ fontSize: 100, color: "red" }} />
          )}
          <h1>{item.fname}</h1>
          <h5>{item.lname}</h5>
          <hr />
          <h3>{item.age} Years </h3>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
