import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Numbercomp } from "./Numbercomp";
import { Tables } from "./Tables";
import { Squar } from "./Squar";
import { Numsquar } from "./Numsquar";
import { Topnav } from "./Topnav";
import { Geo } from "./Geo";
import { Todos } from "./Todos";

export const Home = () => {
  return (
    <React.Fragment>
      {/* <Numbercomp />
            <Tables/>
            <Squar/> */}
      <BrowserRouter>
        <Topnav />

        <Routes>
          <Route path="/Numbers" element={<Numbercomp />}></Route>
          <Route path="/Table" element={<Tables />}></Route>
          <Route path="/Squar" element={<Squar />}></Route>
          <Route path="/NumSquar" element={<Numsquar />}></Route>
          <Route path="/Geo" element={<Geo />} />
          <Route path="/Todos" element={<Todos />}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
