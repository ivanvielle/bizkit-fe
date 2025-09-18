import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Box, useTheme } from "@mui/material";

// components
import DashboardNavbar from "../components/Navbars/dashboard/DashboardNavbar";
import DashboardSidebar from "../components/Navbars/dashboard/DashboardSidebar";

// hooks
import useAuth from "../hooks/useAuth";
import ToolbarSpacer from "../components/Spacers/ToolbarSpacer";

const DashboardLayout = () => {
    const { user } = useAuth();
    const [openDrawer, setOpenDrawer] = useState(true);
    const theme = useTheme();
    const DRAWER_WIDTH = 240;
    const COLLAPSED_DRAWER_WIDTH = 85;

    if (!user) return <Navigate to="/login" replace />;

    return (
        <Box component="div" sx={{ display: "flex", position: "relative" }}>
            <DashboardSidebar
                drawerWidth={DRAWER_WIDTH}
                collapsedDrawerWidth={COLLAPSED_DRAWER_WIDTH}
                openDrawer={openDrawer}
                theme={theme}
            />
            <Box
                component="div"
                sx={{
                    flexGrow: 1,
                    position: "absolute",
                    left: 0,
                    right: 0,
                    ml: openDrawer ? `${DRAWER_WIDTH}px` : `${COLLAPSED_DRAWER_WIDTH}px`,
                    transition: theme.transitions.create("margin-left", {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.standard,
                    }),
                }}
            >
                <DashboardNavbar
                    drawerWidth={DRAWER_WIDTH}
                    collapsedDrawerWidth={COLLAPSED_DRAWER_WIDTH}
                    openDrawer={openDrawer}
                    setOpenDrawer={setOpenDrawer}
                    theme={theme}
                />

                <Box
                    component="main"
                    className="content"
                    sx={{
                        minHeight: "100vh",
                        p: 2,
                        transition: theme.transitions.create("padding", {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.standard,
                        }),
                    }}
                >
                    <ToolbarSpacer />
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};

export default DashboardLayout;
