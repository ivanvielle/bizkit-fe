import { Box, CssBaseline, useTheme } from "@mui/material";

// providers
import { AuthProvider } from "./contexts/AuthContextProvider";
import { ThemeContextProvider } from "./contexts/ThemeContextProvider";

// routes
import AppRouter from "./routes/AppRouter";

function App() {
    const theme = useTheme();

    return (
        <AuthProvider>
            <ThemeContextProvider>
                <CssBaseline />
                <Box component="div" className="app">
                    <AppRouter />
                </Box>
            </ThemeContextProvider>
        </AuthProvider>
    );
}

export default App;
