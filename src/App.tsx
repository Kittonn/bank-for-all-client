import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Dashboard from "./pages/Dashboard";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  );
};

export default App;
