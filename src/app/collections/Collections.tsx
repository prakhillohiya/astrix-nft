import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import { StoreContext } from "../context/StoreProvider";
import Collectible from "./Collectible";

const Collections = () => {
  return (
    <div className=" max-mobile:flex-col flex gap-8">
      <div className="w-[60%] max-mobile:w-[100%]">
        <h2 className="text-4xl text-amber-300 p-4 font-bold">Astrix.</h2>
        <div className="absolute mt-8 ml-8">
          <h1 className="text-8xl font-[900] tracking-wider text-zinc-600">
            ASTR
          </h1>
          <span className="text-8xl font-[900] tracking-wider text-zinc-600">
            IX
          </span>
          <br />
          <h1 className="text-8xl font-[900] tracking-wider mt-8 text-zinc-600">
            EVENTS
          </h1>
          <span className="text-8xl font-[900] tracking-wider text-zinc-600">
            TS
          </span>
        </div>
        <div className="flex gap-4 overflow-hidden mt-[4rem]">
          <div className="animate-scroll-items flex-shrink-0">
            <img
              src="/concert.jpg"
              alt="image"
              className="h-[600px] w-[400px] relative"
            />
            <div className="flex flex-col gap-8 absolute bottom-4 p-8">
              <h2 className="text-6xl">Event Name</h2>
              <div className="flex gap-4 items-center">
                <Icon
                  icon="ion:location-outline"
                  width={"30px"}
                  height={"30px"}
                />
                <h2 className="text-xl font-medium">Venue</h2>
              </div>
            </div>
          </div>
          <div className="animate-scroll-items flex-shrink-0">
            <img
              src="/temple.jpg"
              alt="image"
              className="h-[600px] w-[400px] relative"
            />
            <div className="flex flex-col gap-8 absolute bottom-4 p-8">
              <h2 className="text-6xl">Event Name</h2>
              <div className="flex gap-4 items-center">
                <Icon
                  icon="ion:location-outline"
                  width={"30px"}
                  height={"30px"}
                />
                <h2 className="text-xl font-medium">Venue</h2>
              </div>
            </div>
          </div>
          <div className="animate-scroll-items flex-shrink-0">
            <img
              src="/thiago-borrere.jpg"
              alt="image"
              className="h-[600px] w-[400px] relative"
            />
            <div className="flex flex-col gap-8 absolute bottom-4 p-8">
              <h2 className="text-6xl">Event Name</h2>
              <div className="flex gap-4 items-center">
                <Icon
                  icon="ion:location-outline"
                  width={"30px"}
                  height={"30px"}
                />
                <h2 className="text-xl font-medium">Venue</h2>
              </div>
            </div>
          </div>
          <div className="animate-scroll-items flex-shrink-0">
            <img
              src="/color-splash.jpg"
              alt="image"
              className="h-[600px] w-[400px] relative"
            />
            <div className="flex flex-col gap-8 absolute bottom-4 p-8">
              <h2 className="text-6xl">Event Name</h2>
              <div className="flex gap-4 items-center">
                <Icon
                  icon="ion:location-outline"
                  width={"30px"}
                  height={"30px"}
                />
                <h2 className="text-xl font-medium">Venue</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[32%] ml-[8%] p-6 max-mobile:w-[100%]">
        <h2 className="text-2xl font-medium">
          Explore Your First <br /> <span>Collectible</span>
        </h2>
        <div className="flex flex-col gap-4 mt-8">
          <h2 className="text-4xl font-bold">
            Meta
            <br />
            <span>Lives</span>
          </h2>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-medium">Live in Astrix</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              expedita, magni libero vitae perspiciatis sed voluptates eaque
              facere impedit hic eum, corrupti vero quidem! Culpa esse quae sit
              voluptatem accusamus!
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex p-2">
              <img
                src="/daliladalprat.jpg"
                alt="daliladalprat"
                className="w-[50px] h-[50px] rounded-full"
              />
              <img
                src="/nkhajotia.jpg"
                alt="nkhajotia"
                className="w-[50px] h-[50px] rounded-full -ml-4"
              />
              <img
                src="/danxavier.jpg"
                alt="danxavier"
                className="w-[50px] h-[50px] rounded-full -ml-4"
              />
              <img
                src="/alipazani.jpg"
                alt="alipazani"
                className="w-[50px] h-[50px] rounded-full -ml-4"
              />
            </div>
            <p className="font-medium">22k People interested</p>
          </div>
          <div className="flex mt-8 gap-2 flex-col ">
            <h2 className="text-xl">Collectibles</h2>
            <div className="flex gap-4 max-mobile:flex-col">
              <Collectible />
              <Collectible />
              <Collectible />
            </div>
          </div>
          <div className="flex mt-8">
            <span className="ml-auto">
              <button className="rounded-3xl bg-amber-300 font-extrabold p-[0.75rem] pl-4 pr-4 text-black tracking-wide">
                Join Waitlist
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
