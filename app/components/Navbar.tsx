import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-2">
      <div className="flex items-center gap-[1ch]">
        <div className="w-5 h-5 bg-[#9D6896] rounded-full" />
        <Link
          href="#"
          className="text-sm font-semibold tracking-widest text-[#727070] hover:text-[#d9d9d9] transition duration-200 ease-in-out"
        >
          AHMAD
        </Link>
      </div>

      <div className="flex gap-12 text-md text-[#727070] font-semibold">
        <Link
          href="/#home"
          className="hover:text-[#d9d9d9] transition duration-200 ease-in-out"
        >
          Home
        </Link>
        <Link
          href="/#about"
          className="hover:text-[#d9d9d9] transition duration-200 ease-in-out"
        >
          About
        </Link>
        <Link
          href="/#skills"
          className="hover:text-[#d9d9d9] transition duration-200 ease-in-out"
        >
          Skills
        </Link>
        <Link
          href="/#projects"
          className="hover:text-[#d9d9d9] transition duration-200 ease-in-out"
        >
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
