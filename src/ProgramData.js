import React, { useContext } from "react";
import { EventContext } from "./EventContext";

const EventList = () => {
  const [events, setEvents] = useContext(EventContext);

  return (
    <div>
      {events.map((event) => (
        <div> {event.name} </div>
      ))}
    </div>
  );
};
export default EventList;
