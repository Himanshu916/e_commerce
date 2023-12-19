import { createContext, useContext, useState } from "react";

const QuantityContext = createContext();

function QuantityProvider({ children }) {
  const [quantity, setQuantity] = useState(1);

  function increaseHandler() {
    setQuantity((quantity) => quantity + 1);
  }

  function decreaseHandler() {
    setQuantity((quantity) => quantity - 1);
  }
  return (
    <QuantityContext.Provider
      value={{ quantity, increaseHandler, decreaseHandler }}
    >
      {children}
    </QuantityContext.Provider>
  );
}

function useQuantity() {
  const context = useContext(QuantityContext);
  if (context === undefined)
    throw new Error("Quantity Context used out of Quantity Provider");

  return context;
}

export { useQuantity, QuantityProvider };
