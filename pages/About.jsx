import { useContext } from "react";
import { ContextoEjemplo } from "../context/EjemploContextProvider";

const About = () => {
  const { counter, setCounter } = useContext(ContextoEjemplo);
  return (
    <div>
      About
      <div>HOME:{counter}</div>;
      <button onClick={() => setCounter(counter - 1)}>-1</button>
    </div>
  );
};

export default About;
