import React from "react";
import { Event } from "./Event";

interface iProps {
  incomingEvents: any[];
}

export const IncomingEvents: React.FC<iProps> = ({ incomingEvents }: iProps) => {
  return (
    <div className="card w-96 glass">
      {incomingEvents.length === 0 ? (
        <div className="border-accent border-2 flex  justify-center  items-center mx-auto  bg-secondary max-w-64  min-h-48 rounded-xl">
          <p className=" text-zinc-500  font-light text-lg">No events available</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4">
          {incomingEvents.map(event => (
            <Event key={event.id} {...event} />
          ))}
        </div>
      )}
    </div>
  );
};
