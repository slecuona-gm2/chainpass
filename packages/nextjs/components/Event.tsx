import React from "react";
import "tailwindcss/tailwind.css";
import { v4 as uuidv4 } from "uuid";
import { EventModel } from "~~/models/event.model";
import { useGlobalState } from "~~/services/store/store";

export const Event: React.FC<EventModel> = ({ id, title, description, imageUrl, availableTickets }) => {
  const { purchaseTicket } = useGlobalState(state => ({
    purchaseTicket: state.purchaseTicket,
  }));

  const handlePurchaseTicket = (id: string) => {
    try {
      const ticketId = uuidv4();
      // TODO: Connect to blockchain and mint token, if successful allow do local logic.

      purchaseTicket(ticketId, id);
    } catch {}
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={imageUrl} alt="Event" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>Available Tickets: {availableTickets}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={() => handlePurchaseTicket(id)}>
            Get Your Ticket
          </button>
        </div>
      </div>
    </div>
  );
};
