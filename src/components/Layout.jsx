import React from "react";
import Header from "./Header";
import Footer from "./Footer"; // Ensure case matches
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      {/* Navigation buttons can be included here */}
      <div>
        <div>
          <div>
            <h1 className=" font-samarkan text-5xl flex items-center justify-center mt-5">
              Chanakya Neethi
            </h1>
            <p className="mt-3 text-lg font-semibold text-gray-100 bg-gray-800 p-4 rounded-lg shadow-md ">
              <b className="text-yellow-400">Chanakya Neethi</b> (or Chanakya
              Niti) is a compilation of aphorisms and teachings by Chanakya,
              also known as Kautilya or Vishnugupta, who was an ancient Indian
              teacher, philosopher, economist, and advisor to Emperor
              Chandragupta Maurya. His strategic acumen and insights laid the
              foundation for the Maurya Empire in ancient India, and his works
              continue to be highly regarded for their practical wisdom on
              various aspects of life, governance, and personal conduct.
            </p>
          </div>
        </div>
      </div>
      <div className="navigation-buttons flex items-center justify-center gap-96 mb-2">
        <Link to="/chapter/1">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5">
            <div className="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-xl font-bold">1</h1>
            </div>
            <h1 className="text-2xl ml-24 font-bold">Chapter 1</h1>
          </button>
        </Link>

        <Link to="/chapter/2">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5">
            <div className="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-xl font-bold">2</h1>
            </div>
            <h1 className="text-2xl ml-24 font-bold">Chapter 2</h1>
          </button>
        </Link>
      </div>
      <div className="navigation-buttons flex items-center justify-center gap-96 mb-2">
        <Link to="/chapter/3">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5">
            <div className="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-xl font-bold">3</h1>
            </div>
            <h1 className="text-2xl ml-24 font-bold">Chapter 3</h1>
          </button>
        </Link>

        <Link to="/chapter/1">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5">
            <div className="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-xl font-bold">4</h1>
            </div>
            <h1 className="text-2xl ml-24 font-bold">Chapter 4</h1>
          </button>
        </Link>
      </div>
      <div className="navigation-buttons flex items-center justify-center gap-96 mb-2">
        <Link to="/chapter/1">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5">
            <div className="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-xl font-bold">5</h1>
            </div>
            <h1 className="text-2xl ml-24 font-bold">Chapter 5</h1>
          </button>
        </Link>

        <Link to="/chapter/1">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5">
            <div className="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-xl font-bold">6</h1>
            </div>
            <h1 className="text-2xl ml-24 font-bold">Chapter 6</h1>
          </button>
        </Link>
      </div>
      <div className="navigation-buttons flex items-center justify-center gap-96 mb-2">
        <Link to="/chapter/1">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5">
            <div className="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-xl font-bold">7</h1>
            </div>
            <h1 className="text-2xl ml-24 font-bold">Chapter 7</h1>
          </button>
        </Link>

        <Link to="/chapter/1">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5">
            <div className="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-xl font-bold">8</h1>
            </div>
            <h1 className="text-2xl ml-24 font-bold">Chapter 8</h1>
          </button>
        </Link>
      </div>
      <div className="navigation-buttons flex items-center justify-center gap-96 mb-2">
        <Link to="/chapter/1">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5">
            <div className="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-xl font-bold">9</h1>
            </div>
            <h1 className="text-2xl ml-24 font-bold">Chapter 9</h1>
          </button>
        </Link>

        <Link to="/chapter/1">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5">
            <div className="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-xl font-bold">10</h1>
            </div>
            <h1 className="text-2xl ml-24 font-bold">Chapter 10</h1>
          </button>
        </Link>
      </div>
      <div className="navigation-buttons flex items-center justify-center gap-96 mb-2">
        <Link to="/chapter/1">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5">
            <div className="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-xl font-bold">11</h1>
            </div>
            <h1 className="text-2xl ml-24 font-bold">Chapter 11</h1>
          </button>
        </Link>

        <Link to="/chapter/1">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5">
            <div className="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-xl font-bold">12</h1>
            </div>
            <h1 className="text-2xl ml-24 font-bold">Chapter 12</h1>
          </button>
        </Link>
      </div>
      <div className="navigation-buttons flex items-center justify-center gap-96 mb-2">
        <Link to="/chapter/1">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5">
            <div className="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-xl font-bold">13</h1>
            </div>
            <h1 className="text-2xl ml-24 font-bold">Chapter 13</h1>
          </button>
        </Link>

        <Link to="/chapter/1">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5">
            <div className="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-xl font-bold">14</h1>
            </div>
            <h1 className="text-2xl ml-24 font-bold">Chapter 14</h1>
          </button>
        </Link>
      </div>
      <div className="navigation-buttons flex items-center justify-center gap-96 mb-2">
        <Link to="/chapter/1">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5">
            <div className="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-xl font-bold">15</h1>
            </div>
            <h1 className="text-2xl ml-24 font-bold">Chapter 15</h1>
          </button>
        </Link>

        <Link to="/chapter/1">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5">
            <div className="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-xl font-bold">16</h1>
            </div>
            <h1 className="text-2xl ml-24 font-bold">Chapter 16</h1>
          </button>
        </Link>
      </div>
      <div>
        <Link to="/chapter/1">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5 ml-14">
            <div className="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-xl font-bold">17</h1>
            </div>
            <h1 className="text-2xl ml-24 font-bold">Chapter 17</h1>
          </button>
        </Link>
      </div>
      <Outlet /> {/* This will render the content of the nested routes */}
      <Footer />
    </>
  );
};

export default Layout;
