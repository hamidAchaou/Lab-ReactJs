import React, { createContext } from "react";
import ListNames from "./ListNames";
import "./Context.css";

// Create the Names context
export const NamesContext = createContext();

const ContextProvider = ({ children }) => {
  const users = [
    { id: "1", name: "Khalid", email: "khalid@gmail.com" },
    { id: "2", name: "Hamid", email: "Hamid@gmail.com" },
    { id: "3", name: "Younes", email: "younes@gmail.com" },
    { id: "4", name: "Mohamed", email: "mohamed@gmail.com" },
    { id: "5", name: "oumaima", email: "oumaima@gmail.com" },
  ];

  return (
    <NamesContext.Provider value={users}>{children}</NamesContext.Provider>
  );
};

// Main component rendering the provider and child components
const Context = () => {
  return (
    <ContextProvider>
      <div className="context-container">
        <h1 className="context-title">Welcome to User Context</h1>
        <ListNames />
      </div>
    </ContextProvider>
  );
};

export default Context;
