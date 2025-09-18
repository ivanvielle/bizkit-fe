import { useState, useMemo, useEffect } from "react";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";

// context
import ThemeContext from "../contexts/ThemeContext";

// overrides
import breakpointsOverrides from "../config/theme/overrides/breakpointsOverrides";
import componentsOverrides from "../config/theme/overrides/componentsOverrides";
import paletteOverrides from "../config/theme/overrides/paletteOverrides";
import typographyOverrides from "../config/theme/overrides/typographyOverrides";

const getInitialThemeMode = () => {
    const stored = localStorage.getItem("themeMode");
    if (stored) return stored;

    // optional respect system dark mode
    if (window.matchMedia("(prefers-color-scheme: dark").matches) {
        return "dark";
    }

    return "light";
};

// not to be confused from ThemeProvider of Mui
const ThemeContextProvider = ({ children }) => {
    const [mode, setMode] = useState(getInitialThemeMode);

    const toggleMode = () => setMode(prev => (prev === "light" ? "dark" : "light"));

    useEffect(() => {
        localStorage.setItem("themeMode", mode);
    }, [mode]);

    const theme = useMemo(() => {
        let themeSettings = createTheme({
            breakpoints: breakpointsOverrides,
            direction: "ltr",
            palette: {
                ...paletteOverrides,
                mode,
            },
            typography: typographyOverrides,
            components: componentsOverrides,
        });

        return responsiveFontSizes(themeSettings);
    }, [mode]);

    return (
        <ThemeContext.Provider value={{ mode, toggleMode }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
