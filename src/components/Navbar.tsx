"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-yellow-600 text-white fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">My Portfolio</h1>
      </div>
    </nav>
  );
};

export default Navbar;
