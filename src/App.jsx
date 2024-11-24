import React from "react";
import { Routes, Route } from "react-router-dom";
import Chapter1 from "./utlis/pages/Chapter1";
import Chapter2 from "./utlis/pages/Chapter2";
import Chapter3 from "./utlis/pages/Chapter3";
import Layout from "./components/Layout";
import Chapter4 from "./utlis/pages/Chapter4";
import Chapter5 from "./utlis/pages/Chapter5";
import Chapter6 from "./utlis/pages/Chapter6";
import Chapter7 from "./utlis/pages/Chapter7";
import Chapter8 from "./utlis/pages/chapter8";
import Chapter9 from "./utlis/pages/Chapter9";

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
        <Route path="/chapter/7" element={<Chapter7 />} />
        <Route path="/chapter/8" element={<Chapter8 />} />
        <Route path="/chapter/9" element={<Chapter9 />} />
      </Routes>
    </>
  );
};

export default App;
