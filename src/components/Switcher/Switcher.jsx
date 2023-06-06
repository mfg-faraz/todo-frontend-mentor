import useDarkSide from "../../hooks/useDarkSide";
import moon from "../../assets/images/icon-moon.svg";
import sun from "../../assets/images/icon-sun.svg";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();

  const toggleDarkMode = () => {
    setTheme(colorTheme);
  };

  return (
    <>
      <img
        className="cursor-pointer w-5 h-5"
        src={colorTheme === "light" ? sun : moon}
        alt="sun-icon"
        onClick={toggleDarkMode}
      />
    </>
  );
}
