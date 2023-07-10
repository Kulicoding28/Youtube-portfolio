import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center py-4 px-2 mt-24">
      <div className="flex items-center gap-[1ch]">
        <div>
          <Link
            href="#"
            className="text-sm font-semibold tracking-widest text-[#d9d9d9]"
          >
            Copyright@Ahmad
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
