import React from "react";
import { useContext } from "react";
import { ContextoEjemplo } from "../context/EjemploContextProvider";
const question = () => {
  const { counter, setCounter } = useContext(ContextoEjemplo);
  return <div>question:{counter}</div>;
};

export default question;
