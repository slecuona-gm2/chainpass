"use client";

import Image from "next/image";
import type { NextPage } from "next";
import { CreateEvent } from "~~/components/CreateEvent";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-20 gap-2 bg-gradient-page">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-md text-[#B773FB] mb-2">GET READY</span>
            <div className="flex justify-center">
              <span className="block text-5xl font-bold mr-4">Upcoming Events</span>
              <Image alt="calendar" src={"/working.svg"} width={"50"} height={"50"} />
            </div>
          </h1>
          <p className="text-center text-lg">
            Expand your knowlegde with like-minded.{" "}
            <span className="text-center text-lg font-bold">
              Check out the list of events below and sign up for the ones that interest you the most.
            </span>
          </p>
        </div>
        <div className="w-1/2 border-dashed-lines flex flex-col items-center justify-center py-10">
          <Image alt="calendar" src={"/calendar.svg"} width={"70"} height={"70"} />
          <p className="text-white text-lg mb-4">There are no available events</p>
          <CreateEvent />
        </div>
      </div>
    </>
  );
};

export default Home;
