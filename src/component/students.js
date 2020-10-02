import React, { useState, useContext } from "react";

import { StudentsContext } from "./studentsContext";

const StudentsList = (props) => {
  const [students, setStudents] = useContext(StudentsContext);

  return (
    <div>
      {students.map((student) => (
        <div>
          <div>{student.id} </div>
          <div> {student.name}</div>
          <div>{student.email} </div>
        </div>
      ))}
    </div>
  );
};

export default StudentsList;
