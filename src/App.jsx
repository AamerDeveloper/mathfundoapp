import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Home } from "./Components/Home";
import "./App.css";

function App() {
  return (
    <React.Fragment className="App">
      <Card>
        <CardContent>
          <Home />
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default App;
