import React, { Dispatch, ReactNode, createContext, useState } from "react";
import Events from "../event/Events";
import Collections from "../collections/Collections";

type TActions = "events" | "collections";

interface IActiveButton {
  activeButton: string;
  setActiveButton: React.Dispatch<React.SetStateAction<TActions>>;
}

export const StoreContext = createContext<IActiveButton>({
  activeButton: "events",
  setActiveButton: () => {},
});

const StoreProvider: React.FC = () => {
  const [activeButton, setActiveButton] = useState<TActions>("events");

  const handleCapsuleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    title: TActions
  ) => {
    setActiveButton(title);
  };

  return (
    <StoreContext.Provider value={{ activeButton, setActiveButton }}>
      {activeButton === "events" ? <Events /> : <Collections />}
      <div className="w-[8%] fixed h-[100%] top-0 bottom-0 left-[60%] bg-violet-400 overflow-hidden max-mobile:hidden">
        <div className="flex rotate-90  whitespace-nowrap">
          <div className=" animate-infinite-scroll-up text-4xl text-black font-bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            reprehenderit consectetur est eligendi sint cumque sapiente
            praesentium neque suscipit eum, magni repellat! Voluptas deleniti
            quidem quaerat neque nam, obcaecati recusandae?
          </div>
        </div>
      </div>
      <div className="absolute -bottom-48 left-12 max-mobile:bottom-0 max-mobile:static w-fit
      ">
        <div className="flex rounded-full overflow-hidden bg-gray-800 float-left ml-4 m-8 max-mobile:float-none max-mobile:m-8">
          <button
            title="events"
            className={`px-8 py-2 rounded-full transition-colors duration-600 w-[141px] font-medium  ${
              activeButton === "events" ? "bg-gray-600" : "bg-gray-800"
            }`}
            onClick={(e) => handleCapsuleClick(e, "events")}
          >
            Events
          </button>
          <button
            title="collections"
            className={`px-8 py-2 rounded-full transition-colors duration-600 font-medium ${
              activeButton === "collections" ? "bg-gray-600" : "bg-gray-800"
            }`}
            onClick={(e) => handleCapsuleClick(e, "collections")}
          >
            Collections
          </button>
        </div>
      </div>
    </StoreContext.Provider>
  );
};

export default StoreProvider;
