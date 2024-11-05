import React from "react";

const Header = () => {
  return (
    <>
      <nav className=" bg-orange-500 flex items-center justify-between py-3 px-10">
        <h1 className="text-xl">चाणक्य नीति</h1>
        <div className=" flex items-center gap-6">
          <h1>Home</h1>
          <h1>About</h1>
          <h1>More</h1>
          <h1>Login</h1>
        </div>
      </nav>
    </>
  );
};

export default Header;
