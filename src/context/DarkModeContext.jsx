import { useEffect } from "react";
import { useContext, useState } from "react";
import { createContext } from "react";

const DarkModeContext = createContext();
export const useDarkMode = () => useContext(DarkModeContext);

export function DarkModeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(false);
	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
		updateDarkMode(!darkMode);
	};
	useEffect(() => {
		const isDark = localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
		console.log(isDark);
		setDarkMode(isDark);
		updateDarkMode(isDark);
	}, []);
	return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
}

function updateDarkMode(darkmode) {
	if (darkmode) {
		document.documentElement.classList.add("darkMode");
		localStorage.theme = "dark";
	} else {
		document.documentElement.classList.remove("darkMode");
		localStorage.theme = "light";
	}
}
