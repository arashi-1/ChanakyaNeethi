import React from "react";
import { Routes, Route } from "react-router-dom";
import Chapter1 from "./utlis/pages/Chapter1";
import Chapter2 from "./utlis/pages/Chapter2";
import Chapter3 from "./utlis/pages/Chapter3";
import Layout from "./components/Layout";
import Chapter4 from "./utlis/pages/Chapter4";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/chapter/1" element={<Chapter1 />} />
        <Route path="/chapter/2" element={<Chapter2 />} />
        <Route path="/chapter/3" element={<Chapter3 />} />
        <Route path="/chapter/4" element={<Chapter4 />} />
      </Routes>
    </>
  );
};

export default App;
