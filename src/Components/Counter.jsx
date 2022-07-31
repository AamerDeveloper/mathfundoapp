import { Button, Card, CardContent } from "@mui/material";
import React, { useState } from "react";

export const Counter = () => {
  const [num, setnum] = useState(0);
  return (
    <Card>
      <CardContent>
        <Button variant="contained" onClick={() => setnum(num - 1)}>
          -
        </Button>
        <b>{num}</b>
        <Button variant="contained" onClick={() => setnum(num + 1)}>
          +
        </Button>
      </CardContent>
    </Card>
  );
};
