import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import Button from "./Button";

const ModalContext = createContext();

function Modal({ children }) {
  const [open, setOpen] = useState("");

  useEffect(
    function () {
      if (open) {
        console.log("runhua");
        document.documentElement.classList.add("hidden");
      } else {
        console.log("haa bhai");
        document.documentElement.classList.remove("hidden");
      }
    },
    [open]
  );
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
