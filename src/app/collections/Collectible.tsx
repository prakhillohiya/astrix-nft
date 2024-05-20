import React from "react";

const Collectible = () => {
  return (
    <div className="flex flex-col gap-1 bg-violet-400 rounded-lg">
      <div className="flex items-center justify-between p-2">
        <span className="rounded-full bg-black p-1 text-xs">2024</span>
        <span className="text-xs text-black font-bold">By Pablo</span>
      </div>

      <h2 className="mr-auto ml-auto text-black font-bold">Collectible Name</h2>
      <div className="p-4">
        <img src="/nft.jpg" alt="nft"  className="rounded-lg"/>
      </div>
    </div>
  );
};

export default Collectible;
