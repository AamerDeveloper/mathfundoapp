import { Grid } from "@mui/material";
import React, { useState } from "react";
import { TaskItem } from "./TaskItem";

export const TaskList = () => {
  const [newTask, setnewTask] = useState("");
  const [data, setdata] = useState([
    "BreakFast",
    "Getting Ready",
    "Goto Office",
    "Check Emails",
  ]);

  const handleAdd = () => {
    setdata([...data, newTask]);
  };

  return (
    <React.Fragment>
      <h4>Task List</h4>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <input type="text" onChange={(e) => setnewTask(e.target.value)} />
          <button onClick={handleAdd}>Add</button>
        </Grid>
        {data.map((item) => (
          <Grid item xs={4}>
            <TaskItem item={item} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
