import { cloneElement, createContext, useContext, useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const ModalContext = createContext();

function Modal({ children }) {
  const [open, setOpen] = useState("");
  const close = () => setOpen("");

  return (
    <ModalContext.Provider value={{ open, setOpen, close }}>
      {children}
    </ModalContext.Provider>
  );
}

const Hamburger = styled.button`
  background-color: none;
  font-size: 2.5rem;
`;

function ModalButton({ children, opens, category }) {
  const { setOpen } = useContext(ModalContext);

  if (category)
    return (
      <Button
        onClick={() => {
          setOpen(opens);
        }}
        variation="transparent"
        size="iconText"
      >
        {children}
      </Button>
    );

  return (
    <Hamburger
      onClick={() => {
        setOpen(opens);
      }}
    >
      {children}
    </Hamburger>
  );
}

function ModalWindow({ name, children }) {
  const { open, close } = useContext(ModalContext);

  if (open !== name) return null;

  return cloneElement(children, { close });
}

Modal.Button = ModalButton;
Modal.Window = ModalWindow;

export default Modal;
