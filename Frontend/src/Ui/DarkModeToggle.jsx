import { useDarkMode } from "../context/DarkModeContext";

function DarkModetoggle() {
    const {isDarkMode, toggleDarkMode} = useDarkMode();

    return ( <button onClick={toggleDarkMode} className="border p-2">Dark Mode Toggle</button> );
}

export default DarkModetoggle;