import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home";
import Index from "../src/Pages/Index";
import NotFound from "../src/Pages/NotFound";

 const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;