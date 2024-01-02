import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../contexts/DarkModeContext";
import Button from "./Button";
import Row from "./Row";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <Button onClick={toggleDarkMode} size="medium" variation="transparent">
      <Row>
        {isDarkMode ? (
          <>
            {" "}
            <span>
              <HiOutlineSun />
            </span>{" "}
            <span>Day</span>{" "}
          </>
        ) : (
          <>
            <span>
              <HiOutlineMoon />
            </span>{" "}
            <span>Night</span>
          </>
        )}
      </Row>
    </Button>
  );
}

export default DarkModeToggle;
