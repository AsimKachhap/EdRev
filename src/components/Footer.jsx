import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="md:hidden bg-black p-8 grid grid-cols-1 text-white">
        <div>Some links, coyright, address, etc goes here.</div>
        <div className="text-[8rem] text-transparent bg-clip-text bg-gradient-to-b from-blue-50/50 to-blue-800">
          Edrev
        </div>
      </div>
      <div className="md:grid bg-black hidden p-16 grid-cols-2 text-white">
        <div className="text-[16rem] text-transparent bg-clip-text bg-gradient-to-b from-blue-50/50 to-blue-800">
          Edrev
        </div>
        <div>2</div>
      </div>
    </div>
  );
};

export default Footer;
