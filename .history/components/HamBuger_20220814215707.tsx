import React from "react";

const HamBuger: React.FC = () => {
  return (
    <div className="group">
      <div className=" bg-slate-100 h-[.1rem] w-6 mb-[.4rem] group-hover:rotate-45 group-hover:m-0 "></div>
      <div className=" bg-slate-100 h-[.1rem] w-6  group-hover:bg-red-400 group-hover:-rotate-45"></div>
      <div className=" bg-slate-100 h-[.1rem] w-6  mt-[.4rem]"></div>
    </div>
  );
};

export default HamBuger;
