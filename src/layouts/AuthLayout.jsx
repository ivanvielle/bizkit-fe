import { Outlet, Navigate } from "react-router-dom";
import { Box, Container, useTheme } from "@mui/material";

// components
import AuthNavbar from "../components/Navbars/AuthNavbar";
import Copyright from "../components/Links/Copyright";
import ToolbarSpacer from "../components/Spacers/ToolbarSpacer";

// hooks
import useAuth from "../hooks/useAuth";

const AuthLayout = () => {
    const { user } = useAuth();
    const theme = useTheme();

    if (user) return <Navigate to="/dashboard" replace />;

    return (
        <>
            <AuthNavbar />

            <Box component="main" className="content">
                <ToolbarSpacer />
                <Container
                    maxWidth="xl"
                    sx={{
                        height: `calc(100vh - ${theme.mixins.toolbar.minHeight + 10}px)`,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Outlet />
                </Container>
            </Box>

            <Copyright brand="BizKit" />
        </>
    );
};

export default AuthLayout;
