import React from "react";
import { Routes, Route } from "react-router-dom";
import Chapter1 from "./utlis/pages/Chapter1";
import Chapter2 from "./utlis/pages/Chapter2";
import Chapter3 from "./utlis/pages/Chapter3";
import Layout from "./components/Layout";
import Chapter4 from "./utlis/pages/Chapter4";
import Chapter5 from "./utlis/pages/Chapter5";
import Chapter6 from "./utlis/pages/Chapter6";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/chapter/1" element={<Chapter1 />} />
        <Route path="/chapter/2" element={<Chapter2 />} />
        <Route path="/chapter/3" element={<Chapter3 />} />
        <Route path="/chapter/4" element={<Chapter4 />} />
        <Route path="/chapter/5" element={<Chapter5 />} />
        <Route path="/chapter/6" element={<Chapter6 />} />
      </Routes>
    </>
  );
};

export default App;
