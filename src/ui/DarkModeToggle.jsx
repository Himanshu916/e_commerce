import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../contexts/DarkModeContext";
import Button from "./Button";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <Button onClick={toggleDarkMode} size="medium" variation="transparent">
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </Button>
  );
}

export default DarkModeToggle;
