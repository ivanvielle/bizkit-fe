import { createContext, useState, useMemo, useEffect } from "react";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";

// overrides
import breakpointsOverrides from "../config/theme/overrides/breakpointsOverrides";
import componentsOverrides from "../config/theme/overrides/componentsOverrides";
import paletteOverrides from "../config/theme/overrides/paletteOverrides";
import typographyOverrides from "../config/theme/overrides/typographyOverrides";

// context
const ThemeContext = createContext(null);

// initial states
const getInitialThemeMode = () => {
    const storedThemeMode = localStorage.getItem("themeMode");
    if (storedThemeMode) return storedThemeMode;

    // optional respect system dark mode
    if (window.matchMedia("(prefers-color-scheme: dark").matches) {
        return "dark";
    }

    return "light";
};

// provider
// not to be confused from ThemeProvider of Mui
const ThemeContextProvider = ({ children }) => {
    const [mode, setMode] = useState(getInitialThemeMode);
    const [openDrawer, setOpenDrawer] = useState(true);
    const DRAWER_WIDTH = 240;
    const COLLAPSED_DRAWER_WIDTH = 85;

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
        <ThemeContext.Provider
            value={{
                mode,
                toggleMode,
                openDrawer,
                setOpenDrawer,
                DRAWER_WIDTH,
                COLLAPSED_DRAWER_WIDTH,
            }}
        >
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeContextProvider };
