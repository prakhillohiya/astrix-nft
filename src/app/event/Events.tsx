import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import Collections from "../collections/Collections";
import { StoreContext } from "../context/StoreProvider";

const Events = () => {
  return (
    <>
      <div className="max-mobile:flex-col flex p-8 ">
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
              EVEN
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
            Explore Your First <br />
            <span>Event</span>
          </h2>
          <div className="flex flex-col gap-4 mt-8">
            <h2 className="text-4xl font-bold">Event Name</h2>
            <div className="flex gap-4 max-mobile:flex-col">
              <div className="flex items-center gap-2">
                <Icon
                  icon="ion:location-outline"
                  width={"25px"}
                  height={"22px"}
                />
                <h2 className="text-xl font-medium">Venue</h2>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  icon="lucide:alarm-clock"
                  width={"25px"}
                  height={"22px"}
                />
                <h2 className="text-xl font-medium">04/3/2024</h2>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="la:at" width={"25px"} height={"22px"} />
                <h2 className="text-xl font-medium">19:00</h2>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              expedita, magni libero vitae perspiciatis sed voluptates eaque
              facere impedit hic eum, corrupti vero quidem! Culpa esse quae sit
              voluptatem accusamus!
            </p>
            <h2 className="text-2xl font-medium">Artist Lineup</h2>
            <div className="flex mt-8 gap-2">
              <div className="flex-1">
                <img
                  src="/rajnlove.jpg"
                  alt="rajnlove"
                  className="h-[100px] w-[120px] rounded-lg "
                />
              </div>
              <div className="transform scale-150 flex-1">
                <img
                  src="/rdne.jpg"
                  alt="rdne"
                  className="h-[100px] w-[120px] rounded-lg"
                />
              </div>
              <div className="flex-1">
                <img
                  src="/yankrukov.jpg"
                  alt="yankrukov"
                  className="h-[100px] w-[120px] rounded-lg"
                />
              </div>
            </div>
            <div className="mt-auto flex">
              <div className="mr-auto mt-[5rem]">
                <img
                  src="/qr-code.jpg"
                  alt="qr-code"
                  className="h-[70px] w-[70px] "
                />
              </div>
              <div className="mt-auto">
                <button className="rounded-3xl bg-amber-300 font-extrabold tracking-wide p-[0.75rem] text-black">
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
