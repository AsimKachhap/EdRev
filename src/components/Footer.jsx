import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="md:hidden bg-black p-8 grid grid-cols-1 text-white">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="text-sm md:text-base text-slate-400 font-medium tracking-wide uppercase">
            © 2026 Edrev. All Rights Reserved
          </div>
          <div>Contact us on</div>
          <div>8595762068</div>
          <div>7428258845</div>
        </div>

        <div className="text-[8rem] text-transparent bg-clip-text bg-gradient-to-b from-blue-50/50 to-blue-800">
          Edrev
        </div>
      </div>
      <div className="md:grid bg-black hidden p-16 grid-cols-2 text-white">
        <div className="text-[16rem] text-transparent bg-clip-text bg-gradient-to-b from-blue-50/50 to-blue-800">
          Edrev
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="text-sm md:text-base text-slate-400 font-medium tracking-wide uppercase">
            © 2026 Edrev. All Rights Reserved
          </div>
          <div>Contact us on</div>
          <div>8595762068</div>
          <div>7428258845</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
