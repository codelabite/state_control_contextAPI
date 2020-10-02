import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StudentsList from "./component/students";
import StudentsProvider from "./component/studentsContext";
import AddEntry from "./component/addEntry";

function App() {
  return (
    <StudentsProvider>
      <div className="App">
        <header className="App-header">
          <h1> Welcome to Tech Talk</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <AddEntry />
        </header>

        <div>
          <StudentsList />
        </div>
      </div>
    </StudentsProvider>
  );
}

export default App;
