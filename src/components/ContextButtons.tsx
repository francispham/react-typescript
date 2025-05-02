import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

export const ContextButtons = () => {
  const context = useContext(GlobalContext);
  const { globalValue, turnOn, turnOff } = context;

  return (
    <section className="p-3 pl-0">
      <h2>Current State of globalValue: {globalValue?.toString()}</h2>
      <button
        className="flex items-center bg-blue-500 px-4 py-3 m-1 rounded-2xl text-white hover:bg-blue-400"
        onClick={turnOn}
      >
        ON ContextButton
      </button>
      <button
        className="flex items-center bg-blue-500 px-4 py-3 m-1 rounded-2xl text-white hover:bg-blue-400"
        onClick={turnOff}
      >
        OFF ContextButton
      </button>
    </section>
  );
};
