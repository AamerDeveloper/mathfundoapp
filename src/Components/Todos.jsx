import React from "react";
import { TaskList } from "./Todos/TaskList";
import { TechList } from "./Todos/TechList";
import { DishList } from "./Todos/DishList";
import { WishList } from "./Todos/WishList";

export const Todos = () => {
  return (
    <React.Fragment>
      <h3>TODOS LIST</h3>
      <WishList />   
      <hr />
      <TechList />
      <hr />
      <DishList />
      <hr />
      <TaskList />
    </React.Fragment>
  );
};
