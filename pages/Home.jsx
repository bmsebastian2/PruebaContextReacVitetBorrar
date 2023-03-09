import { useContext } from "react";
import { ContextoEjemplo } from "../context/EjemploContextProvider";

const Home = () => {
  const hola = "Hola";
  const { counter, setCounter } = useContext(ContextoEjemplo);

  return (
    <>
      <h2>Inicio</h2>
      <h3>Bienvenis doa al inicio</h3>
      <div>HOME:{counter}</div>;
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      {hola}
    </>
  );
};

export default Home;
