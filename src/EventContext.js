import React, { createContext, useState } from "react";

export const EventContext = createContext();

const EventProvider = (props) => {
  const [events, setEvents] = useState([
    {
      name: "Peter",
      id: 1,
    },

    {
      name: "Bukky",
      id: 2,
    },

    {
      name: "Ndidi",
      id: 3,
    },

    {
      name: "Ola",
      id: 4,
    },
  ]);

  return (
    <EventContext.Provider value={[events, setEvents]}>
      {props.children}
    </EventContext.Provider>
  );
};

export default EventProvider;
