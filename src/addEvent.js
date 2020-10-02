import React, { useState, useContext } from "react";
import { EventContext } from "./EventContext";
const AddEvent = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [events, setEvent] = useContext(EventContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateID = (e) => {
    setId(e.target.value);
  };

  const addEvent = (e) => {
    e.preventDefault();
    setEvent((prevEvents) => [...prevEvents, { name: name, id: id }]);
  };

  return (
    <form>
      <input type="text" name="name" onChange={updateName} value={name} />
      <input type="number" name="id" onChange={updateID} value={id} />
      <button onClick={addEvent}>summit</button>
    </form>
  );
};

export default AddEvent;
