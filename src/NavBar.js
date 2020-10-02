import React, { useContext } from "react";
import { EventContext } from "./EventContext";

const NavBar = () => {
  const [events, setEvents] = useContext(EventContext);

  return (
    <div className="Nav">
      <nav>
        <h3>Tech-Talk</h3>
        <p>Total Number: {events.length}</p>
      </nav>
    </div>
  );
};

export default NavBar;
