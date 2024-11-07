import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1E293b] py-4 px-6 md:px-10">
        {/* Footer content container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          {/* Footer Links */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-white">
            <h1 className="text-center md:text-left">About</h1>
            <h1 className="text-center md:text-left">Contact</h1>
            <h1 className="text-center md:text-left">Privacy</h1>
            <h1 className="text-center md:text-left">Terms</h1>
          </div>

          {/* Copyright */}
          <h1 className="text-center md:text-left text-white mt-4 md:mt-0">
            © Chanakya Neethi
          </h1>
        </div>
      </footer>
    </>
  );
};

export default Footer;
