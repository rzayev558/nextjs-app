import React from "react";

interface SloganProps {
  slogan: string;
}
function Slogan(props: SloganProps) {
  return (
    <div className="relative bg-yellow-400 text-black font-bold py-2 px-6 rounded-md">
      <div className="absolute top-0 left-0 border-solid border-l-[12px] border-b-[12px] border-t-0 border-r-0"></div>
      <div className="absolute bottom-0 right-0 w-1 h-1 bg-black rotate-45 translate-x-1/2 translate-y-1/2"></div>
      <span>{props.slogan}</span>
    </div>
  );
}

export default Slogan;
