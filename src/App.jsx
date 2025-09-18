import { Box, CssBaseline } from "@mui/material";

// providers
import AuthProvider from "./providers/AuthProvider";
import ThemeContextProvider from "./providers/ThemeContextProvider";

// routes
import AppRouter from "./routes/AppRouter";

function App() {
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
