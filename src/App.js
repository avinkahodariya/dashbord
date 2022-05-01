import React from "react";
import Sidebar from "./componants/sidebar/Sidebar";
import Navbar from "./componants/sidebar/Navbar";
import "./componants/sidebar/index.scss";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import UnderContruction from "./componants/CommanCompo/UnderContruction";
import DashBoard from "./componants/DashBoard";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar>
          <Sidebar>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/industry" element={<UnderContruction />} />
              <Route path="/title" element={<UnderContruction />} />
              <Route path="/location" element={<UnderContruction />} />
              <Route path="/revenue" element={<UnderContruction />} />
              <Route path="/employees" element={<UnderContruction />} />
              <Route path="/type" element={<UnderContruction />} />
              <Route path="/industry" element={<UnderContruction />} /> */}
            </Routes>
          </Sidebar>
        </Navbar>
        <NotificationContainer />
      </BrowserRouter>
      ,
    </>
  );
};

export default App;
