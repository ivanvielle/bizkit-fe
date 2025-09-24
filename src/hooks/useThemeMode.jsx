import { useContext } from "react";

// context
import { ThemeContext } from "../contexts/ThemeContextProvider";

// not to be confused from useTheme of Mui
const useThemeMode = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) throw new Error(`ThemeContext must be used inside ThemeContextProvider`);

    return themeContext;
};

export default useThemeMode;
