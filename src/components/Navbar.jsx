import React from "react";
import Image from "next/image";

const Navbar = () => {
  const MENU_ITEMS = ["Pograms", "Teachers", "About US"];
  return (
    <div className="  flex justify-between items-center rounded-lg backdrop-blur-sm    border w-full border-neutral-300 p-3">
      <div className="w-24 h-12 relative ">
        <Image
          src="/edrev_logo.png"
          fill={true}
          alt="Logo EdRev"
          className=" object-contain"
        />
      </div>
      <div className="flex justify-center gap-4">
        {MENU_ITEMS.map((item, key) => (
          <a href="" key={item}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
