import { cloneElement, createContext, useContext, useState } from "react";
import styled from "styled-components";

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

function ModalButton({ children, opens }) {
  const { setOpen } = useContext(ModalContext);
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
