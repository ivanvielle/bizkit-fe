import { Outlet, Navigate } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

// components
import DashboardNavbar from "../components/Navbars/dashboard/DashboardNavbar";
import DashboardSidebar from "../components/Navbars/dashboard/DashboardSidebar";
import ToolbarSpacer from "../components/Spacers/ToolbarSpacer";

// context
import { DashboardProvider } from "../contexts/DashboardContextProvider";

// hooks
import useAuth from "../hooks/useAuth";
import useThemeMode from "../hooks/useThemeMode";

const DashboardLayout = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const { user } = useAuth();
    const { openDrawer, setOpenDrawer, DRAWER_WIDTH, COLLAPSED_DRAWER_WIDTH } = useThemeMode();

    if (!user) return <Navigate to="/login" replace />;

    if (isMobile)
        return (
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography>Best viewed in tablets / laptops / desktops</Typography>
            </Box>
        );

    return (
        <DashboardProvider>
            <Box component="div" sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
                <DashboardSidebar
                    drawerWidth={DRAWER_WIDTH}
                    collapsedDrawerWidth={COLLAPSED_DRAWER_WIDTH}
                    openDrawer={openDrawer}
                    setOpenDrawer={setOpenDrawer}
                    theme={theme}
                />

                <Box
                    component="div"
                    sx={{
                        minHeight: `${theme.mixins.toolbar.minHeight}px`,
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
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
                        theme={theme}
                    />

                    <ToolbarSpacer />
                    <ToolbarSpacer />
                    <Box component="main" className="content" sx={{ flex: 1, overflow: "auto" }}>
                        <Outlet />
                    </Box>
                </Box>
            </Box>
        </DashboardProvider>
    );
};

export default DashboardLayout;
