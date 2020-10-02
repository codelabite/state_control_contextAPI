import React, { createContext, useState } from "react";

export const StudentsContext = createContext();

const StudentsProvider = (props) => {
  const [students, setStudents] = useState([
    {
      name: "Peter",
      id: 1,
      email: "peter@gmail.com",
    },

    {
      name: "Bukky",
      id: 2,
      email: "bukky@gmail.com",
    },

    {
      name: "Ubani",
      id: 3,
      email: "ubani@gmail.com",
    },

    {
      name: "Ndidi",
      id: 4,
      email: "ndidi@gmail.com",
    },

    {
      name: "Ola",
      id: 5,
      email: "ola@gmail.com",
    },
  ]);

  return (
    <StudentsContext.Provider value={[students, setStudents]}>
      {props.children}
    </StudentsContext.Provider>
  );
};
export default StudentsProvider;
