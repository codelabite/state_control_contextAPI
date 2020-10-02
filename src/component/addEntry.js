import React, { useState, useContext } from "react";
import { StudentsContext } from "./studentsContext";

const AddEntry = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [students, setStudents] = useContext(StudentsContext);

  const updateId = (e) => {
    setId(e.target.value);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const addEntry = (e) => {
    e.preventDefault();
    setStudents((prevEvent) => [
      ...prevEvent,
      {
        name: name,
        id: id,
        email: email,
      },
    ]);
  };

  return (
    <form>
      <div>
        <input
          type="number"
          name="id"
          placeholder="ID"
          value={id}
          onChange={updateId}
        />
      </div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={updateName}
        />
      </div>

      <div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>

      <button onClick={addEntry}>Enter</button>
    </form>
  );
};

export default AddEntry;

// import React, { useState, useContext } from "react";
// import { StudentsContext } from "./studentsContext";

// const AddEntry = () => {
//   const [name, setName] = useState("");
//   const [id, setId] = useState("");
//   const [email, setEmail] = useState("");
//   const [students, setStudents] = useContext(StudentsContext);

//   const updateId = (e) => {
//     setId(e.target.value);
//   };

//   const updateName = (e) => {
//     setName(e.target.value);
//   };

//   const updateEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const addEntry = (e) => {
//     e.preventDefault();
//     setStudents((prevEvent) => [
//       ...prevEvent,
//       { name: name, id: id, email: email },
//     ]);
//   };

//   return (
//     <form>
//       <div>
//         <input
//           type="number"
//           name="id"
//           placeholder="ID"
//           value={id}
//           onChange={updateId}
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={name}
//           onChange={updateName}
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           name="email"
//           placeholder="Email"
//           value={email}
//           onChange={updateEmail}
//         />
//       </div>
//       <button onClick={addEntry}>summit</button>
//     </form>
//   );
// };

// export default AddEntry;
