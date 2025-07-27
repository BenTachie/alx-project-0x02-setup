import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">ALX Project</h1>
      <nav className="space-x-4">
        <Link href="/home" className="text-blue-600 hover:underline">
          Home
        </Link>
        <Link href="/about" className="text-green-600 hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
